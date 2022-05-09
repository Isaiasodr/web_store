import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
`
const TopBotton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black":"trasparent"};
    color: ${props=>props.type === "filled" && "white"};
`
const TopTexts = styled.div`

`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin:0px 10px ;
`



const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Sua sacola</Title>
                <Top>
                    <TopBotton >Continuar comprando</TopBotton>
                    <TopTexts>
                        <TopText>Sacola de Compras(2)</TopText>
                        <TopText>Sua lista de desejo(0)</TopText>
                    </TopTexts>
                    <TopBotton type="filled">Finalizar compra</TopBotton>
                </Top>

            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart