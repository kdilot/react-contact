import React, { Component } from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import { media } from '../lib/style-utils';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  /* layout */
  position: fixed;

  /* align */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* layer */
  z-index: 10;

  width: ${props => props.width};

  /* mobaile */
  ${media.mobile`
    width: calc(100% - 2rem);
  `}
`;

Wrapper.propTypes = {
  width: PropTypes.string
};

const ModalBox = styled.div`
  background: white;
  border: 1px solid rgba(0,0,0,0.3);
`;

class Modal extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    onHide: PropTypes.func,
    width: PropTypes.string
  }

  static defaultProps = {
    width: '400px'
  }

  handleClickOutside = (e) => {
    const { visible, onHide } = this.props;

    if (!visible) return null;
    onHide();
  }

  handleKeyUp = (e) => {
    const { onHide } = this.props;
    //  click ESC button event
    if (e.keyCode === 27) {
      onHide();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.visible !== this.props.visible) {
      if (this.props.visible) {
        document.body.addEventListener('keyup', this.handlekeyPress);
      } else {
        document.body.removeEventListener('keyup', this.handlekeyPress);
      }
    }
  }

  render() {
    const { visible, children, width } = this.props;

    return (
      <div>
        <Wrapper width={width}>
          {
            visible && (<ModalBox>{children}</ModalBox>)
          }
        </Wrapper>
      </div>
    );
  }
}

export default onClickOutside(Modal);