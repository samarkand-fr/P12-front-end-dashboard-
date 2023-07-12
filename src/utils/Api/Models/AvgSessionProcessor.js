
/**
 * Process session data.
 * @param {Array} fetchedData - The fetched session data.
 * @returns {Array} - The processed session data.
 */
const processSessionData = (fetchedData) => {
  // Array of day labels
  const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  // Function to format the day based on the day number
  /**
   * Format the day based on the day number.
   * @param {number} dayNumber - The day number.
   * @returns {string} - The formatted day.
   */
  const dayFormatter = (dayNumber) => {
    return dayLabels[dayNumber - 1] || '';
  };
  
  const sessionsData = [];

  // Iterate through each session and process the data
  for (const session of fetchedData) {
    const { day, sessionLength } = session;
    const formattedDay = dayFormatter(day);
    const formattedSessionLength = sessionLength || 0;
    sessionsData.push({ day: formattedDay, sessionLength: formattedSessionLength });
  }

  return sessionsData;
};

// Function for real data
/**
 * Process real data.
 * @param {Object} data - The fetched data.
 * @returns {Array} - The processed data.
 */
const processRealData = (data) => {
  const fetchedData = data?.sessions || [];
  return processSessionData(fetchedData);
};

// Function for mocked data
/**
 * Process mocked data.
 * @param {Object} data - The fetched data.
 * @returns {Array} - The processed data.
 */
const processMockedData = (data) => {
  const fetchedData = data.sessions || [];
  return processSessionData(fetchedData);
};

// Adapter function to choose the appropriate processor based on the data source
/**
 * Average session processor.
 * @param {Object} dataApi - The fetched data from the API.
 * @returns {Array} - The processed session data.
 */
const avgSessionProcessor = (dataApi) => {
  if (process.env.REACT_APP_DATA_MOCKED === 'true') {
    return processMockedData(dataApi);
  } else {
    return processRealData(dataApi?.data?.data || {});
  }
};

export default avgSessionProcessor;
