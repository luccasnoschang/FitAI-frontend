import { Link } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from '../constants/colors';

export default function Index() {
  return (
    
    <View style={styles.container}>

      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.appName}>FIT
        <Text style={{ color: colors.primaryBlue }}> AI</Text>
      </Text>
      
      <Text style={styles.title}>Sua dieta personalizada, criada por inteligência artificial.</Text>
      <Text style={styles.subTitle}>Basta responder algumas perguntas e receba seu plano alimentar em segundos.</Text>

      <Link href="/step" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>COMEÇAR</Text>
        </Pressable>
      </Link>

    </View>

  )
}

const styles = StyleSheet.create({
  
  container:{
    backgroundColor: colors.background,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:40,
    paddingRight:40,
    paddingBottom:30,
  },

  logo:{
    height:90,
    width:90,
    marginBottom:-5,
  },

  appName:{
    fontSize:30,
    color: colors.white,
    fontWeight:'bold',
  },

  title:{
    fontSize:40,
    fontWeight:600,
    color: colors.white,
    marginTop:40,
  },

  subTitle:{
    color: colors.gray,
    fontSize:15,
    fontWeight:600,
    marginTop:30,
    marginBottom:30,
  },

  button:{
    backgroundColor:colors.primaryBlue,
    width:310,
    paddingLeft:100,
    paddingRight:100,
    paddingTop:18,
    paddingBottom:18,
    borderRadius:10,
  },

  buttonText:{
    color: colors.white,
    fontWeight:700,
    fontSize:20,
  },



})
