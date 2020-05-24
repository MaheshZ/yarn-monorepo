import React from "react"

const AppButton = props => {
    return (<div>
        <button>
            {props.children}
        </button>
    </div>)
}

export {AppButton}