import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography variant="h4" sx={{color: "#F31503", paddingLeft: "10px", fontFamily: "Montserrat"}}><span style={{color: "#FFf"}}>i</span>Stream</Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
