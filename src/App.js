import { useState, useEffect } from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";
import './components/sass/main.scss'; // Relative path to the main.scss file

const App = () => {
  // State variables using useState
  const [products, setProducts] = useState([]); // Array to hold products data
  const [search, setSearch] = useState(""); // State for search input value

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products") // Fetching products data from fakestoreapi
      .then((res) => setProducts(res.data)); // Setting fetched data to products state
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  // Filtering products based on search input
  const searchProduct = products.filter((product) => {
    return Object.keys(product).some((key) =>
      product[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });

  // Function to truncate string
  const Truncate = (string, number) => {
    if (!string) {
      return null;
    }
    if (string.length <= number) {
      return string;
    }
    return string.slice(0, number) + "...";
  };

  // JSX structure of the component
  return (
    <div className="all">
      <header className="brandName">
        <h1>CoolApparel</h1>
      </header>
      <section className="product">
        <div className="container">
          {/* Input for filtering products */}
          <input
            className="product-input"
            placeholder="Product Filter"
            onChange={(e) => setSearch(e.target.value)} // Updating search state on input change
            value={search} // Binding search state to input value
          />
          <div className="grid">
            {/* Mapping through filtered products and rendering each as a card */}
            {searchProduct.map((product) => (
              <div className="card" key={product.id}>
                <img
                  className="card-image"
                  src={product.image}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    title={product.title.length >= 50 ? product.title : null}
                  >
                    {Truncate(product.title, 55)} {/* Truncate title if longer than 55 characters */}
                  </h5>
                  <p className="card-description">
                    {Truncate(product.description, 55)} {/* Truncate description if longer than 55 characters */}
                  </p>
                  <p className="card-price">€{product.price}</p>
                  {/* Star ratings component */}
                  <div className="card-detail">
                    <StarRatings
                      rating={product.rating.rate} // Rating value
                      starDimension="16px" // Size of stars
                      starSpacing="1px" // Spacing between stars
                      starRatedColor="black" // Color of rated stars
                    />
                    <span>Stock:{product.rating.count} </span> {/* Display stock count */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
