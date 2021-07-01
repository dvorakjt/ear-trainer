import React from "react";
import { Square, Box } from "native-base";

export const MusicView = () => {
  return (
    <Square size="xl" bg="primary.400">
      <Box
        _text={{
          fontWeight: "bold",
          fontSize: "lg",
          color: "white",
        }}
      >
        Music Notation Goes Here
      </Box>
    </Square>
  );
};
