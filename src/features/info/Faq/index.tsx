import React from 'react';
// Components
import * as C from '../../../layout/containers';
import * as T from '../../../layout/typography';
import FaqCard from './components/FaqCard';

const Faq = () => {
  return (
    <C.FullScreen>
      <T.Heading variant="black">Perguntas Frequentes</T.Heading>
      <FaqCard />
    </C.FullScreen>
  );
};

export default Faq;
