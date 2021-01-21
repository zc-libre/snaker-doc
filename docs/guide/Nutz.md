### Nutz整合

- `增加maven依赖或jar`
- `编写门面类SnakerFacets`
- `配置Nutz方式的DBAccess、事务拦截器`
- `配置Nutz的ioc`
- `使用`

### 增加maven依赖或jar

maven坐标如下：

```xml
<dependency>
    <groupId>com.github.snakerflow</groupId>
    <artifactId>snaker-nutz</artifactId>
    <version>*.*.*</version>
</dependency>
```

如果非maven项目，需要到百度网盘下载jar包

### 编写门面类SnakerFacets

```java
package test.nutz;

import org.snaker.engine.SnakerEngine;
import org.snaker.engine.cfg.Configuration;

import javax.sql.DataSource;

/**
 * 获取SnakerEngine的门面类
 * @author yuqs
 * @since 2.0
 */
public class SnakerFacets {
    private SnakerEngine engine;

    public SnakerFacets(DataSource dataSource) {
        engine = new Configuration().initAccessDBObject(dataSource)
                .buildSnakerEngine();
    }

    public SnakerEngine getEngine() {
        return engine;
    }
}
```

### 配置Nutz方式的DBAccess、事务拦截器

在snaker.xml中配置数据库访问类路径：

```xml
<bean class="org.snaker.nutz.access.NutzAccess"/>
<bean class="org.snaker.nutz.access.NutzTransactionInterceptor"/>
```

### 配置Nutz的ioc

```java
var ioc = {
    dataSource : {
        type : "org.apache.commons.dbcp.BasicDataSource",
        events : { depose : "close" },
        fields : {
            driverClassName : "com.mysql.jdbc.Driver",
            url : "jdbc:mysql://127.0.0.1:3306/snaker?useUnicode=true&characterEncoding=utf-8",
            username : "root",
            password : "root",
            initialSize : 5,
            maxActive : 50,
            maxIdle : 10,
            defaultAutoCommit : false,
            timeBetweenEvictionRunsMillis : 3600000,
            minEvictableIdleTimeMillis : 3600000
        }
    },
    dao : {
        type : "org.nutz.dao.impl.NutDao",
        args : [ { refer : "dataSource" } ],
        fields : { sqlManager : { refer : "sql" } }
    },
    snaker : {
        type : "test.nutz.SnakerFacets",
        args : [ { refer : "dataSource" } ]
    }
}
```

### 使用

```java
public class TestNutz {
    private SnakerEngine engine;
    @Before
    public void before() {
        Ioc ioc = new NutIoc(new JsonLoader("ioc.js"));
        SnakerFacets facets = ioc.get(SnakerFacets.class, "snaker");
        engine = facets.getEngine();
    }

    @Test
    public void test() {
        engine.process().deploy(StreamHelper.getStreamFromClasspath("process.snaker"));
        Map<String, Object> args = new HashMap<String, Object>();
        args.put("task1.operator", new String[]{"1"});
        Order order = engine.startInstanceByName("simple", 0, "2", args);
        System.out.println("order=" + order);
        List<Task> tasks = engine.query().getActiveTasks(new QueryFilter().setOrderId(order.getId()));
        for(Task task : tasks) {
            engine.executeTask(task.getId(), "1", args);
        }
    }
}
```