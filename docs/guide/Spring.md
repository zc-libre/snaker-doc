### Spring整合

- `增加maven依赖或jar`
- `配置DBAccess`
- `配置服务类`
- `配置事务管理`

### 增加maven依赖或jar

maven坐标如下：

```xml
<dependency>
    <groupId>com.github.snakerflow</groupId>
    <artifactId>snaker-spring</artifactId>
    <version>*.*.*</version>
</dependency>
```

如果非maven项目，需要到百度网盘下载jar包

### 配置DBAccess

| 访问类型   | 类路径                                               |
| :--------- | :--------------------------------------------------- |
| springjdbc | org.snaker.engine.spring.SpringJdbcAccess            |
| hibernate  | org.snaker.engine.access.hibernate.Hibernate3Access  |
| hibernate  | org.snaker.engine.access.hibernate4.Hibernate4Access |
| mybatis    | org.snaker.engine.access.mybatis.MybatisAccess       |

如配置Hibernate方式的DBAccess：

```xml
<bean id="dbAccess" class="org.snaker.engine.access.hibernate.Hibernate3Access">
    <property name="sessionFactory" ref="sessionFactory"/>
</bean>
```

### 配置服务类

```xml
<!-- 流程引擎配置 -->
<bean class="org.snaker.engine.spring.SpringSnakerEngine">
    <property name="processService" ref="processService"/>
    <property name="orderService" ref="orderService"/>
    <property name="taskService" ref="taskService"/>
    <property name="queryService" ref="queryService"/>
    <property name="managerService" ref="managerService"/>
</bean>

<bean id="processService" class="org.snaker.engine.core.ProcessService">
    <property name="access" ref="dbAccess"/>
    <property name="cacheManager" ref="cacheManager"/>
</bean>
<bean id="orderService" class="org.snaker.engine.core.OrderService">
    <property name="access" ref="dbAccess"/>
</bean>
<bean id="taskService" class="org.snaker.engine.core.TaskService">
    <property name="access" ref="dbAccess"/>
</bean>
<bean id="managerService" class="org.snaker.engine.core.ManagerService">
    <property name="access" ref="dbAccess"/>
</bean>
<bean id="queryService" class="org.snaker.engine.core.QueryService">
    <property name="access" ref="dbAccess"/>
</bean>
```

### 配置事务管理

需要将流程引擎的事务托管给spring统一管理

```xml
<!-- 流程事务配置 aop的pointcut中增加:or execution(* org.snaker.engine..*.*(..))-->
<tx:attributes>
    <tx:method name="start*" propagation="REQUIRED"/>
    <tx:method name="execute*" propagation="REQUIRED"/>
    <tx:method name="save*" propagation="REQUIRED"/>
    <tx:method name="delete*" propagation="REQUIRED" />
    <tx:method name="update*" propagation="REQUIRED" />
    <tx:method name="remove*" propagation="REQUIRED" />
    <tx:method name="add*" propagation="REQUIRED" />
    <tx:method name="assign*" propagation="REQUIRED" />
    <tx:method name="create*" propagation="REQUIRED" />
    <tx:method name="complete*" propagation="REQUIRED" />
    <tx:method name="finish*" propagation="REQUIRED" />
    <tx:method name="terminate*" propagation="REQUIRED" />
    <tx:method name="take*" propagation="REQUIRED" />
    <tx:method name="deploy*" propagation="REQUIRED" />
    <tx:method name="redeploy*" propagation="REQUIRED" />
    <tx:method name="undeploy*" propagation="REQUIRED" />
    <tx:method name="withdrawTask*" propagation="REQUIRED" />
    <tx:method name="native*" propagation="REQUIRED" />

    <tx:method name="get*" propagation="REQUIRED" read-only="true" />
    <tx:method name="find*" propagation="REQUIRED" read-only="true" />
    <tx:method name="query*" propagation="REQUIRED" read-only="true" />
    <tx:method name="search*" propagation="REQUIRED" read-only="true" />
    <tx:method name="is*" propagation="REQUIRED" read-only="true" />
</tx:attributes>
```