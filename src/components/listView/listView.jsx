import PropTypes from 'prop-types';
import ShopItem from './shopItem';

export default function ListView({ products }) {
  return (
    <div className='list_cards_view'>
      {products.map((el, idx) => (
        <ShopItem product={el} key={idx} />
      ))}
    </div>
  );
}

ListView.propTypes = {
  products: PropTypes.array,
};
