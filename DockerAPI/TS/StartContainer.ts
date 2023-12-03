import * as Docker from 'dockerode';

const docker = new Docker();

const container = 'playwright-playground_redis_1'; // Replace with your actual container ID

const stopContainer = async () => {
  const containerInstance = docker.getContainer(container);

  try {
    await containerInstance.start();
    console.log('Container stopped successfully');
  } catch (error) {
    console.error('Error stopping container:', (error as Error).message);
  }
};

stopContainer();
