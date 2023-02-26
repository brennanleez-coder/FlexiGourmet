import { Image, SafeAreaView, StyleSheet, Text, ScrollView, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../slices/restaurantSlice'
import { selectBasketItems } from '../slices/basketSlice'
import { useDispatch } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { removeFromBasket, selectBasketTotal } from '../slices/basketSlice'

const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const basket = useSelector(selectBasketItems)
    const dispatch = useDispatch()
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const basketTotal = useSelector(selectBasketTotal)

    useEffect(() => {

        //basically use the item.id as the key, and each key has the value of an object which stores the item and the quantity
        // const groupedItems = items.reduce((results, item) => {
        //     if (!results[item.id]) {
        //         results[item.id] = {
        //             ...item,
        //             quantity: 1,
        //         }
        //     } else {
        //         results[item.id].quantity += 1
        //     }
        //     return results
        // }, {});
        
        ///// OR /////
        const groupedItems = basket.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results
        }, {})
        // SEE THE SNIPPET BELOW TO UNDERSTAND BETTER
        // [
        //     { id: 1, name: 'item 1' },
        //     { id: 2, name: 'item 2' },
        //     { id: 1, name: 'item 3' },
        //     { id: 3, name: 'item 4' }
        //   ]
          
        //   // Resulting object:
        //   {
        //     1: [{ id: 1, name: 'item 1' }, { id: 1, name: 'item 3' }],
        //     2: [{ id: 2, name: 'item 2' }],
        //     3: [{ id: 3, name: 'item 4' }]
        //   }
        setGroupedItemsInBasket(groupedItems)
        // console.log(groupedItemsInBasket)

    }, [basket])





  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">        
            <View>
                <Text className="text-lg font-bold text-center">Basket</Text>
                <Text className="text-center text-gray-400">{restaurant.title}</Text>
            </View> 

            <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-full bg-gray-100 absolute -top-12 right-5"
            >
                <XCircleIcon 
                color="#00CCBB"
                height={50}
                width={50}
                />
            </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
            <Image
            // source={{ uri: 'https://rb.gy/nyltvv'}}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <Text className="flex-1">Deliver in 50-75 min</Text>
            <TouchableOpacity>
                <Text className="text-[#00CCBB]">Change</Text>
            </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => {
                // console.log(typeof key)
                // i have to do this because the key is a string, and i need to convert it to a number
                key = parseInt(key)
                
                return (
                    <View key={key}
                    className="flex-row items-center space-x-3 bg-white px-5 py-2"
                    >
                        <Text className="text-[#00CCBB]">{items.length} x </Text>
                        <Image
                        // source={{ uri: value[0].image }} //doesnt matter [0] or [1] because they are all same item
                        // source={{ uri: 'https://rb.gy/nyltvv'}} //just for placeholder
                        className="h-12 w-12 rounded-full"
                        />
                        <Text className="flex-1">{items[0]?.name}</Text>
                        <Text className="text-gray-600">${items[0]?.price}</Text>
    
                        <TouchableOpacity
                        onPress={() => dispatch(removeFromBasket({id: key}))} //relook this redux function
                        >
                            <Text
                            className="text-[#00CCBB] text-xs">Remove</Text>
                        </TouchableOpacity>
                    </View>
                )

            }
            )}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
            <View className="flex-row justify-between">
                <Text className="text-gray-400">Subtotal</Text>
                <Text className="text-gray-400">${basketTotal}</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-gray-400">Delivery Fee</Text>
                <Text className="text-gray-400">$5.99</Text>
            </View>
            <View className="flex-row justify-between">
                <Text>Order Total</Text>
                <Text className="font-extrabold">${(basketTotal + 5.99).toFixed(2)}</Text>
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('PreparingOrderScreen')}
            className="rounded-lg bg-[#00CCBB] p-4">
                <Text className="text-center text-white bg-[#00CCBB] rounded-full text-lg font-bold">Checkout</Text>
            </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen

const styles = StyleSheet.create({})