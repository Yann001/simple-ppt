window.onload = function(){
	let editBtn = document.getElementById('btn-edit');
	let saveBtn = document.getElementById('btn-save');
	let pptTitle = document.getElementById('ppt-title');
	let pptContent = document.getElementById('ppt-content');
	let pptPrevious = document.getElementById('ppt-previous');
	let pptNext = document.getElementById('ppt-next');

	//可编辑文本区域
	let pluginTexts = document.querySelectorAll('.plugin-text');

	let currentPage = 0;

	let ppt = [{
		page: 1,
		title: '这里是标题1',
		content: '这里是内容1'
	}, {
		page: 2,
		title: '这里是标题2',
		content: '这里是内容2'
	}, {
		page: 3,
		title: '这里是标题3',
		content: '这里是内容3'
	}];
	// 初始化页面内容
	(function init() {
		pptTitle.innerHTML = ppt[0].title;
		pptContent.innerHTML = ppt[0].content;
	})();

	// 绑定下一页按钮事件
	pptNext.addEventListener('click', () => {
		currentPage++;
		pptTitle.innerHTML = ppt[currentPage].title;
		pptContent.innerHTML = ppt[currentPage].content;
	}, false);

	// 绑定上一页按钮事件
	pptPrevious.addEventListener('click', () => {
		currentPage--;
		pptTitle.innerHTML = ppt[currentPage].title;
		pptContent.innerHTML = ppt[currentPage].content;
	}, false);

	//plugin-text 双击编辑事件
	pluginTexts.forEach((item)=>{
		item.addEventListener('dblclick',()=>{
			item.setAttribute('contenteditable','true');
			item.setAttribute('designMode','on');
			item.focus();
		});
	});
};
