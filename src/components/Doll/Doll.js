


import { useState } from 'react'
import { Container } from 'react-bootstrap'
import './Doll.scss'

export default function Doll(props) {
    const { fallos } = props



    return (
        <Container>
            <div className='doll'>
                <div className='doll_cuerda'>
                    <div className='doll_cuerda-base'></div>
                    <span></span>

                </div>
                <div className='doll_muñeco'>
                    <div style={fallos < 1 ? { display: 'none' } : { display: 'block' }} className={`doll_muñeco-cabeza ${fallos >= 6 && 'perdido'}`}></div>
                    <div style={fallos < 2 ? { display: 'none' } : { display: 'block' }} className={`doll_muñeco-cuerpo ${fallos >= 6 && 'perdido'}`}></div>
                    <div style={fallos < 3 ? { display: 'none' } : { display: 'block' }} className={`doll_muñeco-brazo1 ${fallos >= 6 && 'perdido'}`}></div>
                    <div style={fallos < 4 ? { display: 'none' } : { display: 'block' }} className={`doll_muñeco-brazo2 ${fallos >= 6 && 'perdido'}`}></div>
                    <div style={fallos < 5 ? { display: 'none' } : { display: 'block' }} className={`doll_muñeco-pierna1 ${fallos >= 6 && 'perdido'}`}></div>
                    <div style={fallos < 6 ? { display: 'none' } : { display: 'block' }} className={`doll_muñeco-pierna2 ${fallos >= 6 && 'perdido'}`}></div>
                </div>
            </div>
        </Container>
    )
}