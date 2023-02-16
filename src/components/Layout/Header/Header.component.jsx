import { useState } from 'react';
import Searchbox from '.././../Searchbox';
import CartBtn from '../../Cart/CartBtn';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  MenuHashLink,
} from './Header.styles';

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <header>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            NAKAMA
          </NavLogo>
          <Searchbox />
          <MenuIcon onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </MenuIcon>
          <Menu onClick={handleClick} click={click}>
            <MenuItem>
              <MenuLink onClick={closeMenu} to="/">
                Home
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuHashLink onClick={closeMenu} to="#newcollection">
                New collection
              </MenuHashLink>
            </MenuItem>
            <MenuItem>
              <MenuLink onClick={closeMenu} to="/">
                <FiUser />
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink onClick={closeMenu} to="/cart">
                <CartBtn />
              </MenuLink>
            </MenuItem>
          </Menu>
        </NavbarContainer>
      </Nav>
    </header>
  );
};

export default Header;
