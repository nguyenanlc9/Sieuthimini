function ProductCard({ product, addToCart }) {
  return (
    <div
      data-aos="fade-up"
      className="overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover"
        />
        <div className="absolute left-2 top-2 flex gap-1">
          {product.tags?.map(t => (
            <span
              key={t}
              className="rounded bg-red-500 px-2 text-xs text-white shadow"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-1 p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        {product.weight && (
          <p className="text-sm text-gray-500">{product.weight}</p>
        )}
        <p className="font-bold text-red-600">
          {product.price.toLocaleString()}đ
          {product.discount && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              {product.discount.toLocaleString()}đ
            </span>
          )}
        </p>
        {product.rating && (
          <p className="text-sm text-yellow-500">
            {'★'.repeat(Math.round(product.rating))}
            <span className="text-gray-400">
              {'★'.repeat(5 - Math.round(product.rating))}
            </span>
          </p>
        )}
        <button
          onClick={() => addToCart(product)}
          className="mt-2 w-full rounded bg-red-500 py-2 text-white hover:bg-red-600"
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  )
}

export default ProductCard
