import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './pages/Home';
import PizzaScreen from './pages/Pizza';
import ButtonScreen from './pages/Button';
import ScrollScreen from './pages/Scroll';
import FlatListScreen from './pages/FlatList';
import SectionListScreen from './pages/SectionList';

const Stack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Pizza: {
    screen: PizzaScreen
  },
  Button: {
    screen: ButtonScreen
  },
  Scroll: {
    screen: ScrollScreen
  },
  FlatList: {
    screen: FlatListScreen
  },
  SectionList: {
    screen: SectionListScreen
  }
});

export default AppNavigator = createAppContainer(Stack);
