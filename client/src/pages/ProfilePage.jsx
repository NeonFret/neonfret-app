import { useEffect, useState } from "react";
import "./ProfilePage.css";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      const token = localStorage.getItem("neon_token");

      const res = await fetch("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: token },
      });

      const data = await res.json();
      setProfile(data);
    }

    fetchProfile();
  }, []);

  async function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profile", file);

    const token = localStorage.getItem("neon_token");

    setUploading(true);

    const res = await fetch("http://localhost:5000/api/auth/upload-profile", {
      method: "POST",
      headers: { Authorization: token },
      body: formData,
    });

    const data = await res.json();
    setUploading(false);

    if (res.ok) {
      setProfile({ ...profile, profileImage: data.image });
    }
  }

  if (!profile) return <p className="loading-profile">Loading...</p>;

  const registeredDate = new Date(profile.createdAt);
  const today = new Date();
  const daysSince = Math.floor(
    (today - registeredDate) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="profile-container">
      <h1 className="profile-header">Your Profile</h1>

      <div className="profile-picture-wrapper">
        <label className="profile-upload-area">
          {profile.profileImage ? (
            <img
              src={`http://localhost:5000${profile.profileImage}`}
              alt="Profile"
              className="profile-picture"
            />
          ) : (
            <div className="profile-placeholder">
              {uploading ? "Uploading..." : "Change Picture"}
            </div>
          )}

          <input type="file" accept="image/*" hidden onChange={handleUpload} />
        </label>
      </div>

      <div className="profile-details">
        <p><span>Username:</span> {profile.username}</p>
        <p><span>Email:</span> {profile.email}</p>
        <p><span>Registered:</span> {profile.createdAt}</p>
        <p><span>Days Since Registration:</span> {daysSince}</p>
      </div>
    </div>
  );
}
