import { useState } from 'react'
import { Card } from './Card.jsx'
import './style.scss'
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [formularioErro, setFormularioErro] = useState(false)
  const [cardName, setCardName] = useState('')
  const [colorName, setColorName] = useState('')
  const [allCards, setAllCards] = useState([])

  function registerColor(event) {
    event.preventDefault()

    const newCard = {
      name: cardName,
      color: colorName,
    }

    if (cardName === '' && colorName === '') {
      setFormularioErro(true)
    } else {
      setFormularioErro(false)

      setAllCards([...allCards, newCard])

      setCardName('')
      setColorName('')

    }
  }


  return (
      <main className="checkpoint-component">
        <div className="title">
          <h1>Adicionar uma Nova Cor</h1>
        </div>

        <form className={formularioErro ? 'form-error' : ''} onSubmit={event => registerColor(event)}>
          <div>
            <label htmlFor="cardName">Nome do Card</label>
            <input id="cardName" type="text" value={cardName} onChange={event => setCardName(event.target.value)}/>
          </div>

          <div>
            <label htmlFor="colorName">Código Hexa da Cor</label>
            <input id="colorName" type="text" value={colorName} onChange={event => setColorName(event.target.value)}/>
          </div>

          <button type='submit'>Adicionar Cor</button>

        </form>

        {
          formularioErro ? (
              <span>O seu formulário contém erros</span>
          ) : null
        }

        <section className='cards'>
          {
            allCards.map(
              card => {
                return (
                  <Card 
                    cardData={card}
                  />
                )
              }
            )
          }

        </section>
    </main>
  )
}

export default App