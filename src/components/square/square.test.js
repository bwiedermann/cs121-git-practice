import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Square></Square>, div);
  }
);
