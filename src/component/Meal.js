import React from "react";
import Parser from "html-react-parser";

const Meal = ({ data }) => {
  console.log(data);
  if (!data || data.length === 0) {
    return "Loading...";
  }
  const Ingredient = () => {
    const ingr = [];
    for (let index = 1; index < 21; index++) {
      if (data.meals[0][`strIngredient${index}`]) {
        ingr.push(
          `${data.meals[0][`strIngredient${index}`]} - ${
            data.meals[0][`strMeasure${index}`]
          }`
        );
      }
    }
    return ingr;
  };
  const dataMeal = data.meals[0];
  const url = dataMeal.strMealThumb;
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div>
      <button onClick={refreshPage}>RANDOM MEAL 🍽️</button>
      <h1>{dataMeal.strMeal}</h1>

      {Parser(`<img width="420" height="315" src=${url}></img>`)}
      <p>Category: {dataMeal.strCategory}</p>
      <p>Area: {dataMeal.strArea}</p>
      <p>Tags: {dataMeal.strTags}</p>
      <div>
        <h2>Instructions: </h2> <p> {dataMeal.strInstructions}</p>
        <ul className="list">
          Ingredient:
          {Ingredient().map((i) => (
            <li>{i}</li>
          ))}
        </ul>
        <h2>Youtube</h2>
        {Parser(
          `<iframe width="600" height="400" src="https://www.youtube.com/embed/${dataMeal.strYoutube.slice(
            -11
          )}" ></iframe>`
        )}
      </div>
    </div>
  );
};
export default Meal;
