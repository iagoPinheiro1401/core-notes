import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from '../src/components/navbar/Navbar'
import PostCard from '../src/components/cards/PostCard'
import NoteCard from '../src/components/cards/NoteCard'
import Container from '../src/components/container/Container'

const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
`

const NotesContainer = styled.div`
  width: 100%;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  margin-bottom: 50px;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(2,1fr);
  }

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Text = styled.p`
  margin: 0 0 20px 20px;

  @media (max-width: 1100px) {
    text-align: center;
  }
`

function HomePage() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:3333/notes')
        setNotes(response.data);
      } catch (error) {
        console.error('Erro ao buscar notas:', error);
      }
    };

    fetchNotes();
  }, [])

  const handleDeleteNote = async (noteId) => {
    try {
      await axios.delete(`http://localhost:3333/notes/${noteId}`)
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId))
    } catch (error) {
      console.error('Erro ao excluir a nota:', error)
    }
  };

  const handleEditNote = (noteId) => {
    setEditingNote(noteId);
  };
  return (
    <>
      <Navbar/>
      <PostContainer>
        <PostCard/>
      </PostContainer>
      <Container>
        <Text>Favoritas</Text>
        <NotesContainer>
          {notes.map((note) => (
              <NoteCard 
                key={note._id}
                title={note.title} 
                note={note.note} 
                onDelete={() => handleDeleteNote(note._id)}
                onEdit={() => handleEditNote(note._id)}
              />
          ))}
        </NotesContainer>
      </Container>
    </>
  )
}

export default HomePage