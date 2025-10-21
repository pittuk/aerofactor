import Link from 'next/link';
import Image from 'next/image';

/**
 * ProductHighlights Component
 *
 * Grid de productos destacados con imagen, título, descripción y CTA.
 * Usado en la página de inicio para mostrar los productos principales.
 *
 * @example
 * <ProductHighlights
 *   title="Nuestros Productos"
 *   subtitle="Sistemas de aerostatos configurables para cada misión"
 *   products={[
 *     {
 *       slug: "sistema-vigilancia-fronteriza",
 *       title: "Sistema de Vigilancia Fronteriza",
 *       description: "Control territorial de largo alcance",
 *       image: "/images/products/frontera.jpg"
 *     }
 *   ]}
 * />
 */

interface Product {
  slug: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
}

interface ProductHighlightsProps {
  title?: string;
  subtitle?: string;
  products: Product[];
  columns?: 2 | 3 | 4;
  ctaText?: string;
  showAllLink?: boolean;
}

export default function ProductHighlights({
  title = "Nuestros Productos",
  subtitle,
  products,
  columns = 3,
  ctaText = "Ver detalles",
  showAllLink = true,
}: ProductHighlightsProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* Products Grid */}
        <div className={`grid ${gridCols[columns]} gap-8`}>
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/productos/${product.slug}`}
              className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200">
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                )}
                {product.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Destacado
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="flex items-center text-primary font-medium">
                  <span>{ctaText}</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Ver todos los productos */}
        {showAllLink && (
          <div className="text-center mt-12">
            <Link
              href="/productos"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              Ver todos los productos
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
