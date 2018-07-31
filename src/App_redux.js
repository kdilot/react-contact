import React, { Component } from 'react';
import Header from './component/Header';
import Container from './component/Container';
import { connect } from 'react-redux';

import ViewSelectorContaioner from './containers/ViewSelectorContainer';
import InputContainer from './containers/InputContainer'
import FavoriteListContainer from './containers/FavoriteListContainer';
import FloatingButtonContainer from './containers/FloatingButtonContainer';
import ContactModalContainer from './containers/ContactModalContainer';
import ContactListContainer from './containers/ContactListContainer';

class App_redux extends Component {
  render() {
    const { view } = this.props;

    return (
      <div>
        <Header />
        <ViewSelectorContaioner />
        <Container visible={view === 'favorite'}>
          <FavoriteListContainer />
        </Container>
        <Container visible={view === 'list'}>
          <InputContainer />
          <ContactListContainer />
        </Container>
        <ContactModalContainer />
        <FloatingButtonContainer />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    view: state.base.get('view')
  })
)(App_redux);
