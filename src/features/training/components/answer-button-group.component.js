import React from "react";
import { View, Text, Button } from "native-base";

export const AnswerButtonGroup = () => {
  return (
    <View>
      <Text>The second pitch is:</Text>
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
          Sharp
        </Button>
        <Button colorScheme="teal" mr={2}>
          In Tune
        </Button>
        <Button colorScheme="teal" mr={2}>
          Flat
        </Button>
      </Button.Group>
    </View>
  );
};
