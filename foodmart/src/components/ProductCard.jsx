function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-card-content">
        <h3>{product.name}</h3>
        <p className="weight">{product.weight}</p>
        <p className="price">{product.price}đ</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
