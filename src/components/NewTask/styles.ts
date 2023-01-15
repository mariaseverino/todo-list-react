import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 50px;
    width: 100%;
    background-color: white;
    width: 700px;
    border-radius: 5px;
    padding: 20px 10px;

    > div {
        display: flex;
        margin: 10px 30px;
        justify-content: space-between;
    }
`;

export const NewTaskArea = styled.div`
    margin: 10px 30px;
`;

export const TextArea = styled.textarea`
    /* width: 600px; */
    width: 100%;
    height: 30px;
    outline: none;
    padding: 10px;
    border: 1px solid gray;
`;

export const DateInput = styled.input`
    /* background-color: #0080ff; */
    padding: 8px;
    /* position: absolute; */
    /* transform: translate(-50%, -50%); */
    /* top: 50%; */
    /* left: 50%; */
    font-family: "Roboto Mono", monospace;
    color: gray;
    font-size: 14px;
    border: 1px solid gray;
    outline: none;
    border-radius: 5px;
`;

export const Buttons = styled.div``;

export const ButtonCancel = styled.button`
    padding: 10px 18px;
    background-color: #e5e7eb;
    outline: none;
    border: none;
    border-radius: 5px;
    margin-right: 15px;
    color: gray;

    :hover {
        background-color: gray;
        /* opacity: 0.2; */
        color: #e5e7eb;
    }
`;
export const ButtonAdd = styled.button`
    padding: 10px 18px;
    background-color: #4c007d;
    color: white;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 14px;

    :hover {
        opacity: 0.9;
    }
`;
