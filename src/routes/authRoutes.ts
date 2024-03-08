import{Router, RouterOptions} from "express";
import { authController } from "../controllers/authController";

/*
* clase para funcionalidad de rutas Login
*/

class AuthRoutes{
    //objeto de tipo Router
    public router: Router;

    //Inicializa
    constructor(){
        this.router = Router();
        this.config();
    }
    config(){
        this.router.post('/', authController.iniciarSesion);    
    }
    
}
const authRoutes = new AuthRoutes();
export default authRoutes.router;