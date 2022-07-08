import React, { useState} from 'react';
import { Dimensions } from 'react-native';
import { ImageBackground, Image, StyleSheet, Button, 
  TouchableOpacity, TouchableWithoutFeedback, Text, View } from 'react-native';
import { Switch } from 'react-native-switch';
import Modal from 'react-native-modal';
const BackGroup = require("../assets/BackGroup.png");
const Information_Button = require("../assets/Information_Button.png");
const Settings_Button = require("../assets/Settings_Button.png");
const Songs_Button_1 = require("../assets/Songs_Button_1.png");
const Stories_Button_1 = require("../assets/Stories_Button_1.png");
const FB_Black = require("../assets/FB_Black.png");
const Twitter_Black = require("../assets/Twitter_Black.png");
const Insta_Black = require("../assets/Insta_Black.png");

const {width, height} = Dimensions.get('screen');

export default function Home({navigation}) {
  const onPressStory = () => alert("Story pressed");
  const onPressSongs = () => navigation.navigate('SongsList');
  const onPressSettingButton = () => setSettingModalVisible(true);
  const onPressInfoButton = () => setInfoModalVisible(true);
  const [isSettingModalVisible, setSettingModalVisible] = useState(false);
  const [isInfoModalVisible, setInfoModalVisible] = useState(false);
  const [isSetSound, setSound] = useState(true);
  const [isSetMusic, setMusic] = useState(true);
  const [isSetOfflineMode, setOfflineMode] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={BackGroup} resizeMode="stretch" style={styles.imageBack}>
          <View style={styles.control}>
            <TouchableOpacity
              onPress={onPressInfoButton}
            > 
              <Image source={Information_Button} style={styles.info}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressSettingButton}
            > 
              <Image source={Settings_Button}style={styles.setting}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              onPress={onPressStory}
            > 
              <Image source={Stories_Button_1} resizeMode="stretch" style={styles.button}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressSongs}
            > 
              <Image source={Songs_Button_1} resizeMode="stretch" style={styles.button}></Image>
            </TouchableOpacity>
          </View>
      </ImageBackground>
      <Modal 
        testID={'modalSetting'}
        isVisible={isSettingModalVisible}
        swipeDirection="left"
        onSwipeComplete={() => setSettingModalVisible(false)}
        onBackButtonPress={() => setSettingModalVisible(false)}
        hideModal={() => setSettingModalVisible(false)}
        animationIn="slideInLeft"
        animationInTiming={800}
        animationOut="slideOutLeft"
        animationOutTiming={800}
        backdropTransitionInTiming={800}
        backdropTransitionOutTiming={800}
        onBackdropPress={() => setSettingModalVisible(false)}
        style={styles.sideModal}
      >
        <TouchableOpacity 
            activeOpacity={1} 
            style={styles.modalContainer}
            onPressOut={() => {setSettingModalVisible(false)}}
          >
            <TouchableWithoutFeedback>
                <View style={styles.settingModalView}>
                  <Text  style={styles.modalTitle}>Settings</Text>
                  <View style={styles.settingItem}>
                      <Text style={styles.settingText}>
                          Sound
                      </Text>
                      <View style={styles.switch}>
                        <Switch
                          value={isSetSound}
                          onValueChange={(val) => setSound(val)}
                          disabled={false}
                          activeText={'On'}
                          inActiveText={'Off'}
                          circleSize={36}
                          barHeight={30}
                          circleBorderWidth={4}
                          circleBorderColor={"#000"}
                          backgroundActive={'#E00E3C'}
                          backgroundInactive={'#D9D9D9'}
                          circleActiveColor={'#D9D9D9'}
                          circleInActiveColor={'#D9D9D9'}
                          renderInsideCircle={() => <View style={styles.switchButton}></View>} // custom component to render inside the Switch circle (Text, Image, etc.)
                          changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                          innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                          outerCircleStyle={{color: "#000"}} // style for outer animated circle
                          renderActiveText={false}
                          renderInActiveText={false}
                          switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                          switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                          switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                          switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                        />
                      </View>
                  </View>
                  <View style={styles.settingItem}>
                      <Text style={styles.settingText}>
                          Music
                      </Text>
                      <View style={styles.switch}>
                        <Switch
                          value={isSetMusic}
                          onValueChange={(val) => setMusic(val)}
                          disabled={false}
                          activeText={'On'}
                          inActiveText={'Off'}
                          circleSize={36}
                          barHeight={30}
                          circleBorderWidth={4}
                          circleBorderColor={"#000"}
                          backgroundActive={'#E00E3C'}
                          backgroundInactive={'#D9D9D9'}
                          circleActiveColor={'#D9D9D9'}
                          circleInActiveColor={'#D9D9D9'}
                          renderInsideCircle={() => <View style={styles.switchButton}></View>} // custom component to render inside the Switch circle (Text, Image, etc.)
                          changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                          innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                          outerCircleStyle={{color: "#000"}} // style for outer animated circle
                          renderActiveText={false}
                          renderInActiveText={false}
                          switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                          switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                          switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                          switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                        />
                      </View>
                  </View>
                  <View style={styles.settingItem}>
                      <Text style={styles.settingText}>
                        Offine Mode
                      </Text>
                      <View style={styles.switch}>
                        <Switch
                          value={isSetOfflineMode}
                          onValueChange={(val) => setOfflineMode(val)}
                          disabled={false}
                          activeText={'On'}
                          inActiveText={'Off'}
                          circleSize={36}
                          barHeight={30}
                          circleBorderWidth={4}
                          circleBorderColor={"#000"}
                          backgroundActive={'#E00E3C'}
                          backgroundInactive={'#D9D9D9'}
                          circleActiveColor={'#D9D9D9'}
                          circleInActiveColor={'#D9D9D9'}
                          renderInsideCircle={() => <View style={styles.switchButton}></View>} // custom component to render inside the Switch circle (Text, Image, etc.)
                          changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                          innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                          outerCircleStyle={{color: "#000"}} // style for outer animated circle
                          renderActiveText={false}
                          renderInActiveText={false}
                          switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                          switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                          switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                          switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                        />
                      </View>
                  </View>
                  <View style={styles.settingItem}>
                      <Text style={styles.settingText}>
                        Help
                      </Text>
                  </View>
                  <View style={styles.settingItem}>
                      <Text style={styles.settingText}>
                        Share
                      </Text>
                  </View>
                  <View style={styles.settingItem}>
                    <Text style={styles.settingText}>
                      Review
                    </Text>
                  </View>
              </View>
            </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <Modal 
        testID={'modalInfo'}
        isVisible={isInfoModalVisible}
        swipeDirection="left"
        onSwipeComplete={() => setInfoModalVisible(false)}
        onBackButtonPress={() => setInfoModalVisible(false)}
        hideModal={() => setInfoModalVisible(false)}
        animationIn="slideInLeft"
        animationInTiming={800}
        animationOut="slideOutLeft"
        animationOutTiming={800}
        backdropTransitionInTiming={800}
        backdropTransitionOutTiming={800}
        onBackdropPress={() => setInfoModalVisible(false)}
        style={styles.sideModal}
      >
        <TouchableOpacity 
            activeOpacity={1} 
            style={styles.modalContainer}
            onPressOut={() => {setInfoModalVisible(false)}}
          >
            <TouchableWithoutFeedback>
                <View style={styles.infoModalView}>
                  <Text  style={styles.modalTitle}>Information</Text>
                  <View style={styles.infoContent}>
                      <Text style={styles.infoParagraph}>
                          <Text style={{fontWeight:"bold"}}>Jeremy and Jazzy</Text> is an animated musical adventure series about song and story creation for 3-7 year olds that parents will love just as much. It’s about how feelings become songs, songs become stories, and how music, friendship and collaboration create joy.
                      </Text>
                      <Text style={styles.infoParagraph}>
                        It’s here <Text style={{fontWeight:"bold"}}>Jeremy</Text> (a storytelling songwriter), his best friend <Text style={{fontWeight:"bold"}}>Jazzy</Text> (co-vocalist and dancing queen), Stu (a Studio Rat who loves to listen and help), and Tunebug (a musical recording studio on wheels) make music with the Kids-At-Home.
                      </Text>
                      <Text style={styles.infoParagraph}>
                      <Text style={{fontWeight:"bold"}}>Each 55 x 2 minute Jeremy and Jazzy Short</Text> invites viewers to sing, dance and discover stories in songs and wonder in the world.
                      </Text>
                      <Text style={styles.infoParagraph}>
                      <Text style={{fontWeight:"bold"}}>Each 2 x 11 minute Jeremy and Jazzy Special</Text> invites viewers to create a song with Jeremy and Jazzy and join them on an adventure where their song (and the characters in it) comes to life in an animated musical! Along the way, they meet celebrity musical guests who join the chorus. 
                      </Text>
                      <Text style={styles.infoParagraph}>
                      <Text style={{fontWeight:"bold"}}>The goal</Text> is to bring kids joy by participating in music.
                      </Text>
                      <Text style={styles.infoParagraph}>
                      <Text style={{fontWeight:"bold"}}>The series stars</Text> award-winning musicians Jeremy Fisher (Jeremy) and Aiza Ntibarikure (Jazzy), plus celebrity musical guests. Series music is written and composed by Jeremy Fisher, who also acts as an executive producer. Aiza Ntibarikure is the series co-lead and acts as a consulting producer. A JUNO-nominated afro-pop singer-songwriter, Aiza is also an accomplished actor and host.
                      </Text>
                      <Text style={styles.infoParagraph}>
                      <Text style={{fontWeight:"bold"}}>Jeremy and Jazzy</Text> is a 360° children’s entertainment brand which includes music, television, game, book, live performance entertainment, and e-learning, available for worldwide distribution in Fall 2022. Vérité Films holds all rights associated with the brand.
                      </Text>
                  </View>
                  <View style={styles.socialIcons}>
                    <Image source={FB_Black} resizeMode="stretch" style={styles.socialIcon}></Image>
                    <Image source={Insta_Black} resizeMode="stretch" style={styles.socialIcon}></Image>
                    <Image source={Twitter_Black} resizeMode="stretch" style={styles.socialIcon}></Image>
                  </View>
                  
                </View>
            </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    alignContent: "center",
  },
  switchButton: {
    width: "130%",
    height: "130%",
    borderColor: "#000",
    backgroundColor: "#D9D9D9",
    borderRadius: 140,
    borderWidth: 5
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'flex-start',

  },
  switch: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  settingModalView: {
    marginTop: -44,
    marginLeft: -45,
    backgroundColor: "white",
    paddingLeft: 30,
    paddingRight: 70,
    alignItems: "flex-start",
    width: width / 1364 * 509,
    height: "100%",
    borderTopRightRadius: width / 1364 * 105,
    borderBottomRightRadius: width / 1364 * 105,
  },
  infoModalView: {
    marginTop: -44,
    marginLeft: -45,
    backgroundColor: "white",
    paddingLeft: 30,
    paddingRight: 20,
    alignItems: "flex-start",
    width: width / 1364 * 509,
    height: "100%",
    borderTopRightRadius: width / 1364 * 105,
    borderBottomRightRadius: width / 1364 * 105,
  },
  modalTitle: {
    color: "#04A586",
    fontSize: 40,
    fontFamily: "Grenadine-MVB-Bold",
    marginBottom: 0,
    marginTop: 10,
  },
  control: {
    marginTop: 33,
    marginLeft: 23,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  buttonGroup: {
    marginTop:  height / 1024 * 700,
    display: "flex",
    // position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    width:  width / 1364 * 374,
    height: height / 1024 * 95
  },
  imageBack: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    alignContent: "center",
  },
  info: {
    width:  width / 1364 * 55,
    height: height / 1024 * 55,
  },
  setting: {
    width:  width / 1364 * 55,
    height: height / 1024 * 55,
    marginLeft: 20
    
  },
  jnj: {
    width: 547,
    height: 400,
    marginTop: 80,
    alignItems: "center"
  },
  settingItem: {
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
  },
  settingText: {
    fontSize: 20,
    fontFamily: "Grenadine-MVB-Bold",
    color: "#000",
  },
  sideModal: {
    height: "100%",
    position: 'absolute',
  },
  infoContent: {
    width: "100%",
  },  
  infoParagraph: {
    fontSize: 12,
    fontFamily: "Objektiv-Mk2-Regular",
    flexWrap: "wrap",
    marginTop: 7,
    lineHeight: 13,
    color: "#000"
  },
  socialIcons: {
    marginTop: 15,
    marginBottom: 20,
    marginLeft: -20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  socialIcon: {
    marginLeft: 20,
  }
});
