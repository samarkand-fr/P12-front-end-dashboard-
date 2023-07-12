import axios from 'axios';
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from './mockedData';

async function FetchData(url, dataModel) {
  let data = {};

  if (process.env.REACT_APP_DATA_MOCKED === 'true') {
    // Handle mocked data 
    if (url.includes('/user/')) {
      const userId = parseInt(url.split('/user/')[1]);

      if (url.includes('/activity')) {
        data = USER_ACTIVITY.find((activity) => activity.userId === userId);
       
      } else if (url.includes('/average-sessions')) {
        data = USER_AVERAGE_SESSIONS.find((session) => session.userId === userId);
       
      } else if (url.includes('/performance')) {
        data = USER_PERFORMANCE.find((performance) => performance.userId === userId);
       
      } else {
        data = USER_MAIN_DATA.find((user) => user.id === userId);
       
      }
     
      // Call the dataModel function with the data object
      return dataModel(data);
    }
  } else {
    // Fetch data from the server
    try {
      const response = await axios.get(url);
      data = dataModel(response);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error('Resource not found');
        data = {};
      } else {
        console.error('Request failed', error);
        throw error;
      }
    }
  }

  return data;
}
 export default FetchData;




