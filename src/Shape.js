import React from "react";

class Shape extends React.Component {
  render() {
    return (
      <div
        style={{ backgroundColor: this.props.color, width: 200, height: 200 }}
      >
        {this.props.color}
      </div>
    );
  }
}

export default Shape;
