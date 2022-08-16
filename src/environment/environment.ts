/* eslint no-undef: "off" */
/* nodemon Command: npx nodemon */
const env = process.env.ENVIRONMENT || 'local';
import { mongo, developer, local } from './env.local';

let folderS3 = 'dev';
let mongoConf = {
  user: 'admin',
  password: 'admin',
  database: 'propertySales',
  host: 'db',
  port: '27017',
};


if (env === 'local') {
  mongoConf = mongo;
} else if (env === 'dev') {
  mongoConf.database = 'propertySales';
} else {
  folderS3 = 'prod';
}
export { mongoConf, folderS3, developer, local };
