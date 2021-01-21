### 委托代理

委托代理主要用于流程平台中，主办人由于出差、休假等原因无法处理任务时，通过委托其它人员去处理此人的某类业务流程的待办任务。

- `表结构`
- `委托代理配置`
- `管理委托代理`

### 表结构

委托代理表主要保存委托代理的记录信息

```
wf_surrogate
```

### 委托代理配置

需要在`snker.xml`中配置委托代理的拦截器

```xml
<bean class="org.snaker.engine.impl.SurrogateInterceptor"/>
```

### 管理委托代理

委托代理的数据管理由管理服务类完成

```java
org.snaker.engine.IManagerService
```

管理服务接口针对委托代理提供以下方法：

```java
void saveOrUpdate(Surrogate surrogate)
void deleteSurrogate(String id)
Surrogate getSurrogate(String id)
List<Surrogate> getSurrogate(QueryFilter filter)
String getSurrogate(String operator, String processName)
List<Surrogate> getSurrogate(Page<Surrogate> page, QueryFilter filter)
```