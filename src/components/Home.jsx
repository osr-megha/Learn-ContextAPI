import React, {useState} from 'react'
import faker from 'faker';
import SingleProduct from './SingleProduct';

faker.seed(100);

const Home = () => {

  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  const [products] = useState(productsArray);

  return (
    <React.Fragment>
    <div className='productContainer'>
    {
      products.map((prod)=>(
        <SingleProduct 
        prod={prod} 
        key= {prod.id}
        />
      ))
    }
    </div>
    
    </React.Fragment>
  )
}

export default Home

