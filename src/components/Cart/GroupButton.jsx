import React, { useState } from "react";

import { ButtonGroup, Button } from "@mui/material";

const GroupButton = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <ButtonGroup className="mx-3 p-1">
      <Button
        onClick={() => handleDecrement()}
        disabled={counter === 0}
        className="rounded-l-full"
      >
        -
      </Button>
      <Button disabled>{counter}</Button>
      <Button onClick={() => handleIncrement()} className="rounded-r-full">
        +
      </Button>
    </ButtonGroup>
  );
};

export default GroupButton;
