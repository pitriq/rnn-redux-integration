import React, { Component } from 'react';
import { View, Text } from 'react-native'
import styles from './styles'
import NewsList from '../../components/NewsList'

class NewsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NewsList />
            </View>
        )
    }
}

export default NewsScreen
