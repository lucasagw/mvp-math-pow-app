import React, { useState } from 'react';
// Components
import * as S from './styles';
import * as T from '../../../../../layout/typography';
// Hooks
import { useSpeech } from '../../../../../common';
// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Theme
import theme from '../../../../../theme/theme';

const FaqCard = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { isSpeaking, toggleSpeech } = useSpeech();
  const title = 'Como ganho pontos?';
  const text =
    'Lorem impsu is Lore m themselves auctor and therefore Lorem ipsum,dolor sit amet consectetur adipisicing elit!';

  const toggleCollapsed = () => {
    setIsCollapsed((prevValue) => !prevValue);
  };

  return (
    <S.FaqCardWrapper onPress={toggleCollapsed}>
      <S.FaqCardHeader>
        <T.TextBold variant="black">{title}</T.TextBold>
        <S.FaqCardButton onPress={toggleCollapsed}>
          <MaterialCommunityIcons
            name="chevron-down"
            color={theme.color.black}
            size={24}
          />
        </S.FaqCardButton>
      </S.FaqCardHeader>
      {!isCollapsed && (
        <>
          <S.FaqCardBody animation="fadeIn" easing="ease-in-out">
            <T.Text variant="black">{text}</T.Text>
          </S.FaqCardBody>
          <S.FaqCardFooter>
            <S.FaqCardButton
              onPress={() => {
                toggleSpeech(text);
              }}
            >
              <MaterialCommunityIcons
                name={isSpeaking ? 'stop' : 'account-voice'}
                color={theme.color.black}
                size={24}
              />
            </S.FaqCardButton>
          </S.FaqCardFooter>
        </>
      )}
    </S.FaqCardWrapper>
  );
};

export default FaqCard;
