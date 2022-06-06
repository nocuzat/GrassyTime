import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};



const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      Insert last date of mowing and grass type on the fields below.
    </Paragraph>
    <TextInput
        label="Last Date of mowing:"
        returnKeyType="done"
        secureTextEntry
      />
      <TextInput
        label="Grass Type:"
        returnKeyType="done"
        secureTextEntry
      />
      <TextInput
        label=""
        returnKeyType="done"
        secureTextEntry
      />
    <Button  mode="contained" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
    <Button  mode="contained">
      CALCULATE
    </Button>
  </Background>
);

export default memo(Dashboard);