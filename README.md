> 有一个需求,手机上看到一篇好文章,收藏后,可否触发API?

> 不错,这个书签是给自己量身定做的,因为我要在手机上摸鱼的同时,触发API,现在一步`分享到`就搞定
# 简介

[【各种书签】](https://bookmark.gezhong.vip/ "各种书签")是[unmark](https://github.com/cdevroe/unmark "unmark")的汉化版本

[https://unmark.it/](https://unmark.it/ "https://unmark.it/")是一个网络书签,支持多端操作,快捷,方便



# 特色

* 自动保存快照到【互联网档案馆】[Archive.org](https://archive.org/ "Archive.org")
* 可以触发自定义API
 > 可对任意类别设置收藏网址后的`触发API`
* 支持离线下载
 > 整合[youtube_dl](https://github.com/ytdl-org/youtube-dl/),支持几百个常用视频网站离线下载, [支持列表](https://github.com/ytdl-org/youtube-dl/blob/master/docs/supportedsites.md)
 
 > 离线比较慢,请耐心等待
 
### 电脑端演示
 <img src="https://i.loli.net/2020/11/21/pEQoB3SHUfZqbVr.gif" width = "600"  align=center />

### 手机端演示
  <img src="https://i.loli.net/2020/11/21/bcVI57iHnFpX4fT.gif" width = "300"  align=center />

# 支持的操作方式

### 一、网页版

略...手机/电脑都能用

### 二、APP

本项目使用PWA技术,安装更加快捷

#### 2.1 安装app
打开网页,默认会提示*`添加到主屏幕`*,安装即可
如果没有提示,进入设置,点击安装,如图:

<img src="https://i.loli.net/2020/11/11/WRkF2UtnliHSfym.jpg" width = "200"  align=center />

#### 2.2 使用app
分享-->分享到"各种书签"

<img src="https://i.loli.net/2020/11/11/xaUgdhvQule4Gw1.png" width = "200"  align=center />

### 三、 书签栏工具

1. 下图拖拽到书签栏

<img src="https://i.loli.net/2020/11/12/7abQezIRlwvYHJK.png" width = "50%"  align=center />
2. 在需要收藏的网页,点击该书签即可保存到【各种书签】

<img src="https://i.loli.net/2020/11/11/Tm4Lcby7advMIrJ.png" width = "50%"  align=center />

### 四、 chrome插件

安装地址:[https://chrome.google.com/webstore/detail/cliffdebjbhkjmnjdcflgiopadhcljpi/related](https://chrome.google.com/webstore/detail/cliffdebjbhkjmnjdcflgiopadhcljpi/related)

# 其他功能

### 快照存档功能（剪藏功能）
自动提交到【互联网档案馆】
为防止源网站倒闭，所有收藏过的网址,由系统自动提交到[Archive.org](https://archive.org/ "Archive.org")存档

### 自定义触发API
1. 在分类里设置各个分类的`触发API`(我的--> 修改分类-->类别API)
2. API触发结果反馈到 书签的备注里
3. API请求超时5秒,读取结果超时3秒
> 该触发为异步,大概2分钟会触发

<img src="https://i.loli.net/2020/11/12/t3alIZmWLT2hJH8.png" width = "300"  align=center />

### API的设置
#### API变量
支持的变量有3:`{TITLE}`,`{URL}`,`{TYPE}`
例如:`https://mysql.com/?title={TITLE}&url={URL}`

#### POST
同时系统会POST更多参数给API,爱接收不接收,反正会POST
```
        users_to_mark_id,//用户书签ID
        user_id,//用户ID
        label_id,/分类ID
        apis,//你的API,{变量}已经替换完
        mark_id,//书签ID
        notes,//备注
        title,//标题
```

### 支持离线下载

#### 原理
 通过youtube_dl,在后台下载到google drive ,推送到[google drive 搜索引擎](https://gezhong.vip/)
 
#### 离线下载步骤

1. [保存书签](https://github.com/gdtool/bookmark#%E6%94%AF%E6%8C%81%E7%9A%84%E6%93%8D%E4%BD%9C%E6%96%B9%E5%BC%8F)
2. 等待,不用管,通常比较慢
 > 离线下载的人比较多,半小时到一天不等
3. 查看
 > 离线下载完毕的,有"视频"链接,但是不一定能马上下载,见第4条
![image.png](https://i.loli.net/2020/11/22/F3BTI2ODbdVrqwt.png)

4.打不开的原因
> 服务器下载完,还要处理好多东西,等待搜索引擎处理完毕,方能下载


 
##### 电脑端演示
 <img src="https://i.loli.net/2020/11/21/pEQoB3SHUfZqbVr.gif" width = "600"  align=center />

##### 手机端演示
  <img src="https://i.loli.net/2020/11/21/bcVI57iHnFpX4fT.gif" width = "300"  align=center />
 



### TODO

* 推送印象笔记
> 设想ing,文档还没看
* 推送有道云笔记
> 设想ing,文档还没看

### 联系我 

[@haopian](https://t.me/haopian)

[意见反馈](https://support.qq.com/products/292696)

### 会有人捐赠吗?
[爱发电](https://afdian.net/@zhaopp)

