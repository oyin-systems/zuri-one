import React from "react";
import logo from "../images/pic.jpeg";
import "../App.css"

export default function MainContent() {
  return (
    <div className="content">
      <div className="profile-section">
        <img src={logo} className="profile_img" id="profile_img" alt="logo" />
        <p id="twitter">@Oyindamolaaaa_</p>
        <p id="slack">@oyin_systems</p>
      </div>
      <div className="links-section">
        <a
          id="btn_zuri"
          href="https://training.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zuri Team
        </a>

        <a
          id="books"
          href="https://books.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Books
        </a>

        <a
          id="book_python"
          href="https://books.zuri.team/python-for-beginners?ref_id=<oyin_sytems>"
          target="_blank"
          rel="noopener noreferrer"
        >
          Python Books
        </a>

        <a
          id="pitch"
          href="https://background.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Background Check for Coders
        </a>

        <a
          id="book_design"
          href="https://books.zuri.team/design-rules"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design Books
        </a>
      </div>
    </div>
  );
}
