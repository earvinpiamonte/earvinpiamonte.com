import TimelineItem from '@/components/TimelineItem';

const Timeline = ({ data }) => {
  const groupByYear = (array: []) => {
    const key = 'year';

    return array.reduce((hash, obj) => {
      if (obj[key] === undefined) return hash;

      return Object.assign(hash, {
        [obj[key]]: (hash[obj[key]] || []).concat(obj),
      });
    }, []);
  };

  const allPosts = groupByYear(data);

  return (
    <>
      {Object.keys(allPosts)
        .sort((currentYear, nextYear) => Number(nextYear) - Number(currentYear))
        .map((year, i) => {
          return (
            <div key={i}>
              <h3 className="text-xl mb-2">{year}</h3>
              <ul className="list-none pl-2 mb-4">
                {allPosts[year]
                  .sort(
                    (currentPost, nextPost) =>
                      nextPost.order - currentPost.order
                  )
                  .map(({ title, summary }) => {
                    return (
                      <TimelineItem
                        key={title}
                        title={title}
                        summary={summary}
                      />
                    );
                  })}
              </ul>
            </div>
          );
        })}
    </>
  );
};

export default Timeline;
