//Duplicar este archivo y sacarle el nombre example, debe quedar env.local.ts

const mongoConfLocal = {
  user: 'admin',
  password: 'admin',
  database: 'propertySales',
  host: 'localhost',
  port: '27017',
};
const local = {
  files : {
    images : "/media/images",
    folder: "/home/wilmer/proyectos/personal/presentation-frontend/public"
  },
  appRoot : '/home/wilmer/proyectos/personal/api-presentation/src',
  
};
const developer = 'wilmer';
export { mongoConfLocal, developer, local };
