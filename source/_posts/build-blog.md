---
title: 我的Hexo博客搭建
date: 2017-07-08 22:03:50
tags:
  - Hexo
  - Blog
---
# 我的Hexo博客搭建

## 安装环境
1. 硬件：Raspberry Pi2 B
2. OS：Raspbian
3. Web：coding pages

## 安装node.js和git
这步很简单，就不说了。hexo的网站上也有[写明](https://hexo.io/docs/)。~~其实是怕麻烦才不写的~~
## 安装hexo-cli
执行
``` bash
$npm install hexo-cli
```
 就完成了hexo的安装，简单吧。
## 搭建
创建一个空文件夹并进入
``` bash
$mkdir YourBlogDir && cd YourBlogDir
```
执行安装命令
``` bash
$hexo init
```
此时hexo会从github上下载文件到当前目录~~（这便捷的安装真是比WordPress高到不知道哪里去了，蛤蛤）~~
*新版hexo会自动执行npm install所以就不用执行了*
现在，你可以用hexo g && hexo s然后访问[localhost:4000](127.0.0.1:4000)来查看预览了
Tips:*如果你发现报错，可以查看[这个](http://hexo.io/docs/troubleshooting.html)来解决*
## 更换主题
默认的landscape主题很好看，但我就是要换，蛤蛤。hexo当然支持主题啦，你可以在[这里](https://hexo.io/themes/)找到更多。我选择的是[Material](https://material.viosey.com/)一款扁平化的主题。当然你有能力可以自己开发。
 依照说明，在博客目录下执行
``` bash
$hexo install hexo-material
$cp /node-modules/hexo-material /theme/material
$cp /theme/material/_config.template.yml  /theme/material/_config.yml 
```
完成主题的安装，之后在``_config.yml``文件中启用修改``theme: 
landscape``为``theme: material``即可
Tips:*一定要在``theme:``的冒号后加一个空格，不然会报错，其他yml配置亦是如此*
现在，你可以用``hexo s ``来查看效果了。Like this:
![hexo-with-material-theme](/img/blog/hexo-with-material-theme.png) 
这时你一定流下了激动的泪水,right?
## 部署到coding pages
1. 修改_config.yml
使用你喜欢的编辑器打开_config.yml将其中的
将
```yml
	url: 
	root: /	
```
改为
```yml
	url: 你的pages地址
	root: 你的博客目录(如果使用项目pages的话,使用用户pages可以不用修改)
```
*我建议你使用用户pages，即将你的博客仓库名设置为{your_name}.coding.me，{user_name} 指代你的coding个性后缀这样不仅可以用{your_name}.coding.me进行访问，简化了URL，而且不会出现诸如css,图片无法加载的错误。关于这两种pages的区别，可以在[这里](https://coding.net/help/doc/pages/index.html)看到*
```yml
	deploy:
		type:  
```
改为
```yml
	deploy:
  		type: git
  		repository: 你的项目git仓库地址 
  	branch: master
```
*推荐使用ssh方式，当然https也可以*
对了别忘了执行
```bash
$npm install hexo-deployer-git --save
```
否则会报错
## 部署到coding
最赛艇的一步来啦！
hexo的部署非常简单就一条命令
```bash
$hexo d -g #必须在博客目录执行不然会报错
```
*用https会让你输入用户名和密码*
## 部署coding pages
在项目中找到代码->Pages 服务，部署来源选择master分支即可。
**Yah！恭喜你的博客已经上线了**
访问{your_name}.coding.me即可看到，现在开始写吧。
最后祝您身体健康，再见！(手动滑稽)