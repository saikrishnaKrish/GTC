import React, { useState } from 'react';
import { Redirect } from 'react-router';

//importing Utils
import Utils from '../../Utils/Utils';
import { Button } from 'reactstrap';


const { isValidObject, DESTINATION_COUNT } = Utils;


/**
 * @function {function} FindFalcone
 * 
 * @param {Object} props 
 * @render a button on the UI, make the button available to select
 */
function FindFalcone(props) {    
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const { selectedDataObj } = props;
    const isValidData = isValidObject(selectedDataObj, DESTINATION_COUNT);
  
    return (
        isBtnClicked ? <Redirect to={'/results'} key={'results'} /> :
            <div className={'fullWidth'} >
                <Button color="primary"
                    disabled={!isValidData}
                    onClick={() => setIsBtnClicked(!isBtnClicked)}
                > Find Falcone!
                </Button>
            </div>
    );
}



export default FindFalcone