import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { backgroundbluewhite, car, backIcon, profileimg } from '../../assest/image';
import { line1, line2, VehicleData } from '../../utils/helper';
import { styles } from './MapStyles'
import { NavigationParams } from 'react-navigation';

interface List {
    [key: string]: any
}

interface mapElement {
    name: string,
    value: string
}

export const Map = ({ navigation }: NavigationParams) => {
    const refRBSheet = useRef();
    const [VehicleDataold, setVehicleData] = useState<List>([])

    const handleVechicleData = () => {
        setVehicleData(VehicleData) 
    }

    useEffect(() => {
        handleVechicleData()
    }, []);

  const renderHeader = () => {
    return (
        <>
          <View
                    style={styles.topcontainer}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image source={backIcon} style={styles.backicon} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Step 7</Text>
                    <Text style={styles.topconatinersubtxt}>Why are you asking for below information ?</Text>
                    <Text style={styles.topconatinersubtxtsec}>{`${line1} ${line2} \n \n\n\n`}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => refRBSheet?.current?.open()}
                    style={styles.viewbtncontainer}>
                    <Text style={styles.viewbtntxt}>View Details</Text>
                </TouchableOpacity>
        </>
    )
  }
   const renderRBSheet = () => {
    return(
        <View style={{ position: "absolute" }}>
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
                wrapper: {
                    backgroundColor: "transparent",
                },
                container: {
                    borderTopEndRadius: 40,
                    borderTopLeftRadius: 40,
                    elevation: 60,
                    shadowColor: "#000",
                    backgroundColor: "#85ACCE",
                    height: 620
                },
                draggableIcon: {
                    backgroundColor: "#fff",
                    width: 70,
                    height: 6
                }
            }} >
           
      <Image source={car} style={styles.carimg} />
            {VehicleDataold.map((item: mapElement, index : number) =>
                <View key={index} style={styles.modaltopconatiner}>
                    <Text style={styles.typetxt}>{item.name}</Text>
                    <Text style={styles.largetxt}>{item.value}</Text>
                </View>

            )}
              <View style={{ borderBottomWidth: 1, margin: 12, borderColor: "#fff", opacity: 0.4 }}></View>
                <View style={{ flexDirection: "row", margin: 16 }}>
                    <Image source={profileimg} style={styles.modalprofileimg} />
                    <View style={styles.modalprofilecontainer}>
                        <Text style={styles.modalprofileheadtxt}>Danish Ahmad</Text>
                        <View style={styles.modalprofilesubheadtxt}>
                            <Text style={styles.modalprofilesmalltxt}>Male</Text>
                            <Text style={styles.whitetxt}>14/09/1989</Text>
                        </View>
                        <View style={styles.modalprofilesubheadtxt}>
                            <Text style={styles.modalprofilesmalltxt}>DL No</Text>
                            <Text style={styles.whitetxt}>DL5UU4323</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Menu')}
                    style={styles.submitbtnconatiner}>
                    <Text style={styles.submitbtntxt}>Submit</Text>
                </TouchableOpacity>
        </RBSheet>
    </View>
    )
   }  

    return (
        <ImageBackground
            source={backgroundbluewhite}
            resizeMode="stretch"
            style={styles.img} >
            <ScrollView style={{ marginBottom: 50 }}>
               {renderHeader()}
               {renderRBSheet()}
            </ScrollView>
        </ImageBackground>
    )
}


