import * as React from 'react';
import { View, Text, FlatList } from 'react-native';

import { getGeneration } from '../connection/axios'

import PokemonListElement from '../component/listElement/PokemonListElement'

export interface ScreenProps {
}

export default class PokeListScreen extends React.Component<ScreenProps, any> {
  constructor(props: ScreenProps) {
    super(props);

    this.state = {
      pokemonList: []
    }
  }

  componentDidMount() {
    getGeneration.then((result) => {
      let pokemonList = result.data.pokemon_species.sort(function(a, b){
        let a_split = a.url.split('/');
        let b_split = b.url.split('/');

        let a_id = a_split[a_split.length - 2];
        let b_id = b_split[b_split.length - 2];

        return parseInt(a_id) < parseInt(b_id)? -1 : parseInt(a_id) > parseInt(b_id) ? 1 : 0
      });

      this.setState({
        pokemonList: pokemonList
      })
    })
  }

  keyExtractor = (el) => {
    return el.name
  }

  renderItems = (el) => {
    return (
      <PokemonListElement
        name={el.item.name}
        url={el.item.url}
      />
    )
  }

  public render() {
    return (
      <View>
        <FlatList
          data={this.state.pokemonList}
          renderItem={this.renderItems}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}
