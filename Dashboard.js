import React from 'react';
import {Text, View} from 'react-native';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {params} = this.props.navigation.state;

        const name = !!params ? params.name : '';

        return (
            <View>
                <Text>Dashboard</Text>
                <Text>Hi {name},</Text>
            </View>
        )
    }
}


export default Dashboard;