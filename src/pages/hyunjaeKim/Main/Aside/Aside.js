import React, { Component } from "react";
import "./Aside.scss";

export default class Aside extends Component {
  render() {
    return (
      <aside className="sideBar">
        <div className="profileChange">
          <div className="myProfile">
            <img
              src="/images/hyunjaeKim/myprofile.jpeg"
              alt="story_image"
              className="profileImg large"
            />
            <strong className="userID">hyun____jjae</strong>
          </div>
          <button className="Btn" type="button">
            Switch
          </button>
        </div>
        <div className="suggestions">
          <div className="suggestTitle">
            <span className="suggestHeader">Suggestions For You</span>
            <a href="#" className="Btn">
              See All
            </a>
          </div>
          <div className="suggestedProfiles">
            <div className="suggestedProfile">
              <div className="otherProfile">
                <div className="profileWrapper medium">
                  <img
                    src="/images/hyunjaeKim/wecode.png"
                    alt="story_image"
                    className="profileImg medium"
                  />
                </div>
                <div className="suggestProfileDetails">
                  <strong className="userID">cej_ane</strong>
                  <span className="profileDesc">Suggested for you</span>
                </div>
              </div>
              <button className="Btn" type="button">
                Follow
              </button>
            </div>
            <div className="suggestedProfile">
              <div className="otherProfile">
                <div className="profileWrapper medium">
                  <img
                    src="/images/hyunjaeKim/wecode.png"
                    alt="story_image"
                    className="profileImg medium"
                  />
                </div>
                <div className="suggestProfileDetails">
                  <strong className="userID">sy.so__e</strong>
                  <span className="profileDesc">
                    Followed by picnic606 + 1 more
                  </span>
                </div>
              </div>
              <button className="Btn" type="button">
                Follow
              </button>
            </div>
            <div className="suggestedProfile">
              <div className="otherProfile">
                <div className="profileWrapper medium">
                  <img
                    src="/images/hyunjaeKim/wecode.png"
                    alt="story_image"
                    className="profileImg medium"
                  />
                </div>
                <div className="suggestProfileDetails">
                  <strong className="userID">fairytale_zero</strong>
                  <span className="profileDesc">Suggested for you</span>
                </div>
              </div>
              <button className="Btn" type="button">
                Follow
              </button>
            </div>
            <div className="suggestedProfile">
              <div className="otherProfile">
                <div className="profileWrapper medium">
                  <img
                    src="/images/hyunjaeKim/wecode.png"
                    alt="story_image"
                    className="profileImg medium"
                  />
                </div>
                <div className="suggestProfileDetails">
                  <strong className="userID">han_ji_95</strong>
                  <span className="profileDesc">Follows you</span>
                </div>
              </div>
              <button className="Btn" type="button">
                Follow
              </button>
            </div>
            <div className="suggestedProfile">
              <div className="otherProfile">
                <div className="profileWrapper medium">
                  <img
                    src="/images/hyunjaeKim/wecode.png"
                    alt="story_image"
                    className="profileImg medium"
                  />
                </div>
                <div className="suggestProfileDetails">
                  <strong className="userID">florecer_lucky8085</strong>
                  <span className="profileDesc">Follows you</span>
                </div>
              </div>
              <button className="Btn" type="button">
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className="serviceDetails">
          <div className="serviceLinks">
            <ul className="serviceLink">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Top Accounts</a>
              </li>
              <li>
                <a href="#">Hashtags</a>
              </li>
              <li>
                <a href="#">Language</a>
              </li>
            </ul>
          </div>
          <div className="serviceLinks copyright">
            © 2021 INSTAGRAM FROM FACEBOOK
          </div>
        </div>
      </aside>
    );
  }
}
