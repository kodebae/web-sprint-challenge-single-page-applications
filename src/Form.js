import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const Form = () => {

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    toppings: "",
    instructions: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState("");

  const [post, setPost] = useState([]);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Enter your name here please")
      .min(2, "Your real name must be longer than 2 characters"),
    size: yup.string(),
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    tomatoes: yup.boolean(),
    bacon: yup.boolean(),
    instructions: yup.string(),
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

  useEffect(() => {
    console.log("a form state change has been made");
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setPost(res.data);
        console.log("success", post);
        setFormState({
          name: "",
          email: "",
          password: "",
          terms: "",
          role: "",
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className='pizzaForm'>
      <div className='form-heading'>
        <h2>Lambda Eats</h2>
        <h3>Create your order here!</h3>
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
            <option value='large'>Large</option>
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
              name='tomatoes'
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