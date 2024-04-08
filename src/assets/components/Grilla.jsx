import DetailCard from "./DetailCard";

const Grilla = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <DetailCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Grilla;
