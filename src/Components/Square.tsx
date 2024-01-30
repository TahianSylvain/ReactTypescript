export const Square = ({value, onClick, winner}:{
        winner: string|null, value: string|null,
        onClick: () => void
    }) => {
    if (!value){
        return <button onClick={onClick} className = "square"
         disabled={Boolean(winner)} />
    }

    return <button disabled className={`square square_${value.toLowerCase()}`}>
        {value} 
    </button> 
}