import * as React from 'react';
import { Note } from '../../../types/types';
import SingleNote from './Note/SingleNote';

interface INotesProps {
    notes: Note[]
}

const Notes: React.FunctionComponent<INotesProps> = ({notes}) => {

  return (
      <>
      <h4>Notes</h4>
      {
          notes.map(note => <SingleNote key={note.id} note={note}/>)
      }
      </>
  );
};

export default Notes;
