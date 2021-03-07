import styled from 'styled-components';

export const SearchBar = styled.div`
  border:black;
  height:60px;
  margin: 0 auto;
  border: solid 2px black;
  width:50%;
  border-radius:5px;
`
export const SearchInput = styled.input`
  padding-left:10px;
  width: 100%;
  border: none;
  background-color: white;
  height:100%;
  font-size:20px;
  color:black;
  border-radius:5px;
`
export const SuggestionContainer = styled.div`
  border-top: 5px solid #999;
  background-color:white;
  border-radius:5px;
  overflow:hidden;
  z-index:30000000000;
  position:relative;
  overflow:visible;

`
export const Suggestion = styled.div`
  padding:15px;
  font-size: 20px;
  color:black;
  background:white;
  border-top:1px solid #666;
  cursor:pointer;
  &:hover{
   background: #588157;
 }
`