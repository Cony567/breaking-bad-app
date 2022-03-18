import React from 'react'

export const Frase = ({frase}) => {
  return (
    <p>
        { frase.texto }
        <br/>
        <span> - {frase.autor}</span>
    </p>
  )
}

