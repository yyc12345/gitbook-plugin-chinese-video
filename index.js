module.exports = {
    hooks: {
        "page": function (page) {
            var scriptStr = "";

            var baseNumber = 1;

            var ifTest = /<iframe plugin-width="\S+" plugin-height="\S+" name="\S+"/g;
            var emTest = /<embed plugin-width="\S+" plugin-height="\S+" name="\S+"/g;

            var res = page.content.match(ifTest);
            if (ifTest.test(page.content)) {
                var yyc = res.length;
                for (yyc1 = 0; yyc1 < yyc; yyc1++) {
                    var cache = res[yyc1].split(' ');

                    var name = (cache[3].trim().split('=')[1]).trim().replace(/"/g, '');
                    var width = (cache[1].trim().split('=')[1]).trim().replace(/"/g, '');
                    var height = (cache[2].trim().split('=')[1]).trim().replace(/"/g, '');

                    scriptStr = scriptStr + 'var value' + baseNumber + 'Width=globalWidth;var value' + baseNumber + '=(document.getElementsByName("' + name + '"))[0];if(value' + baseNumber + 'Width>' + width + '){value' + baseNumber + 'Width=' + width + ';};value' + baseNumber + '.style.width=value' + baseNumber + 'Width+"px";value' + baseNumber + '.style.height=(' + height + '/' + width + ')*value' + baseNumber + 'Width+"px";'
                    baseNumber++;
                };
            };

            var res2 = page.content.match(emTest);
            if (emTest.test(page.content)) {
                var yyc3 = res2.length;
                for (yyc2 = 0; yyc2 < yyc3; yyc2++) {
                    var cache = res2[yyc2].split(' ');

                    var name = (cache[3].trim().split('=')[1]).trim().replace(/"/g, '');
                    var width = (cache[1].trim().split('=')[1]).trim().replace(/"/g, '');
                    var height = (cache[2].trim().split('=')[1]).trim().replace(/"/g, '');

                    scriptStr = scriptStr + 'var value' + baseNumber + 'Width=globalWidth;var value' + baseNumber + '=(document.getElementsByName("' + name + '"))[0];if(value' + baseNumber + 'Width>' + width + '){value' + baseNumber + 'Width=' + width + ';};value' + baseNumber + '.style.width=value' + baseNumber + 'Width+"px";value' + baseNumber + '.style.height=(' + height + '/' + width + ')*value' + baseNumber + 'Width+"px";'
                    baseNumber++;
                };
            };

            if (scriptStr != "") {
                scriptStr = "var fc=function(){var globalWidth=document.body.clientWidth-32;" + scriptStr + '};var oneSecond=1000*2;setInterval(fc,oneSecond);';

                //replace
                page.content = page.content + "<script>" + scriptStr + "</script>";
            };

            return page;
        }
    },
    blocks: {
        bilibili: {
            process: function (block) {
                var pair = block.body.trim().split('@');
                var video = pair[0].trim();
                var section = pair[1].trim() == "" ? 1 : pair[1].trim();

                var width = 544;
                var height = 415;
                if (pair[2].trim() != "") {
                    var size = pair[2].split('x');
                    width = size[0].trim();
                    height = size[1].trim();
                }

                var url = "https://www.bilibili.com/video/av" + video + "/?br";

                if (this.generator != "website") {
                    return '<p><a href="' + url + '">Bilibili video link</a></p>';
                }

                var s = [];
                var hexDigits = "0123456789abcdef";
                for (var i = 0; i < 64; i++) {
                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                }

                return '<iframe plugin-width="' + width + '" plugin-height="' + height + '" name="bilibili-' + s.join("") + '" style="margin-top: 20px;margin-bottom: 20px;" src="https://player.bilibili.com/player.html?aid=' + video + '&page=' + section + '" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>';
            }
        },
        youku: {
            process: function (block) {
                var pair = block.body.trim().split('@');
                var video = pair[0].trim();

                var mode = pair[1].trim() == "" ? "js" : pair[1].trim();

                var width = 544;
                var height = 415;
                if (pair[2].trim() != "") {
                    var size = pair[2].split('x');
                    width = size[0].trim();
                    height = size[1].trim();
                }

                var url = "https://v.youku.com/v_show/id_" + video + ".html/?br";

                if (this.generator != "website") {
                    return '<p><a href="' + url + '">Youku video link</a></p>';
                }

                var s = [];
                var hexDigits = "0123456789abcdef";
                for (var i = 0; i < 64; i++) {
                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                }

                if (mode == "js") {
                    return '<iframe plugin-width="' + width + '" plugin-height="' + height + '" name="youku-js-' + s.join("") + '" style="margin-top: 20px;margin-bottom: 20px;" src=\'https://player.youku.com/embed/' + video + '\' frameborder=0 \'allowfullscreen\'></iframe>';
                } else {
                    return '<embed plugin-width="' + width + '" plugin-height="' + height + '" name="youku-flash-' + s.join("") + '" src=\'https://player.youku.com/player.php/sid/' + video + '/v.swf\' allowFullScreen=\'true\' quality=\'high\' align=\'middle\' allowScriptAccess=\'always\' type=\'application/x-shockwave-flash\'></embed>';
                }

            }
        },
        iqiyi: {
            process: function (block) {
                var pair = block.body.trim().split('@');
                var mode = pair[0].trim();

                //switch mode
                if (mode == "js") {
                    var vid = pair[1].trim();
                    var tvId = pair[2].trim();

                    var showStr = pair[3].trim() == "" ? "???" : pair[3].trim();

                    var width = 544;
                    var height = 415;
                    if (pair[4].trim() != "") {
                        var size = pair[4].split('x');
                        width = size[0].trim();
                        height = size[1].trim();
                    }

                    var url = "https://www.iqiyi.com/" + showStr + ".html/?br";
                    if (this.generator != "website") {
                        return '<p><a href="' + url + '">Iqiyi video link</a></p>';
                    }

                    var s = [];
                    var hexDigits = "0123456789abcdef";
                    for (var i = 0; i < 64; i++) {
                        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                    }

                    return '<iframe plugin-width="' + width + '" plugin-height="' + height + '" name="iqiyi-js-' + s.join("") + '" style="margin-top: 20px;margin-bottom: 20px;" src="https://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=' + vid + '&tvId=' + tvId + '&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%" frameborder="0" allowfullscreen="true"></iframe>';

                } else {
                    var parameter1 = pair[1].trim();
                    var video = pair[2].trim();
                    var albumId = pair[3].trim();
                    var tvId = pair[4].trim();

                    var width = 544;
                    var height = 415;
                    if (pair[5].trim() != "") {
                        var size = pair[5].split('x');
                        width = size[0].trim();
                        height = size[1].trim();
                    }

                    var url = "https://www.iqiyi.com/" + video + ".html/?br";
                    if (this.generator != "website") {
                        return '<p><a href="' + url + '">Iqiyi video link</a></p>';
                    }

                    var s = [];
                    var hexDigits = "0123456789abcdef";
                    for (var i = 0; i < 64; i++) {
                        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                    }

                    return '<embed plugin-width="' + width + '" plugin-height="' + height + '" name="iqiyi-flash-' + s.join("") + '" style="margin-top: 20px;margin-bottom: 20px;" src="http://player.video.qiyi.com/' + parameter1 + '/0/0/' + video + '.swf-albumId=' + albumId + '-tvId=' + tvId + '-isPurchase=0-cnId=8" allowFullScreen="true" quality="high" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>';

                }
            }
        },
        qq: {
            process: function (block) {
                var pair = block.body.trim().split('@');
                var video = pair[0].trim();

                var width = 544;
                var height = 415;
                if (pair[1].trim() != "") {
                    var size = pair[1].split('x');
                    width = size[0].trim();
                    height = size[1].trim();
                }

                var url = "https://v.qq.com/x/page/" + video + ".html/?br";

                if (this.generator != "website") {
                    return '<p><a href="' + url + '">QQ video link</a></p>';
                }

                var s = [];
                var hexDigits = "0123456789abcdef";
                for (var i = 0; i < 64; i++) {
                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                }

                return '<iframe plugin-width="' + width + '" plugin-height="' + height + '" name="qq-' + s.join("") + '" style="margin-top: 20px;margin-bottom: 20px;" frameborder="0" src="https://v.qq.com/iframe/player.html?vid=' + video + '&tiny=0&auto=0" allowfullscreen></iframe>';

            }
        },
        sohu: {
            process: function (block) {
                var pair = block.body.trim().split('@');
                var video = pair[0].trim();

                var showStr = pair[1].trim() == "" ? "???" : pair[1].trim();

                var width = 544;
                var height = 415;
                if (pair[2].trim() != "") {
                    var size = pair[2].split('x');
                    width = size[0].trim();
                    height = size[1].trim();
                }

                var url = "https://my.tv.sohu.com/pl/" + showStr + ".shtml/?br";

                if (this.generator != "website") {
                    return '<p><a href="' + url + '">Sohu video link</a></p>';
                }

                var s = [];
                var hexDigits = "0123456789abcdef";
                for (var i = 0; i < 64; i++) {
                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                }

                return '<iframe plugin-width="' + width + '" plugin-height="' + height + '" name="sohu-' + s.join("") + '" style="margin-top: 20px;margin-bottom: 20px;" frameborder="0" src="https://tv.sohu.com/upload/static/share/share_play.html#' + video + '"></iframe>';

            }
        },
        mgtv: {
            process: function (block) {
                var pair = block.body.trim().split('@');
                var video = pair[0].trim();

                var showStr = pair[1].trim() == "" ? "???" : pair[1].trim();

                var width = 544;
                var height = 415;
                if (pair[2].trim() != "") {
                    var size = pair[2].split('x');
                    width = size[0].trim();
                    height = size[1].trim();
                }

                var url = "https://www.mgtv.com/b/" + showStr + "/" + video + ".html/?br";

                if (this.generator != "website") {
                    return '<p><a href="' + url + '">Mgtv video link</a></p>';
                }

                var s = [];
                var hexDigits = "0123456789abcdef";
                for (var i = 0; i < 64; i++) {
                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                }

                return '<embed plugin-width="' + width + '" plugin-height="' + height + '" name="mgtv-' + s.join("") + '" style="margin-top: 20px;margin-bottom: 20px;" src="https://player.mgtv.com/mgtv_v5_main/main.swf?play_type=1&video_id=' + video + '" allowFullScreen="true" quality="high" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>';

            }
        },
        pp: {
            process: function (block) {
                var pair = block.body.trim().split('@');
                var video = pair[0].trim();

                var width = 544;
                var height = 415;
                if (pair[1].trim() != "") {
                    var size = pair[1].split('x');
                    width = size[0].trim();
                    height = size[1].trim();
                }

                var url = "http://v.pptv.com/show/" + video + ".html#/?br";
                if (this.generator != "website") {
                    return '<p><a href="' + url + '">PPTV video link</a></p>';
                }

                var s = [];
                var hexDigits = "0123456789abcdef";
                for (var i = 0; i < 64; i++) {
                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                }

                return '<embed plugin-width="' + width + '" plugin-height="' + height + '" name="pp-' + s.join("") + '" style="margin-top: 20px;margin-bottom: 20px;" src="http://player.pptv.com/v/' + video + '.swf" quality="high" bgcolor="#000" align="middle" allowScriptAccess="always" allownetworking="all" allowfullscreen="true" type="application/x-shockwave-flash" wmode="direct" />';
            }
        },
        /*
        acfun: {
            process: function (block) {
                var pair = block.body.trim().split('@');
                var vid = pair[0].trim();
                var url = pair[1].trim();

                var width = 544;
                var height = 415;
                if (pair[2].trim() != "") {
                    var size = pair[2].split('x');
                    width = size[0].trim();
                    height = size[1].trim();
                }

                if (this.generator != "website") {
                    return '<p><a href="' + url + '">Acfun video link</a></p>';
                }

                var s = [];
                var hexDigits = "0123456789abcdef";
                for (var i = 0; i < 64; i++) {
                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                }

                return '<iframe plugin-width="' + width + '" plugin-height="' + height + '" name="acfun-' + s.join("") + '" style="margin-top: 20px;margin-bottom: 20px;" src="http://cdn.aixifan.com/player/ACFlashPlayer.out.swf?vid=' + vid + '&ref=' + url + '" id="ACFlashPlayer-re" frameborder="0"></iframe>';

            }
        },
        */
        teji: {
            process: function (block) {
                return block.body;
            }
        }
    }
};
