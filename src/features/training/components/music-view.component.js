import React, { useState, useRef } from "react";
import { View, Pressable, Animated } from "react-native";
import {
  ReactNativeSVGContext,
  NotoFontPack,
} from "standalone-vexflow-context";
import { color } from "styled-system";
import Vex from "vexflow";

import { animateNote } from "../utils/animateNote";

export const MusicView = ({
  clef = "treble",
  pitches = ["a/4", "a/4"],
  instrument = "Bassoon",
}) => {
  const VF = Vex.Flow;

  const context = new ReactNativeSVGContext(NotoFontPack, {
    width: 143,
    height: 175,
  });
  const stave = new VF.Stave(10, 30, 120); //horizontal offset, vertical offset, width of staff
  stave.setContext(context);
  stave.setClef(clef);
  stave.setEndBarType(VF.Barline.type.END);

  //create references to each note and states to keep track of their colors
  let noteRefs = [];
  for (let i = 0; i < pitches.length; i++) {
    noteRefs.push({
      animating: useRef(false),
      red: useRef(0),
      green: useRef(0),
      blue: useRef(0),
      phase: useRef(0),
    });
  }

  let notesStateTemplate = [];
  noteRefs.forEach((noteRef) => {
    notesStateTemplate.push({
      r: noteRef.red.current,
      g: noteRef.green.current,
      b: noteRef.blue.current,
    });
  });

  const [notesState, setNotesState] = useState(notesStateTemplate);

  //create notes and a voice
  const notes = pitches.map((pitch) => {
    return new VF.StaveNote({
      clef: clef,
      keys: [pitch],
      duration: "q",
    }).setStem(new VF.Stem({ hide: true }));
  });

  notes.forEach((note, index) => {
    const r = notesState[index].r;
    const g = notesState[index].g;
    const b = notesState[index].b;
    note.setStyle({
      fillStyle: `rgb(${r}, ${g}, ${b})`,
      strokeStyle: `rgb(${r}, ${g}, ${b})`,
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
            locationX >= boundingBox.x - boundingBox.w * 0.2 &&
            locationX <= boundingBox.x + boundingBox.w &&
            locationY >= boundingBox.y - boundingBox.h &&
            locationY <= boundingBox.y + boundingBox.h
          ) {
            console.log(index);
            const { animating, red, green, blue, phase } = noteRefs[index];
            console.log(
              animating.current,
              red.current,
              green.current,
              blue.current,
              phase.current
            );
            const setThisNotesState = (colorObject) => {
              setNotesState([...notesState, (notesState[index] = colorObject)]);
            };
            animateNote(animating, red, green, blue, phase, setThisNotesState);
          }
        });
      }}
    >
      <View style={{ transform: [{ scale: 2 }] }}>{context.render()}</View>
    </Pressable>
  );
};
