var React = require('react');


class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div >
                                <h3>Brauchst du Hilfe?</h3>
                                <div>
                                    <p>
                                        DriveNow GmbH &amp; Co. KG<br/>
                                        Seidlstraße 26<br/>
                                        80335 Munich
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div>
                                <div>
                                    <h3>Unsere DriveNow Service Hotline</h3>
                                    <p>
                                        <strong>Phone: 
                                            <a href="tel:+491806292929">+49 180 6 29 29 29</a><br/>
                                            Fax: +49 180 6 75 75 15
                                        </strong>
                                    </p>

                                    <p>20 Ct/Anruf aus dem dt. Festnetz,<br/>
                                    max. 60 Ct/Anruf aus dt. Mobilfunknetzen</p>

                                    <p>Oder schreib uns per E-Mail an<br/>
                                    <strong><a href="mailto:service@drive-now.com">service@drive-now.com</a></strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;