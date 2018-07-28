import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Modal from './Modal';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import Input from './Input';
import RemoveIcon from 'react-icons/lib/md/remove-circle';

const ThumbnailWrapper = styled.div`
  /* layout */
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;

  /* color */
  background: white;
`;

const Form = styled.div`
  /* layout */
  padding: 1rem;

  /* color */
  background: ${oc.gray[0]};
`;

const ButtonsWrapper = styled.div`
  /* layout */
  display: flex;
`

const Button = styled.div`
  /* layout */
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex: 1;
  display: inline-block;

  cursor: pointer;
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  transition: all .3s;

  /* color */
  color: white;
  background: ${props => oc[props.color][7]};

  &:hover {
    background: ${props => oc[props.color][6]};
  }

  &:active {
    background: ${props => oc[props.color][8]};
  }
`;

Button.propType = {
  color: PropTypes.string
};

const RemoveButton = styled.div`
  /* layout */
  position: absolute;
  right: 1rem;
  top: 1rem;

  /* color */
  color: ${oc.gray[6]};

  cursor: pointer;
  font-size: 2rem;

  &:hover {
    color: ${oc.red[6]};
  }

  &:active {
    color: ${oc.red[7]};
  }
  ${props => !props.visible && 'display : none;'}
`;

RemoveButton.propTypes = {
  visible: PropTypes.bool
};

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

  handlerChange = (e) => {
    const { onChange } = this.props;
    onChange({
      name: e.target.name,
      value: e.target.value
    });
  }

  render() {
    const { handlerChange } = this;
    const {
      visible,
      name,
      phone,
      color,
      mode,
      onHide,
      onAction,
      onRemove
    } = this.props;

    return (
      <Modal visible={visible} onHide={onHide}>
        <ThumbnailWrapper>
          <RemoveButton
            visible={mode === 'modify'}
            onClick={onRemove}>
            <RemoveIcon />
          </RemoveButton>
          <Thumbnail size="8rem" color={color} />
        </ThumbnailWrapper>
        <Form>
          <Input
            name="name"
            placeholder="name"
            value={name}
            onChange={handlerChange}
          />
          <Input
            name="phone"
            placeholder="phone"
            value={phone}
            onChange={handlerChange}
          />
        </Form>
        <ButtonsWrapper>
          <Button color="teal" onClick={onAction}>
            {mode === 'create' ? 'Add' : 'Modify'}
          </Button>
          <Button color="gray" onClick={onHide}>
            Cancel
          </Button>
        </ButtonsWrapper>
      </Modal>
    );
  }
}

export default ContactModal;