import useFetch from "../../hooks/useFetch";
import "./featuredProducts.css";

const FeaturedProducts = () => {
  const { data, loading, error } = useFetch("/ribbons?featured=true");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.title}</span>
              <span className="fpName">{item.color}</span>
              <span className="fpPrice">${item.price}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProducts;
