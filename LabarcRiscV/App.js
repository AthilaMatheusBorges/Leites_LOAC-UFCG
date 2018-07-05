import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Principal from './src/Screen/Principal';

import OqueScreen from './src/Screen/Oque';
import ComandoScreen from './src/Screen/Comandos';
import TerminalScreen from './src/Screen/Terminal';
import BaseInstructionScreen from './src/Screen/BaseInstruction';

const App = createStackNavigator({
  Home: {
    screen: Principal,
    navigationOptions:{
      title: 'Home',
    },
  },
  Terminal: {
    screen: TerminalScreen,
    navigationOption : {
      title: 'Terminal de Comandos',
    },
  },
  Intrucoes: {
    screen: BaseInstructionScreen,
    navigationOptions:{
      title: 'Conversor',
    },
  },
  Oque: {
    screen: OqueScreen,
    navigationOptions:{
      title: 'O que é?',
    },
  },
  Comandos: {
    screen: ComandoScreen,
    navigationOptions:{
      title: 'Comandos',
    },
  },
});

export default App;

// export default class App extends React.Component {
//   render() {
//     return (
//       <AppNavigator />
//       // <InstrucoesScreen />
//     );
//   }
// }

//cores ufcg : claro{ 3399cc } e { 330066 }
