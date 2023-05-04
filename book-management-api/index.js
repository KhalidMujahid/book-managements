// import app
const app = require("./src/server");

const PORT = process.env.PORT || 3000;
// import logger 
const logger = require("./libs/logger");

// listen on ${PORT}
app.listen(PORT,() => logger.success(`Server running on port....${PORT}`));