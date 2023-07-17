import { View, Text, Image, TextInput, StyleSheet, ImageSourcePropType } from 'react-native'
import React, { ChangeEvent } from 'react'
import styles from '../../screen/login/LoginStyle'
import { incorrect } from '../../assest/image'

export interface InputFieldProps {
  inputValue: string,
  validate: string,
  rightIcon: ImageSourcePropType,
  onChangeText?: (e: string, name: string)=>void;
  labelTxt: string,
  placeholder: string,
  datepicker?: () => void
}

export const InputField = ({
  inputValue,
  validate,
  rightIcon,
  onChangeText,
  labelTxt,
  placeholder,
  datepicker,
}: InputFieldProps) => {

  return (
    <View style={inputstyles.conatiner}>
      <View style={inputstyles.txtcontainer}>
        <Text style={inputstyles.txtname}>{labelTxt}</Text>
        {inputValue && (validate ?
          <View style={styles.errorcontainer}>
            <Text style={styles.errortxt}>{validate}</Text>
            <Image source={incorrect} style={styles.wrongicon} />
          </View>
          :
          !validate && <Image source={rightIcon} style={styles.righticon} />)
        }
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        defaultValue={inputValue}
        onChangeText={onChangeText} />
    </View>
  )
}

const inputstyles = StyleSheet.create({
  conatiner: {
    margin: 6
  },
  txtcontainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  txtname: {
    fontSize: 18,
    paddingLeft: 18,
    fontWeight: "500"
  },


})