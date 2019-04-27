import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { title: "Default, poor and very sad title. :( Change it please!" }
  }
  
  handleTitleChange = (event) => {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  };
  
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
      </div>
    );
  }
}

export default Title;
