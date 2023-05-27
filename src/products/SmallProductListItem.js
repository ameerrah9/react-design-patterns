export const SmallProductListItem = ({ product }) => {
  // Destructure the product object to get the name and price
  const { name, price } = product;

  return (
    <h3>
      {name} - {price}
    </h3>
  );
};
