import React from "react";
import { View, Button } from "native-base";

export const PlayButtonGroup = () => {
  return (
    <Button.Group
      variant="solid"
      isAttached
      space={6}
      mx={{
        base: "auto",
        md: 0,
      }}
    >
      <Button colorScheme="teal" mr={2}>
        Play exercise
      </Button>
      <Button
        colorScheme="danger"
        _text={{
          color: "white",
        }}
      >
        Play Solution
      </Button>
    </Button.Group>
  );
};
