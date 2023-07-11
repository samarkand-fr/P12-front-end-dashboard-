// Common function to process activity data
const processActivityData = (fetchedData) => {
  const data = fetchedData.map(({ day, kilogram, calories }) => {
    const [, month, dayOfMonth] = day.split("-");
    const formattedDay = `${dayOfMonth}/${month}`;
    return { day: formattedDay, kilogram, calories };
  });

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
const processRealData = (data) => {
  const fetchedData = data?.sessions || [];
  return processActivityData(fetchedData);
};

// Function for mocked data
const processMockedData = (data) => {
  const fetchedData = data.sessions || [];
  return processActivityData(fetchedData);
};

// Adapter function to choose the appropriate processor based on the data source
const activityDataProcessor = (dataApi) => {
  if (process.env.REACT_APP_DATA_MOCKED === 'true') {
    return processMockedData(dataApi);
  } else {
    return processRealData(dataApi?.data?.data || []);
  }
};

export default activityDataProcessor;



