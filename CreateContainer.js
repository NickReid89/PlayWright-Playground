const axios = require('axios');

// Docker API base URL
const dockerApiBaseUrl = 'http://localhost:2375'; // Adjust the port if needed

// Container creation payload
const containerConfig = {
  Image: 'nginx:latest', // Replace with the desired image
  AttachStdout: true,
  AttachStderr: true,
  Tty: true,
  Cmd: ['/bin/bash'], // Replace with the desired command
};

// Create a new container
const createContainer = async () => {
  try {
    const response = await axios.post(`${dockerApiBaseUrl}/containers/create`, containerConfig);
    const containerId = response.data.Id;
    console.log(`Container created successfully. ID: ${containerId}`);

    // Start the container
    await startContainer(containerId);
  } catch (error) {
    console.error('Error creating container:', error.message);
    console.log('Full error object:', error);
  }
  
};



  
// Start the container
const startContainer = async (containerId) => {
  try {
    await axios.post(`${dockerApiBaseUrl}/containers/${containerId}/start`);
    console.log('Container started successfully');
  } catch (error) {
    console.error('Error starting container:', error.message);
  }
};

// Run the container creation process
createContainer();
