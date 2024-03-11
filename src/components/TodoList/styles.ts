import styled from "styled-components";

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 0;
`;

export const TodoItem = styled.div`
  font-size: 18px;
  line-height: 26px;
  word-break: break-all;
`;

export const CheckBox = styled.input`
  margin: 0 10px 0 0;
`;

export const DeleteButton = styled.span`
  margin: 0 10px;
  color: red;
  cursor: pointer;
`;
