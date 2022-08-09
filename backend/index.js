const express = require("express");
const app = express();
const conn = require("./db/conn");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

/* solve cors */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-origin", "*");
  app.use(cors());
  next();
});

app.use(express.json());

/* routes */
const userRoutes = require("./routes/userRoutes");
const ProductsRoutes = require("./routes/productsRoutes");
const CartRoutes = require("./routes/cartRoutes");
const OrderRoutes = require("./routes/orderRoutes");
const AuthRoutes = require("./routes/authRoutes");

app.use("/users", userRoutes);
app.use("/products", ProductsRoutes);
app.use("/cart", CartRoutes);
app.use("/orders", OrderRoutes);
app.use("/auth", AuthRoutes);

app.listen(5000, () => {
  console.log("aplicação rodando na porta 5000");
});
