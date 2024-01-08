import react from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const klikSini = () => alert('Halo BRO!!!');
const link = 'https://www.linkedin.com/in/arif-stand-88770a275/';
const linkicon = 'https://dribbble.com/rvestp';

const App = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'seashell', flex: 1 }}>
        <Text
          style={{
            marginTop: 75,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'midnightblue',
            fontFamily: 'Calibri',
            fontSize: 25,
          }}>
          Hello!!
        </Text>
        <View
          style={{
            backgroundColor: 'seashell',
            padding: 30,
            alignItems: 'center',
          }}>
          <Image
            style={{ width: 200, height: 200, borderRadius: 100, marginTop: 5 }}
            source={require('./assets/Profile.jpg')}></Image>
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'midnightblue',
            fontFamily: 'Calibri',
            fontSize: 25,
          }}>
          Arif Stand Pramudya
        </Text>
        <Text
          style={{
            marginStart: 5,
            padding: 5,
            fontWeight: '',
            textAlign: 'center',
            color: 'midnightblue',
            fontFamily: 'Calibri',
            fontSize: 15,
          }}>
          Saya siswa kelas 12 di SMK Telkom Purwokerto Jurusan Rekayasa
          Perangkat Lunak
        </Text>
        <View
          style={{
            marginTop: 5,
            padding: 10,
            alignItems: 'center',
            borderRadius: 50,
          }}>
          <Button
            title="Contact Me"
            color="skyblue" onPress={()=>Linking.openURL(link)}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'midnightblue',
            fontFamily: 'Calibri',
            fontSize: 25,
          }}>
          My Recent Project
        </Text>
        <View
          style={{
            backgroundColor: 'seashell',
            padding: 30,
            alignItems: 'center',
          }}>
          <Image
            style={{ width: 325, height: 250, borderRadius: 15 }}
            source={require('./assets/ProductBoxMockup.png')}></Image>
        </View>
        <View style={{ marginLeft: 20, flexDirection: 'row' }}>
          <View style={{ width: 230 }}>
            <Text style={styles.boldFont}>Mock Up Box</Text>
            <Text style={styles.normalFont}>Design</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button} onPress={()=>Linking.openURL(linkicon)}

            >
              <Image
                style={{ width: 20, height: 20, borderRadius: 10, padding:15 }}
                source={require('./assets/linkicon.jpg')}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'seashell',
            padding: 30,
            alignItems: 'center',
          }}>
          <Image
            style={{ width: 325, height: 250, borderRadius: 15 }}
            source={require('./assets/RetowApp.jpg')}></Image>
        </View>
        <View style={{ marginLeft: 20, flexDirection: 'row' }}>
          <View style={{ width: 230 }}>
            <Text style={styles.boldFont}>ReTow App</Text>
            <Text style={styles.normalFont}>UI / UX Design</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button} onPress={()=>Linking.openURL(linkicon)}
            >
              <Image
                style={{ width: 20, height: 20, borderRadius: 10, padding:15 }}
                source={require('./assets/linkicon.jpg')}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'seashell',
            padding: 30,
            alignItems: 'center',
          }}>
          <Image
            style={{ width: 325, height: 250, borderRadius: 15 }}
            source={require('./assets/TravelXApp.jpg')}></Image>
        </View>
        <View style={{ marginLeft: 20, marginBottom:50,flexDirection: 'row' }}>
          <View style={{ width: 230 }}>
            <Text style={styles.boldFont}>TravelX App</Text>
            <Text style={styles.normalFont}>UI / UX Design</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button} onPress={()=>Linking.openURL(linkicon)}
            >
              <Image
                style={{ width: 20, height: 20, borderRadius: 10, padding:15 }}
                source={require('./assets/linkicon.jpg')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boldFont: {
    marginStart: 30,
    marginEnd:5,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'midnightblue',
    fontFamily: 'Calibri',
    fontSize: 25,
  },
  normalFont: {
    marginStart: 30,
    marginTop: -2,
    fontWeight: '',
    textAlign: 'left',
    color: 'slategray',
    fontFamily: 'Calibri',
    fontSize: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'darksalmon',
    padding: 10,
    borderRadius: 100,
    marginTop:10,
    marginStart:45,
    marginEnd:10,
  },
});

export default App;
