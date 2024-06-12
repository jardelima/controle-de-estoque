function getQtdProduct(product) {
    const initialValue = 0;

    const quantityProduct = product.reduce(
        (acc, value) => acc + value.quantity,
        initialValue
    );

    return quantityProduct;
}

module.exports = getQtdProduct;
