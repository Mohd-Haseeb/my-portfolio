import './Footer.css'

const Footer = () => {
    return (
        <>
                <footer id="contact"> 
        <div className="container-footer">
            <div className="left">
                <h4 className="connect-text">
                    Want to connect?
                </h4>
                <div className="frame">
                    <button className="custom-btn btn">Contact</button>

                </div>
            </div>

            <div className="vertical">

            </div>

            <div className="middle">
                something 2
            </div>

            <div className="vertical">
                
            </div>

            <div className="right">
                <div className="frame social-container">
                    <button className="custom-btn btn-common btn-github">Github</button>
                    <button className="custom-btn btn-common btn-instagram">Instagram</button>
                    <button className="custom-btn btn-common btn-linkedin">LinkedIn</button>
                </div>
            </div>

        </div>
    </footer>
        </>
    )
}

export default Footer;