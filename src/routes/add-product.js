const prisma = require("../lib/prisma");

const { removeEmptySpaces } = require("../helpers/helpers");

const addNewProduct = (routes) => {
    routes.post("/new-product", async (req, res) => {
        const { name, price } = req.body;

        const new_product = await prisma.product.create({
            data: {
                name,
                slug: removeEmptySpaces(name),
                price
            }
        });

        return res
            .status(201)
            .json({ message: "Produto adicionado com sucesso!", new_product });
    });
};

module.exports = addNewProduct;
