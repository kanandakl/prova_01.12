const Produtos = require("../model/produtos");

module.exports = {
	async listingProdutos(req, res) {
		const produtos = await Produtos.findAll();

		return res.json(produtos);
	},
	async listingChooseProduto(req, res) {
		const { id } = req.params;

		const produtos = await Produtos.findAll({
			where: {
				id: id,
			},
		});

		return res.json(produtos);
	},
	async deleteProdutos(req, res) {
		const { id } = req.params;

		const produtos = await Produtos.destroy({
			where: {
				id: id,
			},
		});

		return res.json(produtos);
	},
	async postingProdutos(req, res) {
		const { name, price, created } = req.body;

		const produtos = await Produtos.create({
			name: name,
			price: price,
			created: created,
		});

		return res.json(produtos);
	},
	async updatingProdutos(req, res) {
		const { id, name, price, updated } = req.body;

		const produtos = await Produtos.update(
			{
				name: name,
				price: price,
				updated: updated,
			},
			{
				where: {
					id: id,
				},
			}
		);
		return res.json(produtos);
	},
};