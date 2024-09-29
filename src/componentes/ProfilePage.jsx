import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';

const ProfilePage = () => {
  const { email, logout, getProfile } = useContext(UserContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await getProfile();
      setProfile(profileData);
    };
    fetchProfile();
  }, [getProfile]);

  return (
    <div>
      <h1>Profile</h1>
      {email ? (
        <>
          <p>Email: {email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default ProfilePage;
