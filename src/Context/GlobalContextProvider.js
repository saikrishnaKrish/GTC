import React,{Component} from "react";
import Utils from '../Utils/Utils'

export const GlobalContext = React.createContext();
const {BASE_URL} =Utils;

export const withGlobalContext = (Component) =>
(props)=>(
    <GlobalContext.Consumer>
        {(contextProps)=><Component {...contextProps} {...props}/> }
    </GlobalContext.Consumer>
);


export class GlobalContextProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             planets:[],
             vehicles:[],
             selectedDataObj:{},
             contextActions:{
                updateGlobalState:this.updateGlobalState.bind(this),
                updateSelectedData:this.updateSelectedData.bind(this)
             }
        }
    }
    


    fetchUrl = async(type,options)=>{
        try{
            const url = BASE_URL+type;
            const response =await fetch(url,options);
            const jsonResponse = await response.json();
            const data = jsonResponse[type]?jsonResponse[type]:jsonResponse;
            this.setState({[type]:data});
        }catch{
            this.setState({error:'Error while fetching data from Server'+ type+'!!!'})
        }
    }

    updateGlobalState(updatedState){
        this.setState(updatedState)
    }

    updateSelectedData(planet,vehicle){
        const {selectedDataObj}=this.state;
        selectedDataObj[planet]=vehicle;
        this.setState({selectedDataObj});
    }    

    componentDidMount=()=>{
        const {fetchUrl} =this;
        ['planets','vehicles'].forEach( type => fetchUrl(type));
        fetchUrl('token',{
            method: 'POST',
            headers:Utils.requestHeadersForJsonContent()
        });
    }

    render() {
        return (
           <GlobalContext.Provider value={this.state}> {this.props.children}</GlobalContext.Provider>
        )
    }
}

export default GlobalContextProvider;


