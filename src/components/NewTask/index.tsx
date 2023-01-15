import React, { FormEvent, ReactNode, useState } from "react";
import DatePicker from "react-datepicker";
// import {} from "@";

import {
    Container,
    NewTaskArea,
    TextArea,
    DateInput,
    ButtonCancel,
    ButtonAdd,
    Buttons,
} from "./styles";

interface NewTaskProps {
    addNewTask: (newTask: string, prazo: string) => void;
}

export function NewTask({ addNewTask }: NewTaskProps) {
    const [newTask, setNewTask] = useState<string>("");
    const [startDate2, setStartDate2] = useState("");

    function handleSubmit() {
        console.log(startDate2);
        const prazo = new Date(startDate2).toISOString();
        // prazo = prazo.toISOString();
        console.log(newTask);

        addNewTask(newTask, prazo);
    }

    return (
        <Container>
            <NewTaskArea>
                <TextArea
                    onChange={(event) => setNewTask(event.target.value)}
                />
            </NewTaskArea>

            <div>
                <DateInput
                    type="date"
                    onChange={(event) => setStartDate2(event.target.value)}
                    // value={startDate2}
                />
                <Buttons>
                    <ButtonCancel>Cancel</ButtonCancel>
                    <ButtonAdd onClick={handleSubmit}>Adicionar</ButtonAdd>
                </Buttons>
            </div>
        </Container>
    );
}
