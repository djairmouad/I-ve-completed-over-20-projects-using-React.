import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS=[{
  id:"p1",
  price:6,
  title:"My First Book",
  description:'This is a first product - amazing!'
},
{
  id:"p2",
  price:9,
  title:"My Second Book",
  description:'This is a first product - amazing!'
},{
  id:"p3",
  price:18,
  title:"My thired Book",
  description:'This is a first product - amazing!'
}];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {
        DUMMY_PRODUCTS.map((item)=>{
          return <ProductItem   
           key={item.id}
          id={item.id}
          quantity={item.quantity}
          title={item.name}
          price={item.price}
          description={item.description}/>
        })
      }
      </ul>
    </section>
  );
};

export default Products;
