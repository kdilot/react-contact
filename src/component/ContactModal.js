import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Modal from './Modal';
import PropTypes from 'prop-types';

class ContactModal extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    mode: PropTypes.oneOf(['create', 'modify']),
    name: PropTypes.string,
    phone: PropTypes.string,
    color: PropTypes.string,
    onHide: PropTypes.func,
    onAction: PropTypes.func,
    onRemove: PropTypes.func
  }

  render() {
    const {
      visible,
      onHide,
    } = this.props;

    return (
      <Modal visible={visible} onHide={onHide}>
        Hello
      </Modal>
    );
  }
}

export default ContactModal;