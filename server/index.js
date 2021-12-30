import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
//cors allow u to make http request from one website to another in the browser
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

//handling all the post requests by routing it to the posts.js file

app.use(bodyParser.json( {limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts',postRoutes);

const CONNECTION_URL='mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.ud8hu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`))})
.catch((error)=>{console.log(error.message)});

//to avoid warnings on the console 
//mongoose.set('useFindAndModify',false);


/*
Cross-Origin Resource Sharing (CORS) is a protocol that enables scripts
running on a browser client to interact with resources from a different
origin. This is useful because, thanks to the same-origin policy followed
by XMLHttpRequest and fetch, JavaScript can only make calls to URLs that
live on the same origin as the location where the script is running.
 For example, if a JavaScript app wishes to make an AJAX call to an 
 API running on a different domain, it would be blocked from doing so 
 thanks to the same-origin policy.
 */