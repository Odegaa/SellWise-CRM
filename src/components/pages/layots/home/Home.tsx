import React from 'react';
import { Block } from './block';
import { Graphics } from './graphics';
import { SecondBlock } from './secondBlock/SecondBlock';

const Home: React.FC = () => {
  const arrayMap = [
    { title: 'Продажа', number: 12, suffix: true },
    { title: 'Количество лидов', number: 273, suffix: false },
    { title: 'Заказы', number: 23, suffix: true },
    { title: 'Количество отказов', number: 35, suffix: false },
    { title: 'Количество заявок', number: 123, suffix: false },
  ];

  const labels = ['Янв', 'Фев', 'Мар', 'Апр', 'Май'];
  const leadsData = [1360, 2540, 1954, 3081, 2954];

  return (
    <div>
      <section>
        <div className="flex justify-center items-center gap-5">
          {arrayMap.map((arrObj) => (
            <Block title={arrObj.title} key={arrObj.title} value={arrObj.number} suffix={arrObj.suffix} />
          ))}
        </div>
      </section>
      <Graphics labels={labels} data={leadsData} />
      <SecondBlock data={leadsData} labels={labels} />
    </div>
  );
};

export { Home };
