import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { red } from "@material-ui/core/colors";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Vestidos</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtro de produtos:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Cor</Option>
            <Option>Branco</Option>
            <Option>Preto</Option>
            <Option>Vermelho</Option>
            <Option>Azul</Option>
            <Option>Verde</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>m</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Ordernar produtos:</FilterText>

          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">newest</Option>
            <Option value="asc">price(asc)</Option>
            <Option value="desc">price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
