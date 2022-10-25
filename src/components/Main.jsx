import './Main.css'

const MainSection = ({name}) => {
    return (
        <>
            <section className="main-content" id="home">
                <div className="intro">
                    Hi there, I am {name.toUpperCase()} <br></br>
                    Interested in <span className='title'> Full Stack Engineering</span> and <span className='title'>Data Science</span> 
                </div>
                <div className="image image-animation">
                    
                    <div className="my-image">
\                    </div>
                </div>
            </section>
        </>
    )
}

export default MainSection;