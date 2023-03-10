import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ArrowRightIcon} from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import {newArrivalRestaurants} from '../data/NewArrivalRestaurants'
import Sushi from '../assets/food/Sushi.jpeg'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color='#00CCBB'/>
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
        <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        >
          {
            //map over the restaurants
            newArrivalRestaurants.map((restaurant) => (
              <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              // imgUrl={restaurant.imgUrl}
              imgUrl={Sushi}
              title={restaurant.title}
              rating={restaurant.rating}
              genre={restaurant.genre}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
              />
            ))

          }
        
        </ScrollView>
    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})