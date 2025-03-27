import ProductsDataType from "../../types/productData/ProductData.types";
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, CardMedia, Typography, CircularProgress, Box } from "@mui/material";

function Productlist() {
  const [products, setProducts] = useState<ProductsDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const ecommerceUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    const productFetch = async () => {
      try {
        const productFetchResponse = await axios.get(ecommerceUrl);
        setProducts(productFetchResponse.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    productFetch();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>Server error</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom align="center">
        Product List
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Productlist;
