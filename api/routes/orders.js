const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Fetched order'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Order is created',
        order
    });
});

router.post('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order idetails',
        orderId: req.params.orderId 
    });
});

module.exports = router;