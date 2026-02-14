import { View,Text,Button,StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

const router = useRouter()

export default function Square(){
    // พท.สี่เหลี่ยม = กว้าง * ยาว
    // output = input * input
    //   50   =  5 * 10
    const [width, setWidth] = useState(0) // width = 20, setWidth(20)
    const [lenght, setLenght] = useState(0)
    const [area, setArea] = useState(0)

    function calSquare(){
        let result = width * lenght
        setArea(result)
    }    

    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>คำนวณพื้นที่สี่เหลี่ยม</Text>
            {/* <Button title="กลับหน้าแรก" /> */}

            <Text>กว้าง {width} ซม. ยาว {lenght} ซม. พื้นที่คือ {area} ตร.ซฒ. </Text>

            <TextInput 
                style={styles.textInput} 
                placeholder="กรอกความกว้าง" 
                value={width.toString()}
                onChangeText={(w) => setWidth(Number(w)) }
                
            />
            <TextInput 
                value={lenght.toString()}
                onChangeText={(l) => setLenght(Number(l))}
                style={styles.textInput} 
                placeholder="กรอกความยาว"
            />

            <Button title="คำนวณ" onPress={() => calSquare() } />

             <Button title="ไปหน้าหลัก" onPress={() => router.navigate('/')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#AFD7F6',
        justifyContent:"center",
        alignItems:"center",
        gap: 20
    },
    mainTitle:{
        fontSize:20,
        fontWeight:"700"
    },
    textInput:{
        borderWidth: 1,
        width: "80%",
        borderColor:"green"
    }
})