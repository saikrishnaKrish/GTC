import React from 'react'

import RouterComponent from '../RouterComponent'
import ErrorPage from '../ErrorPageComponent'
import { withGlobalContext } from '../../Context/GlobalContextProvider'

function HomeComponent(props) {
    return (
        <div>
              <div className={'dataContainer'}>
                {props.error ? <ErrorPage {...props}/> : <RouterComponent /> }
            </div>

        </div>
    )
}

export default withGlobalContext(HomeComponent)