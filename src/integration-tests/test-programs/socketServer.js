// eslint-disable-next-line @typescript-eslint/no-var-requires
const net = require('net');

// Create socket echo server.
const socketServer = new net.Server();

socketServer.on('connection', (connection) => {
    console.log('adapter connected');

    connection.on('end', () => {
        console.log('adapter disconected');
    });

    // Echo "Hello World!"
    connection.write('Hello World!\n');
});

socketServer.on('close', () => {
    console.log('shutting down');
});

socketServer.on('error', (error) => {
    throw error;
});

function serverListen() {
    socketServer.listen(0, 'localhost', 1, () => {
        const port = socketServer.address().port;
        console.log(`${port}`);
    });
}

serverListen();
