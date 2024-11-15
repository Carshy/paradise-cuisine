/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchChefs } from '../../redux/slices/chefsSlice';
import './Chefs.scss';

const Chefs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const chefs = useSelector((state) => state.chefs.chefs); // Get recipes from Redux
  const loading = useSelector((state) => state.chefs.loading); // Get Loading state
  const error = useSelector((state) => state.chefs.error); // Get error state

  useEffect(() => {
    dispatch(fetchChefs()); // fetch chefs when chef component mounts
  }, [dispatch]);

  if (loading) return <div>Loading...</div>; // Display Loading message
  if (error) return <div>Error: {error}</div>; // Display Error Message

  const handleChefClick = (chef) => {
    navigate(`/chef/${chef.id}`, { state: chef }); // pass chef data to the details page
  };

  return (
    <div className="app__chefs">
      <div className="chef-title-div">
        <h1 className="chef-title">
          Cooks of Delight Cuisine
        </h1>
        <p>
          We spend our days thinking about what we&apos;re making for dinner,
          ranking the best chocolate, testing the cleaning hack taking
          over TikTok, and so much more.
        </p>
      </div>
      <div className="app__chef-row">
        {chefs.map((chef) => (
          <div
            key={chef.id}
            className="app__chefs-container"
            role="button"
            tabIndex={0}
            onClick={() => handleChefClick(chef)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleChefClick(chef);
              }
            }}
          >
            <div className="app__chef-details">
              <div className="app__chef-img">
                <img
                  className="chef-img"
                  src={chef.photo}
                  alt={chef.title}
                />
              </div>
              <div className="app__chefs-info">
                <h2>{chef.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
