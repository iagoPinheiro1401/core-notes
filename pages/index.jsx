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
  return (
    <>
      <Navbar/>
      <PostContainer>
        <PostCard/>
      </PostContainer>
      <Container>
        <Text>Favoritas</Text>
        <NotesContainer>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
        </NotesContainer>
      </Container>
    </>
  )
}

export default HomePage