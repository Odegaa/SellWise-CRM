import React from 'react';
import { Section } from 'src/components';

import { CoursesForm } from './form/CoursesForm';
import { CoursesTable } from './table';

const Courses: React.FC = () => (
  <Section>
    <CoursesForm />
    <CoursesTable />
  </Section>
);

export { Courses };
