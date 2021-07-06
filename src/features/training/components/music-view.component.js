import React from "react";
// import { Square, Box } from "native-base";
import { View, Text } from "react-native";
import {
  ReactNativeSVGContext,
  NotoFontPack,
} from "standalone-vexflow-context";
import Vex from "vexflow";

export const MusicView = ({ clef = "treble", pitches = ["a/4", "a/4"] }) => {
  const VF = Vex.Flow;

  const context = new ReactNativeSVGContext(NotoFontPack, {
    width: 143,
    height: 175,
  });
  const stave = new VF.Stave(10, 30, 120); //horizontal offset, vertical offset, width of staff
  stave.setContext(context);
  stave.setClef(clef);

  //create notes and a voice
  const notes = pitches.map((pitch) => {
    return new VF.StaveNote({
      clef: clef,
      keys: [pitch],
      duration: "q",
    }).setStem(new VF.Stem({ hide: true }));
  });

  const voice = new VF.Voice({ num_beats: 2, beat_value: 4 });
  voice.addTickables(notes);

  const formatter = new VF.Formatter().joinVoices([voice]).format([voice], 100);
  stave.draw();
  voice.draw(context, stave);

  return <View>{context.render()}</View>;
};
