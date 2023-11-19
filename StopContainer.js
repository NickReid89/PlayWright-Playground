const Docker = require('dockerode');

const docker = new Docker();

const container = 'playwright-playground_redis_1'; // Replace with your actual container ID

const stopContainer = async () => {
  const container = docker.getContainer(container);

  try {
    await container.stop();
    console.log('Container stopped successfully');
  } catch (error) {
    console.error('Error stopping container:', error.message);
  }
};

stopContainer();
