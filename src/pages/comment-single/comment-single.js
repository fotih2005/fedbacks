import { Link, useParams } from "react-router-dom";
import CommentCard from "../../components/comments/commnet-card"
import Card from "../../components/main/card";

function CommentSingle (prop) {

    const param = useParams()

    const current = prop.data.find(card => +card.id === +param.id)
    
    return(
        <>
        <Link className="go-to-feedbacks" to={'/home'}>go to feedbacks</Link>
            {
                <Card key={''} id={current.id} upvotes={current.upvotes} title={current.title} content={current.content} category={current.description}/>
            }
            {
                current.comments.map(comment => <CommentCard key={comment.id} id={comment.id} content={comment.content} name={comment.user.name} userName={comment.user.username} image={comment.user.image}/>)
            }
            </> 
    )
}

export default CommentSingle