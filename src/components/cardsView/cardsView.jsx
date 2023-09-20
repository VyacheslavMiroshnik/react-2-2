import ShopCard from './shopCards';
import PropTypes from 'prop-types';

export default function CardsView({ products }) {
  return (
    <div className='module_cards_view'>
      {products.map((el, idx) => (
        <ShopCard product={el} key={idx} />
      ))}
    </div>
  );
}

CardsView.propTypes = {
  products: PropTypes.array,
};
