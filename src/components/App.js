import React from 'react';
import './App.css';
import FindPokemon from './FindPokemon'
import Pokemon from './Pokemon'
import eevee from '../eevee.json'

const API_URL = "https://pokeapi.co/api/v2/pokemon"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activePokemon: eevee
    }
  }

  searchPokemon (event) {
    const query = event.target.value
    fetch(`${API_URL}/${query}`)
    .then(response => response.json())
    .then(data => {
      this.setState({activePokemon: data})
    })
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
