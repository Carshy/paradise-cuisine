/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { clearMealInfo, fetchAreas, updateAreasLoaded } from '../../redux/actions/actionCreate';
import './Areas.scss';

const Areas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const areas = useSelector((state) => state.areas);
  const appState = useSelector((state) => state.appState);

  useEffect(() => {
    if (appState.updateAreasLoaded) return;
    dispatch(fetchAreas());
    dispatch(updateAreasLoaded);
  }, [appState.updateAreasLoaded, dispatch]);
  return (
    <main className="app__areas">
      {areas.map((area) => (
        <div className="app__area" key={v4()}>
          <h2>{area.name}</h2>
          <div
            className="area__forward"
            onClick={() => {
              dispatch(clearMealInfo());
              navigate(`./${area.name.toLowerCase()}`);
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
