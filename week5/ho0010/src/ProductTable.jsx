import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const filterProducts = (products, filterText, inStockOnly) => {
  return products.filter((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return false;
    }

    if (inStockOnly && !product.stocked) {
      return false;
    }
    return true;
  });
};

const groupedProductsByCategory = (products = []) => {
  return Object.values(
    products.reduce((acc, product) => {
      const { category } = product;
      if (!acc[category]) {
        acc[category] = { category, products: [] };
      }

      acc[category].products.push(product);
      return acc;
    }, {}),
  );
};

const ProductTable = ({ product, filterText, inStockOnly }) => {
  const filteredProducts = filterProducts(product, filterText, inStockOnly);

  const gropuedProducts = groupedProductsByCategory(filteredProducts);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {gropuedProducts.map((productCategory) => (
          <React.Fragment key={productCategory.category}>
            <ProductCategoryRow category={productCategory.category} />
            {productCategory.products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
