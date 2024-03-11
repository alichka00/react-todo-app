import * as S from './styles'

interface IInputFieldProps {
    value: string
    setValue: (value: string) => void
    handleAddTodo: () => void
}

export const InputField: React.FC<IInputFieldProps> = ({
    value,
    setValue,
    handleAddTodo,
}) => {
    return (
        <S.Label>
            <S.Input value={value} onChange={(e) => setValue(e.target.value)} />
            <S.Button onClick={handleAddTodo}>Add</S.Button>
        </S.Label>
    )
}
