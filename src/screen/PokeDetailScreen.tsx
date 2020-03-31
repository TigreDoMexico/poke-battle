import * as React from 'react';
import { View, Text } from 'react-native';

export interface ScreenProps {
}

export default class PokeDetailScreen extends React.Component<ScreenProps, any> {
  constructor(props: ScreenProps) {
    super(props);
  }

  public render() {
    return (
      <View>
         <Text>App</Text>
      </View>
    );
  }
}
