import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import {media} from '../lib/style-utils';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width: 700px;
    margin: 0 auto; /* align center */
    padding: 1rem;

    /* mobile size */
    ${media.mobile`
        widht: 100%;
    `}
`;

//  if 'visible' is 'false' return 'null'
const Container = ({ visible, children }) => visible ? (
    <Wrapper>
        {children}
    </Wrapper>
) : null;

//  PropType setting
Container.PropTypes = {
    visible: PropTypes.bool
};

export default Container;
