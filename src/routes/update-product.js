const { removeEmptySpaces, getQtdProduct } = require("../helpers/helpers");
const prisma = require("../lib/prisma");

const updateProduct = (routes) => {
    routes.put("/update-product", async (req, res) => {
        const { id, name, price, colors } = req.body;

        if (!id) {
            return res.status(400).json({ message: "O campo ID está vazio" });
        }

        const productAlreadyExist = await prisma.product.findUnique({
            where: { id }
        });

        if (!productAlreadyExist) {
            return res
                .status(404)
                .json({ message: `O produto de ID ${id} não existe` });
        }

        const slugAlreadyExist = await prisma.product.findUnique({
            where: { slug: removeEmptySpaces(name) }
        });

        if (slugAlreadyExist) {
            return res
                .status(400)
                .json({ message: `A ${name} já existe, digite outro nome` });
        }

        const product = await prisma.product.update({
            where: {
                id
            },
            data: {
                name,
                slug: removeEmptySpaces(name),
                price,
                colors,
                quantity: getQtdProduct(colors)
            }
        });

        return res
            .status(200)
            .json({ message: "Produto atualizado com sucesso", product });
    });
};

module.exports = updateProduct;
