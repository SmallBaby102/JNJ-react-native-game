import React from 'react';
import { Dimensions } from 'react-native';
import { Button, ImageBackground, Modal, Image, StyleSheet, TextInput, TouchableOpacity,TouchableWithoutFeedback, Text, View, ScrollView } from 'react-native';
import Video, {TextTrackType} from "react-native-video";
const BackGroup = require("../assets/Group107.png");
const Pick_Left = require("../assets/Pick_Left.png");
const SearchIcon = require("../assets/SearchIcon.png");
const JeremyIcon = require("../assets/Group103.png");
const ButterflyIcon = require("../assets/Group104.png");
const TurtleIcon = require("../assets/Group102.png");
const BathTimeIcon = require("../assets/BathTime.png");
const BeforeYouIcon = require("../assets/BeforeYou.png");
const BizzyBeeIcon = require("../assets/BizzyBee.png");
const BrushIcon = require("../assets/Brush.png");
const CleanupIcon = require("../assets/Cleanup.png");
const VampireIcon = require("../assets/Vampire.png");
const DancingIcon = require("../assets/Dancing.png");
const DownIcon = require("../assets/Down.png");
const EndDayIcon = require("../assets/EndDay.png");
const FunkyIcon = require("../assets/Funky.png");
const FiveLittleIcon = require("../assets/FiveLittle.png");
const GoodMorningIcon = require("../assets/GoodMorning.png");
const HappyBirthdayIcon = require("../assets/HappyBirthday.png");
const WishIcon = require("../assets/Wish.png");
const SorryIcon = require("../assets/Sorry.png");
const WriteSongIcon = require("../assets/WriteSong.png");
const LoveIcon = require("../assets/Love.png");
const MyDogIcon = require("../assets/MyDog.png");
const OverMoonIcon = require("../assets/OverMoon.png");
const PaperIcon = require("../assets/Paper.png");
const RaindropsIcon = require("../assets/Raindrops.png");
const SayHelloIcon = require("../assets/SayHello.png");
const SevenDaysIcon = require("../assets/SevenDays.png");
const StinkBugIcon = require("../assets/StinkBug.png");
const MenuBottom_Background = require("../assets/MenuBottom_Background.png");
const Star5 = require("../assets/Star5.png");
const Star6 = require("../assets/Star6.png");
const Star7 = require("../assets/Star7.png");
const Star8 = require("../assets/Star8.png");
const JnJ_Logo_TM = require("../assets/JnJ_Logo_TM.png");
const Group108 = require("../assets/Group108.png");
const Group111 = require("../assets/Group111.png");
const AppVideo = require("../assets/video/AppVideo.mp4");

