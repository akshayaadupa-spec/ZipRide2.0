import { useState } from "react";
import Navbar from "./Navbar";
import BackButton from "./BackButton";
import "./Profile.css";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Akshaya Adupa",
    branch: "CSE (AI & ML)",
    email: "akshaya@gmail.com",
    phone: "+91 9876543210",
    college: "NNRG",
    image: "https://i.pravatar.cc/150?img=12",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfile({
          ...profile,
          image: reader.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("✅ Profile Updated Successfully!");
  };

  return (
    <>
      <Navbar />

      <BackButton />

      <div className="profile-container">

        <div className="profile-card">

          <img
            src={profile.image}
            alt="Profile"
            className="profile-image"
          />

          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="image-upload"
            />
          )}

          {isEditing ? (
            <>
              <input
                className="profile-input"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />

              <input
                className="profile-input"
                name="branch"
                value={profile.branch}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <h2>{profile.name}</h2>
              <p>{profile.branch}</p>
            </>
          )}

          <div className="profile-info">

            <div className="info">
              <strong>Email</strong>

              {isEditing ? (
                <input
                  className="profile-input"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              ) : (
                <span>{profile.email}</span>
              )}
            </div>

            <div className="info">
              <strong>Phone</strong>

              {isEditing ? (
                <input
                  className="profile-input"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />
              ) : (
                <span>{profile.phone}</span>
              )}
            </div>

            <div className="info">
              <strong>College</strong>

              {isEditing ? (
                <input
                  className="profile-input"
                  name="college"
                  value={profile.college}
                  onChange={handleChange}
                />
              ) : (
                <span>{profile.college}</span>
              )}
            </div>

          </div>

          <div className="stats">

            <div className="stat">
              <h3>12</h3>
              <p>Rides</p>
            </div>

            <div className="stat">
              <h3>4.9 ⭐</h3>
              <p>Rating</p>
            </div>

          </div>

          {isEditing ? (
            <button
              className="edit-btn"
              onClick={handleSave}
            >
              Save Changes
            </button>
          ) : (
            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          )}

        </div>

      </div>
    </>
  );
}

export default Profile;