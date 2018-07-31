import React from 'react';
import styled from 'styled-components';
import FavoriteItem from './FavoriteItem_redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

const Wraaper = styled.div`
  /* layout */
  position: relative;
  display: flex;
  flex-wrap: wrap; /* if there is no space, move to next line */
`;

const FavoriteList = ({ contacts }) => {
  const favoriteList = contacts
    .filter(
      contact => contact.get('favorite')
    ).map(
      contact => (
        <FavoriteItem
          key={contact.get('id')}
          contact={contact}
        />
      )
    )
  return (
    <Wraaper>
      {favoriteList}
    </Wraaper>
  );
};

FavoriteList.propTypes = {
  contacts: ImmutablePropTypes.listOf(
    ImmutablePropTypes.mapContains({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
      color: PropTypes.string,
      favorite: PropTypes.bool
    })
  )
};

export default FavoriteList;