import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Nick</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">About Me</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Richmond</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Favorite Subject:</span>
            <span className="rightbarInfoValue">Math</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Grade Level:</span>
            <span className="rightbarInfoValue">7th</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/11.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Miles</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/12.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jamie</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/13.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Cat</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/14.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Donald</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/15.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Paola</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/16.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Macy</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}