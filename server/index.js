import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app=express();


app.use('/posts',postRoutes);
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


//https://www.mongodb.com/cloud/atlas

const CONNECTION_URL='mongodb+srv://ravikumar:ravikumar2003k@cluster0.86abclb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>app.listen(PORT,()=>console.log(`sucess:${PORT}`)))
.catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify',false);