import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

function Banner() {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <section className="bg-gradient-to-r from-red-500 to-orange-400 py-12 text-white">
      <div className="container mx-auto flex flex-col-reverse items-center gap-6 px-4 md:flex-row">
        <div data-aos="fade-right" className="space-y-4 max-w-md">
          <h1 className="text-4xl font-bold">Thực phẩm tươi ngon</h1>
          <p className="text-lg">Giao hàng nhanh chóng, chất lượng đảm bảo</p>
          <button className="rounded bg-white px-6 py-2 font-semibold text-red-600 hover:bg-gray-100">
            Mua ngay
          </button>
        </div>
        <div data-aos="fade-left" className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/600x400?text=Fresh+Food"
            alt="fresh food"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
