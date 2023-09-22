import React from "react";
import "./error.css";
import { useNavigate } from "react-router-dom";
function Error() {
  const navigate = useNavigate();
  return (
    <>
      <div class="container__error ">
        <div class="text__container ">
          <h1 style={{ fontSize: "5rem", fontWeight: "bold" }}>404</h1>
          <p style={{ fontSize: "3rem" }}>
            <span style={{ color: "red" }}>Opps!</span> Page not found.
          </p>
          <p class="lead">The page you’re looking for doesn’t exist.</p>
          <button
            className="button__click"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Home
          </button>
        </div>
      </div>
    </>
  );
}

export default Error;
