const { User, Role } = require('./../models');
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');

// --------------------------------------------------------------------------
module.exports = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        if(!token)  {
            return res.status(401).json("Token not provided !");
        }
        jwt.verify( token, config.secret,  async (err, decoded) => {
            if(err) {
                return res.status(401).send("Unauthorized !");
            }
            req.userUuid = decoded.uuid;
            req.userId = decoded.id;
            req.userRoles = decoded.userRoles;
            const user = await User.findOne({
                where: { uuid :req.userUuid}
            })
            if(!user.token || user.token !== token) {
                return res.status(401).send("Unauthorized !");
            }
        });
        next();
    }    
    catch(err) { 
        return res.status(401).json(err.message)
    }
};

