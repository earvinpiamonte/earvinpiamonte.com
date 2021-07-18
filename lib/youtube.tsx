const getYouTubeID = (url: string) =>
  url.match(
    /(?:https?:\/\/)?(?:www\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\/?\?v=|\/embed\/|\/)([^\s&]+)/
  )[1];

export { getYouTubeID };
