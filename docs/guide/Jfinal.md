### Jfinal整合

- `增加maven依赖或jar`
- `配置插件SnakerPlugin`
- `配置Jfinal方式的DBAccess、事务拦截器`
- `使用`

### 增加maven依赖或jar

maven坐标如下：

```xml
<dependency>
    <groupId>com.github.snakerflow</groupId>
    <artifactId>snaker-jfinal</artifactId>
    <version>*.*.*</version>
</dependency>
```

如果非maven项目，需要到百度网盘下载jar包

### 配置插件SnakerPlugin

```java
import org.snaker.jfinal.plugin.SnakerPlugin;
......


public void configPlugin(Plugins me) {
    C3p0Plugin c3p0Plugin = new C3p0Plugin(getProperty("jdbcUrl"), getProperty("user"), getProperty("password").trim());
    me.add(c3p0Plugin);

    // 配置ActiveRecord插件
    ActiveRecordPlugin arp = new ActiveRecordPlugin(c3p0Plugin);
    me.add(arp);
    arp.addMapping("blog", Blog.class); // 映射blog 表到 Blog模型

    // 配置Snaker插件
    SnakerPlugin snakerPlugin = new SnakerPlugin(c3p0Plugin);
    me.add(snakerPlugin);
}
```

### 配置Jfinal方式的DBAccess、事务拦截器

在snaker.xml中配置数据库访问类路径：

```xml
<bean class="org.snaker.jfinal.access.JfinalAccess"/>
<bean class="org.snaker.jfinal.access.JfinalTransactionInterceptor"/>
```

### 使用

```java
//直接从SnakerPlugin的静态方法getEngine获得引擎实现类，再调用其API进行操作即可
SnakerPlugin.getEngine().startInstanceByName("simple", null, "test", args);
```