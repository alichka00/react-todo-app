import { ITodo } from 'interfaces/todo'
import * as S from './styles'

interface ITodoListProps {
    status: string
    todo: ITodo[]
    handleChangeStatusTodo: (item: ITodo) => void
    handleRemoveTodo: (item: ITodo) => void
}

export const TodoList: React.FC<ITodoListProps> = ({
    status,
    todo,
    handleChangeStatusTodo,
    handleRemoveTodo,
}) => {
    const filterTodo = todo.filter((todo) => {
        if (status === 'Completed') {
            return todo.completed
        } else if (status === 'Current') {
            return !todo.completed
        }
        return true
    })

    return (
        <S.TodoList>
            {filterTodo.map((item, idx) => (
                <S.TodoItem key={idx}>
                    <S.CheckBox
                        type="checkbox"
                        checked={item.completed}
                        value={item.text}
                        id={`${idx}`}
                        onChange={() => handleChangeStatusTodo(item)}
                    />
                    <label htmlFor={`${idx}`}>{item.text}</label>
                    <S.DeleteButton onClick={() => handleRemoveTodo(item)}>
                        &#x2A09;
                    </S.DeleteButton>
                </S.TodoItem>
            ))}
        </S.TodoList>
    )
}
