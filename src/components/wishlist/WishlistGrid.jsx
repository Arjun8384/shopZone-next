import ProductGrid from "@/components/product/ProductGrid";

export default function WishlistGrid({
    products = [],
}) {
    return (
        <section>
            <ProductGrid
                products={products}
                />
        </section>
    )
}