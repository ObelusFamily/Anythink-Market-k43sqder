import React, {useRef} from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { ADD_COMMENT } from "../../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (payload) => dispatch({ type: ADD_COMMENT, payload }),
});

const CommentInput = ({slug, currentUser, onSubmit}) =>{
  const inputRef = useRef(null);
  const handleSubmit= (e)=>{
    e.preventDefault();

    agent.Comments.create(slug, { body: inputRef.current.value })
    .then(payload=>onSubmit(payload))
    
      inputRef.current.value = "";
  }
  
    return (
      <form className="card comment-form m-2" onSubmit={handleSubmit}>
        <div className="card-block">
          <textarea

            className="form-control"
            placeholder="Write a comment..."
            ref={inputRef}
            rows="3"
          ></textarea>
        </div>
        <div className="card-footer">
          <img
            src={currentUser.image}
            className="user-pic mr-2"
            alt={currentUser.username}
          />
          <button className="btn btn-sm btn-primary" type="submit">
            Post Comment
          </button>
        </div>
      </form>
    );

}

export default connect(() => ({}), mapDispatchToProps)(CommentInput);
