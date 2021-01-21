### 子流程

子流程的作用是将一个复杂的业务流程进行细化拆分，提高流程的`复用性`。

- `子流程模型`
- `父子流程的关联`

### 子流程模型

子流程模型类型为`SubProcessModel`，其主要属性为`processName`，根据流程的`name`进行关联，由于流程定义支持一个name多个版本同时运行，那么子流程关联只设置name，即表示与最新版本的子流程关联。

### 父子流程的关联

对于表结构的设计中，父子流程的关联字段为

- `wf_order`[`parent_Id`、`parent_Node_Name`]
- `wf_hist_order`[`parent_Id`]