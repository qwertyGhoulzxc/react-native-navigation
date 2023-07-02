import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";

const Screen1: FC = () => {
  const navigation = useNavigation();

  const handleNavigateToScreen = () => {
    navigation.navigate("Screen2");
  };

  // @ts-ignore
  return (
    <Container showArrow={false}>
    <View>
      <Text>Screen1</Text>
      <TouchableOpacity onPress={handleNavigateToScreen}>
        <Text>перейти на скрин 2</Text>
      </TouchableOpacity>
    </View>
    </Container>
  );
};

export default Screen1;
