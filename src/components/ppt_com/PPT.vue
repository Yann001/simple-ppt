<template>
  <div class="container">
  <!-- <aside>
    <ul class="toolbar">
      <li><a href="javascript:void(0)" class="btn btn-edit" id="btn-edit" @click="edit">编辑</a></li>
      <li><a href="javascript:void(0)" class="btn btn-save" id="btn-save" @click="save">保存</a></li>
    </ul>
  </aside>
  <article> -->
    <div class="container-head">
      <button class="btn btn-edit" id="btn-edit" @click="edit">编辑</button>
      <button class="btn btn-save" id="btn-save" @click="save">保存</button>
    </div>
    <div class="container-body">
      <div class="ppt">
        <div class="ppt-left">
          <div class="page">
            <span class="currentPage" id="current-page">2</span>
            <span>/</span>
            <span class="totalPage" id="total-page">5</span>
          </div>
        </div>
        <div class="ppt-center">
          <div class="plugin plugin-text ppt-title" id="ppt-title" v-model="pptTltie"></div>
          <div class="plugin plugin-text ppt-content" id="ppt-content" v-model="pptContent"></div>
        </div>
        <div class="ppt-right">
          <aside class="controls">
            <div class="previous disable" id="ppt-previous" @click="pptPrevious"></div>
            <div class="next" id="ppt-next" @click="pptNext"></div>
          </aside>
        </div>
      </div>
      <div class="ppt-progress">
        <div class="progressbar"></div>
      </div>
    </div>
    <div class="container-footer"></div>
    <!-- </article> -->
  </div>
</template>

<script>
export default {
  name: 'ppt',
  data () {
    return {
      pptTltie: '这里是PPT标题',
      pptContent: '这里是PPT内容'
    }
  },
  methods: {
    edit () {
      console.log('这是编辑事件')
    },
    save () {
      console.log('这是保存事件')
    },
    pptPrevious () {
      console.log('这是上一页事件')
    },
    pptNext () {
      console.log('这是下一页事件')
    }
  }
}
</script>

<style scoped>
/*PPT组件部分CSS*/
.container {
  box-sizing:border-box;
  width: 100%;
  height: 100%;
}

.container .container-head {
  width: 100%;
  height: 10%;
  background-color: rgba(40, 40, 40 ,0.5);
}

.container .container-head .btn {
  font-size: 1.5em;
  padding: 0.5em 1em;
  border: 1px solid #d4d4d4;
  margin: 10px;
  text-align: center;
  text-shadow: 1px 1px 0 #fff;
  color: #333;
  white-space: nowrap;
  cursor: pointer;
  background-color: hsl(168, 76%, 42%);
  border-radius: 0.2em;
}

.container .container-head .btn:hover {
  background-color: hsla(168, 97%, 50%, 1);
}

.container .container-body {
  width: 100%;
  height: 80%;
  border: 1px solid #d9d9d9;
  background-color: rgba(0, 0, 0, 0.8);
}

.container .container-body .ppt {
  width: 100%;
  height: 99%;
  display: flex;
  flex-direction: row;
}

.container .container-body .ppt-progress {
  width: 100%;
  height: 1%;
  background-color: #fff;
}

.container .container-body .ppt-progress .progressbar {
  width: 30%;
  height: 100%;
  border-top-right-radius: 1px;
  border-bottom-right-radius: 1px;
  background-color: #4682b4;
}

.container .container-body .ppt .ppt-left {
  width: 10%;
  position: relative;
}

.container .container-body .ppt .ppt-left .page { 
  width:100px;
  height: 100px;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  font-size: 2em;
}

.container .container-body .ppt .ppt-left .page span {
  display: inline-block;
}

.container .container-body .ppt .ppt-center {
  width: 80%;
  overflow: hidden;
}

.container .container-body .ppt .ppt-center .ppt-title {
  height: 20%;
  color: #fff;
  text-align: center;
  font-size: 3em;
  padding: 20px;
  font-weight: bold;
}

.container .container-body .ppt .ppt-center .ppt-content {
  height: 80%;
  color: #fff;
  text-align: center;
  font-size: 2em;
  padding: 20px;
}

.container .container-body .ppt .ppt-right {
  width: 10%;
  position: relative;
}

.container .container-body .ppt .ppt-right aside {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  bottom: 0;
}

.container .container-body .ppt .ppt-right aside .previous {
  width: 0;
  height: 0;
  cursor: pointer;
  position: absolute;
  left: 10px;
  bottom: 10px;
  border-top: 30px solid rgba(19, 218, 236, 0.9);
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  transform:rotate(90deg);
  -ms-transform:rotate(90deg);  /* IE 9 */
  -moz-transform:rotate(90deg);   /* Firefox */
  -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
  -o-transform:rotate(90deg);   /* Opera */
}

.container .container-body .ppt .ppt-right aside .previous.disable {
  border-top: 30px solid rgba(19, 218, 236, 0.1);
}

.container .container-body .ppt .ppt-right aside .next {
  width: 0;
  height: 0;
  cursor: pointer;
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-top: 30px solid rgba(19, 218, 236, 0.9);
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  transform:rotate(-90deg);
  -ms-transform:rotate(-90deg);   /* IE 9 */
  -moz-transform:rotate(-90deg);  /* Firefox */
  -webkit-transform:rotate(-90deg); /* Safari 和 Chrome */
  -o-transform:rotate(-90deg);  /* Opera */
}

.container .container-body .ppt .ppt-right aside .next.disable {
  border-top: 30px solid rgba(19, 218, 236, 0.1);
}

.container .container-footer {
  width: 100%;
  height: 10%;
  position: absolute;
  z-index: 1;
  bottom: 0;
  background-color: rgba(40, 40, 40 ,0.5);
}

/*整体布局*/
/*ul{
list-style: none;
padding-left: 0;
margin: 0;
}*/
/*aside{
width: 60px;
height: 100%;
float: left;
position: absolute;
z-index: 1;
}

aside ul.toolbar{
width: 100%;
padding: 5px;
}

aside ul.toolbar li{
margin-bottom: 5px; 
}

aside ul.toolbar .btn{
display: inline-block;
text-decoration: none;
width: 50px;
height: 50px;
line-height: 50px;
text-align: center;
background-color: hsl(168, 76%, 42%);
color: #fff;
border: none;
font-size: 14px;
}

aside ul.toolbar .btn:hover{
background-color: hsla(168, 76%, 50%, 1);
}

article{
float: right;
height: 100%;
width: 100%;
padding-left: 60px;
overflow: hidden;
position: relative;
}*/
</style>
