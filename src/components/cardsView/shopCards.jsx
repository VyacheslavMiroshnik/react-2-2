import PropTypes from 'prop-types';

export default function ShopCard({ product }) {
  return (
    <div className='module_card'>
      <span className='module_card_name card_name'>{product.name}</span>
      <span className='module_card_color card_color'>{product.color}</span>
      <img
        src={product.img}
        alt={product.name}
        className='module_card_img card_img'
      />
      <div className='module_card_bottom'>
        <span className='module_card_price card_price'>
          {' '}
          {'$' + product.price}
        </span>
        <button className='module_card_button card_button'>ADD TO CART</button>
      </div>
    </div>
  );
}
ShopCard.propTypes = {
  product: PropTypes.object,
};
