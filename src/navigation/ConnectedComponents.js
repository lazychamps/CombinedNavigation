import {connect} from 'react-redux';
import {setUserLoggedOut} from '../redux/actions/userAction';
import {DetailsScreenStack} from './DetailsScreenStack';
import {SettingsScreenStack} from './SettingsScreenStack';

const mapDispatchToProps = {
  setUserLoggedOut,
};

const ConnectedDetailsScreen = connect(
  null,
  mapDispatchToProps,
)(DetailsScreenStack);
const ConnectedSettingsScreen = connect(
  undefined,
  mapDispatchToProps,
)(SettingsScreenStack);

export {ConnectedDetailsScreen, ConnectedSettingsScreen};
