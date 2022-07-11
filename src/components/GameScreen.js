import React, { useState, useEffect, useRef} from 'react';
import { Dimensions } from 'react-native';
import { Animated, ImageBackground, Image, StyleSheet, Button, 
  TouchableOpacity, TouchableWithoutFeedback, Text, View, Easing } from 'react-native';

const BackGroup = require("../assets/Group110.png");
const Butterfly = require("../assets/09_item_Butterfly.png");
const Caterpillar = require("../assets/09_item_Caterpillar.png");
const Cocoon = require("../assets/09_item_Cocoon.png");
const Leaf = require("../assets/09_item_Leaf.png");
const Tambourine = require("../assets/09_item_Tambourine.png");
const Pick_Loop = require("../assets/Pick_Loop.png");
const Pick_Exit = require("../assets/Pick_Exit.png");
const Animation = require("../assets/animation.gif");

const {width, height} = Dimensions.get('screen');
const { Value, Extrapolate } = Animated;
export default function GameScreen({navigation}) {
  const [isCocoonClicked, setCocoonClicked] = useState(false);
  const [isButterflyClicked, setButterflyClicked] = useState(false);
  const [isLeafClicked, setLeafClicked] = useState(false);
  const [isCaterpillarClicked, setCaterpillarClicked] = useState(false);
  const [isTambourineClicked, setTambourineClicked] = useState(false);
  const animatedB = new Value(0);
  const animatedL = new Value(0);
  const animatedCo = new Value(0);
  const animatedT = new Value(0);
  const animatedCa = new Value(0);
  
  let durationAnim = 1000;
  const onPressButterfly = () => {
    animatedB.setValue(0);
    Animated.timing(animatedB, {
      toValue: 100,
      duration: durationAnim,
      easing: Easing.in,
      useNativeDriver: true,
    }).start(() => {
        setButterflyClicked(true)
    });
  }
  const onPressCocoon = () => {
    animatedCo.setValue(0);
    Animated.timing(animatedCo, { 
      toValue: 100,
      duration: 1000,
      easing: Easing.in,
      useNativeDriver: true,
    }).start(() => {
      setCocoonClicked(true);
    });
   
  }
  const onPressLeaf = () => {
    animatedL.setValue(0);
    Animated.timing(animatedL, { 
      toValue: 100,
      duration: 1000,
      easing: Easing.in,
      useNativeDriver: true,
    }).start(() => {
      setLeafClicked(true);
    });
    
  }
  const onPressCaterpillar = () => {
    animatedCa.setValue(0);
    Animated.timing(animatedCa, { 
      toValue: 100,
      duration: 1000,
      easing: Easing.in,
      useNativeDriver: true,
    }).start(() => {
      setCaterpillarClicked(true);
    });
    
  }
  const onPressTambourine = () => {
    animatedT.setValue(0);
    Animated.timing(animatedT, {
      toValue: 100,
      duration: 1000,
      easing: Easing.in,
      useNativeDriver: true,
    }).start(() => {
      setTambourineClicked(true);
    });
    
  }
  const onPressLoop = () => {
    setCocoonClicked(false);
    setButterflyClicked(false);
    setTambourineClicked(false);
    setLeafClicked(false);
    setCaterpillarClicked(false);
  }
  const onPressExit = () => {
    navigation.navigate('SongsList');
  }

  const animated = useRef(new Animated.Value(height / 1024 * 365)).current;
  const duration = 1500;

  useEffect(() => {
        Animated.timing(animated, {
          toValue: -height / 1024 * 65,
          duration: 1500,
          easing: Easing.in,
          useNativeDriver: true,
        }).start();
  }, []);


  return (
    <View style={styles.container}>
      <ImageBackground source={BackGroup} resizeMode="stretch" style={styles.imageBack}>
            <TouchableOpacity
              onPress={onPressButterfly}
              style={styles.butterflyContainer}
            >
                <Animated.View
                  style={[
                    {
                      transform: [{ 
                                translateX: animatedB.interpolate({
                                      inputRange: [0, 50, 100],
                                      outputRange: [0, -30, 0],
                                      extrapolate: Extrapolate.CLAMP

                                    })
                                },{ 
                                translateY: animatedB.interpolate({
                                      inputRange: [0, 50, 100],
                                      outputRange: [0, -30, 0],
                                      extrapolate: Extrapolate.CLAMP

                                    })
                                }, 
                                {
                                  rotate:  animatedB.interpolate({
                                      inputRange: [0, 20, 50, 80, 100], 
                                      outputRange: ['0deg', '15deg', '-15deg', '15deg','0deg'],
                                      extrapolate: Extrapolate.CLAMP

                                    })
                                }]
                    }
                  ]}
                > 
                    <Image source={Butterfly} resizeMode="contain" style={styles.butterfly}></Image>
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressCaterpillar}
              style={styles.caterpillarContainer}
            > 
             <Animated.View
                  style={[
                    {
                      transform: [
                                { 
                                translateY: animatedCa.interpolate({
                                      inputRange: [0, 20, 50, 80, 100],
                                      outputRange: [0, -20, 0, -20,0],
                                      extrapolate: Extrapolate.CLAMP

                                    })
                                }, 
                               ]
                    }
                  ]} 
                > 
                    <Image source={Caterpillar} resizeMode="contain" style={styles.caterpillar}></Image>
                </Animated.View>
                {/* <Image source={Animation} resizeMode="contain" style={styles.animation}></Image> */}

            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressCocoon}
              style={styles.cocoonContainer}
            > 
             <Animated.View
                  style={[
                    {
                      transform: [
                        {translateX: 8},
                        {translateY: -30},
                        { 
                          rotateZ:  animatedCo.interpolate({
                              inputRange: [0, 20, 50, 80, 100], 
                              outputRange: ['0deg', '20deg', '-20deg','10deg', '0deg'],
                              extrapolate: Extrapolate.CLAMP

                            })
                        }, 
                        {translateX: -8},
                        {translateY: 30},
                               ]
                    }
                  ]} 
                > 
                    <Image source={Cocoon} resizeMode="contain" style={styles.cocoon}></Image>
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressLeaf}
              style={styles.leafContainer}
            > 
             <Animated.View
                  style={[
                    {
                      transform: [
                                { 
                                translateY: animatedL.interpolate({
                                      inputRange: [0, 20, 50, 80, 100],
                                      outputRange: [0, -20, -30, -20, 0],
                                      extrapolate: Extrapolate.CLAMP

                                    })
                                }, 
                                { 
                                  rotate:  animatedL.interpolate({
                                      inputRange: [0, 20, 40, 80, 100], 
                                      outputRange: ['0deg', '15deg', '-15deg', '15deg','0deg'],
                                      extrapolate: Extrapolate.CLAMP

                                    })
                                }, 
                               ]
                    }
                  ]} 
                > 
                   <Image source={Leaf} resizeMode="contain" style={styles.leaf}></Image>
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressTambourine}
              style={styles.tambourineContainer}
            > 
             <Animated.View
                  style={[
                    {
                      transform: [
                                { 
                                scale: animatedT.interpolate({
                                      inputRange: [0, 30, 50, 70, 100],
                                      outputRange: [1, 1.3, 1, 1.3,1],
                                      extrapolate: Extrapolate.CLAMP

                                    })
                                }, 
                               ]
                    }
                  ]} 
                > 
                    <Image source={Tambourine} resizeMode="contain" style={styles.tambourine}></Image>
                </Animated.View>
            </TouchableOpacity>
            <Animated.View
               style={[
                styles.subView,
                {
                  transform: [{ translateY: animated }]
                }
              ]}
            >
              <View style={styles.bottomView}>
                  <TouchableOpacity
                    onPress={onPressLoop}
                  > 
                    <Image source={Pick_Loop} style={styles.pick_Loop} resizeMode="contain"></Image>
                  </TouchableOpacity>
                  <View style={styles.words}>
                      <Text style={isCocoonClicked ? styles.wordClicked : styles.word}>Cocoon</Text>
                      <Text style={isLeafClicked ? styles.wordClicked :styles.word}>Leaf</Text>
                      <Text style={isCaterpillarClicked ? styles.wordClicked :styles.word}>Caterpillar</Text>
                      <Text style={isButterflyClicked ? styles.wordClicked :styles.word}>Butterfly</Text>
                      <Text style={isTambourineClicked ? styles.wordClicked :styles.word}>Tambourine</Text>
                  </View>
                  <TouchableOpacity
                    onPress={onPressExit}
                  > 
                    <Image source={Pick_Exit} style={styles.pick_Exit} resizeMode="contain"></Image>
                  </TouchableOpacity>
              </View>
            </Animated.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    alignContent: "center",
  },
  animation: {
    position: "absolute",
  },
  imageBack: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    alignContent: "center",
  },
  bottomView: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: height / 1024 *185,
    alignItems: "center",
  },
  pick_Loop: {
    width: width / 1024 *134,
    height: height / 1024 *122,

  },
  pick_Exit: {
    width: width / 1024 *134,
    height: height / 1024 *122,

  },
  words: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    flex: 1
  },
  word: {
    color: "#1D9BEF",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "700",
    marginLeft: 30
  },
  wordClicked: {
    color: "#E00E3C",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "700",
    marginLeft: 30
  },
  subView: {
    width: "100%",
    bottom: -40,
    position: "absolute",
  } , 
  butterflyContainer: {
    position: "absolute",
    marginLeft: width / 1364 *85,
    marginTop: height / 1024 *245,
    width: width / 1364 * 133,
  },
  butterfly: {
    width: width / 1364 * 133,
  },
  cocoonContainer: {
    position: "absolute",
    marginLeft: width / 1364 * 460,
    marginTop: height / 1024 * 360,
    width: width / 1364 * 54,
  },
  cocoon: {
    width: width / 1364 * 54,
  },
  caterpillarContainer: {
    position: "absolute",
    marginLeft: width / 1364 *855,
    marginTop: height / 1024 *90,
    width: width / 1364 * 40,
  },
  caterpillar: {
    width: width / 1364 * 40,
  },
  leafContainer: {
    position: "absolute",
    marginLeft: width / 1364 *762,
    marginTop: height / 1024 *563,
    width: width / 1364 * 84,
  },
  leaf: {
    width: width / 1364 * 84,
  },
  tambourineContainer: {
    position: "absolute",
    marginLeft: width / 1364 *270,
    marginTop: height / 1024 *565,
    width: width / 1364 * 80,
  },
  tambourine: {
    width: width / 1364 * 80,
  },


});
