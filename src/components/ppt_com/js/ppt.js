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