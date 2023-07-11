import FetchData from './FetchData';
import activityDataProcessor from './Models/ActivityDataProcessor ';
import userDataProcessor from './Models/UserDataProcessor';
import avgSessionProcessor from './Models/AvgSessionProcessor';
import performanceDataProcessor from './Models/PerformanceDataProcessor';

function ApiService() {
  const baseUrl = 'http://localhost:3000';

  async function getUserMainData(id) {
    const url = `${baseUrl}/user/${id}`;
    return FetchData(url, userDataProcessor);
  }

  async function getUserDailyActivityData(id) {
    const url = `${baseUrl}/user/${id}/activity`;
    return FetchData(url, activityDataProcessor);
  }

  async function getUserAverageSessionData(id) {
    const url = `${baseUrl}/user/${id}/average-sessions`;
    return FetchData(url, avgSessionProcessor);
  }

  async function getUserPerformanceData(id) {
    const url = `${baseUrl}/user/${id}/performance`;
    return FetchData(url, performanceDataProcessor);
  }

  return {
    getUserMainData,
    getUserDailyActivityData,
    getUserAverageSessionData,
    getUserPerformanceData,
  };
}

export default ApiService;
