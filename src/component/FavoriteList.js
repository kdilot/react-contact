import React from 'react';
import styled from 'styled-components';
import FavoriteItem from './FavoriteItem';
import PropTypes from 'prop-types';

const Wraaper = styled.div`
  /* layout */
  position: relative;
  display: flex;
  flex-wrap: wrap; /* if there is no space, move to next line */
`;

const FavoriteList = ({ contacts }) => {
  const favoriteList = contacts
    .filter(
      contact => contact.favorite
    ).map(
      contact => (
        <FavoriteItem
          key={contact.id}
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

FavoriteList.propType = {
  contacts: PropTypes.arrayOf(PropTypes.object)
};

export default FavoriteList;