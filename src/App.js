import React, { Component } from "react";
import { Text, View } from "react-native";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header } from './components/common'

class App extends Component {

    componentWillMount() {
        const config = ({
            apiKey: "AIzaSyD-yJEGZXECK5ezvJcbusANiHim04NqrSE",
            authDomain: "manager-f091e.firebaseapp.com",
            databaseURL: "https://manager-f091e.firebaseio.com",
            projectId: "manager-f091e",
            storageBucket: "manager-f091e.appspot.com",
            messagingSenderId: "357321724076",
            appId: "1:357321724076:web:a40a23a0893c5152"
        });

        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Header headerText="Managers App"/>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;