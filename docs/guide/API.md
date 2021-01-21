### API整合

如果使用api集成，需要在`snaker.xml`中配置`DBAccess`、`Transaction`、`Dialect`

```java
import javax.sql.DataSource;
import org.snaker.engine.SnakerEngine;
import org.snaker.engine.access.jdbc.JdbcHelper;
import org.snaker.engine.cfg.Configuration;
public class SnakerHelper {
    private static final SnakerEngine engine;
    static {
        //使用项目中已有的DataSource、SessionFactory、SqlSessionFactory对象
        //传递至initAccessDBObject方法中都可以
        DataSource dataSource = JdbcHelper.getDataSource();
        engine = new Configuration()
            .initAccessDBObject(dataSource)
            .buildSnakerEngine();
    }
    public static SnakerEngine getEngine() {
        return engine;
    }
}
```

`initAccessDBObject`方法传递的参数值与`snaker.xml`配置的数据库访问对应关系：

| 参数类型          | 访问对象        | 事务管理拦截器                   | 依赖库                                                       |
| :---------------- | :-------------- | :------------------------------- | :----------------------------------------------------------- |
| DataSource        | JdbcAccess      | DataSourceTransactionInterceptor | commons-dbcp-1.4.jar commons-dbutils-1.5.jar commons-pool-1.5.4.jar |
| SessionFactory    | HibernateAccess | Hibernate3TransactionInterceptor | hibernate-*-3.5.5.jar                                        |
| SqlSessionFactory | MybatisAccess   | MybatisTransactionInterceptor    | mybatis-3.2.3.jar                                            |

initAccessDBObject方法也可以不调用，而使用snaker.properties中的jdbc.*或hibernate.*来初始化DataSource、SessionFactory、SqlSessionFactory。但在实际的项目，还是建议使用该项目已有的DataSource、SessionFactory、SqlSessionFactory