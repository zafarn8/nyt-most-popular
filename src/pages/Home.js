import React, { useState, useEffect } from 'react';
import { fetchMostPopularArticles } from '../services/articlesService';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetchMostPopularArticles(7); // Fetch articles for the last 7 days
        setArticles(response.data.results);
      } catch (err) {
        setError('Error fetching articles');
        console.error(err);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>NY Times Most Popular Articles</h1>
      {error && <p>{error}</p>}
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <a href={`/details/${article.id}`}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
