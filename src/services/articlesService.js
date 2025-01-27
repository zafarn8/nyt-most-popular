import axios from 'axios';

const API_KEY = process.env.REACT_APP_NYT_API_KEY;
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2';

/**
 * Fetch the most popular articles.
 * @param {number} period - Period in days (1, 7, or 30).
 * @returns {Promise} - Axios response promise.
 */
export const fetchMostPopularArticles = (period = 7) => {
  return axios.get(`${BASE_URL}/viewed/${period}.json`, {
    params: {
      'api-key': API_KEY,
    },
  });
};

/**
 * Fetch details of a specific article.
 * @param {string} id - The ID of the article.
 * @returns {Promise} - Axios response promise.
 */
export const fetchArticleDetails = (id) => {
    const BASE_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${id}.json`;
  
    return axios.get(BASE_URL, {
      params: {
        'api-key': API_KEY,
      },
    });
  };
  
