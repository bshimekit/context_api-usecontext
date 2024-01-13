import React from "react";
import { MyContext } from "../../App";

function Component3() {
  return (
    <div>
      <MyContext.Consumer>
        {(data) => {
          console.log(MyContext)
          console.log(data)
          return (
            <div>
              {/* <h1>The last child</h1> */}

              {/* <p>Using context API: {data}</p> */}
              {/* <p>Using context API: {data.name}</p> */}
            </div>
          );
        }}

        {/* {(data) => {
          return (
            <div>
              <h1>The last child</h1>
              <p>Using context API: {data}</p>
            </div>
          );
        }} */}
      </MyContext.Consumer>
    </div>
  );
}

export default Component3;
