
/**
 * Process activity data.
 * @param {Array} fetchedData - The fetched activity data.
 * @returns {Object} - The processed activity data.
 */
const processActivityData = (fetchedData) => {
  // Map and format each activity data
  const data = fetchedData.map(({ day, kilogram, calories }) => {
    const [, month, dayOfMonth] = day.split("-");
    const formattedDay = `${dayOfMonth}/${month}`;
    return { day: formattedDay, kilogram, calories };
  });

  // Calculate min and max values for kilogram and calories
  const minKgAxis = Math.min(...data.map(({ kilogram }) => kilogram));
  const maxKgAxis = Math.max(...data.map(({ kilogram }) => kilogram));
  const minKcalAxis = Math.min(...data.map(({ calories }) => calories));
  const maxKcalAxis = Math.max(...data.map(({ calories }) => calories));

  return {
    data,
    minKgAxis,
    maxKgAxis,
    minKcalAxis,
    maxKcalAxis,
  };
};

// Function for real data
/**
 * Process real data.
 * @param {Object} data - The fetched data.
 * @returns {Object} - The processed data.
 */
const processRealData = (data) => {
  const fetchedData = data?.sessions || [];
  return processActivityData(fetchedData);
};

// Function for mocked data
/**
 * Process mocked data.
 * @param {Object} data - The fetched data.
 * @returns {Object} - The processed data.
 */
const processMockedData = (data) => {
  const fetchedData = data.sessions || [];
  return processActivityData(fetchedData);
};

// Adapter function to choose the appropriate processor based on the data source
/**
 * Activity data processor.
 * @param {Object} dataApi - The fetched data from the API.
 * @returns {Object} - The processed activity data.
 */
const activityDataProcessor = (dataApi) => {
  if (process.env.REACT_APP_DATA_MOCKED === 'true') {
    return processMockedData(dataApi);
  } else {
    return processRealData(dataApi?.data?.data || []);
  }
};

export default activityDataProcessor;
