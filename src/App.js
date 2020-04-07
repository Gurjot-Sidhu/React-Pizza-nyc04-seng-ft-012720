import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state={
    info:[],
    selectpizza:{
      topping:"",
      size:"Small",
      vegetarian:false
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
      .then(r => r.json())
      .then((arrayOfPizzas) =>{
        this.setState({
          info:arrayOfPizzas
        })
      })
  }

  receivePizza = (value) =>{
    this.setState({
      selectpizza: value
    })
  }

  handleUpdate = (value) => {
    let copyPizza = {...this.state.selectpizza,[value.name]:value.value}
    if(value.value === "true"){
      copyPizza[value.name] = true
    }else if(value.value === "false"){
      copyPizza[value.name] = false
    }
      this.setState({
        selectpizza: copyPizza
      })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    let newCopy = this.state.info.map((onePizza)=>{
      if(this.state.selectpizza.id === onePizza.id){
        return this.state.selectpizza
      }else{
        return onePizza
      }
    })
    this.setState({
      info:newCopy,
      selectpizza: {
        topping:"",
        size:"Small",
        vegetarian:false
      }
    })
  }

  render() {
    console.log(this.state.selectpizza)
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
        pizza={this.state.selectpizza} 
        handleUpdate={this.handleUpdate}
        handleSubmit={this.handleSubmit}
        />
        <PizzaList pizzas={this.state.info} receivePizza={this.receivePizza}/>
      </Fragment>
    );
  }
}

export default App;
