import { Drawer } from 'antd';
import React from 'react';
import { useBarsStore } from 'src/store';

import { AsideInner } from '../../aside/inner';

const CustomDrawer: React.FC = () => {
  const { toggle, toggleClose } = useBarsStore();

  return (
    <Drawer
      onClose={() => toggleClose()}
      open={toggle}
      placement="left"
      className="!bg-slate-700 !text-white !p-0 !m-0"
      bodyStyle={{ padding: 0, margin: 0 }}
      width={300}
      closeIcon={false}
    >
      <AsideInner />
    </Drawer>
  );
};

export { CustomDrawer };
