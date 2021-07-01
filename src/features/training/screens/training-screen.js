import React from "react";
import { View } from "react-native";
import { Center, Flex, Text, Divider } from "native-base";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacers/spacer";
import { PlayButtonGroup } from "../components/play-button-group.component";
import { AnswerButtonGroup } from "../components/answer-button-group.component";
import { MusicView } from "../components/music-view.component";

export const TrainingScreen = () => {
  return (
    <SafeArea style={{ flex: 1 }}>
      <Center flex={1}>
        <Flex flex={1} align="center">
          <Spacer />
          <Text fontSize="xs" bold>
            Practice Mode: Tuning Unisons
          </Text>
          <MusicView />
          <PlayButtonGroup />
          <Spacer />
          <Divider />
          <Spacer>
            <AnswerButtonGroup />
          </Spacer>
        </Flex>
      </Center>
    </SafeArea>
  );
};
