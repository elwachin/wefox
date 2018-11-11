// features/support/world.js
import { setWorldConstructor } from 'cucumber';


function CustomWorld() {
}


setWorldConstructor(CustomWorld);
