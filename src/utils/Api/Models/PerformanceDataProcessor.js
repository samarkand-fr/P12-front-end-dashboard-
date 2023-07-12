
/**
 * Process performance data.
 * @param {Array} fetchedData - The fetched performance data.
 * @param {Object} kindData - The kind of performance data.
 * @returns {Array} - The processed performance data.
 */
const processPerformanceData = (fetchedData, kindData) => {
  const performanceAverageData = fetchedData.map((data, index) => {
    // Generate the subject for the performance data
    const subject = kindData[index + 1]?.charAt(0).toUpperCase() + kindData[index + 1]?.slice(1) || '';
    const value = data.value || 0;
    return { subject, value };
  });

  return performanceAverageData;
};

// Function for real data
/**
 * Process real data.
 * @param {Object} data - The fetched data.
 * @returns {Array} - The processed data.
 */
const processRealData = (data) => {
  const fetchedData = data?.data?.data?.data || [];
  const kindData = data?.data?.data?.kind || {};
  return processPerformanceData(fetchedData, kindData);
};

// Function for mocked data
/**
 * Process mocked data.
 * @param {Object} data - The fetched data.
 * @returns {Array} - The processed data.
 */
const processMockedData = (data) => {
  const fetchedData = data.data || [];
  const kindData = data.kind || {};
  return processPerformanceData(fetchedData, kindData);
};

// Adapter function to choose the appropriate processor based on the data source
/**
 * Performance data processor.
 * @param {Object} dataApi - The fetched data from the API.
 * @returns {Array} - The processed performance data.
 */
const performanceDataProcessor = (dataApi) => {
  if (process.env.REACT_APP_DATA_MOCKED === 'true') {
    return processMockedData(dataApi);
  } else {
    return processRealData(dataApi);
  }
};

export default performanceDataProcessor;
