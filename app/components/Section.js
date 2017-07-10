var React = require('react');


class Section extends React.Component {
    render() {
        const {
            imagePosition,
            imgUrl,
            text,
            header
        } = this.props.content;

        return(
            <section className="section">
                <div className="container">
                    <div className="row">
                        {imgUrl && <div className={imagePosition === 'right'? 'col-lg-6 pull-right' : 'col-lg-6'}>
                            <div>
                                <img src={imgUrl} alt=""/>
                            </div>
                        </div>}
                        <div className="col-lg-6">
                            <div>
                        
                                <h3>{header}</h3>
                                <div>
                                    <p dir="ltr">
                                        {text.join(",")}
                                    </p>
                                </div>
                            
                                </div>
                            </div>
                  
                    </div>
                </div>
            </section>
        );
    }
}

export default Section;