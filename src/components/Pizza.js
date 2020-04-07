import React from "react"

const Pizza = (props) => {

  const handleClick = (e) => {
    props.receivePizza(props.pizza)
  }

  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      {props.pizza.vegetarian ?
      <td>Yes</td>
      :<td>No</td>
      }
      <td>
        <button 
        onClick={handleClick} 
        type="button" 
        className="btn btn-primary">
        Edit Pizza
        </button>
      </td>
    </tr>
  )
}

export default Pizza
