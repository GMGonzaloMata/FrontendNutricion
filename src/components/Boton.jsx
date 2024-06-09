import React from 'react';

function Button(props) {
const { onClick, children } = props;

return (
      <button
      onClick={onClick}
      className="select-none bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"

      >
      {children}
    </button>
  );
}

export default Button;
