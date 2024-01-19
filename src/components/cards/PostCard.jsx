import styled from 'styled-components'
import Line from '../line/Line'

const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 530.166px;
    border-radius: 3px;
    border: 1px solid #D9D9D9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    @media (max-width: 1100px) {
        width: 340px;
        border-radius: 25px;
        border: 1px solid #D9D9D9;
    }
`

const InputTitle = styled.input`
    width: calc(100% - 30px);
    padding: 5px 15px;
    background-image: url('vector.png');
    background-repeat: no-repeat;
    background-position: right 10px center;
    border: none;
    cursor: pointer;

    &::placeholder {
        font-weight: bolder;
        color: black;
    }

    @media (max-width: 1100px) {
        border-radius: 25px 25px 0 0;
        border: 1px solid #D9D9D9;
    }
`

const PostTextarea = styled.textarea`
    width: calc(100% - 30px);
    height: 60px;
    padding: 5px 15px;
    border: none;
    resize: none;

    @media (max-width: 1100px) {
        border-radius: 0 0 25px 25px;
        border: 1px solid #D9D9D9;
    }
`

export default function PostCard() {
    return(
        <StyleCard>
            <InputTitle placeholder='Título'/>
            <Line/>
            <PostTextarea placeholder='Criar nota...'/>
        </StyleCard>
    )
}