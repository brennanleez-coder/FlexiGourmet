import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, Image } from 'react-native'
import {ChevronDownIcon, MagnifyingGlassIcon, UserIcon, AdjustmentsVerticalIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import {FeaturedRows} from '../data/FeaturedRows'
const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
                <Image
                source={{
                    uri: 'https://links.papareact.com/wru',   
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                    <ChevronDownIcon size={20} color='#00CCBB'/>
                    </Text>
                </View>
                <UserIcon size={35} color='#00CCBB'/>
            </View>
            <View className="flex-row items-center space-x-2 mx-4 pb-2">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="gray" size={20}/>
                    <TextInput
                    placeholder="Restaurants and Cuisine"
                    keyboardType='default'
                    />
                </View>
                <AdjustmentsVerticalIcon size={30} color='#00CCBB'/>
            </View>

            <ScrollView className="bg-gray-100"
            contentContainerStyle={{
                paddingBottom: 100,
            }}
            >
                <Categories/>
                {/* map through featured rows */}
                <FeaturedRow
                id="1"
                    title="New Arrivals"
                    description="Showcase the latest dishes and restaurants to join the app."
                />
                <FeaturedRow
                id="2"
                    title="Popular"
                    description="Highlight dishes that are flying off the virtual shelves."
                />
                <FeaturedRow
                id="3"
                    title="Deals and Discounts"
                    description="Present special offers and discounts for foodies on a budget."
                />
                <FeaturedRow
                id="4"
                    title="Trending Cuisines"
                    description="Feature the hottest cuisines in town right now."
                />
            </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

