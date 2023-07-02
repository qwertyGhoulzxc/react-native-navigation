import { FC } from 'react'
import { Text, View } from 'react-native'
import Container from "../components/Container";
import { useNavigation } from "@react-navigation/native";

const HomeScreen: FC = () => {
  const navigator = useNavigation()
    return (
      <Container>
        <View>
        <Text>HomeScreen</Text>
          <Text onPress={()=>navigator.navigate('Profile')}>profile</Text>
        </View>
      </Container>
    )
  }

export default HomeScreen
