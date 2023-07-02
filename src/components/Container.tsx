import { FC, PropsWithChildren, ReactChildren } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgProfile from "../assets/svg/SvgProfile";

interface IContainerProps{
  showArrow?:boolean
}

const Container: FC<PropsWithChildren<IContainerProps>> = ({children,showArrow=true}) => {
  const navigation = useNavigation()

    return (
        <View>
         <View style={{paddingVertical:12,paddingLeft:10}}>
           {showArrow&& <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <Text>{"<-"}</Text>
              </TouchableOpacity>}
            </View>
          <View style={{paddingHorizontal:16}}>
          {children}
          </View>
        </View>
    )
  }

export default Container
