var React = require('react');

import Section from './Section';

class Body extends React.Component {
    componentDidMount() {
        const { getData, dispatch } = this.props;
        getData()
        .then(response=> {
            console.log(response);
            dispatch({type: 'FETCH_DATA', payload: {data: response.data}});
        });
    }

    render() {
        const { data } = this.props.data;

        return(
            <div>
                 <section id="home">
                    <div>
                        <img src="https://content.drive-now.com/sites/default/files/carsharing_drivenow-international_0.jpg" className="full"/>
                    </div>
                </section>
                {data.map((val, i) => {
                    return (
                        <Section key={i} content={val} />
                    )
                })}
            </div>
        );
    }
}

export default Body;