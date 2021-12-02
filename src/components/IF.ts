const IF = (props) => {
    if (props.condition) {
        return () => {props.onTrue}
    }
    return null;
}

export default IF;