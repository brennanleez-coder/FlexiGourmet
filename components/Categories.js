import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { cuisines } from '../data/Categories'

const Categories = () => {
  return (
    <ScrollView
    showsHorizontalScrollIndicator={false}
    horizontal
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop:10
    }}
    >
      {cuisines.map((cuisine, index) => (
          <CategoryCard
          key={index}
          imgUrl={cuisine.imageUrl}
          title={cuisine.title}
          />
      ))}

    </ScrollView>
  )
}

export default Categories
