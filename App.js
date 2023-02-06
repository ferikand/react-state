import React from "react";
import boxes from "./boxes";
import Box from "./Box.js";

export default function App() {
  const [squares, setsquares] = React.useState(boxes);

  const boxesElements = squares.map((el) => {
    return <Box key={el.id} on={el.on} />;
  });

  return <main>{boxesElements}</main>;
}
