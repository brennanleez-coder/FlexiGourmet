import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image 
        source={imgUrl}
        className="h-20 w-20 rounded mb-2"
        />
        {/* go deliveroo and steal their images */}
      <Text className="absolute bottom-1 left-1 text-center text-black font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({})