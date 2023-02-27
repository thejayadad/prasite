import React from 'react'
import styled from "styled-components";


const Container = styled.div`
    height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;

`
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const Logo = styled.h1`
    font-weight: bold;
`
const Menu = styled.ul`
    display: flex;
`
const MenuItem = styled.li`
    
`;
const Navbar = () => {
  return (
    <Container>

    <Wrapper>
        <Left><Logo>Cookies</Logo>
        <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Home</MenuItem>
            <MenuItem>Home</MenuItem>
            <MenuItem>Home</MenuItem>
        </Menu>
        </Left>
        <span>
            button
        </span>
    </Wrapper>
    </Container>
  )
}

export default Navbar