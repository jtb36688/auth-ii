import React from "react"

const User = props => {
    return (
        <div className="UserContainer">
            <h3>{props.username}</h3>
            <h4>{props.password}</h4>
            <h5>{props.department}</h5>
        </div>
    )
}

export default User;