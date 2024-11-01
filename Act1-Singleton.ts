class Logger {
    private static instance: Logger;

    private constructor(){}
       
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: string): void {
      console.log(`(${new Date().toISOString()})\n - ${message}`);
    }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log('Aloha neighbor!')
logger2.log('Please try again.')

console.log(logger1 == logger2);
console.log('logger1 and logger2 are the same instance.' , logger1 == logger2);
console.log(logger1 != logger2);
console.log('logger1 and logger2 are the not same instance.' , logger1 != logger2);


