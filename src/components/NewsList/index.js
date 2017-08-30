import React from 'react'
import { FlatList, Text, View, RefreshControl } from 'react-native'
import styles from './styles'
import {
    PRIMARY_COLOR,
    SECONDARY_COLOR
} from '../../styles/colors'

const NewsList = () => (
    <FlatList
        data={ ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'].map( (i) => {return {key : i}}) }
        renderItem={({item}) => <View style={styles.listItem}><Text style={styles.centeredText} >{item.key}</Text></View>}
        style={styles.list}
        refreshControl={
            <RefreshControl
                refreshing={false}
                onRefresh={() => console.log('refresh')}
                colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
            />
        }
    />
)

export default NewsList