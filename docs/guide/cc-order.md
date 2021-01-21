### 实例抄送

实例的抄送类似于邮箱里面的抄送功能，一般用于将该流程实例抄送给领导查阅。

- `表结构`
- `创建抄送`
- `更新状态`

### 表结构

抄送记录表主要保存抄送的记录信息

```
wf_cc_order
```

### 创建抄送

根据实例id、创建人、抄送人创建抄送记录

```java
engine.order().createCCOrder(String orderId, String creator, String... actorIds)
```

### 更新状态

更新状态用于更新抄送记录为已经阅读

```java
engine.order().updateCCStatus(String orderId, String... actorIds)
```