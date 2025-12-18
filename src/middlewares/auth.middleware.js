const jwt=require("jsonwebtoken");

module.exports= (req,res,next)=>{
    const authheader=req.headers.authorization;
    
    if (! authheader || !authheader.startsWith("Bearer ")) {
        return res.status(401).json({message:"authenticton faild."});
    }

    const token= authheader.split(" ")[1];

    try {
        const decode= jwt.verify(token, process.env.JWT_SECRET);
        req.userId= decode.userId;
        next();
    } catch (error) {
        res.status(401).json({message:"Invalid tokan, authentication faild."});
    }
}
