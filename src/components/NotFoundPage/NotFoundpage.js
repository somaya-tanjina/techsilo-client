import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../images/notfound.jpeg'

const NotFoundpage = () => {
  const navigate =useNavigate()
  return (
      <div>
      <h1 className="hero-heading text-center"> OOPs 404!!Page is not Foud!!!</h1>
      <button onClick={()=>navigate('/home')} className='d-block mx-auto my-5'>Go to Home</button>
          <div className="w-75 mx-auto">
              <img className="w-100" src={img} alt="" />
          </div>
      </div>
  );
};

export default NotFoundpage;