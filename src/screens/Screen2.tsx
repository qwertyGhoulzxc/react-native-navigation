import { FC } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";

const Screen2: FC = () => {

  const navigation = useNavigation()

  return (
<Container>
        <View>
        <Text>Screen2</Text>
          <TouchableOpacity>
            <Text onPress={()=>navigation.navigate('Profile')}>Profile</Text>
          </TouchableOpacity>
        </View>
</Container>
    )
  }

export default Screen2
