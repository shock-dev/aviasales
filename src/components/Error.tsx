import React from 'react';

interface ErrorProps {
  message: string
}

const Error = ({ message }: ErrorProps) => {
  return (
    <div className="error">
      <p className="error__text">{message}</p>
      <button className="error__btn">Попробовать снова</button>
    </div>
  );
};

export default Error;
