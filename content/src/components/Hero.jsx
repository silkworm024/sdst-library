import { Link } from 'react-router-dom'; 

export default function Hero (){
    return(
        <section className="hero">
            <h1 className="hero-title">SD/ST Curriculum Library</h1>
            <p className="hero-description">This is an open-source library to share System Dynamics/systems-thinking curriculum materials for K-12 students. Created by Social System Design Lab @ WashU Brown School.</p>
            <div className="hero-buttons">
                <Link to="/browse" className="btn btn-primary">Browse Curriculum</Link>
                <Link to="/submit" className="btn btn-secondary">Submit Curriculum</Link>
            </div>
        </section>
    )
}