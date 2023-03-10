import { StyleSheet, Text, View, TouchableOpacity, Image, ProgressBarAndroidBase } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { selectRestaurant } from '../slices/restaurantSlice';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';
import { emptyBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';
import DeliveryGif from "../assets/DeliveryGif.webp"
const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)
    const dispatch = useDispatch()
    const emptyBasketAndNavigate = () => {
        dispatch(emptyBasket())
        navigation.navigate('Home')
    }


  return (
    <View className="bg-[#00CCBB] flex-1">
        <SafeAreaView className="z-50">
            <View className="flex-row justify-between items-center p-5">
                <TouchableOpacity
                onPress={emptyBasketAndNavigate}
                >
                    <XMarkIcon color="white" size={30}/>
                </TouchableOpacity>
                <Text className="font-light text-white text-lg">Order Help</Text>
            </View>

            <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                <View className="flex-row justify-between">
                    
                        <View>
                            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                            <Text className="text-4xl font-bold">45-55 Minutes</Text>
                        </View>
                        <Image
                        source={DeliveryGif}
                        className="h-20 w-20"
                        />
                    </View>
                    <Progress.Bar size={30} color="#00CCBB" indeterminate={true}/>
                    <Text className="text-gray-500 mt-3">
                        Your order at {restaurant.title} is being prepared
                    </Text>
                </View>
        </SafeAreaView>
        <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                className="flex-1 -mt-16 z-0"
                mapType="mutedStandard"
                >
                    <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier="origin"
                    pinColor="#00CCBB"
                    />
                </MapView>
                <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
                    <Image
                    source={DeliveryGif}
                    className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
                    />
                    <View className="flex-1">
                        <Text className="font-bold text-lg">Brennan Lee</Text>
                        <Text className="text-gray-400">Your Rider</Text>
                    </View>
                    <Text className="text-[#00CCBB] text-lg font-bold mr-5">Call</Text>
                </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({})