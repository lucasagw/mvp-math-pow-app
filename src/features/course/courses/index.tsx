import React from 'react';
// Components
import * as C from '../../../layout/containers';
import * as T from '../../../layout/typography';
import CourseCard from '../components/CourseCard';

const elements = Array.from({ length: 12 }, (_, i) => i + 1);

const Courses = () => {
  return (
    <C.FullScreen>
      <T.Heading variant="black">Bem vindo amiguinho!</T.Heading>
      <C.ListWrapper
        showsVerticalScrollIndicator={false}
        data={elements}
        renderItem={({ item }) => <CourseCard />}
      />
    </C.FullScreen>
  );
};

export default Courses;
