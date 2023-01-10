import { Box, Grid } from "@mui/material";
import React from "react";
import CartPage from "./CartPage";

const MenuPage = () => {
  return (
    <>
    <Box m={2} pt={3}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={3}>
          <CartPage />
        </Grid>
        <Grid item xs={3}>
          <CartPage />
        </Grid>
        <Grid item xs={3}>
          <CartPage />
        </Grid>
        <Grid item xs={3}>
          <CartPage />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={3}>
          <CartPage />
        </Grid>
        <Grid item xs={3}>
          <CartPage />
        </Grid>
        <Grid item xs={3}>
          <CartPage />
        </Grid>
        <Grid item xs={3}>
          <CartPage />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={3}>
          <CartPage />
        </Grid>
        <Grid item xs={3}>
          <CartPage />
        </Grid>
        <Grid item xs={3}>
          <CartPage />
        </Grid>
        <Grid item xs={3}>
          <CartPage />
        </Grid>
      </Grid>
      </Box>
    </>

  );
};

export default MenuPage;
