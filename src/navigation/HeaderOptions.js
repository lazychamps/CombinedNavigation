import DrawerButton from '../components/HeaderButtons/DrawerButton';
import LogoutButton from '../components/HeaderButtons/LogoutButton';

const HeaderOptions = (navigation, setUserLoggedOut) => {
  return {
    headerLeft: () => DrawerButton(navigation),
    headerRight: () => LogoutButton(setUserLoggedOut),
  };
};

export default HeaderOptions;
