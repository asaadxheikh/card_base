

import React, { useEffect, useState } from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { View, Text, TouchableOpacity, SafeAreaViewBase, SafeAreaView, FlatList, ImageBackground } from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { fetchCards, shuffleCards } from '../action/cards'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const App = () => {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.cards)
    const [showCards, setShowCards] = useState(false)

    const shuffle_new_deck = async () => {
        setShowCards(false)
        await dispatch(shuffleCards(counter.card.deck_id))
    }

    useEffect(() => {
        const fetch_cards = async () => {
            setShowCards(false)
            await dispatch(fetchCards())
        }

        fetch_cards()
    }, [])

    return (
        <>
            <SafeAreaView style={{
                backgroundColor: 'lightblue'
            }} />
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'lightblue',
            }}> 
                <FlatList 
                    data={counter.cards}
                    numColumns={2}
                    columnWrapperStyle={{
                        justifyContent: 'space-between'
                    }} 
                    renderItem={
                        ({ item }) => {
                            return (
                                <View style={{
                                    width: '50%',
                                    height: 200,
                                    paddingVertical: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {
                                        showCards ?
                                            <ImageBackground
                                                source={{ uri: item.image }}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                resizeMode='contain'
                                            >

                                            </ImageBackground>
                                            :
                                            <MaterialCommunityIcons
                                                name="cards"
                                                size={55}
                                                color='#000' 
                                            /> 
                                    }
                                </View>
                            ) 
                        }
                    }
 
                    ListHeaderComponent={
                        () => {
                            return (
                                <View style={{
                                    height: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        fontSize: 33,
                                        color: '#000'
                                    }}>
                                        Cards
                                    </Text>
                                </View>
                            )
                        }
                    }

                    ListFooterComponent={
                        () => {
                            return (
                                <View style={{
                                    width: '100%',
                                    height: 50,
                                    justifyContent: 'space-around',
                                    flexDirection: 'row',
                                    marginTop: 50
                                }}
                                >
                                    <TouchableOpacity style={{
                                        width: '40%',
                                        height: '100%',
                                        backgroundColor: '#ff4500',
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        borderRadius: 8
                                    }}
                                        onPress={() => shuffle_new_deck()}
                                    >
                                        <Text style={{
                                            color: '#fff'
                                        }}>
                                            Shuffles a new deck
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{
                                        width: '40%',
                                        height: '100%',
                                        backgroundColor: '#ff4500',
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        borderRadius: 8
                                    }}
                                        onPress={() => setShowCards(true)}
                                    >
                                        <Text style={{
                                            color: '#fff'
                                        }}>
                                            Draw the cards
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            )
                        }
                    }
                />

            </View>

        </>
    )
};



export default App;
