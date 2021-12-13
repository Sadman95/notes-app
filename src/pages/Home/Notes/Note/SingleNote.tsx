import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import { Note } from '../../../../types/types';

interface ISingleNoteProps {
  note: Note
}



const SingleNote: React.FunctionComponent<ISingleNoteProps> = ({note}) => {

  const noteStyle = {
    backgroundColor: note.color,
  }

  return (
    <Box sx={noteStyle}>
      <Typography variant='h4' component='div'>
        {note.title}
      </Typography>
      <Typography variant='body2' component='div'>
        {note.description}
      </Typography>
      <Typography variant='body1' component='div'>
        {note.date}
      </Typography>
      <Button variant='contained' color='error'>
        Delete
      </Button>
    </Box>
  );
};

export default SingleNote;
