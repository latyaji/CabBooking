import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import PhoneInput from 'react-native-phone-number-input';
import { backgrounddot, backIcon, car } from "../../assest/image";
import { styles } from "./StartStyles";
import { NavigationParams } from "react-navigation";


export const Start = ({ navigation }: NavigationParams) => {

  const [phoneNumber, setPhoneNumber] = React.useState('');
  const phoneInput = React.useRef(null);

  return (

    <ImageBackground
      source={backgrounddot}
      resizeMode="stretch"
      style={styles.img}>
      <View style={{ alignItems: "flex-end", marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
          <Image source={backIcon} style={styles.backicon} />
        </TouchableOpacity>
        <Image source={car} style={styles.carimg} />

      </View>
      <View style={{ margin: 20 }}>
        <Text style={styles.topheadtxt}>Follow simple{" "}
          <Text style={styles.boldtxt}>steps to start your trip</Text>
        </Text>
        <View style={styles.phoneinputcontainer}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            containerStyle={styles.phoneContainer}
            textContainerStyle={styles.textInput}
            textInputStyle={styles.whitetxt}
            codeTextStyle={styles.whitetxt}
            onChangeFormattedText={text => { setPhoneNumber(text); }}
            defaultCode="IN"
            layout="second"
            withShadow
            autoFocus
            textInputProps={{ placeholderTextColor: "#ffffff" }}
          />
        </View>
        <View style={styles.bottomcontainer}>
          <Text style={styles.bottomheadtxt}>
            By creating an account, you agree to our
            <Text style={styles.boldtxt}> Tearms of Service </Text>and
            <Text style={styles.boldtxt}> Pivacy Policy</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Start;





 