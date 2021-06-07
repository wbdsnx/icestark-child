//详情
const detail = {
	title: '查看',
	action: undefined
}

//审核
const verify = {
	title: '审核',
	action: undefined
}

// 报名列表
const list = {
	title: '报名列表',
	action: undefined
}

//通过
const pass = {
	title: '通过',
	action: undefined
}

//不通过
const nopass = {
	title: '不通过',
	action: undefined
}

//数据
const statistics = {
	title: "数据",
	action: undefined
}

//编辑
const edit = {
	title: "编辑",
	action: data => {
		console.log(data)
	}
}
// 下移动
const move = {
	title: "下移",
	action: undefined
}
// 上移动
const upmove = {
	title: "上移",
	action: undefined
}

//下架
const offShelf = {
	confirm: undefined,
	type: 'danger',
	title: "下架",
	action: data => {
		console.log(data)
	}
}
//上架
const onShelf = {
	title: "上架",
	action: data => {
		console.log(data)
	}
}
//删除
const remove = {
	confirm: undefined,
	title: "删除",
	type: 'danger',
	action: data => {
		console.log(data)
	}
}

//拉黑
const block = {
	confirm: undefined,
	title: "拉黑",
	type: 'danger',
	action: index => {
		console.log(index)
	}
}

//踢出
const kickOut = {
	confirm: undefined,
	title: "踢出",
	type: 'danger',
	action: index => {
		console.log(index)
	}
}


module.exports = {
	detail,
	statistics,
	edit,
	offShelf,
	onShelf,
	verify,
	remove,
	pass,
	nopass,
	block,
	kickOut,
	move,
	list,
	upmove
}
