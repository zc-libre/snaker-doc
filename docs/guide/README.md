# Snaker Document

### `概述`

```
Snaker`是一个基于Java的`轻量级`工作流引擎，适用于企业应用中常见的业务流程。本着`轻量`、`简单`、`灵巧`理念设计，定位于`简单集成`，`多环境支持
基于Apache License Version 2.0开源协议发布
```

http://www.apache.org/licenses/LICENSE-2.0.html

### `轻量`

核心代码行数7000+行，强大的可扩展性，默认支持以下框架：

- `Spring`、`Jfinal`、`Nutz`

- `Jdbc`、`SpringJdbc`、`Hibernate3`、`Hibernate4`、`Mybatis`

### `简单`

- 表设计简单[核心表7张]

- 流程组件简单[start/end/task/custom/subprocess/decision/fork/join]

### `灵巧`

- 暴露大量可扩展接口

- 支持流程设计器、流程引擎的组件模型自定义[`节点自定义`、`属性自定义`、`表单自定义`]