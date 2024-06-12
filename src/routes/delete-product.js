const prisma = require("../lib/prisma");

const deleteProduct = (routes) => {
    routes.delete("/remove-product/:id", async (req, res) => {
        const { id } = req.params;

        const IntId = parseInt(id);

        if (!IntId) {
            return res.status(400).json({ message: "O campo ID está vazio" });
        }

        const productAlreadyExist = await prisma.product.findUnique({
            where: { id: IntId }
        });

        if (!productAlreadyExist) {
            return res
                .status(404)
                .json({ message: `O produto de ID ${IntId} não existe` });
        }

        await prisma.product.delete({ where: { id: IntId } });

        return res
            .status(200)
            .json({ message: "Produto excluído com sucesso" })
            .send();
    });
};

module.exports = deleteProduct;
