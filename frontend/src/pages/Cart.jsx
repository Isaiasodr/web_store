
import { Add, Remove } from "@material-ui/icons"
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
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "trasparent"};
    color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`

`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin:0px 10px ;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex:3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};

`
const ProductSize = styled.span``
const PriceDetails = styled.div`
 flex: 1;
 display: flex;
 flex-direction:column ;
 align-items: center;
 justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 25px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
  
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    
`

const Sumary = styled.div`
    flex:1;
    
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
                <Bottom>
                    <Info>
                    <Product>
                            <ProductDetails>
                                <Image src="https://www.pngall.com/wp-content/uploads/5/Sylish-Men-Shoes-PNG-Picture.png" />
                                <Details>
                                    <ProductName><b>Product:</b> Shoes Nike</ProductName>
                                    <ProductId><b>ID:</b>15649749497</ProductId>
                                    <ProductColor color="Black" />
                                    <ProductSize><b>Size:</b>42</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>R$ 300</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetails>
                                <Image src="https://www.pngmart.com/files/1/Nike-Shoes-Transparent-PNG.png" />
                                <Details>
                                    <ProductName><b>Product:</b> Shoes Nike</ProductName>
                                    <ProductId><b>ID:</b>15649749497</ProductId>
                                    <ProductColor color="red" />
                                    <ProductSize><b>Size:</b>42</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>R$ 300</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Sumary>sumary</Sumary>

                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart