import React from 'react';

import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;

// import React from "react"

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.addEvent = this.addEvent.bind(this)
//     this.doubleEvent = this.doubleEvent.bind(this)
//   }

//   addEvent() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }

//   doubleEvent() {
//     this.setState(prevState => {
//       return{
//         count: prevState.count * 2
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.addEvent}> Add +1</button>
//         <button onClick={this.doubleEvent}> Double the number</button>
//       </div>
//     )
//   }
// }

// export default App;