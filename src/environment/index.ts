import {
  mongoConf,
  folderS3,
  developer,
  local,
} from './environment';

export default {
  app: {
    port: 8001,
    name: "api-propertySales",
  },
  encrypt: {
    accessToken: "PropertySalesStart!",
    refreshTokenSecret: "PropertySalesSecret!",
  },
  ...local,
  folderS3,
  developer,
  mongoConf,
};
