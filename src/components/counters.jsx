import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary m-2 btn-sm"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((c) => (
          <Counter
            key={c.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            counter={c}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
