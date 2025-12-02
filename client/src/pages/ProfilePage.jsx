import { useEffect, useState } from "react";
import "./ProfilePage.css";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const token = localStorage.getItem("neon_token");

        const res = await fetch("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: token },
        });

        const data = await res.json();

        if (!res.ok) {
          console.log("Profile fetch failed");
          return;
        }

        setProfile(data);
      } catch (err) {
        console.log("Error fetching profile:", err);
      }
    }

    fetchProfile();
  }, []);

  if (!profile) {
    return <p className="loading-text">Loading profile...</p>;
  }

  // Calculate days since registration
  const registeredDate = new Date(profile.createdAt);
  const today = new Date();
  const diffTime = today - registeredDate;
  const daysSince = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="profile-container">
      <h1 className="profile-header">Your Profile</h1>

      <div className="profile-card">
        <p>
          <span>Username:</span> {profile.username}
        </p>
        <p>
          <span>Email:</span> {profile.email}
        </p>
        <p>
          <span>Joined:</span> {profile.createdAt}
        </p>
        <p>
          <span>Days since registered:</span> {daysSince} days
        </p>
      </div>
    </div>
  );
}
