import React from 'react';
// Components
import * as S from './styles';
import * as T from '../../../layout/typography';
// Types
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { StarIcon } from '../../assets/icons';

type Props = BottomTabHeaderProps;

const CustomHeader = (props: Props) => {
  return (
    <S.HeaderWrapper>
      <S.Header>
        <S.HeaderAvatar />
        <S.HeaderInfo>
          <T.TextBold>100</T.TextBold>
          <StarIcon />
        </S.HeaderInfo>
      </S.Header>
    </S.HeaderWrapper>
  );
};

export default CustomHeader;
