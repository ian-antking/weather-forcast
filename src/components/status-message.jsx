import React from 'react';

class StatusMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.message,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      text: props.message,
    });
  }

  render() {
    return (
      <div className="status-message">
        <span>{this.state.text}</span>
      </div>
    );
  }
}

export default StatusMessage;
