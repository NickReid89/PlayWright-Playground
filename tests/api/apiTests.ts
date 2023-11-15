import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const runApiTest = async (): Promise<void> => {
  try {
    // Make an HTTP GET request to the JSONPlaceholder API
    const response = await axios.get(apiUrl);

    // Extract and log the response data
    const responseData = response.data;
    console.log('API Response:', responseData);

    // Perform assertions based on the response data
    if (responseData && responseData.userId === 1) {
      console.log('API Test Passed!');
    } else {
      console.error('API Test Failed!');
    }
  } catch (error) {
    console.error('API Request failed:', error.message);
  }
};

// Run the API test function
runApiTest();
