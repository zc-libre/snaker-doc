### 应用整合

为了方便整合，snaker提供了应用示例提供参考

- `snaker-springmvc`

http://git.oschina.net/yuqs/snaker-springmvc

```
    基于SpringMVC、Spring3、Hibernate3、Snaker的快速整合示例，仅仅包括流程管理的功能，所有涉及到操作人员的部分全部使用admin，如果整合到具体项目时，一定要替换成系统当前登录的用户
```

- `snaker-struts2`

http://git.oschina.net/yuqs/snaker-struts2

```
    基于Struts2、Spring3、Mybatis、Snaker的快速整合示例，仅仅包括流程管理的功能，所有涉及到操作人员的部分全部使用admin，如果整合到具体项目时，一定要替换成系统当前登录的用户
```

- `snaker-web`

http://git.oschina.net/yuqs/snaker-web

```
    基于SpringMVC、Spring3、Hibernate3、Shiro、Snaker搭建的基础演示应用，包含：用户管理、部门管理、角色管理、权限管理、资源管理、菜单管理、流程管理、数据字典等常用功能模块
```

- `jfaker`

http://git.oschina.net/yuqs/jfaker

```
    基于JFinal、Shiro、Snaker搭建的基础演示应用，包含：用户管理、部门管理、角色管理、权限管理、资源管理、菜单管理、流程管理、数据字典等常用功能模块
```

目前Snaker可独立运行，以API方式整合，同时也支持spring、jfinal、nutz三个平台，并且能够将事务托管给平台管理。其它情况下，需要自定义扩展。

- `API`

  ```
    API方式的事务由snaker自身管理，保证每次api调用事务的正确性。
  
    snaker提供的测试用例目前就采用这种方式。
  ```

- `spring`

  ```
    与spring整合过程，需要配置服务、事务，以保证事务交给spring管理。可以参考snaker-web项目
  ```

- `jfinal`

  ```
    与Jfinal整合类似于API方式
  ```

- `nutz`

  ```
    与Nutz整合类似于API方式
  ```