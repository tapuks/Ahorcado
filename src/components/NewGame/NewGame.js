import { Button, Container } from "react-bootstrap"


import './NewGame.scss'


export default function NewGame(props) {
    const { words, setLetrasProbadas, setFallos, setArrayPalabra, setWin } = props

    let arr = []


    const functionNewPalabra = () => {
        setWin(false)
        setLetrasProbadas([])
        setFallos(0)
        const random = Math.floor(Math.random() * words.length)

        for (let i = 0; i < words[random].length; i++) {

            arr.push({ letter: words[random][i], encript: true })
        }
        setArrayPalabra(arr)
        console.log(11111, arr);

    }


    return (
        <Container>
            <div className="new-game">
                <Button onClick={functionNewPalabra}>Nueva partida</Button>
            </div>
        </Container>
    )
}