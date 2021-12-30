import express from 'express';
import { getPosts,createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/',getPosts);
router.post('/',createPost);




//cannot use algebraic operators 
// router.get('/123',(req,res)=>{
//     res.send('Logic WORKS boiiii!');
// });

export default router;