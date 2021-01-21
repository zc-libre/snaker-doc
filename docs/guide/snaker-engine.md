### 流程引擎API

流程引擎作为所有服务的入口，提供获取服务的方法，同时也提供最常用的api。

```java
org.snaker.engine.SnakerEngine
```

- `获取定义服务`
- `获取实例服务`
- `获取任务服务`
- `获取查询服务`
- `获取管理服务`
- `启动流程`
- `执行任务`
- `驳回、任意跳转任务`
- `创建自由任务`

### 获取定义服务

```java
engine.process();
```

### 获取实例服务

```java
engine.order();
```

### 获取任务服务

```java
engine.task();
```

### 获取查询服务

```java
engine.query();
```

### 获取管理服务

```java
engine.manager();
```

### 启动流程

流程实例由引擎API的`startInstance......`方法完成，方法的参数一般为流程定义的id或者是name、version。

```java
根据流程定义id启动实例
engine.startInstanceById(String id);
engine.startInstanceById(String id, String operator);
engine.startInstanceById(String id, String operator, Map<String, Object> args);
根据流程定义name、version启动实例
engine.startInstanceByName(String name);
engine.startInstanceByName(String name, Integer version);
engine.startInstanceByName(String name, Integer version, String operator);
engine.startInstanceByName(String name, Integer version, String operator, Map<String, Object> args);
```

启动实例方法会返回一个Order对象，并且能够根据模型创建相应的任务Task

### 执行任务

执行任务由引擎API的`executeTask......`方法完成，方法的参数一般为任务的id，操作人operator，变量数据args。

```java
engine.executeTask(String taskId);
engine.executeTask(String taskId, String operator);
engine.executeTask(String taskId, String operator, Map<String, Object> args);
```

执行任务方法会返回一个Task集合，并且能够根据模型创建下一步任务Task

### 驳回、任意跳转任务

任务驳回有两种场景：驳回至上一步；驳回至任意节点。

```java
engine.executeAndJumpTask(String taskId, String operator, Map<String, Object> args, String nodeName);
```

方法的参数nodeName决定驳回的方式：

- `nodeName`为空时，则驳回至上一步，不需要传递参与者数据
- `nodeName`不为空，则表示任意跳转，此时需要传递参与者数据。

### 创建自由任务

```java
engine.createFreeTask(String orderId, String operator, Map<String, Object> args, TaskModel model);
```

创建自由任务时，需要新建任务模型对象TaskModel，再根据此模型创建对应的任务数据。

