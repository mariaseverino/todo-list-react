import { ITask } from "../../App";

import {
    Container,
    Content,
    Descricao,
    Prazo,
    Buttons,
    Edit,
    Delete,
    ContentContainer,
    Done,
    NotDone,
    DescricaoDone,
    DeleteIcon,
    EditiIcon,
    TaskDone,
} from "./styles";

interface TaskProps {
    task: ITask;
    removeTask: (id: string) => void;
    editTask: (id: string) => void;
}

export function Task({ task, removeTask, editTask }: TaskProps) {
    return (
        <Container>
            <TaskDone onClick={() => editTask(task.id)}>
                {task.completa == true ? <Done /> : <NotDone />}
            </TaskDone>
            <ContentContainer>
                <Content>
                    {task.completa == true ? (
                        <DescricaoDone>{task.descricao}</DescricaoDone>
                    ) : (
                        <Descricao>{task.descricao}</Descricao>
                    )}

                    <Prazo>
                        {new Intl.DateTimeFormat("pt-BR").format(
                            new Date(task.prazo)
                        )}
                    </Prazo>
                </Content>
                <Buttons>
                    <Edit>
                        <EditiIcon /> Editar
                    </Edit>
                    <Delete onClick={() => removeTask(task.id)}>
                        <DeleteIcon /> Deletar
                    </Delete>
                </Buttons>
            </ContentContainer>
        </Container>
    );
}
