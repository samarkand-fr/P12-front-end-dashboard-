// Common function to process session data
const processSessionData = (fetchedData) => {
  const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const dayFormatter = (dayNumber) => {
    return dayLabels[dayNumber - 1] || '';
  };
  
  const sessionsData = [];

  for (const session of fetchedData) {
    const { day, sessionLength } = session;
    const formattedDay = dayFormatter(day);
    const formattedSessionLength = sessionLength || 0;
    sessionsData.push({ day: formattedDay, sessionLength: formattedSessionLength });
  }

  return sessionsData;
};

// Function for real data
const processRealData = (data) => {
  const fetchedData = data?.sessions || [];
  return processSessionData(fetchedData);
};

// Function for mocked data
const processMockedData = (data) => {
  const fetchedData = data.sessions || [];
  return processSessionData(fetchedData);
};

// Adapter function to choose the appropriate processor based on the data source
const avgSessionProcessor = (dataApi) => {
  if (process.env.REACT_APP_DATA_MOCKED === 'true') {
    return processMockedData(dataApi);
  } else {
    return processRealData(dataApi?.data?.data || {});
  }
};

export default avgSessionProcessor;
