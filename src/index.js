const express = require('express')
const app = express()
require("dotenv").config();

const port = process.env.PORT||8001

const morgan = require('morgan')
const handlebars = require('express-handlebars');
const bodyParser  = require('body-parser')
const cookieParser = require('cookie-parser') 
const cors = require('cors');
const path = require('path');


const { Client } = require('pg');

const connect = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT_DB,
}
const client = new Client(connect);

client.connect()
.then(() => console.log('Connected successfully!'))
.catch(err => console.error('Connection error', err.stack))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use(cookieParser())

//HTTP logger
app.use(morgan('combined'))

// lấy file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

//template engine
app.engine('hbs',handlebars.engine({
    extname : '.hbs',
    helpers : {
        // các function sử dụng
    }
  }));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources','views'));

app.use(express.urlencoded({
  extended: true
})); 
app.use(express.json()); 

app.get("/api/search", (req, res) =>{
  try {
    const name = req.query.name.toLowerCase().trim()
    if(name){
      const query = process.env.QUERY;
      const where_length = process.env.WHERE_LENGTH
      let arrWhere = [];
      for(let i = 0; i < where_length; i++){
        arrWhere.push(`%${name}%`)
      }
      client.query(query,arrWhere, (err, response) => {
        if (err) throw err;
        const data = response?.rows?.map(row => ({
          ma_memo: row.txtmemo,
          name: row.chusd,
          shape_area: row.shape_area,
          x: row.x,
          y: row.y,
          xtb: row.xtb,
          ytb: row.ytb
      }));
        res.status(200).json({
          data:data,
          message:"Lấy dữ liệu thành công"
        })
      });
    }
    else{
      res.status(400).json({message:"hãy nhập thông tin cần search"})
    }
  } catch (error) {
    res.status(500).json({message:"Lỗi server"})
  }
 
  
})


app.get("/", (req, res) =>res.render('home',{
  url:process.env.URL,
  layerDC:process.env.LAYERS_DC,
  layerUB:process.env.LAYERS_UB,
  layerGT:process.env.LAYERS_GT,
  desc_DC:process.env.DESC_DC,
  desc_GT:process.env.DESC_GT,
  desc_UB:process.env.DESC_UB,
  headers:process.env.HEADER,
  desc1:process.env.DESC1,
  desc2:process.env.DESC2,
  desc3:process.env.DESC3,
  data_geography:process.env.DATA_GEOGRAPHY
}))





app.listen(port,()=>(console.log(`App listening on http://localhost:${port}`)
))