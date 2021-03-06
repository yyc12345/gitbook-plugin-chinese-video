# gitbook-plugin-chinese-video

This is a plugin for gitbook. It can display some video on your web book. Some existed plugins only support the website which couldn't be visited in China. This plugin will support some video websites which is famous in China.

## Abandoned repository announcement

I have archived this repository due to [Gitbook decides to shutdown gitbook CLI](https://docs.gitbook.com/v2-changes/important-differences). I sincerely apologize to you if my decision interupts your some plans or projects. I have read gitbook's article and feel so regretful for its decision. Now, I couldn't visit official gitbook plugin website and I am not sure whether this plugin can work again in gitbook CLI. Archiving this repository mean that **I don't provide any upgrade or fix any bugs** from now. But **I will keep [the npm package](https://www.npmjs.com/package/gitbook-plugin-chinese-video)**. You can use it freely.

Thank you for your interest in my project. See you next time.

## Install

Add the below to your `book.json` file, then run `gitbook install` :

```json
{
    "plugins": ["chinese-video"]
}
```

## Usage

Currently, This plugin support:

* Bilibili
* Youku
* Iqiyi
* QQ
* Sohu
* Mgtv
* PPTV

There are each methods which you should use to insert matched website's video.

Tips:   
* **\[xxx\]** is optional parameter. You can ignore it but don't ignore any **@**.
* The width x height, which is defined by you, is the largest size of the player and if you have a small screen to look through the page, Page will zoom the player with the scale of your width x height.


### Bilibili
![html5](./html5.png) ![https](./https.png)

```
{% bilibili %} avCode @ [section] @ [width x height] {% endbilibili %}
```

avCode is bilibili video's serial number. Just like this: https://www.bilibili.com/video/av **170001**

avCode should be a number. Don't attach "av" to it.

section is matched video's sub video's serial number.

width x height is player's size.

### Youku
![html5](./html5.png) ![flash](./flash.png) ![https](./https.png)

```
{% youku %} videoCode @ [mode] @ [width x height] {% endyouku %}
```

mode is player's mode. js(html5) or flash.

videoCode just like this: https://v.youku.com/v_show/id_ **XNDU4MjQ3MzA0** .html

width x height is player's size.

### Iqiyi
![html5](./html5.png) ![flash](./flash.png) ![https](./https.png)\(HTML5 player\) ![http](./http.png)\(Flash player\)

~~Iqiyi's parameter just like shit!!!~~

#### Flash player

```
{% iqiyi %} flash @ parameter1 @ video @ albumId @ tvId @ [width x height] {% endiqiyi %}
```

**flash** is key word. Don't change it.

You only can visit Iqiyi's video's Sharing page and copy its HTML to get these parameters. It just like this:

```
<embed src="http://player.video.qiyi.com/1bba1b2ae1e248fdf316c6925eb4d5a2/0/0/w_19rugndwj9.swf-albumId=6462528409-tvId=6462528409-isPurchase=0-cnId=8" allowFullScreen="true" quality="high" width="480" height="350" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
```

For this content:

**1bba1b2ae1e248fdf316c6925eb4d5a2** is parameter1.

**w_19rugndwj9** is video

**6462528409** is albumId

**6462528409** is tvId

#### HTML5 player

```
{% iqiyi %} js @ vid @ tvId @ [showStr] @ [width x height] {% endiqiyi %}
```

**js** is key word. Don't change it.

**showStr** only be showed when you don't use web book. It equal with flash player's parameter called **video**.

You only can visit Iqiyi's video's Sharing page and copy its HTML to get these parameters. It just like this:

```
<iframe src="http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=1bba1b2ae1e248fdf316c6925eb4d5a2&tvId=6462528409&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%" frameborder="0" allowfullscreen="true" width="100%" height="100%"></iframe>
```

For this content:

**1bba1b2ae1e248fdf316c6925eb4d5a2** is vid.

**6462528409** is tvId

### QQ
![flash](./flash.png) ![https](./https.png)

```
{% qq %} video @ [width x height] {% endqq %}
```

video is QQ video's serial number. Just like this: https://v.qq.com/x/page/ **l0172wyz9su** .html

width x height is player's size.

### Sohu
![flash](./flash.png) ![https](./https.png)

```
{% sohu %} video @ [showStr] @ [width x height] {% endsohu %}
```

**showStr** only be showed when you don't use web book. It can be found in URL. Just like this: https://my.tv.sohu.com/pl/ **9017423/80421658** .shtml

**video** only can be found in sharing page. It just like this: https://tv.sohu.com/upload/static/share/share_play.html# **80421658_9017423_0_9001_0**

### Mgtv
![flash](./flash.png) ![https](./https.png)

```
{% mgtv %} video @ [showStr] @ [width x height] {% endmgtv %}
```

**showStr** only be showed when you don't use web book.

For example: https://www.mgtv.com/b/316387/4201085.html

**316387** is showStr.

**4201085** is video.

### PPTV
![flash](./flash.png) ![http](./http.png)

```
{% pp %} video @ [width x height] {% endpp %}
```

video is PPTV video's serial number. Just like this: http://v.pptv.com/show/ **uZM6uSGH9zWYFn4** .html

width x height is player's size.

## Teji
It just like teji. This is a experimental function.

```
{% teji %} Your Html {% endteji %}
```

## Example code for test
```
bilibili

{% bilibili %} 170001@@ {% endbilibili %}

youku

{% youku %} XNDU4MjQ3MzA0@flash@ {% endyouku %}

{% youku %} XNDU4MjQ3MzA0@@ {% endyouku %}

iqiyi

{% iqiyi %} js @ 5634fcb5b64fb2f4824fe041d70419a6 @ 6460334909 @@ {% endiqiyi %}

{% iqiyi %} flash @ 5634fcb5b64fb2f4824fe041d70419a6 @ w_19rugokfo1 @ 6460334909 @ 6460334909 @ {% endiqiyi %}

qq

{% qq %} l0172wyz9su@ {% endqq %}

sohu

{% sohu %} 80421658_9017423_0_9001_0@@ {% endsohu %}

mgtv

{% mgtv %} 4201085@@ {% endmgtv %}

pp

{% pp %} uZM6uSGH9zWYFn4@ {% endpp %}

```
