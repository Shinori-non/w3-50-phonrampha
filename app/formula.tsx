import { View,Text,Button,StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router"; 
const router = useRouter()   

export default function Square(){
    // พท.สี่เหลี่ยม = กว้าง * ยาว
    // output = input * input
    //   50   =  5 * 10
    const [width, setWidth] = useState(0) // width = 20, setWidth(20)
    const [area, setArea] = useState(0)

    function calSquare(){
        let result = width / 28.3495
        setArea(result)
    }    

    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>คำนวณกรัมเป็นออนซ์</Text>
            {/* <Button title="กลับหน้าแรก" /> */}

            <Text>กรัมคือ {width}   ออนซ์คือ {area}  </Text>

            <TextInput 
                style={styles.textInput} 
                placeholder="กรอกกรัม" 
                value={width.toString()}
                onChangeText={(w) => setWidth(Number(w)) }
                
            />

            <Button title="คำนวณ" onPress={() => calSquare() } />
            <Button title="ไปหน้า1" onPress={() => router.navigate('/')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"white",
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