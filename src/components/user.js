import User from "../models/user.js";

export const createUser=async(req,res)=>{
    const {userId , name } = req.body;
    try {
        const user = await User.create({name,userId});
        res.status(201).json({message:'User Created',user});
        
    } catch (error) {
        console.error("Error creating User:", error);
        res.status(404).json({message:'Something Went Wrong'});
    }
}
export const getUser=async(req,res)=>{
    const {userId} = req.params;
    try {
        console.log(userId);
        const user = await User.findOne({userId:userId});
        if(!user){
            return res.status(404).json({message:'User Not Found'})
        }
        req.userId=user.userId;
        res.status(200).json({message:'Hello User',user});
    } catch (error) {
        console.error("Error finding User:", error);
        res.status(400).json({message:'Something Went Wrong'});
        
    }
}
