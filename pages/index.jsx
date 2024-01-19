import styled from 'styled-components'

import Navbar from '../src/components/navbar/Navbar'
import PostCard from '../src/components/cards/PostCard'

const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

function HomePage() {
  return (
    <>
      <Navbar/>
      <PostContainer>
        <PostCard/>
      </PostContainer>
    </>
  )
}

export default HomePage