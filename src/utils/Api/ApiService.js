import FetchData from './FetchData';
import activityDataProcessor from './Models/ActivityDataProcessor ';
import userDataProcessor from './Models/UserDataProcessor';
import avgSessionProcessor from './Models/AvgSessionProcessor';
import performanceDataProcessor from './Models/PerformanceDataProcessor';

/**
 * ApiService module responsible for making API calls and retrieving data.
 */
function ApiService() {
  const baseUrl = 'http://localhost:3000';

  /**
   * Retrieves the main user data.
   * @param {number} id - The user ID.
   * @returns {Promise} - A promise that resolves with the user main data.
   */
  async function getUserMainData(id) {
    const url = `${baseUrl}/user/${id}`;
    return FetchData(url, userDataProcessor);
  }

  /**
   * Retrieves the user's daily activity data.
   * @param {number} id - The user ID.
   * @returns {Promise} - A promise that resolves with the user's daily activity data.
   */
  async function getUserDailyActivityData(id) {
    const url = `${baseUrl}/user/${id}/activity`;
    return FetchData(url, activityDataProcessor);
  }

  /**
   * Retrieves the user's average session data.
   * @param {number} id - The user ID.
   * @returns {Promise} - A promise that resolves with the user's average session data.
   */
  async function getUserAverageSessionData(id) {
    const url = `${baseUrl}/user/${id}/average-sessions`;
    return FetchData(url, avgSessionProcessor);
  }

  /**
   * Retrieves the user's performance data.
   * @param {number} id - The user ID.
   * @returns {Promise} - A promise that resolves with the user's performance data.
   */
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
