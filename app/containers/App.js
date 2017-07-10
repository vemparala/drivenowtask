var React = require('react');
var Redux = require('redux');
var ReactRedux = require('react-redux');

import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import {getData} from '../actions/actions';

class App extends React.Component {
 
    render() {
        return(
            <div>
                <Header />
                <Body {...this.props}/>
                <Footer />
            </div>
        );
    }
}

export default ReactRedux.connect(
    (state, ownProps) => {
        return {
            data: state.data
        };
    },
    dispatch => {
        return {
            getData: getData,
            dispatch
        };
    }
)(App);