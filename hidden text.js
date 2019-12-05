import React, {Component} from 'react';

class App extends Component {
  state = {hiddenText:null,
    name: "Okesinachi",

  };

  changehiddenText = () => {
    this.setState({hiddenText: "Chiebidolu"
      
    });
  }

  render() {
    return (
      <div>
       <h1>My name is {this.state.name}</h1>
        <p>
          i am from the {this.state.hiddenText} clan.
        </p>
        <button
          type="button"
          onClick={this.changehiddenText}
        >Clan name</button>
      </div>
    );
  }
}
  export default App
  
  
 