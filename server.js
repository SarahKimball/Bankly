const { app } = require('./app');

const port = 0; // Use 0 to automatically assign an available port

const server = app.listen(port, () => {
  const assignedPort = server.address().port;
  console.log(`Server starting on port ${assignedPort}`);
});
