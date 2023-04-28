/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-boolean-value */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiFillYoutube } from 'react-icons/ai';
import { BsJournalBookmark } from 'react-icons/bs';
import { GiChefToque } from 'react-icons/gi';
import { TailSpin } from 'react-loader-spinner';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchMealInfo } from '../../redux/actions/actionCreate';
import './MealList.scss';

function createData(ingredient, measurement) {
  return { ingredient, measurement };
}

const Meal = () => {
  const [showMore, setShowMore] = useState(false);

  const dispatch = useDispatch();
  const params = useParams();

  const meal = useSelector((state) => state.meal);

  useEffect(() => {
    dispatch(fetchMealInfo(params.meal));
  }, [dispatch, params.meal]);
  return (
    <main className="app__meal">
      {Object.entries(meal).length ? (
        <>
          <header className="meal__header">
            <h1>{meal?.strMeal}</h1>
            <span>{meal?.strArea}</span>
          </header>

          <section className="meal__measurements">
            <h2>Requirements</h2>
            <div>
              <TableContainer className="meal__measurementsContainer" component={paper}>
                <Table sx={{ minWidth: 100 }} aria-label="measurements table">
                  <TableHead>
                    <TableRow>
                      <styledTableCell>Ingredients</styledTableCell>
                      <styledTableCell>Measurements</styledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <styledTableRow key={row.ingredient}>
                        <styledTableCell component="th" scope="row">
                          {row.ingredient}
                        </styledTableCell>
                        <styledTableCell>
                          {row.measurement}
                        </styledTableCell>
                      </styledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </section>

          <section className="meal__instructions">
            <h2>
              Preparations
              <GiChefToque />
            </h2>
            <div className="meal__instructionsContainer">
              {showMore ? meal.strInstructions : meal.strInstructions.subString(0, 500)}
              <div
                onClick={() => {
                  setShowMore((prevState) => !prevState);
                }}
              >
                {showMore ? 'Show less' : 'Show more...'}
              </div>
            </div>
          </section>
          {(isValidString(meal.strYoutube) ||
            isValidString(meal.strSource)) && (
              <section className="meal__help">
                <h2>Still Confused?</h2>
                <div>
                  {isValidString(meal.strYoutube) && (
                    <a href={meal.strYoutube} target="_blank" rel="noreferrer">
                      <AiFillYoutube/>
                    </a>
                  )}
                  {isValidString(meal.strYoutube) && (
                    <a href={meal.strYoutube} target="_blank" rel="noreferrer">
                      <BsJournalBookmark />
                    </a>
                  )}
                </div>
              </section>
          )}
        </>
      ) : (
        <TailSpin
          height="150"
          width="150"
          color="#c0841d"
          ariaLabel="tail-spin-loading"
          radius="2"
          wrapperStyle={{
            marginInline: 'auto',
            marginTop: '5em',
            opacity: '0.5',
          }}
          wrapperClass=""
          visible={true}
        />
      )}
    </main>
  );
};

export default Meal;
