import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    state= {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.terget.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props
        .login(this.state.credentials)
        .then(() => this.props.history.push('/protected'));

    }

    render() {
        return (
            <div className="login-form">
                <form onSubmit="username">
                    <input 
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={this.state.credentials.username}
                      onChange={this.handleChange}
                    />
                    <input 
                      type="password"
                      name="password"
                      placeholder="........"
                      value={this.state.credentials.password}
                      onChange={this.handleChange}
                    />
                    <button type="log-in">{this.props.isloggingIn}</button>
                    <button type="signUp">Sign Up</button>
                </form>
            </div>
        );
    }

}
const mapStateToProps = ({ error, loggingIn}) => ({
    error,
    loggingIn
});
export default connect (mapStateToProps, {login} )(Login);