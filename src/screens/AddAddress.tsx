/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Entypo, Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setUserAddress } from "../redux/actions/user";
import AddAddressHeader from "../components/AddAddressHeader";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { styles } from "./styles";
import AddressModal from "../components/AddressModal";

const { height } = Dimensions.get("screen");

const AddAddress: React.FC = (props: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [flat, setFlat] = useState<string>("");
  const [locality, setLocality] = useState<string>("");
  const [landmark, setLandmark] = useState<string>("");
  const [selectedLocation, setSelectedlocation] = useState<any>();
  const [markerLocation, setMarkerLocation] = useState<any>({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const mapRef: any = useRef<any>(null);
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
  const saveAddress = () => {
    const payload = {
      name,
      contact,
      flat,
      locality,
      landmark,
    };
    console.info("====>", payload);
  };
  return (
    <SafeAreaView>
      <AddAddressHeader />
      <View style={styles.searchBox}>
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
            key: "",
            language: "en",
          }}
          fetchDetails={true}
          styles={{
            textInputContainer: styles.inputContainer,
            textInput: styles.textInput,
            predefinedPlacesDescription: styles.descriptionText,
            listView: styles.listView,
          }}
        />
      </View>
      {isOpen ? (
        <AddressModal
          isOpen={isOpen}
          setIsOpen={(value: boolean) => {
            setIsOpen(value);
          }}
          setName={(value: string) => {
            setName(value);
          }}
          setContact={(value: string) => {
            setContact(value);
          }}
          setFlat={(value: string) => {
            setFlat(value);
          }}
          setLocality={(value: string) => {
            setLocality(value);
          }}
          setLandmark={(value: string) => {
            setLandmark(value);
          }}
          saveAddress={() => {
            saveAddress();
          }}
        />
      ) : null}
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
        <Text style={styles.saveText}>Enter complete address</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddAddress;
