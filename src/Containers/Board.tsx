import { useEffect, useState } from "react"
import { Square } from "../Components/Square"

type Player = "X"| "O"|null|"BOTH"

export const Board = () => {
    const [winner, setWinner] = useState<Player>(null)
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [ currentPlayer, setCurrentPlayer] = useState<"X"|"O">(
        Math.round(Math.random()*1)===1 ? "X": "O"
    )
    function reset() {
        setSquares(Array(9).fill(null))
        setWinner(null)
        setCurrentPlayer(Math.round(Math.random()*1)===1? "X":"O")
    }
    function setSquareValue(index: number){
        const newData = squares.map((val, i)=> {
            if ( i === index )return currentPlayer
            return val
        })
        setSquares(newData)
        setCurrentPlayer(currentPlayer==='X'?'O':'X')
    }
    function calculateWinner(squares:Player[]) {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], 
            [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 8],
        ]
        for (let i=0; i<lines.length; i++){
            const [a, b, c] = lines[i]
            if ( squares[a] &&
                 squares[b] === squares[b] &&
                 squares[a] === squares[c]
            ) {
                return squares[a]
            }
        }
        return null
    }
    useEffect(()=>{
        const w = calculateWinner(squares)
        if (w){
            setWinner(w)
        }
        if (!w && !squares.filter((square)=>!square).length){
            setWinner("BOTH")
        }
    })

    return <div>
        {!winner && <p>Hey {currentPlayer}, it's your turn</p>}
        {winner && <p>Congratulations {winner}!!</p>}
        {winner && winner === 'BOTH' && <p>Congratulations you're both winners</p>}

        <div className="grid">{ Array(9).fill(null).map( (_, i) => {
            return <Square 
                key={i} 
                winner={winner} 
                onClick={()=>setSquareValue(i)} 
                value = {squares[i]} /> })}
        </div>
        <button className="reset" onClick={reset}>Reset</button>
    </div> 
}