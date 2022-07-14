import Nav from "../../components/nav/nav";
import Main from "../../components/main/main"
import "../../components/container/container.scss"
// import Header from "../../components/header/header"

function Home () {
    return (
        <>
            <div className="container wrapper">
            <Nav/>
            {/* <Header/> */}
            <Main/>
            </div>
        </>
    )
}
export default Home