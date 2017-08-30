import React, { Component } from 'react';
import { View, Text } from 'react-native'
import styles from './styles'

class DiscoverScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.centeredText}>Discover</Text>
            </View>
        )
    }
}

export default DiscoverScreen
