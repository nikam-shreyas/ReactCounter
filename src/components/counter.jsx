import React, { Component, Fragment } from "react";

class Counter extends Component {
  getBadgeClass() {
    let styleClass = "badge m-2 badge-";
    styleClass += this.props.counter.value === 0 ? "warning" : "primary";
    return styleClass;
  }
  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
  renderTags() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  render() {
    return <Fragment>{this.renderTags()}</Fragment>;
  }
}

export default Counter;
