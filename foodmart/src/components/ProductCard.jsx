function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-2">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.weight}</p>
        <p className="font-bold text-red-500">{product.price}đ</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 w-full bg-green-600 text-white py-1 rounded"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
