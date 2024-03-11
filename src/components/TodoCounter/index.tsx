import { ITodo } from 'interfaces/todo'
import * as S from './styles'

interface ITodoCounterProps {
    todo: ITodo[]
}

export const TodoCounter: React.FC<ITodoCounterProps> = ({ todo }) => {
    return (
        <S.Wrapper>
            <p>Completed: {todo.filter((item) => item.completed).length}</p>
            <p>Uncompleted: {todo.filter((item) => !item.completed).length}</p>
        </S.Wrapper>
    )
}
