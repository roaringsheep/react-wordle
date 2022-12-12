import './Keyboard.css'
import Key from './Key'

export default function Keyboard(props) {
    return(
        <div className='keyboard'>
            <div className="key-row">
                {['q','w','e','r','t','y','u','i','o','p'].map(n => <Key className={props.colors[n]} onClick={props.onClick} key={n} id={n}>{n.toUpperCase()}</Key>)}
            </div>
            <div className="key-row">
                {['a','s','d','f','g','h','j','k','l'].map(n => <Key className={props.colors[n]} onClick={props.onClick} key={n} id={n}>{n.toUpperCase()}</Key>)}
            </div>
            <div className="key-row">
                {['del','z','x','c','v','b','n','m','entr'].map(n => <Key className={props.colors[n]} onClick={props.onClick} key={n} id={n}>{n.toUpperCase()}</Key>)}
            </div>
        </div>
    )
}