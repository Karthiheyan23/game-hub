import { Grid, GridItem, Theme } from "@chakra-ui/react";
import Navbar from "./components/main-pages/Navbar";

function App() {
  return (
    <Theme appearance="light">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>

        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>

        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </Theme>
  );
}

export default App;
