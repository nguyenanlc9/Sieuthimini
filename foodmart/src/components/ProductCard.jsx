function ProductCard({ product, addToCart }) {
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover"
      />
      <div className="p-4 space-y-1">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-gray-600 truncate">
            {product.description}
          </p>
        )}
        <p className="text-red-600 font-bold">{product.price.toLocaleString()}đ</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 w-full bg-green-600 text-white py-1 rounded"
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  )
}

export default ProductCard
