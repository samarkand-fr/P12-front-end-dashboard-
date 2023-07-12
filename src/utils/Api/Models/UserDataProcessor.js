
/**
 * Process user data.
 * @param {Object} fetchedData - The fetched user data.
 * @returns {Object} - The processed user data.
 */
const processUserData = (fetchedData) => {
  return {
    firstName: fetchedData.userInfos.firstName || '',
    dailyStats: fetchedData.keyData || {},
    userScore: fetchedData.todayScore || fetchedData.score || 0,
  };
};

// Function for real data
/**
 * Process real data.
 * @param {Object} data - The fetched data.
 * @returns {Object} - The processed data.
 */
const processRealData = (data) => {
  // Extract the nested 'data' object from the fetched data, or use an empty object if it doesn't exist
  const fetchedData = data?.data?.data || {};
  return processUserData(fetchedData);
};

// Function for mocked data
/**
 * Process mocked data.
 * @param {Object} data - The fetched data.
 * @returns {Object} - The processed data.
 */
const processMockedData = (data) => {
  const fetchedData = data || {};
  return processUserData(fetchedData);
};

// Adapter function to choose the appropriate processor based on the data source
/**
 * User data processor.
 * @param {Object} dataApi - The fetched data from the API.
 * @returns {Object} - The processed user data.
 */
const userDataProcessor = (dataApi) => {
  if (process.env.REACT_APP_DATA_MOCKED === 'true') {
    return processMockedData(dataApi);
  } else {
    return processRealData(dataApi);
  }
};

export default userDataProcessor;
