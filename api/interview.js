const express = require('express');
const router = express.Router();



//라우터
router.get('/', (req, res)=>{
  res.send('localhost:8000/ interview')
});

router.get('/sub', (req, res)=>{
    res.send('localhost:8000/ interview sub')
});




module.exports = router;