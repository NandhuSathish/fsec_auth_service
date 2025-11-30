import app from './app.ts';
import { Config } from './config/index.ts';

const startServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => console.log(`Listining on port ${PORT}`));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

startServer();
