import Product_card from './product_card';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line react/prop-types
export function Product({ category }) {

  const products = [
    {
      id: 0,
      img_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D",
      price: 29.99,
      product_name: "Wireless Headphones",
      stock: 0,
      category: "Electronics"
    },
    {
      id: 1,
      img_url: "https://plus.unsplash.com/premium_photo-1664392434825-eb95db0931d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8fDA%3D",
      price: 30.99,
      product_name: "Wireless Bluetooth joystick",
      stock: 120,
      category: "Electronics"
    },
    {
      id: 2,
      img_url: "https://images.pexels.com/photos/9304725/pexels-photo-9304725.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 59.99,
      product_name: "Leather Wallet",
      stock: 1,
      category: "Accessories"
    },
    {
      id: 3,
      img_url: "https://images.pexels.com/photos/30434766/pexels-photo-30434766/free-photo-of-abandoned-hubcap-on-gravelly-terrain-with-weeds.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 19.99,
      product_name: "Stainless Steel Water Bottle",
      stock: 200,
      category: "Home & Kitchen"
    },
    {
      id: 4,
      img_url: "https://picsum.photos/536/354",
      price: 89.99,
      product_name: "Gaming Laptop",
      stock: 30,
      category: "Computers"
    },
    {
      id: 5,
      img_url: "https://picsum.photos/536/354",
      price: 14.99,
      product_name: "Yoga Mat",
      stock: 80,
      category: "Fitness"
    },
    {
      id: 6,
      img_url: "https://picsum.photos/536/354",
      price: 199.99,
      product_name: "Smartphone",
      stock: 100,
      category: "Electronics"
    },
    {
      id: 7,
      img_url: "https://picsum.photos/536/354",
      price: 49.99,
      product_name: "Fitness Tracker",
      stock: 150,
      category: "Fitness"
    },
    {
      id: 8,
      img_url: "https://picsum.photos/536/354",
      price: 29.99,
      product_name: "Smartwatch",
      stock: 75,
      category: "Wearables"
    },
    {
      id: 9,
      img_url: "https://picsum.photos/536/354",
      price: 79.99,
      product_name: "Electric Toothbrush",
      stock: 200,
      category: "Health & Beauty"
    },
    {
      id: 10,
      img_url: "https://picsum.photos/536/354",
      price: 149.99,
      product_name: "4K Television",
      stock: 50,
      category: "Electronics"
    },
    {
      id: 11,
      img_url: "https://picsum.photos/536/354",
      price: 9.99,
      product_name: "Phone Case",
      stock: 500,
      category: "Accessories"
    },
    {
      id: 12,
      img_url: "https://picsum.photos/536/354",
      price: 59.99,
      product_name: "Electric Grill",
      stock: 40,
      category: "Home & Kitchen"
    },
    {
      id: 13,
      img_url: "https://picsum.photos/536/354",
      price: 69.99,
      product_name: "Portable Speaker",
      stock: 100,
      category: "Electronics"
    },
    {
      id: 14,
      img_url: "https://picsum.photos/536/354",
      price: 34.99,
      product_name: "Coffee Machine",
      stock: 90,
      category: "Home Appliances"
    },
    {
      id: 15,
      img_url: "https://picsum.photos/536/354",
      price: 24.99,
      product_name: "Backpack",
      stock: 150,
      category: "Accessories"
    }
  ];

  const filteredProducts = category
    ? products.filter(product => product.category === category) 
    : products;

  return (
    <div className="container">
      <div className="row text-center">
        {filteredProducts.map((product) => {
          return (
            <Product_card key={product.id} product={product} />
          );
        })}
      </div>
    </div>
  );
}
