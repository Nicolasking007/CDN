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
function _0x561e(_0x5be59e,_0x46f659){const _0x5aaa01=_0x32fa();return _0x561e=function(_0x3de3a2,_0x3f8750){_0x3de3a2=_0x3de3a2-0x70;let _0x32fa8f=_0x5aaa01[_0x3de3a2];if(_0x561e['IlfIuY']===undefined){var _0x3c0c4c=function(_0x44bb9b){const _0x41256a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3227b5='',_0x561ec5='',_0x59ab82=_0x3227b5+_0x3c0c4c;for(let _0x4b1fdb=0x0,_0x5064a5,_0x69ef03,_0x938a66=0x0;_0x69ef03=_0x44bb9b['charAt'](_0x938a66++);~_0x69ef03&&(_0x5064a5=_0x4b1fdb%0x4?_0x5064a5*0x40+_0x69ef03:_0x69ef03,_0x4b1fdb++%0x4)?_0x3227b5+=_0x59ab82['charCodeAt'](_0x938a66+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x5064a5>>(-0x2*_0x4b1fdb&0x6)):_0x4b1fdb:0x0){_0x69ef03=_0x41256a['indexOf'](_0x69ef03);}for(let _0x39847b=0x0,_0x237e61=_0x3227b5['length'];_0x39847b<_0x237e61;_0x39847b++){_0x561ec5+='%'+('00'+_0x3227b5['charCodeAt'](_0x39847b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x561ec5);};_0x561e['vvJxMC']=_0x3c0c4c,_0x5be59e=arguments,_0x561e['IlfIuY']=!![];}const _0xcb3891=_0x5aaa01[0x0],_0x3adc79=_0x3de3a2+_0xcb3891,_0x20c81e=_0x5be59e[_0x3adc79];if(!_0x20c81e){const _0x18ff98=function(_0x8140dd){this['tAmUSs']=_0x8140dd,this['mCeURI']=[0x1,0x0,0x0],this['qmCGpt']=function(){return'newState';},this['OFVlQI']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['UHhovN']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x18ff98['prototype']['fiIwGI']=function(){const _0x122ee4=new RegExp(this['OFVlQI']+this['UHhovN']),_0xa37a9e=_0x122ee4['test'](this['qmCGpt']['toString']())?--this['mCeURI'][0x1]:--this['mCeURI'][0x0];return this['cNWcKX'](_0xa37a9e);},_0x18ff98['prototype']['cNWcKX']=function(_0x3c06bf){if(!Boolean(~_0x3c06bf))return _0x3c06bf;return this['bPlwPg'](this['tAmUSs']);},_0x18ff98['prototype']['bPlwPg']=function(_0x5b90b2){for(let _0x1ebc03=0x0,_0x48e3ea=this['mCeURI']['length'];_0x1ebc03<_0x48e3ea;_0x1ebc03++){this['mCeURI']['push'](Math['round'](Math['random']())),_0x48e3ea=this['mCeURI']['length'];}return _0x5b90b2(this['mCeURI'][0x0]);},new _0x18ff98(_0x561e)['fiIwGI'](),_0x32fa8f=_0x561e['vvJxMC'](_0x32fa8f),_0x5be59e[_0x3adc79]=_0x32fa8f;}else _0x32fa8f=_0x20c81e;return _0x32fa8f;},_0x561e(_0x5be59e,_0x46f659);}const _0x26ddb9=_0x561e,_0x44a888=_0x3c0c;(function(_0x1836e5,_0x216846){const _0x5670b0=_0x3c0c,_0x300767=_0x561e,_0x88c313=_0x1836e5();while(!![]){try{const _0x876490=parseInt(_0x300767(0xa2))/0x1+-parseInt(_0x5670b0(0xa5,'kx7a'))/0x2+parseInt(_0x300767(0x95))/0x3*(-parseInt(_0x300767(0x7d))/0x4)+-parseInt(_0x300767(0xc7))/0x5+-parseInt(_0x300767(0x7f))/0x6*(parseInt(_0x300767(0xc0))/0x7)+-parseInt(_0x300767(0xc1))/0x8+parseInt(_0x300767(0x78))/0x9;if(_0x876490===_0x216846)break;else _0x88c313['push'](_0x88c313['shift']());}catch(_0x4e422c){_0x88c313['push'](_0x88c313['shift']());}}}(_0x32fa,0x1d007));const filename=Script['name'](),files=FileManager[_0x44a888(0x85,'L7xC')](),path=files[_0x26ddb9(0xce)](files['documentsDirectory'](),filename),versionData=await getversion(),needUpdated=await updateCheck(0x1),menulistData=await menudata(),top=await actionStatementSettings();async function actionmenulist(){const _0x434b08=_0x26ddb9,_0x393871=_0x44a888,_0x237e61=new Alert();_0x237e61[_0x393871(0x9e,'I$k8')]=menulistData[_0x393871(0x9b,'&92O')],_0x237e61[_0x434b08(0xbd)]=menulistData[_0x393871(0xc2,'Kkv@')],_0x237e61['addCancelAction']('关闭');const _0x18ff98=menulistData[_0x393871(0xb2,'2e#R')];_0x18ff98['forEach'](_0x122ee4=>{const _0x5457a3=_0x393871;_0x237e61['addAction'](_0x122ee4[_0x5457a3(0xa7,'h%d@')]);});const _0x8140dd=await _0x237e61[_0x434b08(0xc4)]();if(_0x8140dd!=-0x1){const _0xa37a9e=_0x18ff98[_0x8140dd],_0x3c06bf=FileManager[module[_0x434b08(0xaa)][_0x434b08(0xc9)](_0x434b08(0xaf))?_0x393871(0x99,'V$^l'):_0x434b08(0x8e)]();await Promise[_0x434b08(0x8a)](_0xa37a9e[_0x393871(0x84,'3$vy')][_0x393871(0x71,'Kkv@')](async _0x1ebc03=>{const _0x5e3d45=_0x393871,_0x21f0b7=_0x434b08,_0x48e3ea=new Request(_0x21f0b7(0x79)+encodeURIComponent(_0x1ebc03)),_0x2db8a5=await _0x48e3ea['load']();_0x3c06bf[_0x5e3d45(0xb6,'Prpc')](_0x3c06bf['joinPath'](_0x3c06bf[_0x21f0b7(0xbe)](),_0x1ebc03),_0x2db8a5);})),Safari[_0x434b08(0x89)](_0x393871(0x73,'L7xC')+encodeURIComponent(_0xa37a9e[_0x434b08(0xab)][0x0]));const _0x5b90b2=new Notification();_0x5b90b2['title']=''+_0xa37a9e[_0x434b08(0xca)],_0x5b90b2[_0x393871(0xbc,'BFUY')]=_0x393871(0xbb,'7EpG'),_0x5b90b2[_0x434b08(0xae)]();}}async function actionStatementSettings(){const _0x10e5b6=_0x26ddb9,_0x371965=_0x44a888,_0x10d354=(function(){let _0x285cf3=!![];return function(_0x49a65e,_0xd8ea06){const _0x574f4c=_0x285cf3?function(){const _0x6bb8ef=_0x3c0c;if(_0xd8ea06){const _0x3794a4=_0xd8ea06[_0x6bb8ef(0x90,'gKI!')](_0x49a65e,arguments);return _0xd8ea06=null,_0x3794a4;}}:function(){};return _0x285cf3=![],_0x574f4c;};}()),_0x42b96f=_0x10d354(this,function(){const _0x45dd47=_0x3c0c,_0x171085=_0x561e;return _0x42b96f['toString']()[_0x171085(0xb3)](_0x45dd47(0xad,'2[gR'))[_0x171085(0x82)]()[_0x45dd47(0xba,'85nN')](_0x42b96f)[_0x45dd47(0xa4,'RcIf')](_0x171085(0xcd));});_0x42b96f();const _0x195b58=new Alert();_0x195b58[_0x371965(0x9a,')x!7')]=_0x10e5b6(0x70),_0x195b58['message']=menulistData[_0x371965(0x8c,'gKI!')],_0x195b58[_0x371965(0xac,'Kkv@')]('不同意'),_0x195b58['addAction']('同意');const _0x49016d=await _0x195b58[_0x10e5b6(0xa9)]();if(_0x49016d===0x0)return;await actionmenulist();}async function menudata(){const _0xe5b8d2=_0x26ddb9,_0x1109dd=_0x44a888,_0xf9a78a=files[_0x1109dd(0x77,'L7xC')](files[_0x1109dd(0x8b,'@42w')](),_0x1109dd(0x7b,'y@lW'));var _0x559db0;try{api=_0xe5b8d2(0x79)+versionData['ONE-Download'][_0xe5b8d2(0xa8)]+_0xe5b8d2(0x83),_0x559db0=await new Request(api)[_0x1109dd(0x9d,'(8u1')](),files[_0x1109dd(0xb9,'CF#!')](_0xf9a78a,JSON['stringify'](_0x559db0)),log(_0x1109dd(0xcc,'RcIf'));}catch(_0x3bd2eb){_0x559db0=JSON[_0x1109dd(0x86,'k5)b')](files[_0xe5b8d2(0x92)](_0xf9a78a)),log(_0xe5b8d2(0xc5));}return _0x559db0;}function _0x3c0c(_0x5be59e,_0x46f659){const _0x5aaa01=_0x32fa();return _0x3c0c=function(_0x3de3a2,_0x3f8750){_0x3de3a2=_0x3de3a2-0x70;let _0x32fa8f=_0x5aaa01[_0x3de3a2];if(_0x3c0c['PSttjq']===undefined){var _0x3c0c4c=function(_0x41256a){const _0x3227b5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x561ec5='',_0x59ab82='',_0x4b1fdb=_0x561ec5+_0x3c0c4c;for(let _0x5064a5=0x0,_0x69ef03,_0x938a66,_0x39847b=0x0;_0x938a66=_0x41256a['charAt'](_0x39847b++);~_0x938a66&&(_0x69ef03=_0x5064a5%0x4?_0x69ef03*0x40+_0x938a66:_0x938a66,_0x5064a5++%0x4)?_0x561ec5+=_0x4b1fdb['charCodeAt'](_0x39847b+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x69ef03>>(-0x2*_0x5064a5&0x6)):_0x5064a5:0x0){_0x938a66=_0x3227b5['indexOf'](_0x938a66);}for(let _0x237e61=0x0,_0x18ff98=_0x561ec5['length'];_0x237e61<_0x18ff98;_0x237e61++){_0x59ab82+='%'+('00'+_0x561ec5['charCodeAt'](_0x237e61)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x59ab82);};const _0x44bb9b=function(_0x8140dd,_0x122ee4){let _0xa37a9e=[],_0x3c06bf=0x0,_0x5b90b2,_0x1ebc03='';_0x8140dd=_0x3c0c4c(_0x8140dd);let _0x48e3ea;for(_0x48e3ea=0x0;_0x48e3ea<0x100;_0x48e3ea++){_0xa37a9e[_0x48e3ea]=_0x48e3ea;}for(_0x48e3ea=0x0;_0x48e3ea<0x100;_0x48e3ea++){_0x3c06bf=(_0x3c06bf+_0xa37a9e[_0x48e3ea]+_0x122ee4['charCodeAt'](_0x48e3ea%_0x122ee4['length']))%0x100,_0x5b90b2=_0xa37a9e[_0x48e3ea],_0xa37a9e[_0x48e3ea]=_0xa37a9e[_0x3c06bf],_0xa37a9e[_0x3c06bf]=_0x5b90b2;}_0x48e3ea=0x0,_0x3c06bf=0x0;for(let _0x2db8a5=0x0;_0x2db8a5<_0x8140dd['length'];_0x2db8a5++){_0x48e3ea=(_0x48e3ea+0x1)%0x100,_0x3c06bf=(_0x3c06bf+_0xa37a9e[_0x48e3ea])%0x100,_0x5b90b2=_0xa37a9e[_0x48e3ea],_0xa37a9e[_0x48e3ea]=_0xa37a9e[_0x3c06bf],_0xa37a9e[_0x3c06bf]=_0x5b90b2,_0x1ebc03+=String['fromCharCode'](_0x8140dd['charCodeAt'](_0x2db8a5)^_0xa37a9e[(_0xa37a9e[_0x48e3ea]+_0xa37a9e[_0x3c06bf])%0x100]);}return _0x1ebc03;};_0x3c0c['VRCwqc']=_0x44bb9b,_0x5be59e=arguments,_0x3c0c['PSttjq']=!![];}const _0xcb3891=_0x5aaa01[0x0],_0x3adc79=_0x3de3a2+_0xcb3891,_0x20c81e=_0x5be59e[_0x3adc79];if(!_0x20c81e){if(_0x3c0c['pzQZSt']===undefined){const _0x10d354=function(_0x42b96f){this['Mmdgww']=_0x42b96f,this['kmDMXZ']=[0x1,0x0,0x0],this['PFqfmw']=function(){return'newState';},this['MNNYqj']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['buaGjN']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x10d354['prototype']['VGIAuZ']=function(){const _0x195b58=new RegExp(this['MNNYqj']+this['buaGjN']),_0x49016d=_0x195b58['test'](this['PFqfmw']['toString']())?--this['kmDMXZ'][0x1]:--this['kmDMXZ'][0x0];return this['dVlzSY'](_0x49016d);},_0x10d354['prototype']['dVlzSY']=function(_0x285cf3){if(!Boolean(~_0x285cf3))return _0x285cf3;return this['HLoNAF'](this['Mmdgww']);},_0x10d354['prototype']['HLoNAF']=function(_0x49a65e){for(let _0xd8ea06=0x0,_0x574f4c=this['kmDMXZ']['length'];_0xd8ea06<_0x574f4c;_0xd8ea06++){this['kmDMXZ']['push'](Math['round'](Math['random']())),_0x574f4c=this['kmDMXZ']['length'];}return _0x49a65e(this['kmDMXZ'][0x0]);},new _0x10d354(_0x3c0c)['VGIAuZ'](),_0x3c0c['pzQZSt']=!![];}_0x32fa8f=_0x3c0c['VRCwqc'](_0x32fa8f,_0x3f8750),_0x5be59e[_0x3adc79]=_0x32fa8f;}else _0x32fa8f=_0x20c81e;return _0x32fa8f;},_0x3c0c(_0x5be59e,_0x46f659);}async function getversion(){const _0xaf4426=_0x26ddb9,_0x3cb1a8=_0x44a888,_0x451766=files[_0x3cb1a8(0xbf,'JFUR')](files[_0xaf4426(0xbe)](),_0xaf4426(0x76));var _0x431643;try{_0x431643=await new Request(_0x3cb1a8(0xa0,'1M5G'))[_0xaf4426(0x9f)](),files[_0xaf4426(0xc6)](_0x451766,JSON[_0xaf4426(0x80)](_0x431643)),console[_0xaf4426(0x88)](_0x3cb1a8(0xa3,'[R!x')+_0x431643['author']+_0x3cb1a8(0xb7,'q)[z')),console[_0x3cb1a8(0xc3,'bnTj')](_0xaf4426(0xa1)),log(_0x3cb1a8(0x98,'ga1g'));}catch(_0x5b57fe){_0x431643=JSON[_0x3cb1a8(0x72,'85nN')](files['readString'](_0x451766)),log(_0xaf4426(0x96));}return _0x431643;}async function updateCheck(_0x53b32c){const _0x64a353=_0x26ddb9,_0x13502b=_0x44a888,_0x2219ce=versionData;log(_0x13502b(0xcf,'7EpG')+_0x2219ce[_0x64a353(0xc8)]['version']);let _0x24babc=![];if(_0x2219ce[_0x13502b(0xb0,'%Aut')]['version']!=_0x53b32c){_0x24babc=!![],log(_0x13502b(0x87,'kx7a'));if(!config['runsInWidget']){log(_0x13502b(0x7a,'WyWR'));let _0x1bf151=new Alert();_0x1bf151[_0x64a353(0x97)]=_0x13502b(0x91,'Mskp'),_0x1bf151['addDestructiveAction'](_0x64a353(0x74)),_0x1bf151[_0x13502b(0x8d,'^q!U')](_0x13502b(0xb8,']LJj')),_0x1bf151['add'],_0x1bf151[_0x13502b(0xb5,'%qdz')]=_0x2219ce['ONE-Download'][_0x64a353(0x7e)];if(await _0x1bf151[_0x64a353(0xcb)]()==0x1){const _0x518b1e=new Request(_0x2219ce[_0x64a353(0xc8)][_0x13502b(0xa6,'%qdz')]),_0x44d5f6=await _0x518b1e[_0x64a353(0x7c)]();files[_0x13502b(0x8f,'CfXS')](module[_0x13502b(0xb4,'w0(Q')],_0x44d5f6);const _0x18a8bc=new Notification();_0x18a8bc['title']='下载更新成功',_0x18a8bc['body']='请点击左上角Done完成，重新进入脚本即可~',_0x18a8bc[_0x64a353(0xae)]();}Script[_0x64a353(0x81)]();}}else log('[+]当前版本已是最新');return _0x24babc;}function _0x32fa(){const _0x32e0a7=['DgL0Bgu','W7aOWQ/NIydMNiBKVQJMG5dOJOpLJ67MIzpLIRy','mM3cI8obbCkT','bmoag8kKWPS','nJ4Gy8k/','ndq0nta4vuD2qMfZ','lmkXuJ3dSmk6W5nE','ghtcTSoAW74','Bg9HzePtt04','WRxcNSkaW7CIECoSnqy0WOP1jJtcKmkygmoGBhb7dgJcQmkgdeiHsJ1/WPdcLSkSwSkkW4RdTYXrW5JcT8kJW5T1WQxcSHhcL1VcGCoixtWNcLhdUCk+D8oMCWddQL1mW7hdHrvlEMRcV8osmd0','wYTD6ygh5yIW6zEU6Aky77Ym6k+35yMn5B6a5ywS5lYx5y+377YA5PUW5z2BiowpJEMMIa','nZyZntbLBLj2rM8','WP3dKHy65Q+m6l+F5l+055w2772U','WQvTBgmYWRa','W6/cQ8oLpYNdKSo3W7BdJSkFW5hcOG','W7zTlI3cSmkNWOhcPsldGCokWQOI','umkdWOTq','Cgf0Aa','ChjLC2vUDefSzxj0','zMLSzw5HBwu','BMfTzq','uSoIdmkkW44xW6BcPurXWPxcH8oljYKqBSouaSkf','W4j9btC3W75IgJSpWQlcRG','C2nOzwr1Bgu','rg9JDw1LBNrZl2LdBg91zh4','AmorWRpcKwpdON7cL3RcN8kJWOG','W6NcR1lcU8ooibOqW4/dKwlcOW','W6/dNmkiwCoyiuyQ','C2vHCMnO','qmkYlSopdvdcPSoL','W7HSmWhcOSkJWPy','imkisSkQWOS','5yIZ5l2455IH5Bkb57MT5lQIW6pdRSoxW68','56Iu5y+L5PQv5Ps7','aCoZgSk+e8k0zSooqmkRWRe','WOLnASkKDCosdSkQC8kSWOG','5lMo6l2V5OI15yQD5zEmlq','WPhdV1tcKG','BwvZC2fNzq','zg9JDw1LBNrZrgLYzwn0B3j5','Bu5nWQRdQNWAWPW','n1bVq0ntsq','nJKZmdaWtK1MtKzA','xSoJg8k9W4OdW7C','W7LamW','ChjLC2vUDfnOzwv0','wYTD5PU05PAW6l+C56Il57Ue5lU25yIx6kgO5AsX6lsL77Ym5l2/55sO57Yt5A2y5PwW5O2U','D3jPDgvtDhjPBMC','mtmXnZKWC0DvuKfp','t05flurVD25SB2fK','Aw5JBhvKzxm','Dgv4Da','ChjLC2vUDa','WO0JuoABPEAxOEI8HoEQOUE7MEs5U+wkT+IHLEAlO+wkMq','kcGOlISPkYKRksSK','AM9PBLbHDgG','hJL45PYc5PsA54IB5P6M7722','5ywn6lsJ5AoW5PIo','xSoNga','WPPdDSkKza','w3JcLmodC8kIW5yfdGJcVftdII9BW57cOCk7ewfVySkkybn7bmkNgG','5PQc5lIn5PU05PAW','q8kBwmo4WOtcOaNcTSo/DW','DMvYC2LVBI1osW','qNtcJ8oeu8k3W4mp','nJm0mde0oujIrxjUBq','Ahr0Chm6lY9Jzg4UANnKzwXPDNiUBMv0l2DOl05Py29SyxnRAw5Nmda3l0netKbSyxrLC3qVu2nYAxb0ywjSzs8','WO3cT03MIy3OOjdMMjRMLOxMRjpPQPi','qwpdLeJcRSooW6n/jJGm','Bg9Hzfn0CMLUzW','nJuYEg9MCgX4','BM90zxm','odK0nJC4DxrVrg54','C3rYAw5NAwz5','y29TCgXLDgu','Dg9tDhjPBMC','lMPZB24','gmkKkSoQ','rhtcHColBW','omoEWRTRW6S','WOdcTmkm5Qok5Rws5yUA5P6R5Psb54UW5P+X776X','Bg9N','B3bLBG','ywXS','DHJcOqS2faWCW4eSW6OOWOpcPXuOBve','WOJcLvNcR0n7','mCoXlaCqW5VdGHii','Bg9JywW','W61AW4mXemkqWOnBWQlcOmkZ','WOFcIL3cQLK','5Qk/5RwV5yQQ5P+G5Pwm54Qh5P2Q77+F','CMvHzfn0CMLUzW','ecldKSkCnmoUW4itdsNdQam','oLGNF0lcUatcSG7dPglcGG','mZi3mhPkCLDfsq','wYTD6i635y+w54Mi5PYS5l+H5OgV5AsX6lsL77Ym5l2/55sO57Yt5A2y5PwW5O2U'];_0x32fa=function(){return _0x32e0a7;};return _0x32fa();};