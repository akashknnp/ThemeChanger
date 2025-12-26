import React from "react";

class Child extends React.Component {
    render() {
        const { status } = this.props;

        const style = {
            padding: "10px",
            margin: "10px",
            color: "white",
            backgroundColor:
                status === "success"
                    ? "green"
                    : status === "danger"
                        ? "red"
                        : "gray"
        };

        return (
            <div style={style}>
                Status: {status}
            </div>
        );
    }
}

export default Child;
