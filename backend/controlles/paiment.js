require ('dotenv').config()
const stripe = require("stripe")(process.env.privekey);
module.exports={
    paiment :(async(req,res)=>{
       
        const session=await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items:[
                {
                    price_data:{
                        currency:'usd',
                        product_data:{
                            name:req.body.product.name
                        },
                        unit_amount:req.body.product.price

                    },
                    quantity:req.body.product.quantity
                },

            ],
            mode:'payment',
            success_url: "http://localhost:3000/success", 
            cancel_url: "http://localhost:3000/cancel",

        })
        res.json({ id: session.id })
       

    })
}