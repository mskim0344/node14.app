const app = require('express')();
const navi =require("./api/navi");
const banner =require("./api/banner");
const interview =require("./api/interview");


//라우터

app.use('/', banner);
//기본 루트가 설정되어 있다 그래서 http://localhost:8000/을 입력하면 banner부분이 노출이 된다
app.use('/navi', navi);
// navi를 불러오려면 http://localhost:8000/navi
app.use('/interview', interview);

app.use((req, res)=>{
     res.status(404).sendFile(__dirname+"/public/nopage.html")
})



app.listen(8000, ()=>{
    console.log("서버구동완료")
})