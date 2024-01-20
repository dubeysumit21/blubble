/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import BackButton from "../components/BackButton";
import { Entypo, Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setUserAddress } from "../redux/actions/user";
import AddAddressHeader from "../components/AddAddressHeader";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { styles } from "./styles";
import Modal from "react-native-modalbox";
import AddressType from "../components/AddressType";
import AddressTypePanel from "../components/AddressTypePanel";
import AddressEntryBox from "../components/AddressEntryBox";

const { height, width } = Dimensions.get("screen");

const AddAddress: React.FC = (props: any) => {
  const { navigation } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLocation, setSelectedlocation] = useState<any>();
  const [markerLocation, setMarkerLocation] = useState<any>({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const mapRef: any = useRef<any>(null);
  const show = useRef<null>();
  const addressFields = [
    { type: "name", label: "Name" },
    { type: "contact_number", label: "Contact Number" },
    { type: "flat", label: "Flat / House No / Floor / Building" },
    { type: "locality", label: "Area / Sector / Locality" },
    { type: "landmark", label: "Nearby Landmark" },
  ];
  useEffect(() => {
    setTimeout(() => {
      mapRef?.current?.animateCamera(
        {
          center: {
            latitude: 37.78825,
            longitude: -122.4324,
          },
        },
        1000,
      );
    }, 2000);
  }, []);
  return (
    <SafeAreaView>
      <BackButton onPress={() => navigation.goBack()} color="#000000" />
      <AddAddressHeader />
      <View
        style={{
          backgroundColor: "#FFFFFF",
          width: "90%",
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          flexDirection: "row",
          paddingHorizontal: 10,
          marginVertical: 10,
          position: "absolute",
          top: "16%",
          zIndex: 200,
        }}
      >
        <GooglePlacesAutocomplete
          placeholder="Search"
          minLength={2}
          autoFocus={false}
          returnKeyType={"default"}
          onPress={(data, details = null) => {
            setSelectedlocation(details);
            const latLong = {
              latitude: details?.geometry?.location?.lat,
              longitude: details?.geometry?.location?.lng,
            };
            setMarkerLocation(latLong);
            mapRef?.current?.animateCamera(
              {
                center: latLong,
              },
              1000,
            );
            console.log(data, details);
          }}
          renderLeftButton={() => (
            <Feather name="search" size={22} color="#CCCCCC" />
          )}
          query={{
            key: "AIzaSyDAICYEp9oallDawd-lAHqaMD3nVMRzv40",
            language: "en",
          }}
          fetchDetails={true}
          styles={{
            textInputContainer: {
              width: "95%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            },
            textInput: {
              height: 45,
              color: "#5d5d5d",
              fontSize: 18,
              fontFamily: "Quicksand-Regular",
            },
            predefinedPlacesDescription: {
              color: "#1faadb",
            },
            listView: {
              height: 200,
            },
          }}
        />
      </View>
      <MapView
        ref={mapRef}
        initialRegion={{
          latitude: 37.88825,
          longitude: -122.8324,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
        style={{
          width: "95%",
          height: height - 270,
          alignSelf: "center",
        }}
        mapType="none"
        scrollEnabled={false}
        onMarkerDragEnd={(e: any) => {
          const userLocation = {
            ...user?.address,
            coordinates: { ...e.nativeEvent.coordinate },
          };
          console.info("userLocation", userLocation);
          // @ts-ignore
          dispatch(setUserAddress(userLocation));
        }}
      >
        <Marker coordinate={markerLocation} draggable>
          <Entypo name="location-pin" size={44} color="black" />
        </Marker>
      </MapView>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => {
          setIsOpen(true);
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "Quicksand-SemiBold",
            fontSize: 24,
          }}
        >
          Enter complete address
        </Text>
      </TouchableOpacity>
      <Modal
        style={{
          width,
          height: height - 80,
          justifyContent: "center",
          zIndex: 200,
          position: "absolute",
          bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 15,
        }}
        position="center"
        backdrop={true}
        ref={show}
        isOpen={isOpen}
        coverScreen={true}
        onClosed={() => {
          setIsOpen(false);
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.addAddressHeader}>
              <Text style={styles.enterText}>Enter address details</Text>
            </View>
            <AddressTypePanel />
            {addressFields.map((a: any) => {
              return (
                <AddressEntryBox
                  key={a.type}
                  onChangeText={() => null}
                  type={a.type}
                  label={a.label}
                />
              );
            })}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default AddAddress;
