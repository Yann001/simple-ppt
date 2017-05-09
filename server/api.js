const models = require('./mongo/models');
const express = require('express');
const router = express.Router();
/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建一页PPT
router.post('/api/ppt/addPptPage',(req, res) => {
    // let guid = Guid.newGuid();
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newPpt = new models.pptModel({
        ppt_uid : 'this-is-a-false-guid',
        ppt_page : req.body.pptPage,
        ppt_title : req.body.pptTitle,
        ppt_content : req.body.pptContent
    });
    console.log(newPpt);
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
    let pptPage = req.params.pptPage;
    console.log(pptPage);
    models.registryModel.find({ppt_page: pptPage}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;
