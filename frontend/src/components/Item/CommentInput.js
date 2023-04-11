import React, {useState} from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { ADD_COMMENT } from "../../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (payload) => dispatch({ type: ADD_COMMENT, payload }),
});

const CommentInput = ({slug, currentUser, onSubmit}) =>{
  const [body, setBody] = useState("")
  
  const handleChange=(e)=>{
    setBody(e.target.value)
  }
  const handleSubmit= (e)=>{
    e.preventDefault();
    // console.log(e.target[0].value)
    // console.log(body)
    agent.Comments.create(slug, { body: body })
    .then(payload=>onSubmit(payload))
    
    setBody("")
  }
  
    return (
      <form className="card comment-form m-2" onSubmit={handleSubmit}>
        <div className="card-block">
          <textarea

            className="form-control"
            placeholder="Write a comment..."
            onChange={handleChange}
            value={body}
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
