import { View,Text,Button,StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function App(){

    const router = useRouter()

    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>ยินดีต้อนรับคับ </Text>
            <Button title="ไปหน้าที่ 2" onPress={() => router.navigate('/square')} />
            <Button title="ไปหน้าที่ 3" onPress={() => router.navigate('/formula')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"lightsalmon",
        justifyContent:"center",
        alignItems:"center"
    },
    mainTitle:{
        fontSize:20,
        fontWeight:"700"
    }
})