import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, CircularProgress, Typography, Button, Box } from "@mui/material";
import ProductCard from "../components/ProductCard";
import heroImage from "../assets/hero-image.jpg";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(products);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          padding: "20px",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Our Online Store
        </Typography>
        <Typography variant="h6" gutterBottom>
          Shop the best products at unbeatable prices!
        </Typography>
        <Button variant="contained" color="primary">
          Start Shopping
        </Button>
      </Box>

      {/* Products Section */}
      <Grid container spacing={3} padding={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
