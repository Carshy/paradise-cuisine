// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// const Search = () => {
//   const animals = useSelector((state) => state.animals);
//   const [newAnimals, setNewAnimals] = useState([]);

//   useEffect(() => {
//     setNewAnimals(animals);
//   }, [animals, setNewAnimals]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     let myValue = e.target.value;
//     if (myValue.length > 0) {
//       myValue = myValue.toLowerCase();
//       const filteredAnmls = animals.filter((animal) =>
// animal.name.toLowerCase().includes(myValue));
//       setNewAnimals(filteredAnmls);
//     } else {
//       setNewAnimals(animals);
//     }
//   };

//   return (
//     <div>
//       <div className="searchbar">
//         <input type="text" placeholder="Search eg Lion..." onChange={handleSearch} />
//       </div>
//     </div>
//   );
// };

// export default Search;
