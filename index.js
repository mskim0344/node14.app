const app = require('express')();
// const navi =require("./api/navi");
const banner =require("./api/banner");
// const interview =require("./api/interview");


//라우터
// app.use('/', interview);
app.use('/', banner);
// app.use('/navi', navi);

app.use((req, res)=>{
     res.status(404).sendFile(__dirname+"/public/nopage.html")
})



app.listen(8000, ()=>{
    console.log("서버구동완료")
})