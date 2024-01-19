import styled from 'styled-components'

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
  margin: 25px 127px 0 127px;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
`

function HomePage() {
  return (
    <>
      <Navbar/>
      <PostContainer>
        <PostCard/>
      </PostContainer>
      <Container>
        <p>Favoritas</p>
      </Container>
      <NotesContainer>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
      </NotesContainer>
    </>
  )
}

export default HomePage