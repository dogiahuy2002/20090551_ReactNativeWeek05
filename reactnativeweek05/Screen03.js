import { Text, StyleSheet, View, Pressable, Image } from 'react-native';
import * as React from 'react';

export default function Screen03({route, navigation }){
  const {image} = route.params;
  return(
    <View style={{
      flex:1,
      backgroundColor:"#FFFFFF"
    }}>
        <View style={{
          flex:6,
        }}>
            <Image source={image}
                style={{
                  width:260,
                  height: 260,
                  marginLeft: 29
                }}
                resizeMode="contain"
            />
        </View>
        <View style={{
          flex:5,
        }}>
              <View style={{
                flex:6,
                flexDirection:"column"
              }}>
                  <Text style={{marginLeft:22, fontSize:15, fontWeight:400, fontFamily:"Roboto" }}>
                  Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                  </Text>
                  <View style={{flexDirection:'row', marginTop:15}}>
                      <Image source={require("./star.png")}
                        style={{
                          width:25,
                          height:25,
                          marginLeft: 15
                        }}
                        resizeMode="contain"
                      />
                      <Image source={require("./star.png")}
                        style={{
                          width:25,
                          height:25,
                          marginLeft: 5
                        }}
                        resizeMode="contain"
                      />
                      <Image source={require("./star.png")}
                        style={{
                          width:25,
                          height:25,
                          marginLeft: 5
                        }}
                        resizeMode="contain"
                      />
                      <Image source={require("./star.png")}
                        style={{
                          width:25,
                          height:25,
                          marginLeft: 5
                        }}
                        resizeMode="contain"
                      />
                      <Image source={require("./star.png")}
                        style={{
                          width:25,
                          height:25,
                          marginLeft: 5
                        }}
                        resizeMode="contain"
                      />
                      <Text style={{marginLeft:25, fontSize:15, fontWeight:400, fontFamily:"Roboto", alignContent:"center" }}>
                (Xem 828 đánh giá)
                  </Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{marginTop:20 ,marginLeft:20, fontSize:18,     fontWeight:700, fontFamily:"Roboto", alignContent:"center" }}>
                        1.790.000 đ
                      </Text>
                      <Text style={{marginTop:20 ,marginLeft:60, fontSize:15,     fontWeight:700, fontFamily:"Roboto", alignContent:"center", color:"#00000094" }}>
                      <del>
                        1.790.000 đ
                      </del>
                      </Text>
                  </View>
                  <Text style={{marginTop:10 ,marginLeft:20, fontSize:12,     fontWeight:700, fontFamily:"Roboto", color:"#FA0000" }}>
                      Ở ĐÂU RẺ HƠN HOÀN TIỀN          ?
                      </Text>
              </View> 
              <View style={{
                flex:4,
              }}>
                <Pressable style={{width: 332,
                        height: 34,
                        marginTop:-5,
                        marginLeft: 18,
                        borderWidth: 1,
                        borderRadius:10,
                        borderColor:"gray",
                        justifyContent:"center", 
                        alignItems:"center"
                        }}
                        onPress={() => navigation.navigate('Details')}
                        >
                <Text style={{ fontSize:15, fontWeight:400, fontFamily:"Roboto", alignContent:"center" }}>
                4 MÀU-CHỌN MÀU        >
                  </Text>
                </Pressable>

                <Pressable style={{width: 332,
                        height: 44,
                        marginTop:18,
                        marginLeft: 18,
                        borderWidth: 1,
                        borderRadius:10,
                        borderColor:"gray",
                        justifyContent:"center", 
                        alignItems:"center",
                        backgroundColor:"#CA1536"
                        }}
                        >
                <Text style={{ fontSize:20, fontWeight:700, fontFamily:"Roboto", alignContent:"center", color:"#F9F2F2" }}>
                CHỌN MUA       
                  </Text>
                </Pressable>
              </View> 
        </View>  
    </View>
  );
}