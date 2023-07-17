import React, { useRef } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';

import RBSheet from "react-native-raw-bottom-sheet";

import { bgmap, backIcon, greter } from '../../assest/image';
import { styles } from './MenuStyles';
import { NavigationParams } from 'react-navigation';


export const Menu = ({ navigation }: NavigationParams) => {
    const refRBSheet = useRef();

    const renderHeader = () => {
        return (
            <ImageBackground
                source={bgmap}
                resizeMode="stretch"
                style={styles.img}>
                <View style={styles.tophead}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Map')} >
                        <Image source={backIcon} style={styles.backicon} />
                    </TouchableOpacity>
                    <Text style={styles.headingtxt}>Hello! Danish Ahmad</Text>
                    <Text style={styles.headingtxtwo}>Let's Start <Text style={styles.ridetxt}>your ride .</Text></Text>
                </View>
            </ImageBackground>
        )
    }

    const renderRBSheet = () => {
        return (
            <View style={{ position: "absolute" }}>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    customStyles={{
                        wrapper: { backgroundColor: "transparent" },
                        container: {
                            borderTopEndRadius: 40,
                            borderTopLeftRadius: 40,
                            elevation: 60,
                            shadowColor: "#000"
                        },
                        draggableIcon: {
                            backgroundColor: "#1E3071",
                            width: 50,
                            height: 6
                        }
                    }} >
                    <View style={{ marginTop: 40 }}>
                        <View style={styles.onlineconatiner}>
                            <Text style={styles.onlinetxt}>Online </Text>
                            <TouchableOpacity
                                style={styles.btncontainer}>
                                <View style={styles.btnbox}>
                                    <View style={styles.btnboxbg}></View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.goofflinebtnconatiner}>
                            <Text style={styles.goofflinebttxt}>Go Offline</Text>
                            <Image source={greter} style={styles.gretericon} />
                        </TouchableOpacity>
                    </View>
                </RBSheet>
            </View>
        )
    }
    return (
        <TouchableOpacity style={{ flex: 1 }}
            onPress={() => refRBSheet.current.open()}>
            {renderHeader()}
            {renderRBSheet()}
        </TouchableOpacity>
    );
};

export default Menu;

