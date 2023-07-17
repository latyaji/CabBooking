import React from "react";
import { View, Text, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'
import styles from "../../screen/login/LoginStyle";

export interface primarybuttonprops {
    txt: string,
    style: StyleProp<ViewStyle>,
    onPress: () => void,
}

export const PrimaryButton = ({
    txt,
    style,
    onPress,

}: primarybuttonprops) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style}>
            <Text style={styles.nxtbtntxt}>{txt}</Text>
        </TouchableOpacity>
    )
}