

export const Samp=(req,res,next)=>{
console.log("i am midddle ware 1");
console.log(req.url);
console.log(req.method);
next()

}
export const Samp1=(req,res,next)=>{
console.log("i am midddle ware 2");
next()

}
export const Samp2=(req,res,next)=>{
console.log("i am midddle ware 3"); 
next()
}