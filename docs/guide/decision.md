### 决策表达式

决策表达式主要用于`decision`（选择分支）节点，该节点支持三种路由选择方式

- `decision的expr`
- `transition的expr`
- `自定义类`

### decision的expr

decision节点的expr有两种方式来设置

```
1.表达式中增加判断逻辑，如：${day > 3 ? 't1' : 't2'}，此时根据day的值决定走t1、或t2的路由，用于设置范围值的情况

2.表达式仅仅是一个变量，如：${tname}，此时，传递tname的值为路由name即可，用于设置具体值的情况（如：同意、不同意）
```

### transition的expr

如果decision节点的expr为空，可设置输出路由的expr，必须返回boolean类型

```
路由1设置expr的值为：${content==1}，
路由2设置expr的值为${content > 1}。
```

### 自定义类

自定义类需要实现`DecisionHandler`接口的`decide`方法

```java
org.snaker.engine.DecisionHandler
```

该方法返回字符串即表示输出路由的name

Snaker默认支持`Juel`、`SringEL`两种表达式引擎，需要在`snaker.xml`中配置。配置如下：

```xml
<bean class="org.snaker.engine.impl.JuelExpression"/>
```

并且支持自定义表达式，实现`Expression`接口，同样修改一下配合即可。

- `Juel表达式引擎常用语法`

```java
String expr1 = "${content}";
Map<String, Object> args1 = new HashMap<String, Object>();
args1.put("content", 1);
System.out.println(eval(String.class, expr1, args1));

String expr2 = "${content == 1 ? 'v1' : 'v2'}";
Map<String, Object> args2 = new HashMap<String, Object>();
//此处不仅支持数字类型，也支持字符串类型，但是值必须可转换为数字
args2.put("content", "2");
System.out.println(eval(String.class, expr2, args2));

String expr3 = "${content > 1 ? 'v1' : 'v2'}";
Map<String, Object> args3 = new HashMap<String, Object>();
//此处只要是数字类型即可，如1或0.5等
args3.put("content", 4.2);
System.out.println(eval(String.class, expr3, args3));

//juel支持表达式为字符串类型而参数为数字类型
String expr4 = "${content == '1' ? 'v1' : 'v2'}";
Map<String, Object> args4 = new HashMap<String, Object>();
//此处不仅可以写字符串"1"，也可以写char类型'1'，写数字类型1，浮点类型1.00
args4.put("content", 1);
System.out.println(eval(String.class, expr4, args4));

//逻辑表达式与，使用&&表示
String expr5 = "${content > 1 && content <= 10 ? 'v1' : 'v2'}";
Map<String, Object> args5 = new HashMap<String, Object>();
//此处不仅可以写字符串"1"，也可以写char类型'1'，写数字类型1，浮点类型1.00
args5.put("content", "11");
System.out.println(eval(String.class, expr5, args5));

//逻辑表达式或，使用||表示
String expr6 = "${content < 1 || content > 10 ? 'v1' : 'v2'}";
Map<String, Object> args6 = new HashMap<String, Object>();
//此处不仅可以写字符串"1"，也可以写char类型'1'，写数字类型1，浮点类型1.00
args6.put("content", "1");
System.out.println(eval(String.class, expr6, args6));

//逻辑表达式
String expr7 = "${content < 1 || content > 10 ? 'v1' : (content == 8 ? 'v2' : 'v3')}";
Map<String, Object> args7 = new HashMap<String, Object>();
//此处不仅可以写字符串"1"，也可以写char类型'1'，写数字类型1，浮点类型1.00
args7.put("content", "8");
System.out.println(eval(String.class, expr7, args7));
```

- `Spring EL表达式引擎常用语法`

```java
String expr1 = "#content";
Map<String, Object> args1 = new HashMap<String, Object>();
args1.put("content", "v2");
System.out.println(expr1 + "====>" + eval(String.class, expr1, args1));

String expr2 = "#content == 1 ? 'v1' : 'v2'";
Map<String, Object> args2 = new HashMap<String, Object>();
//此处仅支持数字类型
args2.put("content", 2.1);
System.out.println(expr2 + "====>" + eval(String.class, expr2, args2));

String expr3 = "#content > 1 ? 'v1' : 'v2'";
Map<String, Object> args3 = new HashMap<String, Object>();
//此处只要是数字类型即可，如1或0.5等
args3.put("content", 4.2);
System.out.println(expr3 + "====>" + eval(String.class, expr3, args3));

//spel支持表达式为字符串类型而参数为数字类型
String expr4 = "#content == '1' ? 'v1' : 'v2'";
Map<String, Object> args4 = new HashMap<String, Object>();
//此处仅支持字符串"1"
args4.put("content", "1");
System.out.println(expr4 + "====>" + eval(String.class, expr4, args4));

//逻辑表达式与，使用and表示
String expr5 = "#content > 1 and #content <= 10 ? 'v1' : 'v2'";
Map<String, Object> args5 = new HashMap<String, Object>();
//此处仅支持数字类型
args5.put("content", 11);
System.out.println(expr5 + "====>" + eval(String.class, expr5, args5));

//逻辑表达式或，使用||表示
String expr6 = "#content < 1 or #content > 10 ? 'v1' : 'v2'";
Map<String, Object> args6 = new HashMap<String, Object>();
//此处不仅可以写字符串"1"，也可以写char类型'1'，写数字类型1，浮点类型1.00
args6.put("content", 1);
System.out.println(expr6 + "====>" + eval(String.class, expr6, args6));

//逻辑表达式
String expr7 = "(#content < 1 or #content > 10) ? 'v1' : (#content == 8 ? 'v2' : 'v3')";
Map<String, Object> args7 = new HashMap<String, Object>();
//此处不仅可以写字符串"1"，也可以写char类型'1'，写数字类型1，浮点类型1.00
args7.put("content", 8);
System.out.println(expr7 + "====>" + eval(String.class, expr7, args7));
```