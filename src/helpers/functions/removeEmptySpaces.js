function removeEmptySpaces(name_product) {
    const slug = name_product.replace(/\s/g, "-");

    return slug;
}

module.exports = removeEmptySpaces;
