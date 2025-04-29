import PostMessage from "../models/postmessage.js";

export const getPosts=async(req,res)=>{
   try {
     const postMessages=await PostMessage.find();
     console.log(postMessages);
     res.status(200).json(postMessages);
   } catch (error) {
    res.status(404).json({Message:error.message});
   }
}



export const createPost=async (req,res)=>{
    const post=req.body;
    const newPost=new PostMessage(post);
    try {
        await newPost.save();
//all post that start with2 is sucess 3 for redirection
    res.status(201).json(newPost);
    } catch (error) {
//post start with 4 is client side error 5 is for server side error        
res.status(409).json({message:error.message});
}
    // res.send('post created bruh');
}

