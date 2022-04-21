
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"

import './Palabras.scss'

export default function Palabras(props) {
    const { setFallos, fallos, letraClick, setArrayPalabra, arrayPalabra, win } = props




    useEffect(() => {

        let aciertoLetra = false

        setArrayPalabra((prevState) => prevState.map(({ letter, encript }) => {
            if (letter == letraClick) {
                return { letter, encript: false }
            }
            else return { letter, encript }
        }))

        arrayPalabra.map(function (item) {
            if (item.letter == letraClick) {
                aciertoLetra = true
            }
        })

        if (aciertoLetra == false) setFallos(fallos + 1)


    }, [letraClick])



    return (
        <Container>
            <div className="palabras">
                {arrayPalabra.map(function (item, index) {
                    if (item.encript == true) {
                        return <span key={index}>__</span>
                    }
                    else {
                        return <span key={index} style={win == true ? { color: 'white' } : { color: 'black' }}>{item.letter}</span>
                    }

                })}
            </div>
        </Container>
    )
}