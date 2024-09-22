import { Text, StyleSheet, View, Pressable, Image } from 'react-native';
import * as React from 'react';
import { useState } from 'react';

export default function Screen02({navigation}){
  const [img, setImg] = useState(require("./vs_blue.png"));
  const [color, setColor] = useState("");
  const [sup, setSup] = useState("");
  const [value, setValue] = useState("");
  const redPhone = () =>{
    setImg(require("./vs_red.png"));
    setColor("Màu: đỏ");
    setSup("Cung cấp bởi Tiki Tradding");
    setValue("1.790.000 đ")
  };
  const bluePhone = () =>{
    setImg(require("./vs_blue.png"));
    setColor("Màu: xanh dương");
    setSup("Cung cấp bởi Tiki Tradding");
    setValue("1.790.000 đ")
  };
  const blackPhone = () =>{
    setImg(require("./vs_black.png"));
    setColor("Màu: đen");
    setSup("Cung cấp bởi Tiki Tradding");
    setValue("1.790.000 đ")
  };
  const silverPhone = () =>{
    setImg(require("./vs_silver.png"));
    setColor("Màu: bạc");
    setSup("Cung cấp bởi Tiki Tradding");
    setValue("1.790.000 đ")
  };
  return(
    <View style={{
      flex:1,
      backgroundColor:"#C4C4C4"
    }}>
        <View style={{
          flex:3,
          backgroundColor:"#FFFFFF",
          flexDirection:'row'
        }}>
            <View style={{
              flex:3
            }}>
              <Image
                source={img}
                style={{
                  width:112,
                  height:132,
                  marginLeft: 4
                }}
                resizeMode="contain"
              /> 
            </View>
            <View style={{
              flex:7,
              flexDirection:"column"
            }}>
              <Text style={{marginLeft:27, marginTop:17, fontSize:15, fontWeight:400, fontFamily:"Roboto", width:164, height:36 }}>
                  Điện Thoại Vsmart Joy 3 - Hàng chính hãng
              </Text>
              <Text style={styles.textShow} >
                  {color}
              </Text>
              <Text style={styles.textShow} >
                  {sup}
              </Text>
              <Text style={styles.price} >
                  {value}
              </Text>
            </View>
        </View>
        <View style={{
          flex:8,
        }}>
            <View style={{
            flex:1,
            }}>
              <Text style={{marginLeft: 17, marginTop:10, fontSize:18, fontWeight:400, fontFamily:"Roboto"}}>
                Chọn một màu bên dưới:
              </Text>
            </View>
            <View style={{
              flex:9,
              alignItems:"center"
            }}>
                <Pressable  
                  onPress={silverPhone}
                  style={{width:75, height:73, backgroundColor:"#C5F1FB"}}/>
                <Pressable  
                  onPress={redPhone}
                  style={{marginTop: 8,width:75, height:73, backgroundColor:"#F30D0D"}}/>
                <Pressable  
                  onPress={blackPhone}
                  style={{marginTop: 8,width:75, height:73, backgroundColor:"#000000"}}/>
                <Pressable  
                  onPress={bluePhone}
                  style={{marginTop: 8,width:75, height:73, backgroundColor:"#234896"}}/>
                <Pressable
                onPress={() => navigation.navigate('Xong', {image: img})}
                 style={{width: 332,
                        height: 44,
                        marginTop:18,
                        marginLeft: 18,
                        borderWidth: 1,
                        borderRadius:10,
                        borderColor:"#CA1536",
                        justifyContent:"center", 
                        alignItems:"center",
                        backgroundColor:"#1952E294"
                        }}
                        
                        >
                <Text style={{ fontSize:20, fontWeight:700, fontFamily:"Roboto", alignContent:"center", color:"#F9F2F2" }}>
                XONG     
                  </Text>
                </Pressable>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textShow:{
     marginLeft: 27,
     marginTop:13, 
     fontSize:15, 
     fontWeight:700, 
     fontFamily:"Roboto"
  },
  price:{
     marginLeft: 27,
     marginTop:13, 
     fontSize:18, 
     fontWeight:700, 
     fontFamily:"Roboto"
  },
});