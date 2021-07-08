import React, { useState, useEffect } from "react";
// import { Square, Box } from "native-base";
import { View, Pressable } from "react-native";
import {
  ReactNativeSVGContext,
  NotoFontPack,
} from "standalone-vexflow-context";
import Vex from "vexflow";

export const MusicView = ({ clef = "treble", pitches = ["a/4", "a/4"] }) => {
  const [notesState, setNotesState] = useState([
    { playing: false },
    { playing: false },
  ]);

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

  notes.forEach((note, index) => {
    note.setStyle({
      fillStyle: notesState[index].playing ? "blue" : "black",
      strokeStyle: notesState[index].playing ? "blue" : "black",
    });
  });

  const voice = new VF.Voice({ num_beats: 2, beat_value: 4 });
  voice.addTickables(notes);

  const formatter = new VF.Formatter().joinVoices([voice]).format([voice], 100);
  stave.draw();
  voice.draw(context, stave);

  return (
    <Pressable
      onPress={({ nativeEvent }) => {
        notes.forEach((note, index) => {
          const boundingBox = note.getBoundingBox();
          const { locationX, locationY } = nativeEvent;
          if (
            locationX >= boundingBox.x &&
            locationX <= boundingBox.x + boundingBox.w &&
            locationY >= boundingBox.y &&
            locationY <= boundingBox.y + boundingBox.h
          ) {
            setNotesState([
              ...notesState,
              (notesState[index].playing = !notesState[index].playing),
            ]);
            console.log(index);
          }
        });
      }}
    >
      <View style={{ transform: [{ scale: 2 }] }}>{context.render()}</View>
    </Pressable>
  );
};
