import axios from "axios";

export const fetchMeal = async () => {
  try {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    return data;
  } catch (error) {
    return error;
  }
};
