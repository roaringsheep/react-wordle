import './Key.css'
import clsx from 'clsx';
export default function Key(props) {
    const {onClick, className, ...rest} = props;
    const clsName = clsx('key', className);
    return <span className={clsName} onClick={onClick} {...rest}>{props.children}</span>
}