const {width, height} = Dimensions.get('screen');
export default function SongsList({navigation}) {
  const [searchText, setSearchText] = React.useState("")
  const [payModalVisible, setPayModalVisible] = React.useState(false);
  const [selectedVideo,  setSelectedVideo] = React.useState(null);
  const [subtitle,  setSubtitle] = React.useState(null);
  const songList = [
    {
      title: 'Jeremy',
      icon: JeremyIcon,
      songVideo: AppVideo,
      active: true,
    },
    {
      title: '',
      icon: ButterflyIcon,
      songVideo: AppVideo,
      active: true,
    },
    {
      title: '',
      icon: TurtleIcon,
      active: true,
    },
    {
      title: '',
      icon: BathTimeIcon,
      active: false,
    },
    {
      title: '',
      icon: BizzyBeeIcon,
      active: false,
    },
    {
      title: '',
      icon: BrushIcon,
      active: false,
    },
    {
      title: '',
      icon: CleanupIcon,
      active: false,
    },
    {
      title: '',
      icon: VampireIcon,
      active: false,
    },
    {
      title: '',
      icon: DancingIcon,
      active: false,
    },
    {
      title: '',
      icon: DownIcon,
      active: false,
    },
    {
      title: '',
      icon: EndDayIcon,
      active: false,
    },
    {
      title: '',
      icon: FunkyIcon,
      active: false,
    },
    {
      title: '',
      icon: FiveLittleIcon,
      active: false,
    },
    {
      title: '',
      icon: GoodMorningIcon,
      active: false,
    },
    {
      title: '',
      icon: HappyBirthdayIcon,
      active: false,
    },
    {
      title: '',
      icon: WishIcon,
      active: false,
    },
    {
      title: '',
      icon: SorryIcon,
      active: false,
    },
    {
      title: '',
      icon: WriteSongIcon,
      active: false,
    },
    {
      title: '',
      icon: LoveIcon,
      active: false,
    },
    {
      title: '',
      icon: MyDogIcon,
      active: false,
    },
    {
      title: '',
      icon: OverMoonIcon,
      active: false,
    },
    {
      title: '',
      icon: PaperIcon,
      active: false,
    },
    {
      title: '',
      icon: RaindropsIcon,
      active: false,
    },
    {
      title: '',
      icon: SayHelloIcon,
      active: false,
    },
    {
      title: '',
      icon: SevenDaysIcon,
      active: false,
    },
    {
      title: '',
      icon: StinkBugIcon,
      active: false,
    },
  ];
  const onChangeSearchText = text => {
      setSearchText(text);
  }
  const onPressSong = () => {
    setPayModalVisible(true);
  }
  const onPressActiveSong = (item) => {
    setSelectedVideo(item.songVideo);
    setSubtitle(item.subtitle);
  }
  const onPressBack = () => {
    navigation.navigate('Home');
  }
  const onPressBuyNow = () => {
    navigation.navigate('Home');
  }
  const ItemView = (item, index) => {
    return (
      <View style={styles.feature} key={index}>
        <TouchableOpacity
              onPress={() => item.active === true ? onPressActiveSong(item): onPressSong()}
              style={styles.songIcon}
            > 
              <Image source={item.icon} resizeMode="contain" style={styles.songIcon}></Image>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
          <ImageBackground source={BackGroup} resizeMode="stretch" style={styles.imageBack}>
              <TouchableOpacity
                  onPress={onPressBack}
                  style={styles.backButton}
                > 
                  <Image source={Pick_Left} resizeMode="contain" style={styles.backButton}></Image>
              </TouchableOpacity>
              <View style={styles.searchInput}>
                <Image source={SearchIcon} style={styles.searchIcon} resizeMode="stretch">
                  
                </Image>
                <TextInput
                  style={styles.searchText}
                  onChangeText={onChangeSearchText}
                  value={searchText}
                  />
              </View>
            <Text  style={styles.season1}>SEASON 1</Text>
          </ImageBackground>
          <View style={styles.songsList}>
              {songList.map(ItemView)}
          </View>
          <Image source={MenuBottom_Background} resizeMode="stretch" style={styles.menuBottom_Background}></Image>
          <Text  style={styles.season2}>Season 2 Coming Soon!</Text>
          <Modal
            animationType="fade"
            transparent={true}
            visible={payModalVisible}
            onRequestClose={() => {
              setPayModalVisible(false);
            }}
          >
              <TouchableOpacity 
                activeOpacity={1} 
                style={styles.modalContainer}
                onPressOut={() => {setPayModalVisible(false)}}
              >
                <TouchableWithoutFeedback>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View  style={styles.leftSide}>
                          <Text  style={styles.modalTitle}>Uh oh!</Text>
                          <Text  style={styles.modalSubTitle}>Looks like you’re trying to unlock more songs</Text>
                          <Text  style={styles.modalContent}>You’re currently using the free verison of Jeremy and Jazzy. 
                          {"\n"}Please purchase our full version for $9.99 to gain access to:</Text>
                          <View style={styles.starContent}>
                              <Image source={Star5} resizeMode="stretch" >
                              </Image>
                              <Text style={styles.starText}>
                                  Unlock 50+ songs and interactive games!
                              </Text>
                          </View>
                          <View style={styles.starContent}>
                              <Image source={Star6} resizeMode="stretch" >
                              </Image>
                              <Text style={styles.starText}>
                              Take us on the go with offline mode!
                              </Text>
                          </View>
                          <View style={styles.starContent}>
                              <Image source={Star7} resizeMode="stretch" >
                              </Image>
                              <Text style={styles.starText}>
                              Gain Seasons 1 & 2 with future updates!
                              </Text>
                          </View>
                          <View style={styles.starContent}>
                              <Image source={Star8} resizeMode="stretch" >
                              </Image>
                              <Text style={styles.starText}>
                              Over 50+ episodes to watch!
                              </Text>
                          </View>
                          <TouchableOpacity
                            onPress={onPressBuyNow}
                            activeOpacity={0.8}
                            style={styles.buyButton}
                          >
                            <Text style={styles.buyButtonText}>
                                Buy now
                            </Text>
                          </TouchableOpacity>
                      </View>
                      <View  style={styles.rightSide}>
                          {/* <Image  source={JnJ_Logo_TM} resizeMode="contain" style={styles.jnJ_Logo_TM}></Image> */}
                          <Image  source={Group111} resizeMode="contain" style={styles.group111}></Image>
                      </View>
                      
                    </View>
                  </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
          </Modal>
      </ScrollView>
      {selectedVideo && <View style={{right: 0, bottom:0,flex:1, position: "absolute", width: width, backgroundColor: "#000", height: height  }}>
        <Video
          source={selectedVideo}
          style={{marginTop: 0, width: width, height: height-50 }}
          controls={true}
           onEnd={()=> { 
            setSelectedVideo(null);
            navigation.navigate('GameScreen');
            }
            }
          onError={() => setSelectedVideo(null)} 
        />
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    alignContent: "center",
    backgroundColor: "#FFFFFF",
  },
  menuBottom_Background : {
    width: "100%",
    height: height / 1024 * 900,
    marginTop: -130,
  },
  songsList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 0,
    marginLeft: -20,
  },
  songIcon : {
    width: width / 1364 * 232,
    marginLeft:  width / 1364 * 50,
    marginRight:  width / 1364 * 50,
  },
  season1 : {
    position: 'absolute',
    bottom: 30,
    color: "#E00E3C",
    fontSize: 40,
    fontFamily: 'Grenadine-MVB-Bold',
    left: 40,
    bottom: -10,
  },
  season2 : {
    position: 'absolute',
    color: "#E00E3C",
    fontSize: 50,
    fontFamily: 'Grenadine-MVB-Bold',
    bottom: height / 1024 * 400,
    textAlign: "center",
    alignSelf: "center",
  },
  imageBack: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: height / 1024 * 500,
  },
  backButton: {
    width: width / 1364 * 134,
    marginLeft: 20,
  },
  searchText: {
    width: "100%"
  },
  searchIcon: {
    width: width / 1364 * 36,
    height: height / 1024 * 36,
    marginLeft: 10,
    marginTop: 7
  },
  searchInput: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    width:  width / 1364 * 353,
    height:  height / 1024 * 77,
    borderRadius: width / 1364 *133,
    borderWidth: 6,
    borderColor: "#1D9BEF",
    backgroundColor: "#D9D9D9",
    top: 30,
    right: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 105,
    alignItems: "center",
    shadowColor: "#000",
    width:  width / 1364 * 1017,
    height:  height / 1024 * 928,
    shadowOpacity: 1,
    shadowRadius: 4,
    display:"flex",
    flexDirection: "row",
  },
  leftSide: {
    paddingTop: height/1024 * 80,
    paddingLeft: width/1364 * 70,
    width: "50%",
    paddingBottom: 40,
  },
  rightSide: {
    width: "50%",
    display: "flex",
    paddingTop: 45,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 70,
    textAlign: "center",
    color: "#E00E3C",
    fontFamily: "Grenadine-MVB-Bold",
  },
  modalSubTitle: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Grenadine-MVB-Bold",
    color: "#000",
  },
  modalContent: {
    fontSize: 18,
    fontFamily: "Objektiv-Mk2-Regular",
    marginTop: 30,

  },
  starContent: {
    display: "flex",
    flexDirection: "row",
    fontSize: 20,
    marginTop: 20,
  },  
  starText: {
    marginLeft: 10,
    fontFamily: "Objektiv-Mk2-Bold",
    color: "#000"
  },
  jnJ_Logo_TM: {
    width: width /1364 * 300,
    marginLeft: 0,
  },
  group111: {
    width: "110%",
    marginLeft: -35,
  },
  buyButton: {
    marginTop: 35,
    backgroundColor: "#FFAF1C",
    borderRadius: 219,
    width:  width /1364 * 418,
    height: height /1024 * 105,
    alignItems: "center",
    paddingVertical: 10,
    alignSelf: "center",
  },  
  buyButtonText: {
    fontSize: 30,
    fontWeight: "700",
    color: "#000000",
  }
});
