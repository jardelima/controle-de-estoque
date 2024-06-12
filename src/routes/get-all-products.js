const prisma = require("../lib/prisma");

const getAllProducts = (routes) => {
    routes.get("/products", async (req, res) => {
        const products = await prisma.product.findMany({
            include: {
                stock: {
                    select: {
                        colors: true,
                        quantity: true,
                        productId: false
                    }
                }
            }
        });

        return res.status(200).json(products);
    });
};

module.exports = getAllProducts;
