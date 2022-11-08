//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import './styleCard.scss'

export function Card(props) {
  
  return (
    <div className="card" style={{backgroundColor:props.cardData.color}}>
        <div className="card-body">
          <h3>{props.cardData.name}</h3>
          <h3>{props.cardData.color}</h3>
        </div>
    </div>
  )
}