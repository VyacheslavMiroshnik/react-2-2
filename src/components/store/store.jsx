import { useState } from 'react';
import IconSwitch from '../iconSwitch/iconSwitch';
import CardsView from '../cardsView/cardsView';
import ListView from '../listView/listView';

export default function Store() {
  const [activeIcon, setIcon] = useState('view_list');
  const switchIcon = (e) => {
    const styleCard = e === 'view_list' ? 'view_module' : 'view_list';
    setIcon(styleCard);
  };
  const products = [
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'red',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'green',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'blue',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'black',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg',
    },
    {
      name: 'Nike free run',
      price: '170',
      color: 'black',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg',
    },
    {
      name: 'Nike Metcon 3',
      price: '150',
      color: 'green',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg',
    },
  ];

  return (
    <>
      <IconSwitch icon={activeIcon} onSwitchIcon={switchIcon} />
      {activeIcon === 'view_list' ? (
        <CardsView products={products} />
      ) : (
        <ListView products={products} />
      )}
    </>
  );
}
