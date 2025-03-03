import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h6" noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
