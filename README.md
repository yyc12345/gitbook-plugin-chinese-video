# gitbook-plugin-chinese-video

This is a plugin for gitbook. It can display some video on your web book. Some existed plugins only support the website which couldn't be visited in China. This plugin will support some video websites which is famous in China.

## Install

Add the below to your `book.json` file, then run `gitbook install` :

```json
{
    "plugins": ["bilibili"]
}
```

## Usage

Currently, This plugin support Bilibili, Youku and Iqiyi video.

There are each methods which you should use to insert matched website's video.

### Bilibili

```
{% bilibili %} avCode {% endbilibili %}

or

{% bilibili %} avCode @ section @ width x height {% endbilibili %}
```

avCode is bilibili video's serial number. Just like this: https://www.bilibili.com/video/av **170001**

avCode should be a number. Don't attach "av" to it.

section is matched video's sub video's serial number.

width x height is player's size.

Bilibili supports HTML5 player. It's familar with Linux user.

### Youku

```
{% youku %} videoCode {% endyouku %}

or

{% youku %} videoCode @ width x height {% endyouku %}
```

videoCode just like this: https://v.youku.com/v_show/id_ **XNDU4MjQ3MzA0** .html

width x height is player's size.

Only Flash player

### Iqiyi

~~Iqiyi's parameter just like shit!!!~~

```
{% iqiyi %} parameter1 @ video @ albumId @ tvId @ width x height {% endiqiyi %}
```

You only can visit Iqiyi's video's Sharing page and copy its HTML to get these parameters. It just like this:

```
<embed src="http://player.video.qiyi.com/1bba1b2ae1e248fdf316c6925eb4d5a2/0/0/w_19rugndwj9.swf-albumId=6462528409-tvId=6462528409-isPurchase=0-cnId=8" allowFullScreen="true" quality="high" width="480" height="350" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
```

For this content:

**1bba1b2ae1e248fdf316c6925eb4d5a2** is parameter1.

**w_19rugndwj9** is video

**6462528409** is albumId

**6462528409** is tvId

~~Iqiyi's parameter just like shit!!!~~