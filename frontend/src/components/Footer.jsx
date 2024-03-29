import { Facebook, Instagram, MailOutline,Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
   display: flex;
   ${mobile({flexDirection:"column" })}

`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
 margin: 20px 0px;

`

const SocialContainer = styled.div`
display: flex;

`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius:50%;
color: white;

background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;

`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin:0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`



const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor:"#f8eaea" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`




const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Jalecos & Cia</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis minus delectus nesciunt eligendi deserunt asperiores expedita,
                    iste provident ipsum voluptatum, incidunt alias! Dolore, fugit.
                    Odio obcaecati corporis optio assumenda voluptates.
                </Desc>
                <SocialContainer>

                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>

                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>

                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>

                    <SocialIcon color="3B5999">
                        <Pinterest />
                    </SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
                <Title>Links Úteis</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Carrinho</ListItem>
                    <ListItem>Moda Masculina</ListItem>
                    <ListItem>Moda Feminina</ListItem>
                    <ListItem>Acessórios</ListItem>
                    <ListItem>minha conta</ListItem>
                    <ListItem>Rastrear pedidos</ListItem>
                    <ListItem>Lista de desejos</ListItem>
                    <ListItem>Termos</ListItem>

                </List>
            </Center>
            <Right>

                <Title>Contato</Title>
                <ContactItem>

                    <Room style={{marginRight:"10px"}}/>
                    85 alameda dos anjos, edie city 9854
                </ContactItem>

                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +55 01123125124
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/> contato@email.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>

        </Container>
    )
}

export default Footer