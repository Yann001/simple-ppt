const models = require('./mongo/models');
const express = require('express');
const router = express.Router();
/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建一页PPT
router.post('/api/ppt/addPptPage',(req, res) => {
    // let guid = Guid.newGuid();
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newPpt = new models.pptModel({
        ppt_uid : 'this-is-a-false-uid',
        ppt_page : req.body.pptPage,
        ppt_title : req.body.pptTitle,
        ppt_content : req.body.pptContent
    });
    newPpt.save((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed ' + data);
        }
    });
});
// 获取已有PPT页面
router.post('/api/ppt/getPptPage', (req, res) => {
    // 通过模型去查找数据库
    let pptUid = req.body.pptUid,
        pptPage = req.body.pptPage;
    // console.log("req.params" + req.params);
    console.log("req.body is" + req.body);
    // console.log("req.query" + req.query);
    models.registryModel.find({ppt_uid: pptUid, ppt_page: pptPage}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            console.log('data is' + data)
            res.send(data);
        }
    });
});

module.exports = router;
