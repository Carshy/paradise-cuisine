const apiBaseUrl = 'https://zoo-animal-api.herokuapp.com/animals/rand/8';

const getApiData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchAnimals = () => getApiData(apiBaseUrl);

export default fetchAnimals;
