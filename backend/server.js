const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const cors = require('cors');


//Express 서버 생성
const app = express();

app.use(bodyParser.json());
// app.use(cors({origin:'localhost:3000'}));

//테이블 생성
// db.pool.query(`create table lists (
//   id integer AUTO_INCREMENT,
//   value TEXT,
//   PRIMARY KEY (id),
//   )`, (err, results, fields) => {
//   console.log('results:',results);
// });


app.get('/api/values', function (req,res) {
  db.pool.query('select * from lists',
    (err, results, fields) =>{
      if(err)
        return res.status(500).send(results);
      else
        return res.json(results);
    }
  )
})


app.post('/api/value', function (req, res, next) {
  console.log(db.pool.query(`insert into lists (value) VALUES("${req.body.value}")`));
  (err, results, fields) => {
    if (err)
      return res.status(500).send(err);
    else
      return res.json({success: true, value:req.body.value});
  }
});

app.listen(5000, () => {
  console.log('애플리케이션 5000번 포트 시작');
})