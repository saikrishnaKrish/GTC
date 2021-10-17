import React, { Component } from "react";
import Select from "react-select";

//importing GlobalContext for accessing props
import { withGlobalContext } from "../../Context/GlobalContextProvider";

class PlanetSelectionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: this.props.selectedOption || "",
    };
  }
  
  /**
   *
   * @param {Object} option
   *
   * @returns selected planet from the list of available planets.
   */
  handleChange = (option) => {
    const { selectedOption } = this.state;
    this.setState({ selectedOption: option });
    this.props.planetChangeHandler(option,selectedOption);
  };
  
  render() {
    const { planets, selectedDataObj } = this.props;
    const { selectedOption } = this.state;
    const options = (planets ? planets : []).map((planet) => {
      const name = planet.name;
      const optionValue = { value: name, label: name };
      return name in selectedDataObj
        ? { isDisabled: true, ...optionValue }
        : optionValue;
    });
    return (
      <div>
        <Select
          value={selectedOption}
          options={options}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default withGlobalContext(PlanetSelectionComponent);
