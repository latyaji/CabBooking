import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { backgroundbluewhite, backIcon, incorrect, rightIcon } from '../../assest/image';
import styles from './LoginStyle';
import { line1, line2 } from '../../utils/helper';
import { handleDob, handleFirstName, handleEmailid, handleLastName, handleGender, handlePassword } from '../../utils/validation';
import { DatePickerField, PrimaryButton, InputField } from '../../component';
import { NavigationParams } from "react-navigation";

import moment from 'moment';

export interface Data {
  firstname?: string;
  lastname?: string;
  dob?: string;
  gender?: string,
  emailid?: string,
  password?: string

};

export const Login = ({ navigation }: NavigationParams) => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [validate, setValidate] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    gender: '',
    emailid: '',
    password: ''
  })
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [inputValue, setInputValue] = useState<{ [key: string]: any }>({});

  const validateFunction = {
    firstname: handleFirstName,
    lastname: handleLastName,
    dob: handleDob,
    gender: handleGender,
    emailid: handleEmailid,
    password: handlePassword
  }
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleConfirm = (date: Date) => {
    setSelectedDate(date.toISOString());
    setDatePickerVisibility(false);
  };

  const validationCheck = (event: string, name: string) => {
    setInputValue((prev) => ({ ...prev, [name]: event }))
    setValidate((prev) => ({ ...prev, [name]: validateFunction[name](event) }))
  }

  const renderDatePicker = () => {
    return (

      <DatePickerField
        label={"DOB"}
        incorrect={incorrect}
        rightIcon={rightIcon}
        inputValue={selectedDate ? moment(selectedDate).format("DD-MM-YYYY") : ""}
        validate={validate.dob}
        showDatePicker={showDatePicker}
        onChangeText={(e) => validationCheck(e, 'dob')}
        placeholder={"Select Dob"}
        isVisible={isDatePickerVisible}
        onConfirm={handleConfirm}
        onCancel={() => setDatePickerVisibility(false)}
      />
    )
  }
  const renderGenderPicker = () => {
    return (
      <View style={{ margin: 12, borderBottomWidth: 1 }}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)}>
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
      </View>
    )
  }
  return (
    <ImageBackground
      source={backgroundbluewhite}
      resizeMode="stretch"
      style={styles.backgroundimg}>
      <KeyboardAvoidingView
        behavior='padding'>
        <ScrollView style={{ marginBottom: 50 }}>
          <View style={styles.topcontainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Start')}>
              <Image source={backIcon} style={styles.backicon} />
            </TouchableOpacity>
          </View>
          <View style={{ margin: 20 }}>
            <Text style={styles.headerText}>Step 1</Text>
            <Text style={styles.sectoptxt}>Why are you asking for below information ?</Text>
            <Text style={styles.sectopsubtxt}>{`${line1} ${line2} \n \n\n\n`}</Text>
          </View>

          <InputField
            rightIcon={rightIcon}
            labelTxt={"First Name"}
            placeholder={"Enter first name"}
            inputValue={inputValue?.firstname}
            validate={validate?.firstname}
            onChangeText={(e) => validationCheck(e, 'firstname')} />

          <InputField
            rightIcon={rightIcon}
            labelTxt={"Last Name"}
            placeholder={"Enter last name"}
            inputValue={inputValue?.lastname}
            validate={validate?.lastname}
            onChangeText={(e) => validationCheck(e, 'lastname')} />

              {renderDatePicker()}
              {renderGenderPicker()}

          <InputField
            labelTxt='Email id'
            rightIcon={rightIcon}
            placeholder={"Enter email id"}
            inputValue={inputValue?.emailid}
            validate={validate?.emailid}
            onChangeText={(e) => validationCheck(e, 'emailid')}
          />

          <InputField
            labelTxt="Password"
            rightIcon={rightIcon}
            placeholder={"* * * * * * * * * "}
            inputValue={inputValue?.password}
            validate={validate?.password}
            onChangeText={(e) => validationCheck(e, 'password')} />

          <PrimaryButton
            txt={"Next"}
            style={styles.nextbtncontainer}
            onPress={() => navigation.navigate('Map')}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>

  )
}


