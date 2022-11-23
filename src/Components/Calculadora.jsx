import { useState } from "react"
import { BotonCaracter } from "./BotonCaracter"
import { Pantalla } from "./Pantalla"

export const Calculadora = () => {

    const [textoPantalla, setTextoPantalla] = useState("");

    const onBotonCaracterClick = (caracter) => {
        let pantalla = textoPantalla;
        pantalla += caracter;
        setTextoPantalla(pantalla);
    }

    const onBotonIgualClick = () => {
        let operacion = textoPantalla
            .replace("^", "**")
            .replace("√", "**1/")
            .replace("π", "Math.PI")
            .replace("e", "Math.E");
        let resultado = eval(operacion); //eval recibe strings
        setTextoPantalla(resultado);
    }

    const onBotonACClick = () => {
        setTextoPantalla("");
    }
    return (
        <div>
            <Pantalla texto={textoPantalla}></Pantalla>
            <div className="row">
                <div className="col teclado">
                    <div>
                        <div className="row">
                            <div className="col-2">
                                <BotonCaracter caracter="(" onClick={onBotonCaracterClick}></BotonCaracter>
                            </div>
                            <div className="col-2">
                                <BotonCaracter caracter=")" onClick={onBotonCaracterClick}></BotonCaracter>
                            </div>
                            <div className="col-2">
                                <button type="button" className="btn3d btn btn-default btn-lg"
                                    id="botonFactorial">x!</button>
                            </div>
                            <div className="col-2"><button type="button"
                                className="btn3d btn btn-default btn-lg"
                                id="botonPotencia2">x²</button></div>
                            <div className="col-2">
                                <BotonCaracter caracter="√" onClick={onBotonCaracterClick}>√</BotonCaracter>
                            </div>
                            <div className="col-2"><button type="button"
                                className="btn3d btn btn-default btn-lg"
                                id="botonRaizN">ⁿ√</button></div>
                        </div>
                        <div className="row">
                            <div className="col-2"><button type="button"
                                className="btn3d btn btn-default btn-lg"
                                id="botonSin">sin</button></div>
                            <div className="col-2"><button type="button"
                                className="btn3d btn btn-default btn-lg"
                                id="botonCos">cos</button></div>
                            <div className="col-2"><button type="button"
                                className="btn3d btn btn-default btn-lg"
                                id="botonTg">tg</button></div>
                            <div className="col-2"><button type="button"
                                className="btn3d btn btn-default btn-lg"
                                id="botonPotencia3">x³</button></div>
                            <div className="col-2"><button type="button"
                                className="btn3d btn btn-default btn-lg"
                                id="botonRaiz3">³√</button></div>
                            <div className="col-2">
                                <BotonCaracter caracter="^" onClick={onBotonCaracterClick}>xⁿ</BotonCaracter></div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <BotonCaracter caracter="1" onClick={onBotonCaracterClick}>1</BotonCaracter>
                            </div>
                            <div className="col-2">
                                <BotonCaracter caracter="2" onClick={onBotonCaracterClick}>2</BotonCaracter>
                            </div>
                            <div className="col-2">
                                <BotonCaracter caracter="3" onClick={onBotonCaracterClick}>3</BotonCaracter>
                            </div>
                            <div className="col-2">
                                <BotonCaracter caracter="/" onClick={onBotonCaracterClick}>/</BotonCaracter>
                            </div>
                            <div className="col-2"><button type="button"
                                className="btn3d btn btn-default btn-lg"
                                id="botonPorcentaje">%</button></div>
                            <div className="col-2"><button type="button"
                                className="btn3d btn btn-default btn-lg"
                                id="botonLn">ln</button></div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <BotonCaracter caracter="4" onClick={onBotonCaracterClick}>4</BotonCaracter>
                            </div>
                            <div className="col-2">
                                <BotonCaracter caracter="5" onClick={onBotonCaracterClick}>5</BotonCaracter>
                            </div>
                            <div className="col-2">
                                <BotonCaracter caracter="6" onClick={onBotonCaracterClick}>6</BotonCaracter>
                            </div>
                            <div className="col-2">
                                <BotonCaracter caracter="*" onClick={onBotonCaracterClick}>*</BotonCaracter>
                            </div>
                            <div className="col-2"><button type="button"
                                className="btn3d btn btn-default btn-lg"
                                id="botonLog">log</button></div>
                            <div className="col-2">
                                <BotonCaracter caracter="e" onClick={onBotonCaracterClick}>e</BotonCaracter>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10">
                                <div className="row">
                                    <div className="col">
                                        <BotonCaracter caracter="7" onClick={onBotonCaracterClick}>7</BotonCaracter>
                                    </div>
                                    <div className="col">
                                        <BotonCaracter caracter="8" onClick={onBotonCaracterClick}>8</BotonCaracter>
                                    </div>
                                    <div className="col">
                                        <BotonCaracter caracter="9" onClick={onBotonCaracterClick}>9</BotonCaracter>
                                    </div>
                                    <div className="col">
                                        <BotonCaracter caracter="-" onClick={onBotonCaracterClick}>-</BotonCaracter>
                                    </div>
                                    <div className="col">
                                        <BotonCaracter caracter="AC" onClick={onBotonACClick}>AC</BotonCaracter>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col">
                                        <BotonCaracter caracter="." onClick={onBotonCaracterClick}>.</BotonCaracter>
                                    </div>
                                    <div className="col">
                                        <BotonCaracter caracter="0" onClick={onBotonCaracterClick}>0</BotonCaracter>
                                    </div>
                                    <div className="col">
                                        <BotonCaracter caracter="π" onClick={onBotonCaracterClick}>π</BotonCaracter>
                                    </div>
                                    <div className="col">
                                        <BotonCaracter caracter="+" onClick={onBotonCaracterClick}>+</BotonCaracter>
                                    </div>
                                    <div className="col"><button type="button"
                                        className="btn3d btn btn-default btn-lg"><span
                                            className="glyphicon glyphicon-download-alt"></span>MR</button>
                                    </div>

                                </div>

                            </div>
                            <div className="col-2">
                                <BotonCaracter caracter="=" onClick={onBotonIgualClick}>=</BotonCaracter>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}