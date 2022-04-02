import { getRecommendedList } from '../../lib/tmdb';

const handler = async (_, res) => {
  const response = await getRecommendedList();
  const { items } = await response.json();

  const recommendedList = items.map((item) => {
    const { id, title, name, poster_path, release_date, first_air_date } = item;

    const movieDate = new Date(release_date || first_air_date);
    const date = movieDate.toLocaleDateString('en-US', { year: 'numeric' });

    return {
      id,
      title: title || name,
      thumbnail: `https://image.tmdb.org/t/p/w500${poster_path}`,
      date,
    };
  });

  return res.status(200).json(recommendedList);
};

export default handler;
