import React from 'react';
import { Section } from 'src/components';

import { TeachersForm } from './form';
import { TeachersTable } from './table';

const Teachers: React.FC = () => (
  <Section>
    <TeachersForm />
    <TeachersTable />
  </Section>
);

export { Teachers };
