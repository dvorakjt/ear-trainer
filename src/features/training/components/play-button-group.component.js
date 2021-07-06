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
      <Button
        colorScheme="violet"
        mr={2}
        _text={{
          color: "white",
        }}
      >
        Play Exercise
      </Button>
      <Button
        colorScheme="violet"
        _text={{
          color: "white",
        }}
      >
        Play Solution
      </Button>
    </Button.Group>
  );
};
