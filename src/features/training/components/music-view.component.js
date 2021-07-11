import React, { useState, useEffect } from "react";
import { View, Pressable } from "react-native";
import {
  ReactNativeSVGContext,
  NotoFontPack,
} from "standalone-vexflow-context";
import Vex from "vexflow";

export const MusicView = ({
  clef = "treble",
  pitches = ["a/4", "a/4"],
  instrument = "Bassoon",
}) => {
  const STOPPED = 0;
  const PLAYING = 1;
  const ENDING = 2;

  const [notesState, setNotesState] = useState([
    { playing: STOPPED },
    { playing: STOPPED },
  ]);

  const stopNote = (noteIndex) => {
    setNotesState([...notesState, (notesState[noteIndex].playing = ENDING)]);
    setTimeout(() => {
      setNotesState([...notesState, (notesState[noteIndex].playing = STOPPED)]);
    }, 1000);
  };

  const playNote = (noteIndex, duration = false) => {
    if (notesState[noteIndex].playing !== PLAYING) {
      setNotesState([...notesState, (notesState[noteIndex].playing = PLAYING)]);
      //if a duration is provided, set a timeout to stop the note.
      if (duration) {
        setTimeout(() => stopNote(noteIndex), duration);
      }
    }
  };

  const scheduleAndPlayNotes = (notes, tempo) => {
    //this function will schedule and play notes in a certain tempo.
  };

  const VF = Vex.Flow;

  const context = new ReactNativeSVGContext(NotoFontPack, {
    width: 143,
    height: 175,
  });
  const stave = new VF.Stave(10, 30, 120); //horizontal offset, vertical offset, width of staff
  stave.setContext(context);
  stave.setClef(clef);
  stave.setEndBarType(VF.Barline.type.END);

  //create notes and a voice
  const notes = pitches.map((pitch) => {
    return new VF.StaveNote({
      clef: clef,
      keys: [pitch],
      duration: "q",
    }).setStem(new VF.Stem({ hide: true }));
  });

  notes.forEach((note, index) => {
    let color;

    switch (notesState[index].playing) {
      case STOPPED:
        color = "black";
        break;
      case PLAYING:
        color = "blue";
        break;
      case ENDING:
        color = "red";
        break;
      default:
        color = "black";
    }
    note.setStyle({
      fillStyle: color,
      strokeStyle: color,
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
            if (notesState[index].playing === STOPPED) {
              playNote(index, 2000);
            } else {
              stopNote(index);
            }
            console.log(index);
          }
        });
      }}
    >
      <View style={{ transform: [{ scale: 2 }] }}>{context.render()}</View>
    </Pressable>
  );
};
