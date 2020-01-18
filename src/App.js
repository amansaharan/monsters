import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState(() => ({ monsters: data })));
  }
  handleSearch = e => {
    const value = e.target.value;
    this.setState(() => ({
      searchField: value
    }));
    console.log(this.state.searchField);
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleSearch={this.handleSearch}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
