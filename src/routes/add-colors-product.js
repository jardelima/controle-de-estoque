const prisma = require("../lib/prisma");

const { getQtdProduct } = require("../helpers/helpers");

const addColorsProducts = (routes) => {
    routes.post("/product/:productId/colors", async (req, res) => {
        const { productId } = req.params;
        const { colors } = req.body;

        const colors_product = await prisma.color.create({
            select: {
                colors: true,
                quantity: true,
                productId: false
            },
            data: {
                colors,
                quantity: getQtdProduct(colors),
                productId
            }
        });

        return res.status(201).json({
            message: "Cores adicionadas com sucesso!",
            colors_product
        });
    });
};

module.exports = addColorsProducts;
