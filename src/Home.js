import React from "react"
import { Link } from "react-router-dom";

function Order ( props )
{
  return(
    <>
      <h3>{ props.order }</h3>
      <div className>Order</div>
    </>
  );
}

export default function()
{
  return(
    // <>
        <div>
            <div className='headings'>
                <h1>Your favofite food, delivered while coding</h1>
                <Link to = "/pizza" className = "link" >Pizza?</Link>
            </div>
        </div>
    /* </> */
  )
}