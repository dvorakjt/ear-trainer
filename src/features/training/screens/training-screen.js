import React from "react";
import { Center, Flex, Text, Divider } from "native-base";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { PlayButtonGroup } from "../components/play-button-group.component";
import { AnswerButtonGroup } from "../components/answer-button-group.component";
import { MusicView } from "../components/music-view.component";

export const TrainingScreen = () => {
  return (
    <SafeArea style={{ flex: 1 }}>
      <Center flex={1}>
        <Flex flex={0.75} justifyContent="space-between" alignItems="center">
          <Text fontSize="xs" bold>
            Practice Mode: Tuning Unisons
          </Text>
          <MusicView />
          <PlayButtonGroup />
          <Divider />
          <AnswerButtonGroup />
        </Flex>
      </Center>
    </SafeArea>
  );
};
