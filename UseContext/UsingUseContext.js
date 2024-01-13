import React, { useContext } from "react";
import { MyContext } from "../../App";

function UsingUseContext() {
  // Since the useContext function returns the value of the context, you can assign it to a variable you want
  const exampleContext = useContext(MyContext);
  console.log(exampleContext);
  return (
    <div>
      {/* <p>Using the useContext hook: {exampleContext}</p> */}
      <p>Using the useContext hook: {exampleContext.class}</p>
    </div>
  );
}

export default UsingUseContext;
