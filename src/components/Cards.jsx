import './Card.css'

// aqua
// lips
// light
// dark
// ash

function Card(props){
    return (
      <>
        <section className="projects-section" id="blogs">
            
            <div className="category-name">My Projects</div> <br/>
                
            <div className="card-category-1">
                
                <div className="basic-card basic-card-aqua">
                    <div className="card-content">
                        <span className="card-title">Card Title</span>
                        <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
    
                    <div className="card-link container-link">
                        <a href="#" className="github" title="Github"><span>Github</span></a>
                        <a href="#" className="live" title="live"><span>Live</span></a>
                    </div>
                </div>
    

          
                
            </div>
        </section>
      </>
    );
}

export default Card;

