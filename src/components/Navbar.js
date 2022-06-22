import React from 'react'
import styled from "styled-components";
import { Logout, Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import {mobile} from "../responsive"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userRedux';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "60px" })}

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}

`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}

`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
    ${mobile({flex:2, justifyContent: "center" })}

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  ${mobile({ fontSize: "12px",marginLeft:"10px"})}

`;

const Navbar = () => {
  const user = useSelector(state=>state.user.currentUser)
  const quantity = useSelector(state=>state.cart.quantity)
  const dispach = useDispatch()
  const handleClick = (e) => {
    e.preventDefault();
    dispach(
      logout({currentUser:null})
    )
  
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>E-Cart</Logo>
        </Center>
        <Right>
          <Link to="/register" style={{ textDecoration: 'none' }}>
          <MenuItem >HELLO {!user ? 'REGISTER' : user.username}</MenuItem>
          </Link >
          <MenuItem>  </MenuItem>
          {!user ? <Link to="/login" style={{ textDecoration: 'none' }} >
        
        <MenuItem>SIGN IN </MenuItem> 
        </Link>
          :<MenuItem onClick={handleClick}>SIGN OUT </MenuItem> }
      
          <Link to="/cart">

          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
                    
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar