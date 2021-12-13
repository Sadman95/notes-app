import * as React from 'react';
import { Note } from '../../../types/types';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Notes from '../Notes/Notes';


interface IHomeProps {
}

const Home: React.FC<IHomeProps> = (props) => {

  const [notes, setNotes] = React.useState<Note[]>([{
    id: Math.random()*100,
    title: 'TypeScript',
    description: 'React component with typeScript in UI',
    color: '#f2f2f2',
    date: new Date().toDateString()
}])

  return (
      <>
      <Header/>
      <Notes notes={notes}/>
      <Footer/>
      </>
  );
};

export default Home;
