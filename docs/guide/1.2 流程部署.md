### 流程部署

- `deploy`

```java
engine.process().deploy(StreamHelper
    .getStreamFromClasspath("flows/leave.snaker")
```

部署后的版本号默认为0，如果存在同名的流程定义，则新的流程定义版本号依次加1，并不会影响其它已经运行的流程实例。

- `redeploy`

```java
engine.process().redeploy(processId, StreamHelper
    .getStreamFromClasspath("flows/leave.snaker")
```

重新部署流程会影响已经运行的流程实例

- `undeploy`

```java
engine.process().undeploy(processId)
```

卸载流程只会更新状态state值，不会删除数据