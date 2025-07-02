import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-hero">
      <span className="dashboard-emoji">🎉</span>
      <h1 className="dashboard-title">Welcome to SynQuora</h1>
      <p className="dashboard-desc">
        You’re logged in! Explore, collaborate, and unlock the power of your community.
      </p>
      <div className="dashboard-features">
        <div className="dashboard-feature-card">
          <div className="dashboard-feature-icon">📝</div>
          <div className="dashboard-feature-title">Post Questions</div>
          <div className="dashboard-feature-text">
            Ask, answer, and connect with the SynQuora network.
          </div>
        </div>
        <div className="dashboard-feature-card">
          <div className="dashboard-feature-icon">👥</div>
          <div className="dashboard-feature-title">Connect</div>
          <div className="dashboard-feature-text">
            Find and follow experts & peers in your field.
          </div>
        </div>
        <div className="dashboard-feature-card">
          <div className="dashboard-feature-icon">📈</div>
          <div className="dashboard-feature-title">Grow</div>
          <div className="dashboard-feature-text">
            Unlock badges, build your profile, and grow your influence!
          </div>
        </div>
      </div>
      <button
        className="dashboard-back-btn"
        type="button"
        onClick={() => navigate("/")}
      >
        ⬅ Back to Landing Page
      </button>
    </div>
  );
};

export default DashboardPage;
