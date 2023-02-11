export default () => {
    return {
        find: async (container, querySpec) => {
            try {
                const { resources } = await container.items.query(querySpec).fetchAll()
                return resources
            } catch (err) {
                return err;
            }
        },
        getAllCat: async (container, val) => {
            try {
                const querySpec = {
                    query: "select * from products p where p.categoryName=@categoryName",
                    parameters: [
                        {
                            name: "@categoryName",
                            value: val
                        }
                    ]
                };
                const { resources } = await container.items.query(querySpec).fetchAll();
                return resources;
            } catch (error) {
                return error;
            }
        },
        getAllProds: async (container) => {
            try {
                const query = {
                    query: "select * from products p",
                };
                const { resources } = await container.items.query(query).fetchAll();
                return resources;
            } catch (error) {
                return error;
            }
        },
        create: async (container, item) => {
            try {
                await container.items.create(item);
            } catch (error) {
                return error;
            }
        },
        update: async (container, id, partition_key, doc) => {
            try {
                await container.item(id, partition_key).replace(doc);
            } catch (error) {
                return error;
            }
        },
        delete: async (container, id, partition_key) => {
            try {
                await container.item(id, partition_key).delete();
            } catch (error) {
                return error;
            }
        }
    }
} 