import ButtonClass from './Button.module.css'

const Button = props => {

    return <button
        className={ButtonClass.button}
        type={props.type || 'button'}
        // if the type is button then we have to  attach event handlers ( Like onClick ) to define what happens when the button is clicked.
        onClick={props.onClick}
    >
        {props.children}
    </button>
}
export default Button;