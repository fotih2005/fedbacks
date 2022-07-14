import Data from '../../assets/data'
import Card from './card'

function renderCards () {
    return (
        <>
            {
                Data.map(user => <Card key={user.id} id={user.id} title={user.title} upvotes={user.upvotes} content={user.description} category={user.category}/>)
            }
        </>
    )
}
export default renderCards