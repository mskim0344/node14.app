const express = require('express');
const router = express.Router();



//라우터
router.get('/', (req, res)=>{
  res.send('localhost:8000/ 라고 주소에 치셨군요')
});

router.get('/sub', (req, res)=>{
    res.send('localhost:8000/sub 라고 주소에 치셨군요')
});




module.exports = router;