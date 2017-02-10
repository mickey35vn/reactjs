import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.firstname}</h1>
        <Clock />
        <NameInput />
      </div>
    );
  }
}

App.propTypes = {
   firstname: React.PropTypes.string.isRequired
}

App.defaultProps = {
   firstname: "Tram"
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), color: 'blue'};
    this.onDidChangeSate = this.onDidChangeSate.bind(this);
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState(prevState => ({
      date: new Date(),
      color: prevState.color
    }));
  }
  
  onDidChangeSate(toggleState) {
    this.setState(prevState => ({
      date: new Date(),
      color: toggleState ? 'red' : 'blue'
    }));
  }
  
  render() {
    return (
      <div>
        <h2 style={{color: this.state.color}}>It is {this.state.date.toLocaleTimeString()}.</h2>
        <Toggle onDidChangeSate={this.onDidChangeSate} />
      </div>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    this.props.onDidChangeSate(this.state.isToggleOn);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'You like this. Click to toggle.' : 'You haven\'t liked this. Click to toggle.'}
      </button>
    );
  }
}

class NameInput extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {myName: '', showName: false};
    
    this.updateState = this.updateState.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.showInput = this.showInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }
  
  handleKeyPress(event) {
    if(event.key == 'Enter') {
      this.setState({
        myName: ReactDOM.findDOMNode(this.refs.myInput).value,
        showName: true
      });
    }
  }
  
  updateState(event) {
      this.setState({
        myName: event.target.value,
        showName: false
      });
   }
  
  showInput() {
    this.setState({
        myName: '',
        showName: false
    });
  }
  
  clearInput() {
      this.setState({
          myName: '',
          showName: false
      });
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }
  
  render() {
    return (
      <div>
        {this.state.showName && 
          <div>
            <h1>Hello {this.state.myName}</h1>
            <button onClick={this.showInput}>Click to enter again</button>
          </div>
        }
        {!this.state.showName && 
          <div>
            <h4>Enter name and then press enter to display hello</h4>
            <input ref="myInput" type = "text" value ={this.state.myName} onChange = {this.updateState} onKeyPress={this.handleKeyPress} />
            <button onClick = {this.clearInput}>CLEAR</button>
        </div>
        }
      </div>
    );
  }
}

const element = <App />;
ReactDOM.render(
  element,
  document.getElementById('root')
);