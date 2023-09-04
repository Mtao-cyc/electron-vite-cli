const { app,Menu } = require('electron')
const menuList = [
    {
        label: '文件',
        submenu: [
            { label: '新建', click() { /* 处理点击事件 */ } },
            { label: '打开', click() { /* 处理点击事件 */ } },
            { type: 'separator' }, // 分隔线
            { label: '退出', click() { app.quit(); } }
        ]
    },
    {
        label: '编辑',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            { role: 'selectall' }
        ]
    }
]

const menu = Menu.buildFromTemplate(menuList);// 创建菜单
menu.visible = false;
Menu.setApplicationMenu(menu);//将菜单添加到应用