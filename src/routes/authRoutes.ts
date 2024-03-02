import{Router, RouterOptions} from "express";

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
        this.router.get('/',(req, res) => {
            res.send('Invocando Autenticacion')
        });
    }
}
const authRoutes = new AuthRoutes();
export default authRoutes.router;