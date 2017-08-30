import React, {Component} from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

class LoginScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.centeredText}>Login Screen</Text>
            </View>

        )
    }
}

export default LoginScreen