import React, { Component } from 'react';
import Header from './component/Header';
import Container from './component/Container';
import ViewSelector from './component/ViewSelector';
import FloatingButton from './component/FloatingButton';
import ContactModal from './component/ContactModal';
import Dimmed from './component/Dimmed';
import oc from 'open-color';

function generateRandomColor() {
  const colors = [
    'gray',
    'red',
    'pink',
    'grape',
    'violet',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'green',
    'lime',
    'yellow',
    'orange'
  ];
  const random = Math.floor(Math.random() * 13);

  return oc[colors[random][6]];
}

class App extends Component {
  state = {
    view: 'favorite',
    modal: {
      visible: false,
      mode: null  // create or modify
    }
  }

  handleSelectView = (view) => this.setState({ view });

  handleFloatingButtonClick = () => {
    const { view } = this.state;
    if (view !== 'list') this.setState({ view: 'list' });

    this.modalHandler.show(
      'create',
      {
        name: '',
        phone: '',
        color: generateRandomColor()
      }
    );
  }

  modalHandler = {
    show: (mode, payload) => {
      this.setState({
        modal: {
          mode,
          visible: true,
          ...payload
        }
      })
    },

    hide: () => {
      this.setState({
        modal: {
          ...this.state.modal,
          visible: false
        }
      })
    },

    change: null,
    action: {
      create: null,
      modify: null,
      remove: null
    }
  }

  render() {
    const {
      handleSelectView,
      handleFloatingButtonClick,
      modalHandler
    } = this;
    const {
      view,
      modal
    } = this.state;

    return (
      <div>
        <Header />
        <ViewSelector onSelect={handleSelectView} selected={view} />
        <Container visible={view === 'favorite'}>Favorite</Container>
        <Container visible={view === 'list'}>List</Container>
        <ContactModal {...modal} onHide={modalHandler.hide} />
        <Dimmed visible={modal.visible} />
        <FloatingButton onClick={handleFloatingButtonClick} />
      </div>
    );
  }
}

export default App;
