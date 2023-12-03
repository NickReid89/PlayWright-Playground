const Docker = require('dockerode');

// Dockerode instance
const docker = new Docker();

// Container name to delete
const containerName = 'your_container_name'; // Replace with the actual container name

// Delete the container by name
const deleteContainer = async () => {
  try {
    // Get the container by name
    const container = await getContainerByName(containerName);

    if (container) {
      // Stop the container (optional)
      await container.stop();

      // Remove the container
      await container.remove({ force: true });
      console.log(`Container "${containerName}" deleted successfully`);
    } else {
      console.log(`Container "${containerName}" not found`);
    }
  } catch (error) {
    console.error('Error deleting container:', error.message);
  }
};

// Get container by name
const getContainerByName = async (name) => {
  try {
    const containers = await docker.listContainers({ all: true });
    const matchingContainer = containers.find((container) => container.Names.includes(`/${name}`));
    return matchingContainer ? docker.getContainer(matchingContainer.Id) : null;
  } catch (error) {
    console.error('Error getting container by name:', error.message);
    return null;
  }
};

// Run the container deletion process
deleteContainer();
