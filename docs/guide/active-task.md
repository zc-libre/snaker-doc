### 活动任务

任务服务主要配合流程引擎在调度过程中任务数据的操作。

```java
org.snaker.engine.ITaskService
```

- `转派`
- `撤回`
- `提取`
- `驳回跳转`
- `唤醒`
- `更新`

### 转派

任务转派是向指定人创建新的任务。转派api支持主办、协办两种任务类型

```java
createNewTask(String taskId, int taskType, String... actors)
```

`taskType`：`0 主办`任务类型

`taskType`：`1 协办`任务类型

### 撤回

根据历史任务id，撤回由该历史任务派发的所有活动任务，如果无活动任务，则不允许撤回，抛出unchecked异常：`SnakerException`

```java
withdrawTask(String taskId, String operator)
```

### 提取

任务提取一般发生在参与者为部门、角色等组的情况下，该组的某位成员提取任务后，不允许其它成员处理该任务。

```java
take(String taskId, String operator)
```

### 驳回、跳转

任务驳回、跳转请参考`流程引擎API章节`

### 唤醒

如果一个已经结束的任务，希望重新激活为活动状态，该如何操作呢。那么调用resume方法即可实现此功能。

```java
Task resume(String taskId, String operator)
```

### 更新

如果一个活动任务，需要更新部分字段，则可以使用更新方法完成。

```java
updateTask(Task task)
```

可更新任务对象的`finish_Time`、`operator`、`expire_Time`、`variable`