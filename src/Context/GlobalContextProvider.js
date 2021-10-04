import React, { Component } from "react";
//utils
import Utils from "../Utils/Utils";

export const GlobalContext = React.createContext();
const { BASE_URL } = Utils;

export const withGlobalContext = (Component) => (props) =>
  (
    <GlobalContext.Consumer>
      {(contextProps) => <Component {...contextProps} {...props} />}
    </GlobalContext.Consumer>
  );


  /**
   * Initializing the global state variables and functions,
   * to pass to the child components.
   * 
   *  @class GlobalContextProvider 
   */
export class GlobalContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      vehicles: [],
      selectedDataObj: {},
      contextActions: {
        updateGlobalState: this.updateGlobalState.bind(this),
        updateSelectedData: this.updateSelectedData.bind(this),
      },
    };
  }

  /**
   * Based on the params it will make an api call to the server and returns the 
   * response.
   *  
   * @function {function} fetchUrl
   * @param {String} type 
   * @param {Object} options 
   */
  fetchUrl = async (type, options) => {
    try {
      const url = BASE_URL + type;
      const response = await fetch(url, options);
      const jsonResponse = await response.json();
      const data = jsonResponse[type] ? jsonResponse[type] : jsonResponse;
      this.setState({ [type]: data });
    } catch {
      this.setState({
        error: "Error while fetching data from Server" + type + "!!!",
      });
    }
  };
  
  /**
   * Setting the global state of the object.
   * @param {Object} updatedState 
   */
  updateGlobalState(updatedState) {
    this.setState(updatedState);
  }

  /**
   * Accepts the planet and vehicle values and updating them in the 
   * selectedDataObject.
   * 
   * function {function} updateSelectedData
   * 
   * @param {String} planet 
   * @param {String} vehicle 
   */
  updateSelectedData(planet, vehicle) {
    const { selectedDataObj } = this.state;
    selectedDataObj[planet] = vehicle;
    this.setState({ selectedDataObj });
  }
/**
 * On initial loading of the component 
 * it will make the api call and fetch the data from the server
 */
  componentDidMount = () => {
    const { fetchUrl } = this;
    ["planets", "vehicles"].forEach((type) => fetchUrl(type));
    fetchUrl("token", {
      method: "POST",
      headers: Utils.requestHeadersForJsonContent(),
    });
  };

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {" "}
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContextProvider;
