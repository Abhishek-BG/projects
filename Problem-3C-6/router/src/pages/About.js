import {Link,Routes,Route} from 'react-router-dom'
function Team(){
    return(
        <div>
            <h3>Our team</h3>
            <p>Meet our amazing team</p>
           
        </div>
    )
}
function History(){
    return(
        <div>
            <h3>Our History</h3>
            <p>We started back in 1995</p>
        </div>
    )
}
function About(){
    return (
        <div>
            <h2>About Page</h2>
            <p>Welcome to React router project</p>
            <nav>
                <Link to="team">Our Team</Link>
                <Link to="history">History</Link>
            </nav>
            <Routes>
                <Route path="team" element={<Team/>}/>
                <Route path="history" element={<History/>}/>
            </Routes>
        </div>
        //nested routes
       
    )
}

export default About;