### 模型操作

通过`流程定义章节`的查询接口可以轻松获取到`Process`实体对象，该实体中的`model`属性就是流程图的对象表达形式了，可通过`getModel`方法获取`ProcessModel`。

```java
process.getModel()
```

- `流程模型`
- `Start节点`
- `name获取节点`
- `类型获取所有节点`
- `所有任务节点`
- `后续一级节点集合`

### `流程模型`

```java
org.snaker.engine.model.ProcessModel
```

流程模型、流程定义的XML文件、流程图三种表现形式可互相转换，流程模型对象不仅包含了自身的属性（如：`name` `displayName` `instanceUrl` `expireTime` `instanceNoClass` ），同时也包含了所有节点模型对象以及它们的关系。

### `Start节点`

```java
org.snaker.engine.model.StartModel
```

Start节点作为流程启动的入口，只有输出路由，其输入路由为空，可通过`getInputs`方法进行验证

### `name获取节点`

```java
NodeModel getNode(String nodeName)
```

根据节点的`name`属性获取到节点模型对象

### `类型获取所有节点`

```java
List<T> getModels(Class<T> clazz)
```

根据节点类型获取所有该类型的模型对象集合。常用于如下方式：

```java
List<TaskModel> taskModels = processModel.getModels(TaskModel.class)
```

### `所有任务节点`

```java
List<TaskModel> getTaskModels()
```

该方法获取有序的所有任务模型集合

### `后续一级节点集合`

```java
List<T> getNextModels(Class<T> clazz)
```

获取某个节点的后续一级节点集合，getNextModels是NodeModel的方法