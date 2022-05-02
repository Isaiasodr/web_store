const express = require('express')
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../helpers/verifyToken")
const Cart = require("../models/Cart")

const router = express.Router()



router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(error)
    }
})

/* update */

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedCart)

    } catch (error) {
        res.status(500).json(error)
    }

})


router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("produto deletado com sucesso")
    } catch (error) {
        res.status(500).json(error)
    }
})
/* get user cart */
router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({userID: req.params.userId})

        res.status(200).json(cart)

    } catch (error) {
        res.status(500).json(error)
    }
})
/* get all */
router.get("/",verifyTokenAndAdmin, async (req,res)=>{
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
        
    } catch (error) {
        res.status(500).json(error)
    }

})





module.exports = router