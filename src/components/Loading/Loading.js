import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
      <div className='text-center'>
          <Spinner animation="border" variant="primary" size='lg' />
      </div>
  );
};

export default Loading;