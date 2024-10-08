import jwt  from "jsonwebtoken";
import 'dotenv/config';

const generarJWT = async (uid, email, rol, habilitado)=>{
    try {
        const payload = { uid, email, rol, habilitado };
        const token = await jwt.sign(payload, process.env.SECRET_JWT, {
            expiresIn: '3h'
        });
        return token;
    } catch (error) {
        console.error('Error al generar el token:', error.message);
        throw new Error('No se pudo generar el token');
    }
}
export default generarJWT