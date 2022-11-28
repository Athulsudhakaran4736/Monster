import { Component } from 'react';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';
import Cards from './Components/cards/cards.component';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
        monsters:[],
        searchField:''
  };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=>this.setState(()=>{
      return {monsters:users}
    }))
  }
  onChange = (e)=>{
    const searchField = e.target.value.toLocaleLowerCase();

   
    {
      this.setState(()=>{
        return {searchField};
      })
    }

  }
 render(){
  const {monsters,searchField} = this.state;
  const {onChange} = this;
  const filteredMonster =monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
  })
  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox onChangeHandler={onChange} placeholder = "Search Monsters" className = "monster-search-box"/>
     
      {/* {
      filteredMonster.map((monster)=>{
        return <div key={monster.id}><h1>{monster.name}</h1> </div>
      })
    } */}
    <CardList monsters={filteredMonster} />
    
    </div>
  );
 }
}

export default App;
