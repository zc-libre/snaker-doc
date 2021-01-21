### 时限控制

时限控制常用于流程平台中的超时处理（提醒、自动执行等）、以及任务监控的查询统计等功能。

- `依赖包`
- `配置`
- `实现提醒接口`

### 依赖包

```
snaker默认支持quartz定时器调度框架，只需要依赖snaker-quartz的包即可。
```

### 配置

在`snaker.xml`中配置时限控制的拦截器、定时调度的实现类

```xml
<bean class="org.snaker.engine.impl.SchedulerInterceptor"/>
<bean class="org.snaker.engine.scheduling.quartz.QuartzScheduler"/>
```

如果使用其它定时调度框架，需要实现`IScheduler`接口，并替换`QuartzScheduler`类配置

以上两步已经完成了时限的配置工作，下面就可以针对提醒、超时自动执行做自定义扩展了。

### 超时提醒

- 编写自定义的提醒类，实现`IReminder`接口。并配置到`snaker.xml`中即可。
- 任务节点配置超时提醒属性：`reminderTime`、`reminderRepeat`。

```
reminderTime是一个变量，表示提醒开始时间，当你调用api时需要传递此变量值，值的类型为date。
reminderRepeat是一个数字，表示重复提醒间隔时间，以分钟为单位
```

- 默认提醒一次就结束，如果希望提醒多次，可通过`snaker.properties`中配置`scheduler.repeat`属性，该值是个数字，表示提醒次数。
- 节假日配置

```properties
#是否启用节假日，默认为false
scheduler.useCalendar=true/false
#节日配置，格式为yyyy-MM-dd,...
scheduler.holidays=2014-12-26,2014-12-27
#工作日设置，格式为1,2,3...7，表示周一至周日
scheduler.weeks=1,2,3,4,5
#工作时间设置，格式为8:00-18:00
scheduler.workTime=8:00-18:00
```

### 超时自动完成

- 任务节点配置超时处理属性：`expireTime`、`autoExecute`、`callback`

```
expireTime是一个变量，表示期望完成时间，当你调用api时需要传递此变量值，值的类型为date。
autoExecute的值为Y/N,表示超时是否自动执行
callback是一个字符串，表示自动执行的回调类路径配置
```

- 编写回调类

通过实现`JobCallback`接口

```java
org.snaker.engine.scheduling.JobCallback
```