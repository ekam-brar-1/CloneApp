import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container} >
      <View style={styles.header}>
        <Image  style={styles.image} source={require('./assets/backbutton.png')} />
        <View style={styles.container2}>
        <Text style={styles.headerText}>Username</Text>
        <Text style={styles.lighttext}>user_name</Text>
        </View>
     <Image  style={styles.image} source={require('./assets/setting.png')} />
      </View>
      <View style={styles.container3}>
    <View style={styles.profileCircle}>
      <Image style={styles.profile} source={require('./assets/profile.jpeg')} />
      </View>

      <View style={styles.statisticssContainer}>
        <View style={styles.statistics}>
          <Text style={styles.statisticsNumber}>53</Text>
          <Text style={styles.statisticsLabel}>Posts</Text>
        </View>
        <View style={styles.statistics}>
          <Text style={styles.statisticsNumber}>12</Text>
          <Text style={styles.statisticsLabel}>Members</Text>
        </View>
        <View style={styles.statistics}>
          <Text style={styles.statisticsNumber}>1</Text>
          <Text style={styles.statisticsLabel}>Admins</Text>
        </View>
      </View>
    </View>
    <View >
      <Text style={styles.name}>group name</Text>
    </View>

    <View >
     <Text style={styles.description}>this is a description</Text>
    </View>
    <View >
    <Text style={styles.description}>A good design</Text>
    </View>
    <View style={styles.followbutton}>
      <Text style={styles.followbuttontext}>Follow</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },

  image:{
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
   alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lighttext: {
    fontSize: 16,
    color: '#666',
  },
  container2:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal
    : 20,
  },
  profileCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderWidth: 2,
    borderColor: 'orange',
  },
  profile: {
    width: 70,
    height: 70,
    borderRadius:35 ,
    resizeMode: 'contain',
  },
  circleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statisticssContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  statistics: {
    alignItems: 'center',
  },
  statisticsNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statisticsLabel: {
    fontSize: 14,
    color: '#666',
  },
  name: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
  
    paddingHorizontal: 20,
  },
  description: {
    paddingHorizontal: 20,
   
    fontSize: 16,
    fontWeight: 'heavy',
  },
  followbutton: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 20,
  
},
followbuttontext: {
    textAlign: 'center',
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,}
});

export default App;
/* profile image link  https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&psig=AOvVaw0ac2uT-cIeaeiuxp1hQW7a&ust=1737219137685000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCFquKb_YoDFQAAAAAdAAAAABAE
*/