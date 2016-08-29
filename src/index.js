import express from'express';
import bodyParser from'body-parser';
import router from './router.js';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

//app.use(router.express);
const handler = router.swagger();

app.get('/docs.json', handler);

app.listen(port);
console.log('Listen on port ' + port);
