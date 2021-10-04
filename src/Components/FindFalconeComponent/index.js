import React,{useState} from 'react';
import { Redirect } from 'react-router';
import Utils from '../../Utils/Utils'

const {isValidObject,DESTINATION_COUNT} = Utils;

function FindFalcone(props) {
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const {selectedDataObj } = props;
        console.log(isBtnClicked)
    const isValidData = isValidObject(selectedDataObj, DESTINATION_COUNT);
    console.log(isValidData)
    return (
      isBtnClicked ? <Redirect to={'/results'} key={'results'}/> :
             <div className={'fullWidth'} >
                 <button
                     disabled={!isValidData}
                     onClick={() => setIsBtnClicked(!isBtnClicked)}
                     > Find Falcone! </button>
             </div>
     );
 }
 


export default  FindFalcone