import express from'express';
import bodyParser from'body-parser';
import router from 'router.js';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use(router.express);
console.log(JSON.stringify(router.swagger(), null, 1));
app.use('/docs.json', router.swagger);

//app.listen(port);
console.log('Listen on port ' + port);
