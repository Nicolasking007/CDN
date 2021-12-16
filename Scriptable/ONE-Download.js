// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: baseball-ball;
/********************************************************
 ************* MAKE SURE TO COPY EVERYTHING *************
 *******************************************************
 ************ © 2021 Copyright Nicolas-kings ************/
/********************************************************
 * script     : ONE-Download.js
 * version    : 1.0
 * author     : Nicolas-kings
 * date       : 2021-12-16
 * desc       : 具体配置说明，详见微信公众号-曰(读yue)坛
 * github     : https://github.com/Nicolasking007/Scriptable
 * Changelog  : v1.0 - 首次发布 
 *                           
----------------------------------------------- */
//##############公共参数配置模块############## 
const versionData = await getversion()
let needUpdated = await updateCheck(1.0)

const alert = new Alert();
alert.title = 'NK_Download iOS 桌面挂件下载器';
alert.message = '作者：Nicolas-kings - V1.0';
const menuList = versionData.menuList
menuList.forEach(item => {
    alert.addAction(item.text);
});
const menuId = await alert.presentSheet();
const obj = menuList[menuId];
const FILE_MGR = FileManager[module.filename.includes('Documents/iCloud~') ? 'iCloud' : 'local']();
await Promise.all(obj.name.map(async js => {
    const REQ = new Request(
        `https://cdn.jsdelivr.net/gh/Nicolasking007/CDN@latest/Scriptable/${encodeURIComponent(js)}`
    );
    const RES = await REQ.load();
    FILE_MGR.write(FILE_MGR.joinPath(FILE_MGR.documentsDirectory(), js), RES);
}));
FILE_MGR.remove(module.filename);
Safari.open('scriptable:///run?scriptName=' + encodeURIComponent(obj.name[0]));

//版本更新
async function getversion() {
    const versionCachePath = files.joinPath(files.documentsDirectory(), "version-NK")
    var versionData
    try {
        versionData = await new Request("https://cdn.jsdelivr.net/gh/Nicolasking007/CDN@latest/Scriptable/UPDATE.json").loadJSON()
        files.writeString(versionCachePath, JSON.stringify(versionData))
        console.log(`===>\u6b22\u8fce\u4f7f\u7528：${versionData.author}\u5236\u4f5c\u7684\u5c0f\u7ec4\u4ef6<===`);
        console.log("[+]\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u524d\u5f80\u516c\u4f17\u53f7\uff1a\u66f0\u575b\u0020\u53cd\u9988");
        log("[+]\u7248\u672c\u4fe1\u606f\u83b7\u53d6\u6210\u529f")
    } catch (e) {
        versionData = JSON.parse(files.readString(versionCachePath))
        log("[+]\u83b7\u53d6\u7248\u672c\u4fe1\u606f\u5931\u8d25\uff0c\u4f7f\u7528\u7f13\u5b58\u6570\u636e")
    }

    return versionData
}

async function updateCheck(version) {

    const uC = versionData
    log('[+]\u6700\u65b0\u7248\u672c：' + uC['ONE-Download'].version)
    let needUpdate = false
    if (uC['ONE-Download'].version != version) {
        needUpdate = true
        log("[+]\u68c0\u6d4b\u5230\u6709\u65b0\u7248\u672c\uff01")
        if (!config.runsInWidget) {
            log("[+]\u6267\u884c\u66f4\u65b0\u6b65\u9aa4")
            let upd = new Alert()
            upd.title = "\u68c0\u6d4b\u5230\u6709\u65b0\u7248\u672c\uff01"
            upd.addDestructiveAction("\u6682\u4e0d\u66f4\u65b0")
            upd.addAction("\u7acb\u5373\u66f4\u65b0")
            upd.add
            upd.message = uC['ONE-Download'].notes
            if (await upd.present() == 1) {
                const req = new Request(uC['ONE-Download'].cdn_scriptURL)
                const codeString = await req.loadString()
                files.writeString(module.filename, codeString)
                const n = new Notification()
                n.title = "\u4e0b\u8f7d\u66f4\u65b0\u6210\u529f"
                n.body = "\u8bf7\u70b9\u51fb\u5de6\u4e0a\u89d2\u0044\u006f\u006e\u0065\u5b8c\u6210\uff0c\u91cd\u65b0\u8fdb\u5165\u811a\u672c\u5373\u53ef\u007e"
                n.schedule()

            }
            Script.complete()
        }

    } else {
        log("[+]\u5f53\u524d\u7248\u672c\u5df2\u662f\u6700\u65b0")
    }

    return needUpdate
}