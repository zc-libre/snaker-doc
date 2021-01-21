### 级联删除

级联删除主要用于流程定义、流程实例的数据。一般情况下，不建议在正式环境里使用此功能，顾名思义，会删除所有的关联数据，谨慎使用。

- `流程定义`

```java
engine.process().cascadeRemove(String processId)
```

会删除流程定义以及该定义启动的所有流程实例、任务，`谨慎使用`。

- `流程实例`

```java
engine.order().cascadeRemove(String orderId)
```

会删除流程实例以及该实例创建的所有任务，`谨慎使用`。