import React from 'react';

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section className="rounded-xl bg-white p-5 flex flex-col gap-2 shadow-lg">{children}</section>
);

export { Section };
