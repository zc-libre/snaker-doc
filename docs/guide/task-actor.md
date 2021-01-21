### 任务参与者

snaker的任务支持静态配置、动态传递、自定义类处理、动态设置、组等方式。

- `参与者设置`
- `动态添加、删除参与者`
- `组支持`

### 参与者设置

```
直接设置静态参与者，即assignee值为用户、部门或角色的标识符

通过运行时动态传递，即assignee值为变量名称，在调用流程引擎的api时，通过map参数传递这个变量值

通过自定义类[继承Assignment类]，设置assignmentHandler属性，assign方法返回值就是参与者
```

### 动态添加、删除参与者

向指定任务动态添加参与者，同时支持设置参与类型

`performType`为0，则仅仅向wf_task_actor表中增加一条参与者信息 `performType`为1，则会在wf_task表中增加一条任务数据。

```java
engine.task().addTaskActor(String taskId, String... actors)
engine.task().addTaskActor(String taskId, Integer performType, String... actors)
```

对指定任务动态删除其中的参与者

```java
engine.task().removeTaskActor(String taskId, String... actors)
```

### 组支持

由于snaker引擎与用户权限完全解耦的，所以对于组的支持，仅仅是你设置组作为参与者，你就要自定义一个任务的访问策略，能够根据操作人得到所有的组集合，这样流程引擎才能允许该操作人处理任务。

- `自定义任务访问策略类`

```java
public class CustomAccessStrategy extends GeneralAccessStrategy {
    protected List<String> ensureGroup(String operator) {
        //此处根据实际项目获取操作人对应的组列表
        return ShiroUtils.getGroups();
    }
}
```

- `配置`

在snaker.xml中增加下面的配置

```xml
<bean class="com.snakerflow.framework.flow.CustomAccessStrategy"/>
```