### 流程实例

流程实例服务主要配合引擎完成实例的开始、结束状态。

```java
org.snaker.engine.IOrderService
```

- `完成实例`
- `强制终止`
- `唤醒实例`

### 完成实例

流程实例的完成，是通过`complete`方法处理的。

```java
void complete(String orderId)
```

一般情况下，该方法不需要显示调用，流程引擎在执行最后一个任务，流向End节点时，会自动触发完成实例的动作。

如果你手动调用complete方法，会造成实例数据与任务数据不一致的情况，仅仅是结束了实例，但是该实例下的所有活动任务依然存在。

### 强制终止

如果需要把一个活动的流程实例结束掉，并且同时结束该实例下的所有活动任务，那么可以调用`terminate`方法进行处理。

```java
void terminate(String orderId)
void terminate(String orderId, String operator)
```

如果不传递operator，那么会存在权限不够，活动任务无法结束的情况。此时建议您传递`SnakerEngine.ADMIN`超级权限去终止。

### 唤醒实例

如果一个已经结束的实例，希望重新激活至最后一步，该如何操作呢。那么调用`resume`方法即可实现此功能。

```java
Order resume(String orderId)
```

唤醒实例后，会重新产生一个活动实例的数据记录Order，同时会唤醒最后一个历史任务为活动任务记录。

