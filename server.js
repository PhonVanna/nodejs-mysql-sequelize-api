const http = require('http');
const app = require('./app');
const port = 3001;

const server = http.createServer(app);

if(server.listen(port)){
    console.log(`Server is running on port ${port}`);
}