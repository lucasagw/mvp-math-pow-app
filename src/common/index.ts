/*
IMPORTS
*/
// Components
import TouchableButton from './components/TouchableButton';
import CustomTabBar from './components/CustomTabBar';
import Input from './components/Input';
import LinkingButton from './components/LinkingButton';
import ImageComponent from './components/ImageComponent';
import CustomHeader from './components/CustomHeader';
// Hooks
import useSpeech from './hooks/useSpeech';
import useLocalStorage from './hooks/useLocalStorage';
// Services
import dateService from './services/date.service';

/*
EXPORTS
*/

// COMPONENTS
export {
  TouchableButton,
  CustomTabBar,
  Input,
  LinkingButton,
  ImageComponent,
  CustomHeader,
};

// Hooks
export { useSpeech, useLocalStorage };

// Services
export { dateService };
