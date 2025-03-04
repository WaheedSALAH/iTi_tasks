import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product_card(lol) {
    let {product} = lol
  return (
    <div className='col my-3'>
            <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={product.img_url}   style={{ width: '100%', height: '250px', objectFit: 'cover' }}/>
            <Card.Body>
              <Card.Title className='fs-5'>{product.product_name}</Card.Title>
              <Card.Text>Price: ${product.price}</Card.Text>
              {(product.stock > 1) &&<Card.Text> Stock: {product.stock}</Card.Text>}
              {(product.stock == 0) &&<Card.Text className='text-light border border-dark bg-danger rounded'>out of Stock 😐</Card.Text>}
              {(product.stock == 1) &&<Card.Text className='text-light border border-dark bg-secondary rounded'>last piece 😶</Card.Text>}
              <Card.Text>Category: {product.category}</Card.Text>
              {(product.stock > 1) &&<Button variant="primary">Buy Now</Button>}
              {(product.stock == 0) &&<Button variant="dark">Buy Now</Button>}
              {(product.stock == 1) &&<Button variant="warning">Buy Now</Button>}
            </Card.Body>
          </Card>
    </div>
  )
}
