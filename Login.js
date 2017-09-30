import React from 'react';
import {AlertIOS, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Dashboard from './Dashboard';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    onUsernameChange(text) {
        console.log('username:', text);
        this.setState({username: text});
    }

    onPasswordChange(text) {
        console.log('password:', text);
        this.setState({password: text});
    }

    onSubmit() {
        if (this.state.username.trim(' ') !== 'rummykhan' && this.state.password.trim(' ') !== 'rummykhan') {
            AlertIOS.alert('Failed', 'Username/Password is not correct.');
            return true;
        }

        this.props.navigation.navigate('Dashboard', {name: this.state.username});
    }

    render() {


        return (
            <View style={styles.container}>
                <Text>Username</Text>
                <TextInput style={{height: 40, width: '90%', borderColor: 'black', borderWidth: 1}}
                           onChangeText={this.onUsernameChange.bind(this)}
                           value={this.state.username}/>
                <Text>Password</Text>
                <TextInput style={{height: 40, width: '90%', borderColor: 'black', borderWidth: 1}}
                           onChangeText={this.onPasswordChange.bind(this)}
                           secureTextEntry={true}
                           value={this.state.password}/>
                <Button
                    style={{border: '1px solid black', padding: '5px'}}
                    onPress={this.onSubmit.bind(this)}
                    title="Submit"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Login;