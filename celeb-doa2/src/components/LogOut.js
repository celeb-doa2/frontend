import React from "react";
import { Redirect } from "react-router-dom";


class LogOut extends React.Component {

    state = {
        navigate: false
    };

    logout = () => {
        localStorage.clear("token");
        this.setState({ navigate: true });
    };

    render () {

        if (this.state.navigate) {
            return<Redirect to="/login" push={true}/>
        }
        return <button onClick={this.logout}>
        Log Out
        </button>
    }
}

export default LogOut;