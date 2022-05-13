import Card from '../Card';
import style from './Cards.module.css'

function Cards({ renderSneakers }) {
  //console.log("componente Cards", renderSneakers)

  return (
    <div className={style.cards} >
      {
        renderSneakers.length > 0 && renderSneakers?.map((sneaker, i) => <Card key={i} sneaker={sneaker} />)
      }
    </div>
  )
}

export default Cards;