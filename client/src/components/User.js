import React from "react"

const User = props => {
    return (
        <div className="UserContainer">
            <h3>{props.username}</h3>
            <h4>{props.password}</h4>
            <ul>
                {props.department.split(',').map(department => {
                    {
                        return <li>{department}</li>
                    }
                })}
            </ul>
        </div>
    )
}

export default User;