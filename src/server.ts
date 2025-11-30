import { Config } from './config/index.js';

function welcome(name: string) {
    console.log('Welcome' + name);
}

welcome('nandhu');

console.log(Config.PORT);
