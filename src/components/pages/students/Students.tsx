import React from 'react';
import { Section } from 'src/components';

import { StudentsForm } from './form/StudentsForm';
import { StudentsTable } from './table/StudentsTable';

const Students: React.FC = () => (
  <Section>
    <StudentsForm />
    <StudentsTable />
  </Section>
);

export { Students };
