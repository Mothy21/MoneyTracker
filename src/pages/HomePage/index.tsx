import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import {
  Kaca,
  Menu1,
  Menu2,
  Menu3,
  Panah1,
  Panah2,
  Spahgeti,
} from '../../assets/icon';
import {getDatabase, ref, onValue} from 'firebase/database';
import {TextInput} from '../../components/molecules';

const HomePage = ({navigation, route}) => {
  const {uid} = route.params;
  const [user, setUser] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, 'users/' + uid);
    onValue(userRef, snapshot => {
      const data = snapshot.val();
      setUser(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>
        <View style={styles.containerWithPhoto}>
          <View>
            <Text style={styles.appTitle}>Italianoo'S Food</Text>
            <Text style={styles.appSubTitle}>Hi, {user.fullName}</Text>
          </View>
          <Image source={{uri: user.photo}} style={styles.avatar} />
        </View>
        <Gap height={16} />
        <View>
          <TextInput style={styles.input} placeholder="      Find Your Food" />
          <Kaca style={styles.kaca} />
        </View>
        <View>
          <Text style={styles.title}>Recommendation Dish </Text>
          <View style={styles.makanan}>
            <Spahgeti style={styles.spahgeti} />
            <Text style={styles.text}>Spaghetti is a long, thin, solid,</Text>
            <Text style={styles.text1}>
              cylindrical pasta. It is a staple food
            </Text>
            <Text style={styles.text2}>
              of traditional Italian cuisine. Like
            </Text>
            <Text style={styles.text3}>other pasta, spaghetti is made of</Text>
            <Text style={styles.text4}>milled wheat, water, and sometimes</Text>
            <Text style={styles.text5}>
              enriched with vitamins and minerals.
            </Text>
            <Text style={styles.text6}>-Spaghetti</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.subTitle}>Menu'S</Text>
          <View style={styles.line} />
          <View style={styles.menu}>
            <TouchableOpacity activeOpacity={0.3}>
              <Panah1 style={styles.panah1} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.3}>
              <Panah2 style={styles.panah2} />
            </TouchableOpacity>
            <Menu1 style={styles.menu1} />
            <Menu2 style={styles.menu2} />
            <Menu3 style={styles.menu3} />
          </View>
        </View>
        <View style={styles.button}>
          <Button
            label="Add To Chart"
            onPress={() => navigation.navigate('AddTransaction')}
          />
          <Gap height={18} />
          <Button
            label="Log Out"
            onPress={() => navigation.navigate('SignIn')}
            color="red"
          />
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#ab8a54',
  },
  title: {
    position: 'absolute',
    marginTop: 5,
    paddingVertical: 8,

    borderColor: '#20232a',
    borderRadius: 25,
    backgroundColor: '#E3FFFA',
    color: '#20232a',
    textAlign: 'center',
    height: 200,
    width: 380,
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  makanan: {
    flexDirection: 'row',
  },
  spahgeti: {
    top: 10,
  },
  text: {
    top: 50,
    textAlign: 'left',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  text1: {
    textAlign: 'left',
    top: 65,
    right: 185,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  text2: {
    textAlign: 'left',
    top: 80,
    right: 400,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  text3: {
    textAlign: 'left',
    top: 95,
    right: 600,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  text4: {
    textAlign: 'left',
    top: 110,
    right: 800,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  text5: {
    textAlign: 'left',
    top: 125,
    right: 1020,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  text6: {
    textAlign: 'left',
    top: 150,
    right: 1150,
    fontSize: 30,
    color: '#7c8e8c',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  input: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    width: 375,
  },
  kaca: {
    bottom: 20,
    left: 320,
  },
  pageContainer: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    borderRadius: 25,
    backgroundColor: '#ab8a54',
    marginTop: 20,
    flex: 1,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 12,
  },

  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginVertical: 18,
    bottom: 10,
  },
  panah1: {
    top: 45,
  },
  panah2: {
    left: 310,
    top: 45,
  },
  menu: {
    flexDirection: 'row',
  },
  menu1: {
    right: 20,
  },
  menu2: {
    right: 50,
  },
  menu3: {
    right: 80,
  },
  containerWithPhoto: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#020202',
  },
  appSubTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    color: '#000000',
    fontStyle: 'italic',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  button: {
    position: 'absolute',
    borderRadius: 25,
    backgroundColor: '#E3FFFA',
    padding: 40,
    top: 600,
    width: 375,
  },
});
