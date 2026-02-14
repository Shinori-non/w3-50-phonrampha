import { View,Text,Button,StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function App(){

    const router = useRouter()

    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>ยินดีต้อนรับคับ </Text>
            <Button title="ไปหน้าคำนวณพื้นที่สี่เหลี่ยม" onPress={() => router.navigate('/square')} />

            <Button title="ไปหน้าคำนวณกรัมเป็นออนซ์" onPress={() => router.navigate('/formula')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"lightsalmon",
        justifyContent:"center",
        alignItems:"center",
        gap: 20
    },
    mainTitle:{
        fontSize:20,
        fontWeight:"700"
    },
    Button:{
        borderWidth: 1,
        width: "80%",
        borderColor:"green"
    }
})