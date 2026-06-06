import TickerItem from './TickerItem'
import '../styles/Ticker.css'

const items = [
  '+200 restaurantes atendidos',
  'Pizzarias',
  'Hamburguerias',
  'Culinária Japonesa',
  '+6 anos de experiência',
  'Comida Italiana',
  'Resultado real, não promessa',
  '100% food service',
]

export default function Ticker() {
    return(
        <div className='ticker' aria-hidden='true'>
            <div className='ticker__tracker'>
                {items.map((text, index) => ( 
                    <TickerItem key={index} text={text} />
                ))}

                {items.map((text, index) => (
                    <TickerItem key={`clone-${index}`} text={text} />
                ))}
            </div>
        </div>
    )
}