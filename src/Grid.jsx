import './Grid.css'
import clsx from 'clsx'
export default function Grid(props){
    const clsName = clsx('grid', props.className);
    return <span className={clsName}>{props.children}</span>
}