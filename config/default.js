module.exports = {
  apps: {
    PORT: 3000,
    STATIC_FOLDER: `${__dirname}/../src/public`,
    VIEWS_FOLDER: `${__dirname}/../src/apps/views`,
    NAME_ENGINE: "ejs",
    URL_ROUTER:`${__dirname}/../src/routers/web`,
    URL_DATABASE:`${__dirname}/../src/common/database`,
    URL_APPS:`${__dirname}/../src/apps/app`,
  },
};
