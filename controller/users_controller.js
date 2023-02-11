import daoGen from "../data_access/dao.js";

let DAO = daoGen();


export default (container) => {
    let obj = {
        getAllProds: async (req, res) => {
            try {
                let resp = await DAO.getAllProds(container);
                res.status(200).json({ data: resp, message: "Success, getting all products" });
            } catch (err) {
                res.status(500).json({ data: err, message: "failed to get all products" });
            }
        },
        find: async (req, res) => {
            try {
                let q = req.body;
                let resp = await DAO.find(container, q);
                res.status(200).json({ data: resp, message: "Success, fetching products according to query" });
            } catch (err) {
                res.status(500).json({ data: err, message: "failed to get the products" });
            }
        },
        create: async (req, res) => {
            try {
                let doc = req.body;
                await DAO.create(container, doc);
                res.status(200).json({ data: [], message: "Success, creating the product" });
            } catch (err) {
                res.status(500).json({ data: err, message: "failed to create the product" });
            }
        }
    }
    return obj;
}
