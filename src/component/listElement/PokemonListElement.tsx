import * as React from 'react';
import { Text, View } from 'react-native';

import { style, textStyle } from '../../style/component/pokemonListElementStyle'

interface pokemonListElementProps {
    name: string,
    url: string
}

const PokemonListElement = (props: pokemonListElementProps) => {
  return (
    <View style={style.container}>
      <Text style={textStyle.pokename}>{props.name}</Text>
      <Text style={{fontSize: 9}}>{props.url}</Text>
    </View>
  );
};

export default PokemonListElement;