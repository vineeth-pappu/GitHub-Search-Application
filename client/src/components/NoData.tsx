import React from "react"

function NoData(props: { message?: string }) {

    const { message = "No Data" } = props

    return (
        <div>
            <h1> {message} </h1>
        </div>
    )
}

export default NoData