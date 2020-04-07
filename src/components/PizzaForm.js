import React from "react"

const PizzaForm = (props) => {


  const handleAllInputs = (e) =>{
    props.handleUpdate(e.target)

  }
  console.log(props)
  return(
      <div className="form-row">
        <div className="col-5">
            <input 
            type="text" 
            className="form-control" 
            name="topping"
            placeholder="Pizza Topping" 
            value={props.pizza.topping}
            onChange={handleAllInputs}
            />
        </div>
        <div className="col">
          <select value={props.pizza.size} 
          className="form-control" 
          placeholder={props.pizza.size}
          name="size"
          onChange={handleAllInputs}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={handleAllInputs} 
              className="form-check-input" 
              type="radio" 
              value={true} 
              name="vegetarian"
              checked={props.pizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={handleAllInputs}
              className="form-check-input" 
              type="radio" 
              value={false} 
              name="vegetarian" 
              checked={!props.pizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
