// Common function to process user data
const processUserData = (fetchedData) => {
  return {
    firstName: fetchedData.userInfos.firstName || '',
    dailyStats: fetchedData.keyData || {},
    userScore: fetchedData.todayScore || fetchedData.score || 0,
  };
};

// Function for real data
const processRealData = (data) => {
  const fetchedData = data?.data?.data || {};
  return processUserData(fetchedData);
};

// Function for mocked data
const processMockedData = (data) => {
  const fetchedData = data || {};
  return processUserData(fetchedData);
};

// Adapter function to choose the appropriate processor based on the data source
const userDataProcessor = (dataApi) => {
  if (process.env.REACT_APP_DATA_MOCKED === 'true') {
    return processMockedData(dataApi);
  } else {
    return processRealData(dataApi);
  }
};

export default userDataProcessor;
