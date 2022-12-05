import React from "react";
import styled from "styled-components";

const SearchBar = () => {
    return (

        <Wrapper>
            <SearchBarWrapper>
                <Input />
            </SearchBarWrapper>

        </Wrapper>
    )
}

export default SearchBar;

const Input = styled.input`
    flex:1;
    font-size:20px;
    border:none;
    outline:none;
`;

const SearchBarWrapper = styled.div`
    display:flex;
    height:35px;
    border:1px solid black
`;

const Wrapper = styled.div`
    max-width:350px;
    margin:auto;
`;