import { useEffect } from 'react';
import Card from '../Card';

function Cards({ renderSneakers }) {
  useEffect(() => {

  }, [renderSneakers])
  return (
    <>
      {
        renderSneakers.length > 0 && renderSneakers?.map((sneaker, i) => <Card key={i} sneaker={sneaker} />)
      }
    </>
  )
}

export default Cards;