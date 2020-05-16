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