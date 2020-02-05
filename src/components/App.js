import React from "react";
//uuid is npm package to create a unique id to each restaurant element in the restaurants array.
import uuid from "uuid";
import RestaurantData from "./data/restaurants.json";
import SortDropdown from "./SortDropdown";
import DisplayList from "./DisplayList";

class App extends React.Component {
  state = {
    restaurants: []
  };

  createRestaurantArr = dropDownVal => {
    let restaurantList = RestaurantData.restaurants;

    //Set a unique id to each restaurant to use as React key later on.
    for (let elem of restaurantList) {
      elem.id = uuid();
    }

    // Sort the original data in ascending order when the dropdown is changed to "acsending order"
    if (dropDownVal === "AtoZ") {
      restaurantList = restaurantList.sort((a, b) => {
        //use the name of restaurants to arrange in alphabetical order.
        let restaurantA = a.name;
        let restaurantB = b.name;
        if (restaurantA < restaurantB) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    //Sort the original data in descending order when the dropdown is changed to "descendidng order".
    else if (dropDownVal === "ZtoA") {
      restaurantList = restaurantList.sort((a, b) => {
        let restaurantA = a.name;
        let restaurantB = b.name;
        if (restaurantB < restaurantA) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    // Update the state "restaurants" with a newly arranged array.
    this.setState({ restaurants: restaurantList });
  };

  // Display the list of restaurants in ascending order when the app is loaded.
  componentDidMount() {
    this.createRestaurantArr("AtoZ");
  }

  // Display the drop down button and and the list of restaurants.
  render() {
    return (
      <div className="ui container">
        <SortDropdown createRestaurantArr={this.createRestaurantArr} />
        <DisplayList restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
