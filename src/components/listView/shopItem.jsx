import PropTypes from 'prop-types';
export default function ShopItem({ product }) {
  return (
    <div className='list_card'>
      <img
        src={product.img}
        alt={product.name}
        className='list_card_img card_img'
      />
      <span className='list_card_name card_name'>{product.name}</span>
      <span className='list_card_color card_color'>{product.color}</span>
      <span className='list_card_price card_price'> {'$' + product.price}</span>
      <button className='list_card_button card_button'>ADD TO CART</button>
    </div>
  );
}

ShopItem.propTypes = {
  product: PropTypes.object,
};
