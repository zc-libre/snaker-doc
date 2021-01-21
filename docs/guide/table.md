### 表定义

- `表关系图`
- `表详细说明`
- `字段详细说明`

#### 表关系图

Snaker流程引擎核心共7张表，关系图如下所示

TBD

#### 表详细说明：

| 表名称               | 描述             |
| :------------------- | :--------------- |
| `wf_process`         | 流程定义表       |
| `wf_order`           | 活动实例表       |
| `wf_task`            | 活动任务表       |
| `wf_task_actor`      | 活动任务参与者表 |
| `wf_hist_order`      | 历史实例表       |
| `wf_hist_task`       | 历史任务表       |
| `wf_hist_task_actor` | 历史任务参与者表 |
| `wf_surrogate`       | 委托代理管理表   |
| `wf_cc_order`        | 抄送实例表       |

#### 字段详细说明：

`wf_process`:

| 字段名称     | 字段描述     |
| :----------- | :----------- |
| id           | 主键ID       |
| name         | 流程名称     |
| display_Name | 流程显示名称 |
| type         | 流程类型     |
| instance_Url | 实例url      |
| state        | 流程是否可用 |
| content      | 流程模型定义 |
| version      | 版本         |
| create_Time  | 创建时间     |
| creator      | 创建人       |

`wf_order`:

| 字段名称         | 字段描述             |
| :--------------- | :------------------- |
| id               | 主键ID               |
| parent_Id        | 父流程ID             |
| process_Id       | 流程定义ID           |
| creator          | 发起人               |
| create_Time      | 发起时间             |
| expire_Time      | 期望完成时间         |
| last_Update_Time | 上次更新时间         |
| last_Updator     | 上次更新人           |
| priority         | 优先级               |
| parent_Node_Name | 父流程依赖的节点名称 |
| order_No         | 流程实例编号         |
| variable         | 附属变量json存储     |
| version          | 版本                 |

`wf_hist_order`:

| 字段名称    | 字段描述         |
| :---------- | :--------------- |
| id          | 主键ID           |
| parent_Id   | 父流程ID         |
| process_Id  | 流程定义ID       |
| creator     | 发起人           |
| create_Time | 发起时间         |
| expire_Time | 期望完成时间     |
| end_Time    | 完成时间         |
| priority    | 优先级           |
| order_No    | 流程实例编号     |
| variable    | 附属变量json存储 |
| order_State | 状态             |

`wf_task`:

| 字段名称       | 字段描述         |
| :------------- | :--------------- |
| id             | 主键ID           |
| order_Id       | 流程实例ID       |
| task_Name      | 任务名称         |
| display_Name   | 任务显示名称     |
| task_Type      | 任务类型         |
| perform_Type   | 参与类型         |
| operator       | 任务处理人       |
| create_Time    | 任务创建时间     |
| finish_Time    | 任务完成时间     |
| expire_Time    | 任务期望完成时间 |
| action_Url     | 任务处理的url    |
| parent_Task_Id | 父任务ID         |
| variable       | 附属变量json存储 |
| version        | 版本             |

`wf_hist_task`:

| 字段名称       | 字段描述         |
| :------------- | :--------------- |
| id             | 主键ID           |
| order_Id       | 流程实例ID       |
| task_Name      | 任务名称         |
| display_Name   | 任务显示名称     |
| task_Type      | 任务类型         |
| perform_Type   | 参与类型         |
| operator       | 任务处理人       |
| create_Time    | 任务创建时间     |
| finish_Time    | 任务完成时间     |
| expire_Time    | 任务期望完成时间 |
| action_Url     | 任务处理的url    |
| parent_Task_Id | 父任务ID         |
| variable       | 附属变量json存储 |
| task_State     | 任务状态         |

`wf_task_actor`:

| 字段名称 | 字段描述 |
| :------- | :------- |
| task_Id  | 任务ID   |
| actor_Id | 参与者ID |

wf_hist_task_actor:

| 字段名称 | 字段描述 |
| :------- | :------- |
| task_Id  | 任务ID   |
| actor_Id | 参与者ID |

`wf_surrogate`:

| 字段名称     | 字段描述 |
| :----------- | :------- |
| id           | 主键ID   |
| process_Name | 流程名称 |
| operator     | 授权人   |
| surrogate    | 代理人   |
| odate        | 操作时间 |
| sdate        | 开始时间 |
| edate        | 结束时间 |
| state        | 状态     |

`wf_cc_order`:

| 字段名称    | 字段描述   |
| :---------- | :--------- |
| order_Id    | 流程实例ID |
| actor_Id    | 参与者ID   |
| create_Time | 抄送时间   |
| finish_Time | 完成时间   |
| creator     | 发起人     |
| status      | 状态       |