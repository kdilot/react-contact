import FavoriteList from '../component/FavoriteList_redux';
import { connect } from 'react-redux';

export default connect(
  (state) => ({
    contacts: state.contacts
  })
)(FavoriteList);