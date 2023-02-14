import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
const CommentBox = ({reference}) => {
  return (
    <div className="video__comeent__box" ref={reference} id="video__comeent__box">
      <div className="comment_box_header">
        <h3> Comments </h3>
      </div>

      {/* comment body */}
      <div className="comment__body">
        <div className="one_comment">
          <div className="avatar_with_name">
            <img
              className="comment__body__avatar"
              src="https://lh3.googleusercontent.com/a/AEdFTp7flxubvTafF1SKnrd8fQ_8QL3airoLyAXzCHYZJ7E=s288-p-rw-no"
              alt="avtar"
            />
            <p> Kuldeep Pradhan </p>

            <p className="comment__time">42s</p>
          </div>

          <p className="comment_text">
        
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
            arcu nibh, eu porta velit ultricies dapibus. Pellentesque non ex
            eget est mollis feugiat. Quisque quis porttitor nunc, a sagittis
            sem. Ut s
          </p>
        </div>
        <div className="one_comment">
          <div className="avatar_with_name">
            <img
              className="comment__body__avatar"
              src="https://lh3.googleusercontent.com/a/AEdFTp7flxubvTafF1SKnrd8fQ_8QL3airoLyAXzCHYZJ7E=s288-p-rw-no"
              alt="avtar"
            />
            <p> Kuldeep Pradhan </p>

            <p className="comment__time">42s</p>
          </div>

          <p className="comment_text">
        
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
            arcu nibh, eu porta velit ultricies dapibus. Pellentesque non ex
            eget est mollis feugiat. Quisque quis porttitor nunc, a sagittis
            sem. Ut s
          </p>
        </div>
        <div className="one_comment">
          <div className="avatar_with_name">
            <img
              className="comment__body__avatar"
              src="https://lh3.googleusercontent.com/a/AEdFTp7flxubvTafF1SKnrd8fQ_8QL3airoLyAXzCHYZJ7E=s288-p-rw-no"
              alt="avtar"
            />
            <p> Kuldeep Pradhan </p>

            <p className="comment__time">42s</p>
          </div>

          <p className="comment_text">
        
            Lorem ipsum dolor sit amet, consectetur adipiscing 
          </p>
        </div>
        <div className="one_comment">
          <div className="avatar_with_name">
            <img
              className="comment__body__avatar"
              src="https://lh3.googleusercontent.com/a/AEdFTp7flxubvTafF1SKnrd8fQ_8QL3airoLyAXzCHYZJ7E=s288-p-rw-no"
              alt="avtar"
            />
            <p> Kuldeep Pradhan </p>

            <p className="comment__time">42s</p>
          </div>

          <p className="comment_text">
        
            Lorem ipsum dolor sit amet, consectetur adipiscing 
          </p>
        </div>
        <div className="one_comment">
          <div className="avatar_with_name">
            <img
              className="comment__body__avatar"
              src="https://lh3.googleusercontent.com/a/AEdFTp7flxubvTafF1SKnrd8fQ_8QL3airoLyAXzCHYZJ7E=s288-p-rw-no"
              alt="avtar"
            />
            <p> Kuldeep Pradhan </p>

            <p className="comment__time">42s</p>
          </div>

          <p className="comment_text">
        
            Lorem ipsum dolor sit amet, consectetur adipiscing 
          </p>
        </div>
      </div>

      <div className="comment_box_footer">
        <h4>Add a comment</h4>
        <div>
          <input className="comment_box_input"></input>
          <SendRoundedIcon fontSize="medium" color="primary" />
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
