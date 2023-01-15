import styled, { css } from "styled-components";
import { Record, RecordFill, Trash, Pen } from "@styled-icons/bootstrap";

export const Container = styled.div`
    background-color: white;
    display: flex;
    margin: 10px 30px;
    padding: 10px;
    border-radius: 8px;
`;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Content = styled.div``;
export const Selector = styled.div`
    border-radius: 50%;
    border: 2px solid gray;
    width: 20px;
    height: 20px;
    margin-right: 15px;
`;

const icondescricao = css`
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 5px;
    font-weight: 500;
`;
export const DescricaoDone = styled.p`
    ${icondescricao}
    text-decoration: line-through;
    color: gray;
`;

export const Descricao = styled.p`
    ${icondescricao}
`;

export const Prazo = styled.p`
    font-size: 14px;
    margin-top: 0;
    font-weight: 500;
    color: gray;
`;

export const Buttons = styled.div`
    > button {
        outline: none;
        border: none;
        background-color: transparent;
        font-size: 16px;
    }
`;
export const Edit = styled.button`
    color: #646cff;
    margin-right: 15px;

    :hover {
        opacity: 0.7;
    }
`;
export const Delete = styled.button`
    color: hsl(358, 79%, 66%);

    :hover {
        opacity: 0.7;
    }
`;

const iconCSS = css`
    width: 40px;
    height: 40px;
    color: gray;
    margin-right: 10px;
`;

export const Done = styled(RecordFill)`
    ${iconCSS}
`;

export const NotDone = styled(Record)`
    ${iconCSS}/* margin-bottom: 5px; */
`;

const miniIconCSS = css`
    width: 15px;
    height: 15px;
`;

export const DeleteIcon = styled(Trash)`
    ${miniIconCSS}
`;

export const EditiIcon = styled(Pen)`
    ${miniIconCSS}/* margin-bottom: 5px; */
`;

export const TaskDone = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
`;
