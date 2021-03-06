### springboot整合

### 快速开始

#### 1.1 引入依赖

该项目已同步至maven中央仓库

```xml
  <dependency>
            <groupId>com.github.zc-libre</groupId>
            <artifactId>snakerflow-spring-boot-stater</artifactId>
            <version>2.0.3</version>
    </dependency>
```

#### 1.2 配置

```yaml
snaker:
  flow:
    auto-init-schema: false       #是否初始化数据库脚本，默认为false
    db-access-type: mybatis_plus  #sql执行器类型 可选 jdbc、spring、mybatis_plus。默认为jdbc
    expression-type: juel         #决策表达式类型 可选juel和spel。默认为juel
    cache:
      cache-type: redis           #缓存类型 可选内存、ehcache、redis
      timeout: 2                  #过期时间  (当前版本仅对redis模式生效，后续会对其他类型做扩展)
      time-unit: hours            #时间单位  (同上)
      key-prefix: "snakerflow::"  #缓存键前缀(同上)
```

注：1. DBAccess使用mybatis-plus模式需配置mybatis-plus的分页插件。

​         2.缓存使用redis模式需配置RedisTemplate<String, Object> bean。

