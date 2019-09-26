import React from 'react';
import './App.css';
import FindPokemon from './FindPokemon'
import Pokemon from './Pokemon'
import eevee from '../eevee.json'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activePokemon: eevee
    }
  }

  render () {
    console.log(this.state.activePokemon)
    return <div className="App">
      <header className="App-header">
        <p>Find your own Pokemon now!</p>
        <FindPokemon onChange={(e) => this.searchPokemon(e)} />
      </header>
      <Pokemon pokemon={this.state.activePokemon} />
    </div>
  }
}

export default App;
