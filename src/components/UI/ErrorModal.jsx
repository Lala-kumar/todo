import React, { Fragment } from "react";

import Card from "./Card";
import classes from './ErrorModal.module.css'
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onCloseError}></div>
};

const ModalOverlay = (props) => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onCloseError}>Okay</Button>
        </footer>
    </Card>
};

const ErrorModal = props => {

    return ReactDOM.createPortal(
        <Fragment>
            <Backdrop onCloseError={props.onCloseError} />
            <ModalOverlay
                title={props.title}
                message={props.message}
                onCloseError={props.onCloseError}
            />
        </Fragment>,
        document.getElementById("overlay-root")
    );
}


export default ErrorModal;

