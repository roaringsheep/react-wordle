import './GameBoard.css'
import Grid from './Grid';
export default function GameBoard(props) {
    const {attempts, ...rest} = props; 
    return (
        <div className='game-board'>
            {attempts.map((attempt, idx)=> {
                return <div key={idx}>{attempt.map((i, n) => <Grid className={i.className} key={`${idx}-${n}`}>{i.val}</Grid>)}</div>;
            })}
        </div>
    )
}