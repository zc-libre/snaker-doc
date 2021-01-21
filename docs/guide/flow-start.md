### 流程启动

可根据流程定义的id或者name启动流程实例。如果相同的流程名称存在不同的版本，并使用name启动实例时，会以最新的版本号来启动，其它低版本运行中的流程实例不会受到影响，这样就允许流程的多个版本同时运行。

- `根据id启动实例`

```java
engine.startInstanceById(processId);
engine.startInstanceById(processId, operator);
engine.startInstanceById(processId, operator, args);
```

startInstanceById方法的参数为：流程定义id、操作人operator、参数列表args

- `根据name启动实例`

```java
engine.startInstanceByName(name)
engine.startInstanceByName(name, version)
engine.startInstanceByName(name, version, operator)
engine.startInstanceByName(name, version, operator, args)
```

startInstanceByName方法的参数为：流程名称name、版本号version、操作人operator、参数列表args