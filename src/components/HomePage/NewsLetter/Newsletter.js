import React from 'react';

const Newsletter = () => {
  return (
      <div className='my-5 bg-light py-5'>
          <div className='container  '>
              <h3 className="hero-heading text-center my-4">
                  Join to Our <span>NewsLetter</span>
              </h3>
              <p className="text-muted text-center my-4">
                  Sign up to receive Email, Update of new Product, Annoucment,
                  Gift Ideas ,Promotions, Sales.
              </p>
              <div className="mx-auto">
                  <input className="my-3" type="text" placeholder="email" />
                  <input type="number" placeholder="zipcode" />
                  <button className="d-block mx-auto my-3">Join</button>
              </div>
          </div>
      </div>
  );
};

export default Newsletter;