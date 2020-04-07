import { StyleSheet } from 'react-native';

import { DEFAULT_GRAYSCALE_1 } from '../appStyle';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: DEFAULT_GRAYSCALE_1,
        borderWidth: 1,
        paddingVertical: 10
    }
})

export const textStyle = StyleSheet.create({
    pokename: {
        fontSize: 18,
        fontFamily: 'Verdana',
        marginRight: 15,
    }
})