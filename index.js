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
        }
    }
};
