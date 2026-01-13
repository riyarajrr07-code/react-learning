import React, { useContext } from 'react'
import UserContext from "../UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return <div className="text-center mt-4 text-gray-500 font-bold">please login</div>;

   else return (
    <div className="text-center mt-4 text-xl font-medium">
      Welcome {user.username}
    </div>
  );
}

export default Profile;
