import React from 'react'

 function ErrorPage(props) {
    return (
        <div className="errorCmp">
            {props.error}
        </div>
    )
}
export default ErrorPage