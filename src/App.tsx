import { useState, useEffect } from "react";
import { Task } from "./components/Task";
import { NewTask } from "./components/NewTask";
import api from "./services/api";
import "./App.css";

export interface ITask {
    id: string;
    descricao: string;
    prazo: string;
    completa: boolean;
}

function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);

    useEffect(() => {
        api.get("tarefas").then(({ data }) => {
            setTasks(data);
            console.log(data);
        });
    }, [tasks]);

    async function addTask(descricao: string, prazo: string) {
        const newTask = {
            id: "54",
            descricao,
            prazo,
            completa: false,
        };

        const dados = {
            descricao,
            prazo,
        };

        setTasks((tasks) => [...tasks, newTask]);

        await api.post("tarefas", dados).then(() => {
            alert("Tarefa adicionada");
        });
    }

    async function remover(id: string) {
        await api
            .delete(`tarefas/${id}`)
            .then(() => {
                setTasks(tasks.filter((task) => task.id != id));
                alert("Tarefa removida");
            })
            .catch((err) => {
                alert("erro");
            });
    }

    async function taskDone(id: string) {
        await api
            .put(`tarefas/done/${id}`)
            .then(() => {
                tasks.map((item) => {
                    if (item.id == id) item.completa = !item.completa;
                });

                setTasks([...tasks]);
            })
            .catch((err) => {
                alert("erro");
            });
    }
    return (
        <div>
            <div className="view">
                <ul>
                    {tasks.map((item) => (
                        <Task
                            task={item}
                            removeTask={remover}
                            editTask={taskDone}
                        />
                    ))}
                </ul>
                <NewTask addNewTask={addTask} />
            </div>
        </div>
    );
}

export default App;
