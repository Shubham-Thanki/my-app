import logo from './logo.svg';
import './App.css';
import React from 'react'
// import Item from './MyItem';

class FilmItemRow extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.url}>{this.props.url}</a>
      </li>
    )
  }
}



class StarWars extends React.Component {

  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: []
    }
  }

  getNewCharacter() {
    console.log("Working")
    const randomNumber = Math.round(Math.random() * 82)
    const url = `https://swapi.dev/api/people/${randomNumber}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          loadedCharacter: true
        })
      })

  }

  render() {
    const movies = this.state.films.map((url, i) => {
      return <FilmItemRow key={i} url={url} />
    })
    return (
      <>
        {
          this.state.loadedCharacter && <div>
            <h1>Name : {this.state.name}</h1>
            <p>Height : {this.state.height}</p>
            <p><a href={this.state.homeworld}>Homeworld</a></p>
            <ul>
              {movies}
            </ul>
          </div>
        }

        <button onClick={() => this.getNewCharacter()}>Randomize</button>
      </>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Item name='18' /> */}
        <StarWars />

      </header>
    </div>
  );
}

export default App;
