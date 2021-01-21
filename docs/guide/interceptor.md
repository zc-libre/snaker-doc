### 节点拦截器

snaker的拦截器支持所有的节点前后拦截，并且支持全局、局部拦截器。拦截器统一实现`SnakerInterceptor`接口

```java
org.snaker.engine.SnakerInterceptor
```

- `全局拦截器`
- `局部拦截器`

### 全局拦截器

全局拦截器会拦截所有新产生的任务对象。自定义的全局拦截器需要配置到`snaker.xml`中。如默认支持的日志拦截器

```xml
<bean class="org.snaker.engine.impl.LogInterceptor"/>
```

### 局部拦截器

局部拦截器支持节点执行的`前置`、`后置`拦截。需要配置到task节点模型的`preInterceptors`[前置拦截]、`postInterceptors`[后置拦截]属性