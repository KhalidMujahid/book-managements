const colors = require("colors");

// Class Logger
class Logger{
    // log for warning
    warn(data){
        console.log(colors.yellow(data))
    }

    // log for success
    success(data){
        console.log(colors.blue(data));
    }

    // log for error
    error(data){
        console.log(colors.red(data))
    }
}

// Logger instance
const logger = new Logger();

// export logger object
module.exports = logger;