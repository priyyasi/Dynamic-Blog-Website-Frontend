import { Link } from "react-router-dom";
import ProfileImage from "../assets/a8.jpg";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function UserProfile() {
  const [profileImage, setProfileImage] = useState("");

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmNewPassword] = useState();

  return (
    <section className="profile">
      <div className="container profile-container">
        <Link to={"/myposts/id"}>My Posts</Link>

        <div className="profile-details form-container">
          <div className="profile-wrapper">
            <div className="profile-image">
              <img src={ProfileImage} alt="" />
            </div>

            {/* Profile form */}
            <form className="profile-image-form">
              <input
                type="file"
                name="profile-image"
                id="profile-image"
                accept="png, jpg, jpeg"
                onChange={(e) => setProfileImage(e.target.files[0])}
              />
              {/* <label htmlFor="profile-image">
                <FaEdit />
              </label> */}
            </form>

            <button className="profile-image-button">
              <FaCheckCircle />
            </button>
          </div>

          <h2>Pranjal Gupta</h2>

          {/* Profile Data Form */}
          <form action="" className="form profile-data-form">
            <p className="form-message">This is the invalid message</p>

            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Current password"
              name="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmNewPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />

            <button type="submit" className="btn btn-primary">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
