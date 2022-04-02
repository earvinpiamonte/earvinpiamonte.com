import { getTopTracks } from '../../lib/spotify';

const handler = async (req, res) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const { query } = req;
  const { limit = 10 } = query;
  const maxLimit = parseInt(limit);

  const tracks = items.slice(0, maxLimit).map((track) => {
    const { artists, external_urls, name: title, album, duration_ms } = track;

    const twoDigit = new Intl.NumberFormat('en-US', {
      minimumIntegerDigits: 2,
    });
    const durationDate = new Date(duration_ms);
    const duration = `${durationDate.getMinutes()}:${twoDigit.format(
      durationDate.getSeconds()
    )}`;
    const albumImageUrl = album.images[1].url;
    const artist = artists.map(({ name }) => name).join(', ');
    const songUrl = external_urls.spotify;

    return {
      title,
      songUrl,
      artist,
      albumImageUrl,
      duration,
    };
  });

  return res.status(200).json(tracks);
};

export default handler;
