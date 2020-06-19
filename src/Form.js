import React, { useState } from "react";
//removed useEffect from import




const Form = () => {
        const [formState, setFormState] = useState({
        name: "",
        email: "",
        topping: "",
        instructions: "",
        });


    const [errors, setErrors] = useState({
        name: "",
        email: "",
        toppings: "",
        instructions: "",
    });


    const [formState, setFormState] = useState({
        name: "",
        size: "Medium",
        pepperoni: false,
        olives: false,
        tomatoes: false,
        bacon: false,
        instructions: "",
        amount: 0,
    });
return (
    <div className='pizzaForm'>
      <div className='form-heading'>
        <h2>Lambda Eats</h2>
        <h3>My Pizza My Way!</h3>
      </div>

      <form className='form' onSubmit={formSubmit}>
        {/* //name */}
        <label htmlFor='name'>
          Name
          <input
            className='input'
            type='text'
            id='name'
            name='name'
            onChange={inputChange}
            value={formState.name}
          />
          {errors.name.length > 0 ? (
            <p className='error'>{errors.name}</p>
          ) : null}
        </label>

        {/* //email */}
        <label htmlFor='email'>
          Email
          <input
            className='input'
            type='email'
            id='email'
            name='email'
            onChange={inputChange}
            value={formState.email}
          />
          {errors.email.length > 0 ? (
            <p className='error'>{errors.email}</p>
          ) : null}
        </label>

        {/* //size */}
        <label htmlFor='size'>
          Size
          <select id='size' name='size' onChange={inputChange}>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='larg'>Large</option>
          </select>
        </label>

        {/* //toppings */}
        <label htmlFor='toppings' className='toppings-group'>
          <h2>Toppings</h2>
        </label>

        <div className='toppings'>
          <label htmlFor='pepperoni'>
            <input
              type='checkbox'
              id='pepperoni'
              name='pepperoni'
              checked={formState.pepperoni}
              onChange={inputChange}
            />
            Pepperoni
          </label>

          <label htmlFor='olives'>
            <input
              type='checkbox'
              id='olives'
              name='olives'
              checked={formState.olives}
              onChange={inputChange}
            />
            Olives
          </label>

          <label htmlFor='tomatoes'>
            <input
              type='checkbox'
              id='tomatoes'
              name='tomates'
              checked={formState.tomatoes}
              onChange={inputChange}
            />
            Tomatoes
          </label>

          <label htmlFor='bacon'>
            <input
              type='checkbox'
              id='bacon'
              name='bacon'
              checked={formState.bacon}
              onChange={inputChange}
            />
            Bacon
          </label>
        </div>
        <label htmlFor='instructions'>
          Special Instructions
          <textarea
            id='instructions'
            name='instructions'
            onChange={inputChange}
          />
        </label>

        <button className='button' disabled={buttonDisabled} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;