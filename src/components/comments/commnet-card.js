import './comments.scss'

function renderComment(prop) {
  return (
    <li className="comments-section__card" id={prop.id}>
      <img
        className="comments-section__card-img"
        src={"https://unsplash.it/40/40"}
        alt=''
        width={40}
        height={40}
      />
      <div className="comments-section__card-content-wrapper">
        <div className="comments-section__card-head">
          <span>
            <h3 className="comments-section__user-name">{prop.name}</h3>
            <p className="comments-section__user-email">{prop.userName}</p>
          </span>
          <button className="comment-section__reply-btn">Reply</button>
        </div>
        <p className="comment-section__card-text">{prop.content}</p>
        <div className="comments-section__card-form-wrapper">
          <form action="#" className="comments-section__card-form">
            <textarea
              className="comment-section__reply-text"
              name="text"
              cols={100}
              rows={5}
              style={{ width: 350, height: 100 }}
              defaultValue={""}
            />
            <button className="commnets-section__card-form-btn">
              Post Reply
            </button>
          </form>
        </div>
      </div>
    </li>
  );
}

export default renderComment;
