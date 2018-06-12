//default player 544 x 415

module.exports = {
    blocks: {
        bilibili: {
            process: function (block) {
                var pair = block.body.trim().split('@');
                var video = pair[0].trim();
                var section = pair[1].trim();

                var size = pair[2].split('x');
                var width = size[0].trim();
                var height = size[1].trim();

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

                var size = pair[1].split('x');
                var width = size[0].trim();
                var height = size[1].trim()

                var url = "https://v.youku.com/v_show/id_" + video + ".html/?br";

                if (this.generator != "website") {
                    return '<p><a href="' + url + '">Youku video link</a></p>';
                }

                return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                    + '<embed src=\'http://player.youku.com/player.php/sid/' + video + '/v.swf\' allowFullScreen=\'true\' quality=\'high\' width=\'' + width + '\' height=\'' + height + '\' align=\'middle\' allowScriptAccess=\'always\' type=\'application/x-shockwave-flash\'></embed>'
                    + '</div>';
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

                    var showStr = pair[3].trim()

                    var size = pair[4].split('x');
                    var width = size[0].trim();
                    var height = size[1].trim();

                    var url = "http://www.iqiyi.com/" + showStr + ".html/?br";
                    if (this.generator != "website") {
                        return '<p><a href="' + url + '">Iqiyi video link</a></p>';
                    }

                    return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                        + '<iframe src="http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=' + vid + '&tvId=' + tvId + '&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%" frameborder="0" allowfullscreen="true" width="' + width + '" height="' + height + '"></iframe>'
                        + '</div>';

                } else {
                    var parameter1 = pair[1].trim();
                    var video = pair[2].trim();
                    var albumId = pair[3].trim();
                    var tvId = pair[4].trim();

                    var size = pair[5].split('x');
                    var width = size[0].trim();
                    var height = size[1].trim();

                    var url = "http://www.iqiyi.com/" + video + ".html/?br";
                    if (this.generator != "website") {
                        return '<p><a href="' + url + '">Iqiyi video link</a></p>';
                    }

                    return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                        + '<embed src="http://player.video.qiyi.com/' + parameter1 + '/0/0/' + video + '.swf-albumId=' + albumId + '-tvId=' + tvId + '-isPurchase=0-cnId=8" allowFullScreen="true" quality="high" width="' + width + '" height="' + height + '" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>'
                        + '</div>';

                }
            }
        }
    }
};
