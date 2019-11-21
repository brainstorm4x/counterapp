import React, {Component} from 'react';

class App extends Component {

  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return(
        <div>
          <h3>This is my Counter App!</h3>
          <h4>It will count the number of clicks of button below!</h4>
          <button onClick={this.increment}>Clicked {this.state.count} times!</button>
        </div>
    );
  }
}

export default App;