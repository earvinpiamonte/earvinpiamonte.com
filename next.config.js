module.exports = {
  publicRuntimeConfig: {
    siteMetaData: {
      name: "Noel Earvin Piamonte",
      url:
        process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/",
      title: "Noel Earvin Piamonte | Software Engineer",
      description:
        "Noel Earvin Piamonte is a software engineer from Mandaluyong City, Philippines.",
      twitterHandle: "earvinpiamonte",
      socialPreview: "/images/preview.png",
    },
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://www.earvinpiamonte.com/",
        permanent: false,
      },
      {
        source: "/daylight",
        destination: "https://www.earvinpiamonte.com/daylight/",
        permanent: true,
      },
    ];
  },
};
