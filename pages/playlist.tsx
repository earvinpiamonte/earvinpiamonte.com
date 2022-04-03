import Layout from '@/components/Layout';
import Movies from '@/components/Movies';
import PageTemplate from '@/templates/PageTemplate';
import TopTracks from '@/components/TopTracks';

const Playlist = () => {
  const title = 'Playlist';
  const description = `Top tracks I often listen to on Spotify and a list of movies and TV shows I enjoyed watching.`;

  return (
    <Layout {...{ title, description }}>
      <PageTemplate {...{ title }}>
        <p className="text-xl mb-12 text-gray-800 dark:text-gray-400">
          {description}
        </p>
        <h2>Top tracks</h2>
        <TopTracks />
        <h2>Movies and TV shows</h2>
        <Movies />
      </PageTemplate>
    </Layout>
  );
};

export default Playlist;
