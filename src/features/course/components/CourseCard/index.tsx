import React from 'react';
// Components
import * as S from './styles';
import * as T from '../../../../layout/typography';
import { sum } from '../../../../common/assets/images';

interface Props {
  image: string;
  level: number;
  title: string;
  handlePress: () => void;
}

const CourseCard = ({
  image,
  level = 1,
  title = '',
  handlePress = () => {},
}: Props) => {
  return (
    <S.CardWrapper onPress={handlePress}>
      <S.CardImage source={sum} alt="Soma" resizeMode="cover" />
      <S.CardContent>
        <T.TextBold>Nivel I</T.TextBold>
        <T.TextBold>Conjuntos númericos</T.TextBold>
      </S.CardContent>
    </S.CardWrapper>
  );
};

export default CourseCard;
