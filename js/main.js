window.onload = function(){
	let editBtn = document.getElementById('btn-edit');
	let saveBtn = document.getElementById('btn-save');
	let pptTitle = document.getElementById('ppt-title');
	let pptContent = document.getElementById('ppt-content');
	let pptPrevious = document.getElementById('ppt-previous');
	let pptNext = document.getElementById('ppt-next');

	//可编辑文本区域
	let pluginTexts = document.querySelectorAll('.plugin-text');
	let plugins = document.querySelectorAll('.plugin');

	let currentPage = 1;
	let currentPPT = null;

	let h5LS = new H5_LS();

	// 初始化页面内容
	(function init() {
		currentPPT = getPPT(currentPage);
		setPPT(currentPPT);
	})();

	// 封装从LocalStorage获取PPT方法
	function getPPT(page) {
		let ppt = h5LS.getLocalStorage('ppt' + page);
		return JSON.parse(ppt);
	}

	// 封装设置PPT页面内容方法
	function setPPT(ppt) {
		if(ppt) {
			pptTitle.innerHTML = ppt.title;
			pptContent.innerHTML = ppt.content;
		}
		else {
			pptTitle.innerHTML = '请添加一个标题';
			pptContent.innerHTML = '请添加内容';
		}
	}

	// 绑定保存按钮事件
	saveBtn.addEventListener('click', () => {
		let pptObj = {
			page: currentPage,
			title: pptTitle.innerHTML,
			content: pptContent.innerHTML
		}
		h5LS.setLocalStorage('ppt' + pptObj.page, JSON.stringify(pptObj));
	});

	// 绑定下一页按钮事件
	pptNext.addEventListener('click', () => {
		currentPage++;
		if(currentPage === 1) {
			pptPrevious.className = 'previous disable';
		}
		else {
			pptPrevious.className = 'previous';
		}
		currentPPT = getPPT(currentPage);
		setPPT(currentPPT);
	}, false);

	// 绑定上一页按钮事件
	pptPrevious.addEventListener('click', () => {
		currentPage--;
		currentPage = currentPage < 1 ? 1 : currentPage;
		if(currentPage === 1) {
			pptPrevious.className = 'previous disable';
		}
		else {
			pptPrevious.className = 'previous';
		}
		currentPPT = getPPT(currentPage);
		setPPT(currentPPT);
	}, false);

	//plugin-text 双击编辑事件
	pluginTexts.forEach((item) => {
		item.addEventListener('dblclick', () => {
			item.setAttribute('contenteditable','true');
			item.focus();
		});
		item.addEventListener('blur', (evt) => {
			item.setAttribute('contenteditable','false');
			evt.target.style.border = 'none';
		},true)
	});

	document.body.addEventListener('click', function(evt) {
		plugins.forEach((item) => { item.style.border = 'none'; });
		if(evt.target.className.indexOf('plugin') + 1) {
			evt.target.style.border='1px solid blue';
		}
	});

};
