module.exports = {
    blocks: {
        bilibili: {
            process: function (block) {
                var replaced = block.body.trim();
                var video = replaced;
                var width = 544;
                var height = 415;

                var section = 1;

                if (replaced.indexOf('@') > 0) {
                    var pair = replaced.split('@');
                    video = pair[0].trim();
                    section = pair[1].trim();

                    var size = pair[2].split('x');
                    width = size[0].trim();
                    height = size[1].trim();
                }

                var url = "https://www.bilibili.com/video/av" + video + "/?br";

                if (this.generator != "website") {
                    return '<p><a href="' + url + '">Video link</a></p>';
                }

                return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                    + '<iframe height="' + height + '" width="' + width + '" src="https://player.bilibili.com/player.html?aid=' + video + '&page=' + section + '" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'
                    + '</div>';
            }
        },
        youku: {
            process: function (block) {
                var replaced = block.body.trim();
                var video = replaced;
                var width = 544;
                var height = 415;

                if (replaced.indexOf('@') > 0) {
                    var pair = replaced.split('@');
                    video = pair[0].trim();

                    var size = pair[1].split('x');
                    width = size[0].trim();
                    height = size[1].trim();
                }

                var url = "https://v.youku.com/v_show/id_" + video + ".html/?br";

                if (this.generator != "website") {
                    return '<p><a href="' + url + '">Video link</a></p>';
                }

                return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                    + '<embed src=\'http://player.youku.com/player.php/sid/' + video + '/v.swf\' allowFullScreen=\'true\' quality=\'high\' width=\'' + width + '\' height=\'' + height + '\' align=\'middle\' allowScriptAccess=\'always\' type=\'application/x-shockwave-flash\'></embed>'
                    + '</div>';
            }
        },
        iqiqyi: {
            process: function (block) {
                var replaced = block.body.trim();
                var video = replaced;
                var width = 544;
                var height = 415;

                var parameter1 = '0';
                var albumId = '0';
                var tvId = '0';

                if (replaced.indexOf('@') > 0) {
                    var pair = replaced.split('@');
                    parameter1 = pair[0].trim();
                    video = pair[1].trim();
                    albumId= pair[2].trim();
tvId = pair[3].trim();

                    var size = pair[4].split('x');
                    width = size[0].trim();
                    height = size[1].trim();
                }

                var url = "http://www.iqiyi.com/"+video+".html/?br";

                if (this.generator != "website") {
                    return '<p><a href="' + url + '">Video link</a></p>';
                }

                return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                    + '<embed src="http://player.video.qiyi.com/'+parameter1+'/0/0/'+video+'.swf-albumId='+albumId+'-tvId='+tvId+'-isPurchase=0-cnId=8" allowFullScreen="true" quality="high" width="'+width+'" height="'+height+'" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>'
                    + '</div>';
            }
        }
    }
};
