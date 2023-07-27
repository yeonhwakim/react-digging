import React from "react";
import Button from "./Button";

function ReactElement() {
  const button = (
    <button>
      <span>클릭!</span>
    </button>
  );

  console.log(button);

  const ButtonComponent = <Button text={"click!"} />;

  console.log(ButtonComponent);

  return (
    <div>
      {button}
      {ButtonComponent}
    </div>
  );
}

export default ReactElement;
