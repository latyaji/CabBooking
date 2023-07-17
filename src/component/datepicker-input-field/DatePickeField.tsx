import { View, Text, Image, TextInput, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'

import styles from '../../screen/login/LoginStyle';

import DateTimePickerModal from 'react-native-modal-datetime-picker';


export interface datepickerfieldprops {
    inputValue: string,
    validate: string,
    incorrect: ImageSourcePropType,
    rightIcon: ImageSourcePropType,
    showDatePicker: () => void,
    onChangeText?: (validate: string)=>void,
    placeholder: string,
    isVisible: boolean,
    onConfirm: (date: Date) => void,
    onCancel: () => void,
    label: string,
}

export const DatePickerField = ({
    inputValue,
    validate,
    incorrect,
    rightIcon,
    showDatePicker,
    onChangeText,
    placeholder,
    isVisible,
    onConfirm,
    onCancel,
    label
}: datepickerfieldprops) => {
    return (
        <View style={{ margin: 12, borderBottomWidth: 0.8 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, paddingLeft: 18, fontWeight: "500" }}>{label}</Text>
                {inputValue && (validate ?
                    <View style={styles.errorcontainer}>
                        <Text style={styles.errortxt}>{validate}</Text>
                        <Image source={incorrect} style={styles.wrongicon} />
                    </View>
                    :
                    <Image source={rightIcon} style={styles.righticon} />
                )
                }
            </View>
            <TouchableOpacity
                onPress={showDatePicker}
                style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <TextInput
                    value={inputValue}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    onFocus={showDatePicker}
                    style={{ marginLeft: 12 }}
                />
                <DateTimePickerModal
                    isVisible={isVisible}
                    mode="date"
                    onConfirm={(e: any)=>onConfirm(e)}
                    onCancel={onCancel}
                />
            </TouchableOpacity>
        </View>
    )
}
