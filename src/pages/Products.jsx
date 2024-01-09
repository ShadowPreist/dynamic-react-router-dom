import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: 1,
    fruit: "Apple",
    desc: "lorem ipsum dirla afklas sakfhsa",
  },
  {
    id: 2,
    fruit: "Mango",
    desc: "lorem ipsum dirla afklas sakfhsa",
  },
  {
    id: 3,
    fruit: "Orange",
    desc: "lorem ipsum dirla afklas sakfhsa",
  },
];

const Products = () => {
  return (
    <div className="card">
      {PRODUCTS.map((item) => (
        <Link to={`/product/${item.fruit}`} key={item.id}>
          <div className="item">
            <p>{item.fruit}</p>
            <p>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Products