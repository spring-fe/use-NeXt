## 说明


访问地址 https://spring-fe.github.io/use-NeXt/



## 介绍
NeXt是一个基于HTML5/Javascript框架，提供了一个具有高性能和丰富功能的拓扑图UI组件。NeXt可以与DLUX一起构建ODL应用程序。
#### 主要特征
- 支持大型的复杂的网络拓扑
- 支持聚合的网络节点
- 流量/路径/隧道/组可视化
- 拥有不同的拓扑图布局算法
- 可以以地图为背景层展示拓扑图
- 友好的用户交互

## 文件结构


## 快速开始

1.创建HTML文件

2.编写NeXt文档

3.使用浏览器打开HTML文件

## 面向对象编程(OOP)
NeXt使用面向对象的编程思想，使用Class类封装、Class类之间可继承。

1.定义一个类，并且定义类的属性与方法

2.继承类

## MVVM设计模式

MVVM设计模式采用双向数据绑定。View层变动，自动反映在ViewModel层上，ViewModel层将数据保存在Model上。Model层数据改变，通过ViewMode层自动刷新View。

### NeXt实例
#### 界面与交互

1.在初始化时，Model层的名字数据列表和ViewModel层数据关联，ViewModel层名字列表与View绑定，UI显示所绑定的列表。

2.搜索框输入内容时，搜索框输入的w自动同步到ViewModel层，在ViewModel层根据key更新ViewModel层的名字列表，然后自动刷新UI。


#### 代码实现

1.原始数据转化为用于数据绑定的对象实例，对象包含有数据和操作。

2.View层，定义模板和模板绑定的数据。

3.ViewModel层，与View自动同步。

4.主程序，View与ViewModel绑定在一起，并且把View添加到document。



## 拓扑图
### 拓扑图模型

NeXt定义了一个通用拓扑模型，用JSON格式抽象数据类型来描述拓扑图。每个模型有两个主要的属性：节点和链接。节点代表图形的顶点，链接代表图形的边。

#### 节点属性

nodes属性用于定义节点集合。每个节点是拓扑图中的一个节点的json描述。x和y坐标用于定义每个节点的位置。

#### 链接属性

links属性用于定义链接集合。每个链接是拓扑图中的一个链接的json描述。每个链接至少有两个属性：源和目标。它们是用于链接的两个节点的key。key是节点的id或节点的索引。链路的属性还用于描述关于链路的附加信息，例如接口/带宽/链路类型。此外，它还可以用于描述其他的绘图信息，例如链接的贝塞尔曲率。

#### 节点集属性

nodeSet属性用于描述如何聚合节点。每个nodeSet是组节点的json描述。nodeSet应该有两个属性，即nodes和root。nodes是节点id的集合，root是这个节点集的根节点。

### 拓扑图实现
#### 基础拓扑图
##### 准备拓扑图模型数据
##### 通过NeXt提供的拓扑图组件实现拓扑图
##### 拓扑图
###### 初始效果
###### 交互
1.拖拽节点

2.整体放大缩小

3.以某个选区为当前焦点放大

4.拓扑图设置(节点图标显示设置，是否显示节点的标签，拓扑图主题）
## 最后
拓扑图组件支持丰富的功能，并且具有较好的扩展性。

多种功能拓扑图官方实例：
https://developer.cisco.com/site/neXt/discover/demo/
 
NeXt用于实践视频展示：
https://developer.cisco.com/site/neXt/discover/video/
 
NeXt官方 API手册：
https://developer.cisco.com/site/neXt/document/api-reference-manual/
 
