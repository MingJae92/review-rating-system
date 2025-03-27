import React from "react";
import { Grid, CardContent, Typography } from "@mui/material";
import categoryListStyles from "../../styles/categoryListStyles/categoryList.styles";

// Define the type for category items
interface Category {
  id: number;
  title: string;
  description: string;
}

const categories: Category[] = [
  { id: 1, title: "Tech", description: "Latest gadgets and reviews." },
  { id: 2, title: "Home & Kitchen", description: "Best home essentials." },
  { id: 3, title: "Fitness", description: "Workout and health gear." },
  { id: 4, title: "Travel", description: "Must-have travel accessories." },
  { id: 5, title: "Beauty", description: "Skincare and cosmetics." },
  { id: 6, title: "Outdoors", description: "Camping and adventure gear." },
];

const CategoryList = () => {
  return (
    <categoryListStyles.Container>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        Best Categories
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <categoryListStyles.StyledCard>
              <CardContent>
                <categoryListStyles.CardTitle>{category.title}</categoryListStyles.CardTitle>
                <categoryListStyles.CardDescription>
                  {category.description}
                </categoryListStyles.CardDescription>
              </CardContent>
            </categoryListStyles.StyledCard>
          </Grid>
        ))}
      </Grid>
    </categoryListStyles.Container>
  );
};

export default CategoryList;
