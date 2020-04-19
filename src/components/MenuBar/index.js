import React from "react"
import {
  MenuBarWrapper,
  MenuBarGroup,
  MenuBarLink,
  MenuBarItem,
} from "./styled"
import { Home } from "@styled-icons/boxicons-solid/Home"
import { Search } from "@styled-icons/boxicons-regular/Search"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-solid/UpArrowAlt"
import { LightBulb as Ligth } from "@styled-icons/entypo/LightBulb"
import { GridAlt as Grid } from "@styled-icons/boxicons-solid/GridAlt"

const MenuBar = () => (
  <MenuBarWrapper>
    <MenuBarGroup>
      <MenuBarLink to="/" title="Voltar para Home">
        <MenuBarItem>
          <Home />
        </MenuBarItem>
      </MenuBarLink>
      <MenuBarLink to="/search" title="Pesquisar">
        <MenuBarItem>
          <Search />
        </MenuBarItem>
      </MenuBarLink>
    </MenuBarGroup>
    <MenuBarGroup>
      <MenuBarItem title="Mudar o tema">
        <Ligth />
      </MenuBarItem>
      <MenuBarItem title="Mudar visualização">
        <Grid />
      </MenuBarItem>
      <MenuBarItem title="Ir para o topo">
        <Arrow />
      </MenuBarItem>
    </MenuBarGroup>
  </MenuBarWrapper>
)
export default MenuBar
