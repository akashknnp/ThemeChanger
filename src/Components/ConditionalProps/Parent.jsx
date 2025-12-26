import React from "react";
import Child from "./Child";

class Parent extends React.Component {
    render() {
        return (
            <>
                <Child status="success" />
                <Child status="danger" />
                <Child status="pending" />
            </>
        );
    }
}

export default Parent;
