
const DetailCard = ({ product }) => {
  return (
    <div className="col-md-4 mt-5">
      <div className="card">
        <img src={product.image} className="card-img-top" alt="..." height={200} width={200}/>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.category}</p>
          <p className="card-text">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
