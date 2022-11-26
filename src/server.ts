import { UserController } from './core/controller/UserController';
import { AuthController } from './core/controller/AuthController';
import { App } from './App'

// List of Controller
const app = new App([
    new AuthController(),
    new UserController()
])
app.listen()