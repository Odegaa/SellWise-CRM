import React from 'react';

import { AsideInner } from './inner';

const Aside: React.FC = () => (
  <aside className="hidden sm:block fixed left-0 top-0 bg-slate-700 text-white min-h-screen w-72">
    <AsideInner />
  </aside>
);

export { Aside };
