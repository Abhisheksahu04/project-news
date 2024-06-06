import express from 'express';
import NewsAPI from 'newsapi';
import 'dotenv/config';
import cors from 'cors';


const app = express();
app.use(cors());
const newsapi = new NewsAPI(process.env.API_KEY);

app.get('/', (req, res) => {
    newsapi.v2.topHeadlines({
        country: 'in'
      }).then(response => {
        res.json(response);
      });
})
app.get('/us', (req, res) => {
    newsapi.v2.topHeadlines({
        country: 'us'
      }).then(response => {
        res.json(response);
      });
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${process.env.PORT}`);
})
