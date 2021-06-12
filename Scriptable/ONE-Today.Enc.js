// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-blue; icon-glyph: clock;
/********************************************************
 ************* MAKE SURE TO COPY EVERYTHING *************
 *******************************************************
 ************ © 2021 Copyright Nicolas-kings ************/
/********************************************************
 * script     : ONE-Today.js
 * version    : 1.7
 * author     : Nicolas-kings
 * date       : 2021-04-04
 * github     : https://github.com/Nicolasking007/Scriptable
 * Changelog  : v1.7 - 压缩代码，便于复制
 *              v1.6 - 应某位居士之托，遂增加干支纪年法，其他未做调整
 *              v1.5 - 优化背景逻辑
 *              v1.4 - 优化背景图片缓存处理
                v1.3 - 支持版本更新、脚本远程下载
                v1.2 - api接口数据增加缓存，应对无网络情况下也能使用小组件
                v1.1 - 替换api接口
                v1.0 - 首次发布
----------------------------------------------- */
//##############公共参数配置模块############## 

const changePicBg = false  //选择true时，使用透明背景 
const ImageMode = true   //选择true时，使用必应壁纸
const previewSize = (config.runsInWidget ? config.widgetFamily : "medium");// medium、small、large 预览大小
const colorMode = false // 是否是纯色背景
const COLOR_LIGHT_GRAY = new Color('#E5E7EB', 1);
const COLOR_DARK_GRAY = new Color('#374151', 1);
const COLOR_BAR_BACKGROUND = Color.dynamic(COLOR_LIGHT_GRAY, COLOR_DARK_GRAY);



//##############用户自定义参数配置模块-开始##############
//⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊
//##############请在首次运行之前进行修改##############

const show_sexagenary_cycle = false   //显示干支纪年法  默认展示农历
let smallsize = 80  // 昨天明天字体大小
let bigsize = 85 // 今天字体大小

//⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈
//##############用户自定义参数配置模块-结束##############
const _0x453b=['WOtcMcr0W6y','s8o8W7tdVdSKaNHprW','5Aw955Qe77Yb5OIr546W5zYO5y675OIQ5zU+','wYTD5yAC5y6g6l6t5yE677YA','l8kurmkTW4fqW7xcNI7dHq','W6mUCN/dT157WORcQG','W5BdIuBdL8knWOfdW4ldVqFdPmkK','WRJdUMFLV4xLIz3NI4tMN4RLT5pMM5xMNkdMLyK','mxLwwxfOwa','WQGrgCkCxc3cRCk7iSoNW53dLM/cL3ZdM8oFFrZcLSoGn8ksxCokWQhdUulcP8kKW6ZdJSo6W5NdHCowBSoOWOvVa8opWQlcPSkKW7Gwxmo1WPTIwSkUiKBdTwZdU8keCCoDyCkBaSkcWQZcM8ofrZaxWO3cJq/dMqSwWQJcUSkQWQFdGCklv0tdUuunW4XKmSk8WOWGimkvsSooWP8FW6Sqr8krmCkizImVWP7dJJpdV8kWsNS0W5ODF2nRC3BdR8oRqSoUdflcMZNcKmkwW4fyymo8FCkpW6NcJdv1Fq','Dgv4De9WywnPDhK','y2vUDgvYqwXPz25uzxH0','BgfYz2u','dM/dTdVdPW','W7fzWRziyNvtWOG','ywrKrgvZDhj1y3rPDMvby3rPB24','W5bjWPtdSxeYW4RdNSokWObVW47dVtFdG0xdOSon','aa3dVLS','5zIJ54QQ5QUt5B6k5PAU5O2W55Mz5yAc54sQ54Q7lEIcNEAyG+MdPEABMq','W6abdConvq','wYTD5yAC5y6g6k+35Rgc5yE66zsz77YA','6ycp5PIo6iom5PMV','utdcQHddJaBcIae','wYTD5PYa5PAW54Mi5PYS77YA','5lQj6zwicow1GUI9Vq','amklBNFcNvbzBG','bmotFmkvpq','Ag9SAwrHEvrLEhq','W65xeCkUW786W797','c8oqe8orkdZdKa','WPddVLRcRmkjmbi','W6affSoe','qt3cTYNdHG','WRPRmxNcIWu7WOtcTSotFtv9WQPRFILnWQhcTCoDW5JcJbdcIg/cI03cKCoXvtJcPW','Aw5MB0X1BMfYvgv4Da','WOPPlIK','WOvBWQaDWOdcUKbAEq','ntm1nwTZDNjUzG','W70FBmk9xq','6yEl57Yi5PEW5Qkn','wSoyFSkb','z2v0rgf0zq','z2v0','fexcJ8oNi3S','DgvZDa','t3VdPSkXWPFcR8kdhatdHa','ngXKz0j5sq','W6BdO8oGWOBcMZa','oda3CuLruMry','p2PPW5WTr8kWn8kc','yMfJA2DYB3vUzeLTywDL','mteXndiYvufltLL6','mte1m3bJD29ftG','iCoMWPZMOi/MTidLIBFMNBZMLQFNIylMNkxVVAG','pCojx+MbNowlV+MxM+MIOU+8LUITHUwkHEw+HEweU+s+LowmS++8J+AAR+wELCor5yYV6AwD','WPxcImov','5BUP6yoiW4BLTABOV7i','5BQv6yoOiowpS+I+Uq','D3jPDgvjBwfNzq','ChjLC2vUDeXHCMDL','DMvYC2LVBG','cIaGicaGicaGicaGicaGzNvUy3rPB24Gz2v0rgf0ysGPihSkicaGicaGicaGicaGicaGicaGDhj5ihSkicaGicaGicaGicaGicaGicaGicaGigLUzM9mDw5HCLrLEhqGpsbKB2n1BwvUDc5XDwvYEvnLBgvJDg9YkcDKAxyJD25YBf9Rx3LVDv9Pzf8','g3rOW57cUmoob8ouWQjWyCk4WQJdM8ozo8oRW5NcRmkCAx7cGCoYnmkLWRucWO3cQ3fBWP3dKN4IWP3cHYJdMSoEo8kvW5tcO3JcPCkqaSkOW6KGduCRsI/cS8kEWOTmpIRdTSkIaCo9rCkpWRxcGNJcNM4dWORcPGZcH8kFtvpdJ8k0BSkSWQTUW5ujx3GGW6SMWRldPSkLk8oMfCkNjmoiFmkEW5VdQGhcQW','WPPVoJ/cNSkTW67dPHuqCq','euxcLCoZkMJcJq','5lUL5lIl5PIV44cq6ycp5PIo6iom5PMV44cr55sF5OIq5Q2L6AQK77Ym5AAc5P6C5l2G5RkH5PYj5Bgp5BMv5OIQ5zU+6k+36yca5yE677Ym5BM26l+u5zUE5lI75Bgp5BMv6zw/5OYj6l+B5ywL57Yw6l6r5QIH5BYp44cc5RUr5yQO5yIW5PYa5y+Z6l6555Qe56M655M96Ag15OIQ5zU+44cc54s25zco6yEn5PAW6l+q6kgm77Yb','Dgv4DenVBg9Y','WPxdTv3cJCkblqJdGgagWQyODSkiW6JcQt/cHW','rSowW5BcRMGIWQq','W5PpWPddSW','k8o0WPBcKCo9','Bg9N','57Ql57Myt+w1P+ADGoAjOUwzI8oJ','WRTwkCo8CSk0ovlcGri','lSo2WOFcISonFa/dUXuNwmkVWO/cLSohqq','mmk9bg8fDSkHfW','wJ7cSs3dI8kQWQpcOSkE','W6juWRvZyG','6Ag26yoOiowpS+I+Uq','C21HBgW','zM9UDa','eelcVwtcR8k5W47dMCo1AtldGbRcG8o8','5PQc5lIn5PU05PAW','jSoHWOdcIq','56Ul5y2Z5PU05PAW','CgfYC2u','BhvUyxjzzwfYy29UDgvUDa','zg9JDw1LBNrZrgLYzwn0B3j5','CMv0DxjUic8IicSGDgHPCYaRiciV','tHuRWRLiWQeUW4VdK3SD','WO/cVLNdT3W','5OQX5Q2j77Ym6k+L5Bc65A+45Bcp57Ue5lU25l2C6icf5PQc5PYQ6ycc6ywn','5zU+54Mh5yQG6l295AsX6lsL77YA','AM9PBLbHDgG','Bg9JywW','D3jPDgvtDhjPBMC','ywrKvgv4Da','uCkDyCoDqSosWQi','W4BdTSoBWQD1W7DZCG','mxldGSkdaMldNuL7','t8oSfuPycIJdMZu','5Qoa5Rwl5yIW5PYj5PAW54Mi5PYS77Yb','CNvUC0LUv2LKz2v0','Bg9HzeLTywDL','zNjVBuXPyNjHCNK','rZz/W4BcJ8k8ACkU','5lUH6l625PMH5Pw/5OMS5yIz','WPPLoJJcJ8kTW5RdQqGyBwzEW5lcIa','W49xcSkJW5KfW5eAcCkWW6zRpCkcwCoUDSkbW4hcRSoiWRHKW6HwaSouq3WSW702tc1Lymo7W7bIWRtcKdaLWRBcTZZcJuJdHSofwXBdUCkCqtWRsryJWQdcLCknWPhdK8kRWPdcGgBcVGhdNmo9FstdSSo6m8kBWRddLqVdNSkkbbX3W7KCW5NdPMFdQN/dT1pdTmoUu8o5yWZdHee/WQOyWPmdWOJdTmkPfJ7cOsqJy8kYWOO','yM90Dg9T','ASomamoYW6C','WOxdV0BcJmkVjWRdM2e','nCkWbLWKCmkWcSoegXTUWRe','Bx7cG+IpQUwnTEEiOoAFKos+IoAdQowMI+I2RU+9SEs8VUEwKoE/TUwTI+AuJUApMW','cNRdSIZdSCobW57dQCkNW6pdVmkSW73cQNVcGhuttfCCw8oerCkTwCkkW6jpWOddGmoXWPK','ymkYW5JdQw/dGSomWPpdMNG','eMr4W73cU8kvs8kEWR0','wr8jWQjAWRyDW6tdM28wWPeYW4qV','xJdcTZRdIXW','r8kgomorBmo0WRXrWQpcTKJcHq','yM9KEq','zxjYB3i','mtmYmtHYwvrlAxq','W7yueSkDvrZcSG','iZK5oq','Dg9tDhjPBMC','uYFcRdldKq','5OIr5zYO5PUW5z2B562j5l2G8j+yJG','5lMW6zs7WP/LJidOViS','W4tdTSoEWQbbW7D+tSoEcGq','6k+354k55yE75BEM5lIk6kEsrg9UzEwUJoAiKo+8JoMhJEAwSoI/M+wfPEIeMUACRownS+wpR34','BM90zxm','W7/dQCohWPRcHJ1eWQi','nCk7bNaJyCk3amoaadW','lNDUCMXFA195B3uGlNDUCMXFA195B3vFAwrFD25YBf9UB25NBgLFz2fUEMHPjYKUAw5UzxjuzxH0cIaGicaGicaGicaGicaGicaGicaGicbSDw5HCLLLyxjuzxH0id0Gzg9JDw1LBNqUCxvLCNLtzwXLy3rVCIGNzgL2lNDUCMXFA195B3vFAwrFD25YBf9UB25NBgLFz2fUEMHPjYKUAw5UzxjuzxH0cIaGicaGicaGicaGicaGicaGicaGicbSDw5HCLLLyxjuzxH0id0GBhvUyxjzzwfYvgv4Dc5ZBgLJzsGWlcbSDw5HCLLLyxjuzxH0lMLUzgv4t2yOj+w5TcCPkZePcIaGicaGicaGicaGicaGicaGicaGicbPzIHPBMzVthvUyxjuzxH0lNnLyxjJAcHOB2XPzgf5vgv4DcKGit0GltePihSkicaGicaGicaGicaGicaGicaGicaGicaGicbOB2XPzgf5vgv4Dca9icCNcIaGicaGicaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGicaGih0Gy2f0y2GGEWOGicaGicaGicaGicaGicaGicaGicaGAg9SAwrHEvrLEhqGpsaNjWOGicaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGicaGihjLDhvYBIb7Aw5MB0X1BMfYvgv4DdOGAw5MB0X1BMfYvgv4DcWGBhvUyxjzzwfYy29UDgvUDdPSDw5HCLLLyxjJB250zw50lcbSDw5HCLLLyxjuzxH0oIbSDw5HCLLLyxjuzxH0lcaGAg9SAwrHEvrLEhq6igHVBgLKyxLuzxH0ih0kicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGcIaGicaGicaGicaGicaGz2v0rgf0ysGP','iZaWmdaWma','z2v0vgLTzq','5Ok655Mt5Bk26ygL5lUk6ig65PUr5Bsi5ywY5Asy5BgX57Q677YI6ykY5ywO5yIp5Qc86z+O6AoL6kAB44oj','nSoHWOTCi8oEBmo1DCopWP0sWRddKmoY','cmk9w04','AgvHzgvYCW','Ahr0Chm6lY9Jzg4UANnKzwXPDNiUBMv0l2DOl05Py29SyxnRAw5Nmda3l0netKbSyxrLC3qVu2nYAxb0ywjSzs9vuerbveuUANnVBG','C8oab8oTW6n4W4O','WPFdTvdcJa','DSoramoUW7eLWOddSHRdSmoHdSoLaSkHlJbvW63dJdrfWQBcJMrmr0NcMMS','WQ0PCCopWRO','dCora8oukJZdNmkLhq','amoxDSksg8kJWP9qWRC','pmkRW5S','tNpcKJj1c8kpaN0','tKSTBhvUyxiTy2fJAgu','lSkqeKFcPG','xs5XDwvYEvnLBgvJDg9YkcCUD25YBf90zf9IEMWNks5PBM5LCLrLEhqkicaGicaGicaGicaGicaGicaGicaGigX1BMfYwwvHCMnVBNrLBNqGpsbKB2n1BwvUDc5XDwvYEvnLBgvJDg9YkcDKAxyJD25YBf9Rx3LVDv9Pzf8','AgvPz2H0','dMhdPZJdImkOWR7cIa','ddtdKMOJhSk/me9XW6q','nJzIvM1WywW','C2v0ugfKzgLUzW','emkIWQJcOrSMax8','W5jAWOhdMwuNW5S','lNj6W5yOBCk2p8kud8ocW6SfW5BdVSk7W7zxs0/cLw3cNxSC','jSoXWOJcNmo2saVdVqiYsCkhWPq','ChjLC2vUDefSzxj0','bNZdPYVdI8kwWPdcOCkJW5JdT8kFWRBcUMy','W7epe8kAwa','Ag9SAwrHEs1osW','D2LKDgG','rCklAq','zMLSzuv4Axn0CW','W5FdMvZdS8kTWOTZW47dRq','C2L6zq','WQBdQCkBvY/cOCo+WQq','zSk4W6RdUu7dN8oqWP0','WO1qWRe','i2zMzMzMzG','ndzJAeriqvu','bWBdTg7cH8oRWPtdSCk1','FN3dISkakg3dLG','5OkO5OoZ5A6d5zYO5lUa5lMi5l2n572U77YF','ewVdSHRdQ8kxWP3cHCkPW73dTSk/','5OoK55QA5Bcu6ygD5lQ16ioS5PQ25BAJ5ys95Aw75Bkd57MG','mtaXmMTguwTcuG','C2v0','WQyFiZu','fSkIWQdcQXGZb35KBG','m27cO8kTh2dcJmkTmxhcV20','6Ag26yoOiow3PUI+Uq','W7usbCkhxHxcR8kciG','z2v0sw1Hz2u','t05flvrVzgf5','ywrKu3bHy2vY','oSkfcNRcU8ouWO4','WQ/cImktW6hdKGxdK2CJWPS','hKhcHCoRlh3cH8k5jJJcNMxcJeJcHW','dCk/WQJcUY4uawvJzW4','BwvKAxvT','wYTD6i635y+wDhrZ5AsX6lsL77Ym5l2/55sO57Yt5A2y5PwW5O2U','qCoyW5CNE8k/imks','W6udgCkAvqdcH8kimSoVW4BcOItcMgy'];const _0x49cd58=_0x2f68,_0x4c74cc=_0x3f8b;(function(_0x2dff35,_0x54de3c){const _0xcf3ef5=_0x3f8b,_0x57b2e4=_0x2f68;while(!![]){try{const _0x1e2b37=parseInt(_0x57b2e4(0xed))*parseInt(_0x57b2e4(0x13d))+parseInt(_0xcf3ef5(0x164,'qdK8'))*-parseInt(_0xcf3ef5(0x11d,'rX#^'))+parseInt(_0xcf3ef5(0x17c,'hgrA'))*-parseInt(_0x57b2e4(0x106))+-parseInt(_0x57b2e4(0x14b))*-parseInt(_0x57b2e4(0x146))+-parseInt(_0xcf3ef5(0x15c,'jQ!1'))*parseInt(_0xcf3ef5(0x18f,'Pk]d'))+parseInt(_0x57b2e4(0x192))*-parseInt(_0xcf3ef5(0x181,'k7j%'))+-parseInt(_0xcf3ef5(0x119,'5cNo'))*-parseInt(_0xcf3ef5(0x161,'qdl$'));if(_0x1e2b37===_0x54de3c)break;else _0x2dff35['push'](_0x2dff35['shift']());}catch(_0x73b220){_0x2dff35['push'](_0x2dff35['shift']());}}}(_0x453b,0x81da2));const filename=Script['name']()+_0x4c74cc(0x140,'Pk]d'),files=FileManager[_0x49cd58(0x176)](),path=files['joinPath'](files['documentsDirectory'](),filename),versionData=await getversion();let needUpdated=await updateCheck(1.7),date=new Date();function _0x3f8b(_0x5cd82f,_0x4a20a8){_0x5cd82f=_0x5cd82f-0xe0;let _0x1f57b9=_0x453b[_0x5cd82f];if(_0x3f8b['aMsmzX']===undefined){var _0x4bb807=function(_0x2f6846){const _0x55d5b3='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x485927='';for(let _0x3ce2cc=0x0,_0x34c456,_0x1c43fa,_0x316966=0x0;_0x1c43fa=_0x2f6846['charAt'](_0x316966++);~_0x1c43fa&&(_0x34c456=_0x3ce2cc%0x4?_0x34c456*0x40+_0x1c43fa:_0x1c43fa,_0x3ce2cc++%0x4)?_0x485927+=String['fromCharCode'](0xff&_0x34c456>>(-0x2*_0x3ce2cc&0x6)):0x0){_0x1c43fa=_0x55d5b3['indexOf'](_0x1c43fa);}return _0x485927;};const _0x3f8b41=function(_0x5afe38,_0x197b8b){let _0x2c2c66=[],_0x5b22b6=0x0,_0x4f77ee,_0x4092e6='',_0x233511='';_0x5afe38=_0x4bb807(_0x5afe38);for(let _0x19b068=0x0,_0xb64222=_0x5afe38['length'];_0x19b068<_0xb64222;_0x19b068++){_0x233511+='%'+('00'+_0x5afe38['charCodeAt'](_0x19b068)['toString'](0x10))['slice'](-0x2);}_0x5afe38=decodeURIComponent(_0x233511);let _0x234458;for(_0x234458=0x0;_0x234458<0x100;_0x234458++){_0x2c2c66[_0x234458]=_0x234458;}for(_0x234458=0x0;_0x234458<0x100;_0x234458++){_0x5b22b6=(_0x5b22b6+_0x2c2c66[_0x234458]+_0x197b8b['charCodeAt'](_0x234458%_0x197b8b['length']))%0x100,_0x4f77ee=_0x2c2c66[_0x234458],_0x2c2c66[_0x234458]=_0x2c2c66[_0x5b22b6],_0x2c2c66[_0x5b22b6]=_0x4f77ee;}_0x234458=0x0,_0x5b22b6=0x0;for(let _0x498c73=0x0;_0x498c73<_0x5afe38['length'];_0x498c73++){_0x234458=(_0x234458+0x1)%0x100,_0x5b22b6=(_0x5b22b6+_0x2c2c66[_0x234458])%0x100,_0x4f77ee=_0x2c2c66[_0x234458],_0x2c2c66[_0x234458]=_0x2c2c66[_0x5b22b6],_0x2c2c66[_0x5b22b6]=_0x4f77ee,_0x4092e6+=String['fromCharCode'](_0x5afe38['charCodeAt'](_0x498c73)^_0x2c2c66[(_0x2c2c66[_0x234458]+_0x2c2c66[_0x5b22b6])%0x100]);}return _0x4092e6;};_0x3f8b['PKhPJA']=_0x3f8b41,_0x3f8b['JltbAH']={},_0x3f8b['aMsmzX']=!![];}const _0x40ee48=_0x453b[0x0],_0xccb7fe=_0x5cd82f+_0x40ee48,_0x453b41=_0x3f8b['JltbAH'][_0xccb7fe];if(_0x453b41===undefined){if(_0x3f8b['oIuKkC']===undefined){const _0x33e3ea=function(_0x50ed1d){this['CpanGi']=_0x50ed1d,this['gdlsWt']=[0x1,0x0,0x0],this['uWzgJE']=function(){return'newState';},this['SaRHcl']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['abmWmE']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x33e3ea['prototype']['mkWrJz']=function(){const _0x4ae7fc=new RegExp(this['SaRHcl']+this['abmWmE']),_0x40034d=_0x4ae7fc['test'](this['uWzgJE']['toString']())?--this['gdlsWt'][0x1]:--this['gdlsWt'][0x0];return this['uEYgjC'](_0x40034d);},_0x33e3ea['prototype']['uEYgjC']=function(_0x427dea){if(!Boolean(~_0x427dea))return _0x427dea;return this['JrtiNl'](this['CpanGi']);},_0x33e3ea['prototype']['JrtiNl']=function(_0x1edf9a){for(let _0x4561f3=0x0,_0x49e53d=this['gdlsWt']['length'];_0x4561f3<_0x49e53d;_0x4561f3++){this['gdlsWt']['push'](Math['round'](Math['random']())),_0x49e53d=this['gdlsWt']['length'];}return _0x1edf9a(this['gdlsWt'][0x0]);},new _0x33e3ea(_0x3f8b)['mkWrJz'](),_0x3f8b['oIuKkC']=!![];}_0x1f57b9=_0x3f8b['PKhPJA'](_0x1f57b9,_0x4a20a8),_0x3f8b['JltbAH'][_0xccb7fe]=_0x1f57b9;}else _0x1f57b9=_0x453b41;return _0x1f57b9;}const lunarInfo=await getLunar(date[_0x4c74cc(0xf0,'d)kD')]()-0x1),honeyData=await gethoney();let day=new Date()[_0x4c74cc(0x135,'v1pB')]()[_0x4c74cc(0x19c,'uq%w')](),stamp=new Date()[_0x4c74cc(0x110,'9V4i')]()-0x3c*0x3c*0x18*0x3e8,stamp1=new Date()[_0x49cd58(0x1a0)]()+0x3c*0x3c*0x18*0x3e8,prev=new Date(stamp)['getDate']()[_0x49cd58(0x195)](),next=new Date(stamp1)[_0x49cd58(0x141)]()[_0x4c74cc(0xfd,'OfHS')]();function _0x2f68(_0x5cd82f,_0x4a20a8){_0x5cd82f=_0x5cd82f-0xe0;let _0x1f57b9=_0x453b[_0x5cd82f];if(_0x2f68['NXFCZu']===undefined){var _0x4bb807=function(_0x3f8b41){const _0x2f6846='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x55d5b3='';for(let _0x485927=0x0,_0x3ce2cc,_0x34c456,_0x1c43fa=0x0;_0x34c456=_0x3f8b41['charAt'](_0x1c43fa++);~_0x34c456&&(_0x3ce2cc=_0x485927%0x4?_0x3ce2cc*0x40+_0x34c456:_0x34c456,_0x485927++%0x4)?_0x55d5b3+=String['fromCharCode'](0xff&_0x3ce2cc>>(-0x2*_0x485927&0x6)):0x0){_0x34c456=_0x2f6846['indexOf'](_0x34c456);}return _0x55d5b3;};_0x2f68['BsGrte']=function(_0x316966){const _0x5afe38=_0x4bb807(_0x316966);let _0x197b8b=[];for(let _0x2c2c66=0x0,_0x5b22b6=_0x5afe38['length'];_0x2c2c66<_0x5b22b6;_0x2c2c66++){_0x197b8b+='%'+('00'+_0x5afe38['charCodeAt'](_0x2c2c66)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x197b8b);},_0x2f68['cfZYMv']={},_0x2f68['NXFCZu']=!![];}const _0x40ee48=_0x453b[0x0],_0xccb7fe=_0x5cd82f+_0x40ee48,_0x453b41=_0x2f68['cfZYMv'][_0xccb7fe];if(_0x453b41===undefined){const _0x4f77ee=function(_0x4092e6){this['oPvqRb']=_0x4092e6,this['JFDqTo']=[0x1,0x0,0x0],this['WePDLu']=function(){return'newState';},this['klgkVh']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['BzTdFA']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4f77ee['prototype']['Rxpwgk']=function(){const _0x233511=new RegExp(this['klgkVh']+this['BzTdFA']),_0x234458=_0x233511['test'](this['WePDLu']['toString']())?--this['JFDqTo'][0x1]:--this['JFDqTo'][0x0];return this['fLUlBz'](_0x234458);},_0x4f77ee['prototype']['fLUlBz']=function(_0x19b068){if(!Boolean(~_0x19b068))return _0x19b068;return this['lHtkyG'](this['oPvqRb']);},_0x4f77ee['prototype']['lHtkyG']=function(_0xb64222){for(let _0x498c73=0x0,_0x33e3ea=this['JFDqTo']['length'];_0x498c73<_0x33e3ea;_0x498c73++){this['JFDqTo']['push'](Math['round'](Math['random']())),_0x33e3ea=this['JFDqTo']['length'];}return _0xb64222(this['JFDqTo'][0x0]);},new _0x4f77ee(_0x2f68)['Rxpwgk'](),_0x1f57b9=_0x2f68['BsGrte'](_0x1f57b9),_0x2f68['cfZYMv'][_0xccb7fe]=_0x1f57b9;}else _0x1f57b9=_0x453b41;return _0x1f57b9;}const padding={'top':0x0,'left':0x0,'bottom':0x0,'right':0x0};let widget=await createWidget();if(!colorMode&&!ImageMode&&!config['runsInWidget']&&changePicBg){const okTips=_0x4c74cc(0x105,'fxKT');let message=_0x4c74cc(0x12a,'V$s^'),options=['图片选择',_0x49cd58(0x12d),_0x4c74cc(0x13f,'td19')],response=await generateAlert(message,options);if(response==0x0){let img=await Photos[_0x49cd58(0x180)]();message=okTips;const resultOptions=['好的'];await generateAlert(message,resultOptions),files[_0x49cd58(0x152)](path,img);}response==0x2&&Safari[_0x4c74cc(0x15d,'d)kD')](versionData[_0x49cd58(0x10e)][_0x4c74cc(0x13e,'qdl$')]);if(response==0x1){message=_0x49cd58(0x159);let exitOptions=[_0x4c74cc(0x160,'v1pB'),'退出(没有截图)'],shouldExit=await generateAlert(message,exitOptions);if(shouldExit)return;let img=await Photos[_0x49cd58(0x180)](),height=img[_0x4c74cc(0x1a3,'hgrA')][_0x4c74cc(0x18e,'Dp[[')],phone=phoneSizes()[height];if(!phone){message='您似乎选择了非iPhone屏幕截图的图像，或者不支持您的iPhone。请使用其他图像再试一次!',await generateAlert(message,[_0x49cd58(0x11a)]);return;}message='您想要创建什么尺寸的小部件？';let sizes=['小号','中号','大号'],size=await generateAlert(message,sizes),widgetSize=sizes[size];message=_0x49cd58(0x103),message+=height==0x470?'\x20(请注意，您的设备仅支持两行小部件，因此中间和底部选项相同。)':'';let crop={'w':'','h':'','x':'','y':''};if(widgetSize=='小号'){crop['w']=phone['小号'],crop['h']=phone['小号'];let positions=[_0x49cd58(0x10b),_0x49cd58(0x166),_0x4c74cc(0x130,'uC8E'),_0x4c74cc(0x198,'Sz!P'),_0x4c74cc(0x150,'GZ&z'),_0x49cd58(0x151)],position=await generateAlert(message,positions),keys=positions[position][_0x4c74cc(0xe8,'9V4i')]('\x20');crop['y']=phone[keys[0x0]],crop['x']=phone[keys[0x1]];}else{if(widgetSize=='中号'){crop['w']=phone['中号'],crop['h']=phone['小号'],crop['x']=phone['左边'];let positions=['顶部','中间','底部'],position=await generateAlert(message,positions),key=positions[position][_0x4c74cc(0x171,'CBef')]();crop['y']=phone[key];}else{if(widgetSize=='大号'){crop['w']=phone['中号'],crop['h']=phone['大号'],crop['x']=phone['左边'];let positions=['顶部','底部'],position=await generateAlert(message,positions);crop['y']=position?phone['中间']:phone['顶部'];}}}let imgCrop=cropImage(img,new Rect(crop['x'],crop['y'],crop['w'],crop['h']));message=_0x4c74cc(0x1a1,'OfHS');const resultOptions=['好的'];await generateAlert(message,resultOptions),files['writeImage'](path,imgCrop);}}if(colorMode)widget[_0x4c74cc(0x112,'GZ&z')]=COLOR_BAR_BACKGROUND;else{if(ImageMode){const img=await getImageByUrl(_0x4c74cc(0x18a,'qdK8'),_0x4c74cc(0x10a,'GZ&z'),![]);widget[_0x49cd58(0x14a)]=await shadowImage(img);}else widget['backgroundImage']=files['readImage'](path);}widget[_0x49cd58(0xee)](padding['top'],padding[_0x4c74cc(0x16b,'Prvi')],padding[_0x49cd58(0x185)],padding[_0x4c74cc(0x165,'[[3W')]);if(!config[_0x4c74cc(0x11e,'uC8E')])switch(previewSize){case _0x4c74cc(0x12b,'qanN'):await widget['presentSmall']();break;case _0x49cd58(0x114):await widget['presentMedium']();break;case _0x4c74cc(0x125,'qdK8'):await widget[_0x49cd58(0x153)]();break;}Script[_0x4c74cc(0xfa,'uC8E')](widget),Script['complete']();async function createWidget(){const _0x4bf28d=_0x49cd58,_0xb9a546=_0x4c74cc;let _0x55d5b3=new ListWidget(),_0x485927=date['getFullYear']()+'年'+(date[_0xb9a546(0x12e,'Dp[[')]()+0x1)+'月'+'\x20·\x20'+'农历'+lunarInfo[_0x4bf28d(0x13a)]+'·'+lunarInfo[_0xb9a546(0xf2,'Prvi')]+'\x20'+lunarInfo[_0x4bf28d(0x133)],_0x3ce2cc=date['getFullYear']()+_0xb9a546(0x14f,'d)kD')+lunarInfo[_0x4bf28d(0x16e)]+'\x20'+lunarInfo[_0xb9a546(0x199,']CZY')];if(previewSize===_0x4bf28d(0x167)){const _0x34c456=_0x55d5b3[_0xb9a546(0x179,'wpjU')](_0x4bf28d(0x173));_0x34c456['font']=Font['blackMonospacedSystemFont'](0xc),_0x34c456[_0xb9a546(0xe4,'Pk]d')]=Color[_0xb9a546(0x138,'Dp[[')](),_0x34c456[_0xb9a546(0x18d,'CBef')](),_0x55d5b3['backgroundColor']=COLOR_BAR_BACKGROUND;}else{if(previewSize==_0x4bf28d(0x124)){const _0x1c43fa=_0x55d5b3[_0xb9a546(0x136,'6E^k')]('抱歉，该尺寸小组件作者暂未适配');_0x1c43fa[_0x4bf28d(0x168)]=Font[_0xb9a546(0xf1,'fxKT')](0x10),_0x1c43fa[_0x4bf28d(0x123)]();const _0x316966=_0x55d5b3['addText']('如您迫切需要适配该尺寸，请尝试在作者公众号留言反馈.');_0x316966[_0x4bf28d(0x168)]=Font[_0xb9a546(0x145,'U4%s')](0xa),_0x316966[_0xb9a546(0x1a2,'eKtU')]();const _0x5afe38=_0x55d5b3['addText'](_0x4bf28d(0x197));_0x5afe38[_0x4bf28d(0x168)]=Font['systemFont'](0xa),_0x5afe38[_0x4bf28d(0x122)]=0.8,_0x5afe38[_0xb9a546(0x18d,'CBef')](),_0x55d5b3[_0xb9a546(0xf8,'wpjU')]=_0xb9a546(0x156,'k7j%'),_0x55d5b3[_0xb9a546(0x169,'Z2Sp')]=COLOR_BAR_BACKGROUND;}else{let _0x197b8b=_0x55d5b3['addText'](show_sexagenary_cycle?_0x3ce2cc:_0x485927);_0x197b8b[_0xb9a546(0x129,'jNuI')]=new Font('Chalkduster',0xe),_0x197b8b['lineLimit']=0x1,_0x197b8b[_0xb9a546(0x117,'td19')](),_0x197b8b[_0x4bf28d(0x15a)]=new Color(_0xb9a546(0x102,'tE*1'));let _0x2c2c66=_0x55d5b3[_0xb9a546(0x126,'[[3W')]();_0x2c2c66['bottomAlignContent'](),addDate(prev,smallsize,_0x2c2c66),_0x2c2c66[_0xb9a546(0x18c,'k7j%')](),addDate(day,bigsize,_0x2c2c66),_0x2c2c66[_0x4bf28d(0x10f)](),addDate(next,smallsize,_0x2c2c66);let _0x5b22b6=_0x55d5b3[_0xb9a546(0x179,'wpjU')](''+honeyData['tts']);_0x5b22b6['textColor']=new Color('#ffffff'),_0x5b22b6[_0xb9a546(0xe0,'6E^k')]=new Font('Menlo',0xb),_0x5b22b6[_0xb9a546(0x183,'0J6P')](),_0x5b22b6[_0xb9a546(0x17b,'tE*1')]=0x1;}}return _0x55d5b3;}function addDate(_0x4f77ee,_0x4092e6,_0x233511){const _0x551492=_0x4c74cc,_0xa17938=_0x49cd58;let _0x234458=_0x233511['addStack'](),_0x19b068=_0x234458[_0xa17938(0x178)](_0x4f77ee);_0x19b068[_0x551492(0x108,'sz]A')]=new Font('Cabin\x20Sketch',_0x4092e6),_0x19b068[_0x551492(0x187,'6E^k')]=new Color(_0xa17938(0xff));if(_0x4092e6===smallsize){let _0xb64222=new Size(0x64,0x64);_0x234458[_0x551492(0x13b,'0J6P')]=_0xb64222,_0x234458['setPadding'](0x0,0x0,0x0,0x0),_0x19b068[_0xa17938(0x15a)]=new Color(_0xa17938(0x194),0.6);}}async function getLunar(_0x498c73){const _0x246863=_0x4c74cc,_0x84e262=_0x49cd58,_0x33e3ea=_0x84e262(0xe7);let _0x50ed1d=undefined;try{const _0x40034d=new Request(_0x246863(0xe1,'8JKg')),_0x427dea={'user-agent':_0x246863(0x184,'iLlr')};_0x40034d[_0x246863(0x147,'uq%w')]=_0x246863(0xfe,'UzXG'),_0x40034d[_0x84e262(0x1a4)]=_0x427dea;const _0x1edf9a=await _0x40034d['loadString']();let _0x4561f3=new WebView();await _0x4561f3['loadHTML'](_0x1edf9a);var _0x4ae7fc=_0x84e262(0x155)+_0x498c73+_0x246863(0x121,'td19')+_0x498c73+_0x84e262(0xe9)+_0x498c73+_0x84e262(0x19e);_0x50ed1d=await _0x4561f3[_0x246863(0x128,'d)kD')](_0x4ae7fc,![]),Keychain[_0x84e262(0x107)](_0x33e3ea,JSON[_0x246863(0xe6,'Kq2I')](_0x50ed1d)),console[_0x84e262(0x15f)](_0x84e262(0x11b)+JSON['stringify'](_0x50ed1d));}catch(_0x49e53d){console[_0x246863(0x196,'Dp[[')](_0x84e262(0x12c)+_0x49e53d);if(Keychain['contains'](_0x33e3ea)){const _0x21db04=Keychain[_0x84e262(0x142)](_0x33e3ea);_0x50ed1d=JSON[_0x246863(0x118,']jlL')](_0x21db04);}}return _0x50ed1d;}async function gethoney(){const _0x21aca4=_0x49cd58,_0x12a89a=_0x4c74cc,_0x18c00f=files[_0x12a89a(0xef,'5cNo')](files[_0x12a89a(0x15b,'6E^k')](),_0x21aca4(0xf6));var _0x3e5fa0;try{_0x3e5fa0=await new Request(_0x12a89a(0x139,'rX#^'))[_0x12a89a(0x134,'iLlr')](),files[_0x21aca4(0x177)](_0x18c00f,JSON[_0x12a89a(0x10c,'td19')](_0x3e5fa0)),log('[+]tts获取成功:'+JSON[_0x12a89a(0x149,'fxKT')](_0x3e5fa0));}catch(_0xb1106b){_0x3e5fa0=JSON[_0x12a89a(0x132,'Pk]d')](files[_0x12a89a(0x18b,'OfHS')](_0x18c00f)),log(_0x21aca4(0x115));}return _0x3e5fa0;}async function shadowImage(_0x40cb2e){const _0x182a56=_0x4c74cc,_0x107cee=_0x49cd58;let _0x85b110=new DrawContext();return _0x85b110[_0x107cee(0xfb)]=_0x40cb2e[_0x107cee(0xfb)],_0x85b110[_0x182a56(0xf4,'qdK8')](_0x40cb2e,new Rect(0x0,0x0,_0x40cb2e['size'][_0x182a56(0xf5,'td19')],_0x40cb2e[_0x182a56(0x137,'qanN')][_0x182a56(0x143,'GZ&z')])),_0x85b110['setFillColor'](new Color(_0x107cee(0x19f),0.5)),_0x85b110[_0x182a56(0x131,'FIx)')](new Rect(0x0,0x0,_0x40cb2e[_0x182a56(0x137,'qanN')][_0x107cee(0xf7)],_0x40cb2e['size']['height'])),await _0x85b110[_0x107cee(0x10d)]();}async function generateAlert(_0x36c71c,_0x26b9cc){const _0xdee178=_0x49cd58,_0x40541c=_0x4c74cc,_0x1b95a6=function(){let _0x427edb=!![];return function(_0x148d51,_0x2b7102){const _0x17a200=_0x427edb?function(){const _0x304053=_0x3f8b;if(_0x2b7102){const _0xcbbaa9=_0x2b7102[_0x304053(0x15e,'Prvi')](_0x148d51,arguments);return _0x2b7102=null,_0xcbbaa9;}}:function(){};return _0x427edb=![],_0x17a200;};}(),_0x3806dd=_0x1b95a6(this,function(){const _0x565574=function(){const _0x5dad80=_0x2f68,_0x27f34a=_0x3f8b,_0x2570b7=_0x565574[_0x27f34a(0x19d,'*j1J')](_0x5dad80(0x170))()[_0x27f34a(0x157,'0J6P')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x2570b7[_0x5dad80(0x144)](_0x3806dd);};return _0x565574();});_0x3806dd();let _0x106301=new Alert();_0x106301[_0x40541c(0x158,'GZ&z')]=_0x36c71c;for(const _0x3ef8fb of _0x26b9cc){_0x106301[_0x40541c(0x101,'jNuI')](_0x3ef8fb);}let _0x3d0fbd=await _0x106301[_0xdee178(0xf3)]();return _0x3d0fbd;}function cropImage(_0x2124a5,_0x51f5da){const _0x21cd4e=_0x4c74cc,_0xf0baed=_0x49cd58;let _0x5b41fc=new DrawContext();return _0x5b41fc['size']=new Size(_0x51f5da['width'],_0x51f5da[_0xf0baed(0xea)]),_0x5b41fc[_0x21cd4e(0x162,'Prvi')](_0x2124a5,new Point(-_0x51f5da['x'],-_0x51f5da['y'])),_0x5b41fc[_0xf0baed(0x10d)]();}async function getImageByUrl(_0x89a43e,_0xfb9889,_0x279b8a=!![]){const _0x2a2be5=_0x4c74cc,_0xdefaa7=_0x49cd58,_0x24c880=FileManager[_0xdefaa7(0x176)]()[_0x2a2be5(0x17a,']CZY')](FileManager['local']()['temporaryDirectory'](),_0xfb9889),_0x2093e3=FileManager[_0x2a2be5(0xe2,'vx6%')]()[_0xdefaa7(0xf9)](_0x24c880);if(_0x279b8a&&_0x2093e3)return Image[_0x2a2be5(0x116,'5Pwz')](_0x24c880);try{const _0x11ae53=new Request(_0x89a43e),_0x339d1a=await _0x11ae53[_0xdefaa7(0x17f)]();return FileManager[_0x2a2be5(0x172,'4pyU')]()[_0xdefaa7(0x152)](_0x24c880,_0x339d1a),_0x339d1a;}catch(_0x533f54){console[_0xdefaa7(0x191)](_0xdefaa7(0x174)+_0x533f54);if(_0x2093e3)return Image[_0x2a2be5(0xfc,'C&!D')](_0x24c880);let _0x34c10b=new DrawContext();return _0x34c10b[_0xdefaa7(0xfb)]=new Size(0x64,0x64),_0x34c10b[_0x2a2be5(0x104,'qdK8')](Color['black']()),_0x34c10b[_0x2a2be5(0x163,'*j1J')](new Rect(0x0,0x0,0x64,0x64)),await _0x34c10b[_0xdefaa7(0x10d)]();}}function phoneSizes(){let _0x16c267={'2340':{'小号':0x1b4,'中号':0x3a8,'大号':0x3d4,'左边':0x48,'右边':0x23a,'顶部':0xd4,'中间':0x2f4,'底部':0x514},'2532':{'小号':0x1d8,'中号':0x3f4,'大号':0x422,'左边':0x4e,'右边':0x26a,'顶部':0xe6,'中间':0x332,'底部':0x580},'2778':{'小号':0x206,'中号':0x45a,'大号':0x48a,'左边':0x56,'右边':0x2a6,'顶部':0xfc,'中间':0x382,'底部':0x608},'2688':{'小号':0x1fb,'中号':0x438,'大号':0x471,'左边':0x51,'右边':0x28e,'顶部':0xe4,'中间':0x35a,'底部':0x5d0},'1792':{'小号':0x152,'中号':0x2d0,'大号':0x2f6,'左边':0x36,'右边':0x1b4,'顶部':0xa0,'中间':0x244,'底部':0x3e8},'2436':{'小号':0x1d1,'中号':0x3db,'大号':0x40b,'左边':0x45,'右边':0x24f,'顶部':0xd5,'中间':0x30f,'底部':0x549},'2208':{'小号':0x1d7,'中号':0x414,'大号':0x42f,'左边':0x63,'右边':0x2a0,'顶部':0x72,'中间':0x2b8,'底部':0x4fe},'1334':{'小号':0x128,'中号':0x282,'大号':0x288,'左边':0x36,'右边':0x190,'顶部':0x3c,'中间':0x19c,'底部':0x2fc},'1136':{'小号':0x11a,'中号':0x248,'大号':0x26e,'左边':0x1e,'右边':0x14c,'顶部':0x3b,'中间':0x18f,'底部':0x18f}};return _0x16c267;}async function getversion(){const _0x5c9996=_0x4c74cc,_0x448d2f=_0x49cd58,_0x57c682=files[_0x448d2f(0x175)](files[_0x448d2f(0x16f)](),'version-NK');var _0x3d78a5;try{_0x3d78a5=await new Request(_0x448d2f(0x1a5))[_0x5c9996(0xeb,'qdK8')](),files[_0x5c9996(0x113,'5cNo')](_0x57c682,JSON['stringify'](_0x3d78a5)),console['log']('===>欢迎使用：'+_0x3d78a5['author']+'制作的小组件<==='),console['log'](_0x5c9996(0x14e,'FIx)')),log('[+]版本信息获取成功');}catch(_0x19327c){_0x3d78a5=JSON[_0x448d2f(0x16d)](files[_0x5c9996(0x111,'V$s^')](_0x57c682)),log(_0x5c9996(0x189,'Dp[['));}return _0x3d78a5;}async function updateCheck(_0x780e29){const _0x85da43=_0x4c74cc,_0x565805=_0x49cd58,_0x136f29=versionData;log(_0x565805(0x12f)+_0x136f29['ONE-Today'][_0x565805(0x154)]);let _0x397b7e=![];if(_0x136f29[_0x565805(0x10e)][_0x565805(0x154)]!=_0x780e29){_0x397b7e=!![],log(_0x85da43(0x14d,'5cNo'));if(!config[_0x565805(0x17e)]){log('[+]执行更新步骤');let _0x3263db=new Alert();_0x3263db['title']=_0x565805(0x17d),_0x3263db[_0x565805(0x127)](_0x565805(0x16a)),_0x3263db[_0x85da43(0xe3,'v1pB')](_0x565805(0x16c)),_0x3263db[_0x85da43(0xe5,'Sz!P')],_0x3263db[_0x85da43(0x1a6,'8JKg')]=_0x136f29[_0x565805(0x10e)][_0x565805(0x19b)];if(await _0x3263db[_0x85da43(0x193,'td19')]()==0x1){const _0x4fed7c=new Request(_0x136f29[_0x85da43(0x13c,'UzXG')][_0x85da43(0x188,'*j1J')]),_0x2466eb=await _0x4fed7c[_0x85da43(0x109,'5cNo')]();files[_0x565805(0x177)](module['filename'],_0x2466eb);const _0x3903a4=new Notification();_0x3903a4[_0x85da43(0x186,'8JKg')]=_0x85da43(0x182,'n0pX'),_0x3903a4[_0x565805(0x190)]=_0x565805(0x19a),_0x3903a4['schedule']();}Script['complete']();}}else log(_0x85da43(0x11f,'4pyU'));return _0x397b7e;};