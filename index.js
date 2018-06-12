module.exports = {
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

                return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                    + '<iframe height="' + height + '" width="' + width + '" src="https://player.bilibili.com/player.html?aid=' + video + '&page=' + section + '" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'
                    + '</div>';
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

                if (mode == "js") {
                    return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                        + '<iframe height=' + height + ' width=' + width + ' src=\'https://player.youku.com/embed/' + video + '\' frameborder=0 \'allowfullscreen\'></iframe>'
                        + '</div>';
                } else {
                    return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                        + '<embed src=\'https://player.youku.com/player.php/sid/' + video + '/v.swf\' allowFullScreen=\'true\' quality=\'high\' width=\'' + width + '\' height=\'' + height + '\' align=\'middle\' allowScriptAccess=\'always\' type=\'application/x-shockwave-flash\'></embed>'
                        + '</div>';
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

                    return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                        + '<iframe src="https://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=' + vid + '&tvId=' + tvId + '&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%" frameborder="0" allowfullscreen="true" width="' + width + '" height="' + height + '"></iframe>'
                        + '</div>';

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

                    return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                        + '<embed src="http://player.video.qiyi.com/' + parameter1 + '/0/0/' + video + '.swf-albumId=' + albumId + '-tvId=' + tvId + '-isPurchase=0-cnId=8" allowFullScreen="true" quality="high" width="' + width + '" height="' + height + '" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>'
                        + '</div>';

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
                return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                    + '<iframe frameborder="0" width="' + width + '" height="' + height + '" src="https://v.qq.com/iframe/player.html?vid=' + video + '&tiny=0&auto=0" allowfullscreen></iframe>'
                    + '</div>';

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

                return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                    + '<iframe frameborder="0" width="' + width + '" height="' + height + '" src="https://tv.sohu.com/upload/static/share/share_play.html#' + video + '"></iframe>'
                    + '</div>';

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

                return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                    + '<embed src="https://player.mgtv.com/mgtv_v5_main/main.swf?play_type=1&video_id=' + video + '" allowFullScreen="true" quality="high" width="580" height="425" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>'
                    + '</div>';

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

                return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                    + '<embed src="http://player.pptv.com/v/' + video + '.swf" quality="high" width="' + width + '" height="' + height + '" bgcolor="#000" align="middle" allowScriptAccess="always" allownetworking="all" allowfullscreen="true" type="application/x-shockwave-flash" wmode="direct" />'
                    + '</div>';
            }
        },
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

                return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                    + '<iframe style="width:' + width + 'px;height:' + height + 'px;" src="http://cdn.aixifan.com/player/ACFlashPlayer.out.swf?vid=' + vid + '&ref=' + url + '" id="ACFlashPlayer-re" frameborder="0"></iframe>'
                    + '</div>';

            }
        },
        teji: {
            process: function (block) {
                return block.body;
            }
        }
    }
};
