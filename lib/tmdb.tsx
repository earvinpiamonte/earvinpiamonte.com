import * as fetch from "node-fetch";

const { TMDB_LIST_ID, TMDB_API_KEY } = process.env;

const getRecommendedList = async () => {
  const baseUrl = `https://api.themoviedb.org/3/list/${TMDB_LIST_ID}?api_key=${TMDB_API_KEY}`;
  const firstPageResponse = await fetch(baseUrl);
  const firstPageData = await firstPageResponse.json();
  const { total_pages, page: currentPage, total_results } = firstPageData;

  let allItems = [...firstPageData.items];

  if (total_pages > currentPage) {
    const remainingPageNumbers = [];

    for (let page = currentPage + 1; page <= total_pages; page++) {
      remainingPageNumbers.push(page);
    }

    const pageResults = await Promise.allSettled(
      remainingPageNumbers.map(async (pageNumber) => {
        const url = `${baseUrl}&page=${pageNumber}`;
        const response = await fetch(url);

        return response.json();
      })
    );

    const additionalItems = pageResults
      .filter(
        (result): result is PromiseFulfilledResult<any> =>
          result.status === "fulfilled" && result.value?.items
      )
      .flatMap((result) => result.value.items);

    allItems.push(...additionalItems);
  }

  return {
    ...firstPageData,
    items: allItems,
    total_results: total_results,
    fetched_pages: total_pages,
  };
};

export { getRecommendedList };
