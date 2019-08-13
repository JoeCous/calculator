import React from 'react';
import './App.css';

class Calculator extends React.Component {
  state = {
    count: [],
    keys: [
      { input: "clear", buttonType: "clearBtn" },
      { input: "/", buttonType: "operatorBtn" },
      { input: "7", buttonType: "numberBtn" },
      { input: "8", buttonType: "numberBtn" },
      { input: "9", buttonType: "numberBtn" },
      { input: "*", buttonType: "operatorBtn" },
      { input: "4", buttonType: "numberBtn" },
      { input: "5", buttonType: "numberBtn" },
      { input: "6", buttonType: "numberBtn" },
      { input: "-", buttonType: "operatorBtn" },
      { input: "1", buttonType: "numberBtn" },
      { input: "2", buttonType: "numberBtn" },
      { input: "3", buttonType: "numberBtn" },
      { input: "+", buttonType: "operatorBtn" },
      { input: "0", buttonType: "numberBtn" },
      { input: "=", buttonType: "eqBtn" }
    ]
  }
  number = calcInput => {
    if (calcInput === "clear") {
      this.setState({ count: [] })
    } else if (calcInput === "=") {
      this.setState(prevState => ({
        count: [eval(prevState.count.join(""))]
      }))
    } else {
      this.setState(prevState => ({
        count: [...prevState.count, calcInput]
      }))
    }
  }
  render() {
    return (
      <div className="calc">
        <div className="row">
          <p> {this.state.count} </p>
        </div>
        <div className="buttonsWrapper">
          <div className="buttons">
            {this.state.keys.map(key => {
              return (
                <button
                  className={key.buttonType}
                  onClick={() => this.number(key.input)}
                >
                  {key.input}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
export default Calculator; 
