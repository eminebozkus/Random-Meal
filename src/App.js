import { fetchMeal } from "./Api";
import React, { Component } from "react";
import Meal from "./component/Meal";

export default class App extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const data = await fetchMeal();
    this.setState({ data });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Meal data={data} />
      </div>
    );
  }
}
