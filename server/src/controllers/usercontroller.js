

export const GetProfil=async(req,res,next)=>{
  try {
    const currentUser=req.user;
    if(!currentUser){
      return res.status(404).json({message:"User not found"})
    }
    res.status(200).json({message:`Welcome Back ${currentUser.fullName}`,data:currentUser})
  } catch (error) {
    next(error)
  }
}
