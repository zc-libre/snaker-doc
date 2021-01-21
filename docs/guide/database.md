### 数据库支持

目前snaker默认支持

- `h2`
- `db2`
- `mysql`
- `mssql`
- `oracle`
- `postgres`

数据库，并支持自行扩展其它数据库。

`snaker2.4`版本之前，需要在`snaker.xml`中配置数据库发言

```xml
<bean class="org.snaker.engine.access.dialect.MySqlDialect"/>
```

snaker2.4+版本，已经根据数据库连接自动获取发言，不需要手动配置。如果实现其它数据库，则需要实现`Dialect`方言接口，并配置发言。

```java
org.snaker.engine.access.dialect.Dialect
```

由于流程引擎的数据库操作都是标准的sql语法，自定义发言是为了分页查询。