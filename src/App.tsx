import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './store'
import { todoSlice } from './store/todoSlice'
import { InputField } from './components/InputField'
import { SelectField } from './components/SelectField'
import { TodoList } from './components/TodoList'
import { TodoCounter } from './components/TodoCounter'
import * as C from './styles/components'
import { ITodo } from 'interfaces/todo'

const App: React.FC = () => {
    const [value, setValue] = useState('')
    const dispatch = useAppDispatch()
    const { todo } = useAppSelector((state) => state.todos)
    const statusTodo = ['All', 'Completed', 'Current']
    const [status, setStatus] = useState<string>('')

    const handleAddTodo = (): void => {
        if (value.trim() && value.length <= 100) {
            dispatch(todoSlice.actions.addTodo(value))
            setValue('')
        }
    }

    const handleRemoveTodo = (item: ITodo): void => {
        dispatch(todoSlice.actions.removeTodo(item))
    }

    const handleChangeStatusTodo = (item: ITodo): void => {
        dispatch(todoSlice.actions.toggleComplete(item))
    }

    return (
        <C.Container>
            <C.Wrapper>
                <InputField
                    value={value}
                    setValue={setValue}
                    handleAddTodo={handleAddTodo}
                />
                <SelectField statusTodo={statusTodo} setStatus={setStatus} />
                <TodoCounter todo={todo} />
            </C.Wrapper>
            <TodoList
                status={status}
                todo={todo}
                handleChangeStatusTodo={handleChangeStatusTodo}
                handleRemoveTodo={handleRemoveTodo}
            />
        </C.Container>
    )
}

export default App
