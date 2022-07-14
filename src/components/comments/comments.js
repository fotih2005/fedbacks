import "./comments.scss";
import CommentSingle from "../../pages/comment-single/comment-single";

function Comments() {
  return (
    <section className="comments-section">
      <b className="comments-section__num-comment">4 Comments</b>
      <ul className="comments-section__cards">
        {/* comments-section__card--reply */}
        <CommentSingle />
      </ul>
    </section>
  );
}

export default Comments;
