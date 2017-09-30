import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import AppReducer from './Reducers';
import AppWithNavigationState from './AppNavigator';

class ReduxExampleApp extends React.Component {
    store = createStore(AppReducer);

    render() {
        return (
            <Provider store={this.store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}

export default ReduxExampleApp;