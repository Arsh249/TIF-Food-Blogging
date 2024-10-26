import React, { useState } from 'react';
import '../App.css';

const articlesData = [
  {
    id: 1,
    title: "Grilled Tomatoes at Home",
    image: "/tomatoes.svg",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    id: 2,
    title: "Snacks for Travel",
    image: "/snacks.svg",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    id: 3,
    title: "Post-workout Recipes",
    image: "/workout.svg",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    id: 4,
    title: "How To Grill Corn",
    image: "/corn.svg",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    id: 5,
    title: "Crunchwrap Supreme",
    image: "/wrap.svg",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    id: 6,
    title: "Broccoli Cheese Soup",
    image: "/soup.svg",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
];

function Articles() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesData.slice(indexOfFirstArticle, indexOfLastArticle);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(articlesData.length / articlesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="articles-section">
      <h2>Latest Articles</h2>
      <div className="articles-container">
        {currentArticles.map((article) => (
          <div key={article.id} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
              <h3>{article.title}</h3>
              <p style={{lineHeight:'1.8'}}>{article.description}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="pagination-btn" onClick={handlePrevPage} disabled={currentPage === 1}>
          {'<'}
        </button>
        <span>{currentPage}/2</span>
        <button className="pagination-btn" onClick={handleNextPage} disabled={currentPage === Math.ceil(articlesData.length / articlesPerPage)}>
          {'>'}
        </button>
      </div>
    </section>
  );
}

export default Articles;
