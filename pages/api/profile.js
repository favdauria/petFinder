import { verify } from 'jsonwebtoken' 
export default function profilehandler(req, res) {
    
    const {tokenUser} = req.cookies;
    
    if (!tokenUser) {
        return res.status(401).json({error: 'no token'});
    }

    try {
        const user = verify(tokenUser, 'secret')
        return res.json({email: user.email,
             userName: user.userName,
             firstName: user.firstName,
             lastName: user.lastName
            })
    } catch (error) {
        return res.status(401).json({error: 'invalid token'})
    }
}