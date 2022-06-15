import jwt from 'jsonwebtoken';

export const loadUser = async(token) => {
   console.log(token, "token")
   return  await jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
}
