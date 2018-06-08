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

> avCode is bilibili video's serial number. Just like this: https://www.bilibili.com/video/av**170001**
> avCode should be a number. Don't attach "av" to it.
> section is matched video's sub video's serial number.
> width x height is player's size.
> Bilibili supports HTML5 player. It's familar with Linux user.

### Youku


### Iqiyi
