


import { Container, Col, Row } from 'react-bootstrap'
import './Teclado.scss'



export default function Teclado(props) {
    const { letrasProbadas, setLetrasProbadas, setLetraClick, fallos, arrayPalabra, win } = props



    let letras = 'QWERTYUIOPASDFGHJKLÑZXCVBNM'
    let array = []


    for (let i = 0; i < letras.length; i++) {
        if (letrasProbadas.includes(letras[i])) {
            array.push(
                <Col key={i} className='mt-2 mt-md-3' xs={3} md={2} lg={1}>
                    <button disabled style={{ background: 'rgba(49, 47, 47, 0.575)' }} onClick={() => handleLetraClick(letras[i])}>{letras[i]}
                    </button>
                </Col>)
        }
        else {
            array.push(
                <Col key={i} className='mt-2 mt-md-3' xs={3} md={2} lg={1}>
                    <button
                        onClick={() => handleLetraClick(letras[i])}>{letras[i]}
                    </button>
                </Col>
            )
        }
    }

    const handleLetraClick = (letra) => {
        if (fallos <= 6 && arrayPalabra.length && win == false) {
            setLetraClick(letra)
            let newArray = letrasProbadas.concat(letra)
            setLetrasProbadas(newArray)

        }

    }



    return (
        <Container>
            <div className='teclado'>
                <Row>{array}</Row>
            </div>
        </Container>
    )
}