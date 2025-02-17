import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            name="name"
            value={profile.name}
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label htmlFor="age">
          Age:
          <input
            id="age"
            name="age"
            value={profile.age}
            placeholder="Enter your age"
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <h2>Profile Information</h2>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
      </div>
    </div>
  );
};

export default Profile;
