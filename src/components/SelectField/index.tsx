import * as S from './styles'

interface ISelectFieldProps {
    statusTodo: string[]
    setStatus: (value: string) => void
}

export const SelectField: React.FC<ISelectFieldProps> = ({
    setStatus,
    statusTodo,
}) => {
    return (
        <S.Select name="select" onChange={(e) => setStatus(e.target.value)}>
            {statusTodo.map((item, idx) => (
                <option key={idx} value={item}>
                    {item}
                </option>
            ))}
        </S.Select>
    )
}
