import UserContext from '/components/UserContext';
import React, { useContext } from 'react';

const UserProfile = (props) => {

    const { user } = useContext(UserContext);

    return (
      <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };

export default UserProfile;
