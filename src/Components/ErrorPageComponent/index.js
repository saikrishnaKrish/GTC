import React from 'react'

import { withGlobalContext } from '../../Context/GlobalContextProvider'

 function ErrorPage(props) {
    return (
        <div >
           Unable to view page!!! {props.error}
        </div>
    )
}
export default withGlobalContext(ErrorPage)