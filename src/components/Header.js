function Header(){
    return (
        <div className = "padT4 padB4">
            <div className = "container mobile-container">
                <div className = "d-flex justify-content-between">
                    <div>
                        <img 
                            src = "/images/SVCCLogo.png"
                            alt = "SVCC Home Page"
                        />
                    </div>
                    <div className = "light">
                        <h4 className = "header-title">
                            My First React HomePage
                        </h4>
                    </div>
                    <div className = "text-dark">
                        Hello Mr.Smith ; 
                        <span>
                            <a href = "#"> sign-out </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    ) ;
}

export default Header ;