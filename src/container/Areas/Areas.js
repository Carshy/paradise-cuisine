/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { clearMealInfo, fetchAreas, updateAreasLoaded } from '../../redux/actions/actionCreate';

const Areas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const areas = useSelector((state) => state.areas);
  const appState = useSelector((state) => state.appState);

  useEffect(() => {
    if (appState.areasLoaded) return;
    dispatch(fetchAreas());
    dispatch(updateAreasLoaded);
  }, [appState.areasLoaded, dispatch]);
  return (
    <main>
      {areas.map((area) => (
        <div key={v4()}>
          <h2>{area.name}</h2>
          <div
            className="area__forward"
            onClick={() => {
              dispatch(clearMealInfo());
              navigate(`${area.name.toLowerCase()}`);
            }}
          >
            <IoArrowForwardOutline />
          </div>
        </div>
      ))}
    </main>
  );
};

export default Areas;
