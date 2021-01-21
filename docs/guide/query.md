### 综合查询

综合查询服务不仅提供流程实例、活动/历史任务、待办任务的查询，同时支持原生SQL语句的查询服务。

```java
org.snaker.engine.IQueryService
```

`根据流程实例ID获取流程实例对象`

```java
Order getOrder(String orderId);
```

`根据任务ID获取任务对象`

```java
Task getTask(String taskId);
```

`根据任务ID获取历史任务对象`

```java
HistoryTask getHistTask(String taskId);
```

`根据任务ID获取活动任务参与者数组`

```java
String[] getTaskActorsByTaskId(String taskId);
```

`根据任务ID获取历史任务参与者数组`

```java
String[] getHistoryTaskActorsByTaskId(String taskId);
```

`根据filter查询活动任务`

```java
List<Task> getActiveTasks(QueryFilter filter);
```

`根据filter分页查询活动任务`

```java
List<Task> getActiveTasks(Page<Task> page, QueryFilter filter);
```

`根据filter查询流程实例列表`

```java
List<Order> getActiveOrders(QueryFilter filter);
```

`根据filter分页查询流程实例列表`

```java
List<Order> getActiveOrders(Page<Order> page, QueryFilter filter);
```

`根据filter查询历史流程实例`

```java
List<HistoryOrder> getHistoryOrders(QueryFilter filter);
```

`根据filter分页查询历史流程实例`

```java
List<HistoryOrder> getHistoryOrders(Page<HistoryOrder> page, QueryFilter filter);
```

`根据filter查询所有已完成的任务`

```java
List<HistoryTask> getHistoryTasks(QueryFilter filter);
```

`根据filter分页查询已完成的历史任务`

```java
List<HistoryTask> getHistoryTasks(Page<HistoryTask> page, QueryFilter filter);
```

`根据filter分页查询工作项（包含process、order、task三个实体的字段集合）`

```java
List<WorkItem> getWorkItems(Page<WorkItem> page, QueryFilter filter);
```

`根据filter分页查询抄送工作项（包含process、order）`

```java
List<HistoryOrder> getCCWorks(Page<HistoryOrder> page, QueryFilter filter);
```

`根据filter分页查询已完成的历史任务项`

```java
List<WorkItem> getHistoryWorkItems(Page<WorkItem> page, QueryFilter filter);
```

`根据类型T、Sql语句、参数查询单个对象`

```java
public <T> T nativeQueryObject(Class<T> T, String sql, Object... args);
```

`根据类型T、Sql语句、参数查询列表对象`

```java
public <T> List<T> nativeQueryList(Class<T> T, String sql, Object... args);
```

`根据类型T、Sql语句、参数分页查询列表对象`

```java
public <T> List<T> nativeQueryList(Page<T> page, Class<T> T, String sql, Object... args);
```

