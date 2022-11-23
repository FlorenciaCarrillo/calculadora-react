export const BotonCaracter = (props) => {

    const onButtonClick = () => {
        props.onClick(props.caracter)
    }

    return (

        <button type="button" onClick={onButtonClick}
            className="btn3d btn btn-default btn-lg botonNumero">{props.caracter}</button>
    )

}