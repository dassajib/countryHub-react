import { CatchingPokemon } from "@mui/icons-material";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{textDecoration: "none", color:"white"}} to="/">CountryHUB</Link>
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link style={{textDecoration: "none", color:"white"}} to="/">Home</Link>
          <Link style={{textDecoration: "none", color:"white"}} to="/countries">Countries</Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
