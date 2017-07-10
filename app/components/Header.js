var React = require('react');


class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-fixed-top bg-main" role="navigation">
                <div className="navbar-header">
                    <a href="#home" className="navbar-brand">
                        <strong>Drive Now</strong>
                    </a>
                </div> 
                <div className="container">
                   
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
            
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-globe"></span></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-menu-hamburger"></span></a></li>
                            
                        </ul>
                    </div>
        
                </div>

            </nav>

        );
    }
}

export default Header;