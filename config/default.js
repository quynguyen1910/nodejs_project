module.exports = {
  apps: {
    PORT: 3000,
    STATIC_FOLDER: `${__dirname}/../src/public`,
    VIEWS_FOLDER: `${__dirname}/../src/apps/views`,
    NAME_ENGINE: "ejs",
  },
};
