import obj from "./req.js";
import gen from "./sample.js";
import express, { json, urlencoded } from 'express';
import indexRouter from "./routes/index.js";
import usersRouterGen from "./routes/users.js";
const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
let cont = null;
const port = 3000;

const func = async (req, res) => {
    const item = req.body;
    await cont.items.create(item);
    res.json({ msg: "added the product to container" });
}

(async () => {
    const ob = await obj();
    cont = await gen();
    let usersRouter = usersRouterGen(cont);
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    // app.get('/users', (req, res) => {
    //     res.json({ msg: "Users" });
    // })
    // app.get('/products', (req, res) => {
    //     res.json({ msg: "Products" });
    // })
    // app.post('/products', func);


    // const { name, age } = ob;
    // console.log(`name is ${name} and age is ${age} and container is ${cont.id}`);

})();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
