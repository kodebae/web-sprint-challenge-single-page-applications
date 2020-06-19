import React from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory();
  console.log(history);
  const routeToForm = (event) => {
    history.push("/pizza");
  };

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80'
        alt=''
      />
    </div>
  );
}

export default Home;