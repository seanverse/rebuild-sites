# 开发人员


## 获取源码

RB 源码托关于 GitHub，主页是 [getrebuild/rebuild](https://github.com/getrebuild/rebuild) 。如果你只想使用而非获取源码进行二次开发，可以直接下载最新的 [发行版本](https://getrebuild.com/download) 后进行 [安装](../admin/install.md)。


## 环境准备

RB 对于开发环境的要求很简单，由于使用 Java 开发，因此可以运行在几乎所有操作系统上。请按如下清单准备：

- JDK 1.8+
- MySQL 5.5+
- Tomcat 8.0+
- Apache Maven 3.3+
- Eclipse (for JEE) / IDEA


### 初始化数据库

在源码根目录下找到 `.setup/db-init.sql` 文件，此数据库脚本文件包括三部分：

1. 数据库和用户（_请注意此部分默认是被注释的，首次使用请取消注释_）
2. 表
3. 初始数据

直接将此文件导入到你的 MySQL 数据库中即可。当然，你完全可以根据自己的需要修改数据库及用户和密码，但请注意在修改后需要同时修改位于 `src/main/resources/jdbc.properties` 文件内的相关参数。

```properties
db.url=jdbc:mysql://127.0.0.1:3306/YOUR_DBNAME?useUnicode=true&characterEncoding=UTF-8&useSSL=false&zeroDateTimeBehavior=convertToNull
db.user=YOUR_DBUSER
db.passwd=YOUR_DBPASSWORD
```


### 修改第三方服务配置

RB 集成了一些第三方服务，如缓存系统、云存储、短信邮件等。他们的配置位于 `src/main/resources/application.properties` 文件内。请特别注意以 `.aes`  结尾的配置项，它用于标识此项是否使用了 AES 加密，系统在启动时会自动对其进行解密。如填写的值为明文，请将 `.aes` 移除。

如果你暂时没有这些账号，请将其留空或删除，否则有可能导致系统启动失败。

```properties
# Cloud Storage - https://www.qiniu.com/
StorageURL=//qn-cdn.getrebuild.com/
StorageBucket=rb-cdn
StorageApiKey.aes=zYkDunIsyaZd71rZoW1KPtJPIutYBsBqNaZxpE+4xNl9urgpG+Py0Q0w5m2+Z72e
StorageApiSecret.aes=Ke7e7qzT+5F2HC3C/89a5Aq+UopTPHygiSpPfnQjnSrpxgUtiSlauQbPnowtl+ew

# Cache - https://redis.io/
# Use built-in ehcache if redis not defined
CacheHost=127.0.0.1
CachePort=16379
CachePassword.aes=vXwBKYUosMpJRO9jeG9+IA==

# SMS - https://www.mysubmail.com/
SmsUser=30912
SmsPassword.aes=w07FOXTgIF5vuU2uWOLHhgeBv2dSExddnQQ8f534GXMKxKZT7YVYoWKjP8gPrEIS
SmsSign=REBUILD

# Mail - https://www.mysubmail.com/
MailUser=14022
MailPassword.aes=vRnLDh4PVen2faMH+itQuFjzwBcWtCTO6qslkF36VAoKxKZT7YVYoWKjP8gPrEIS
MailAddr=hi@smtp.getrebuild.com
MailName=REBUILD
```


### 构建安装包

RB 是一个标准的 Maven 项目，因此你可以使用 `mvn` 命令进行构建。

```shell
# build
mvn clean package
# or tests
mvn clean test -DskipTests=false -Drbpass=PASSKEY
```

构建成功后将生成一个标准的 WAR 包，它位于 `target/rebuild.war` ，请将其复制到 Tomcat  的 `webapps` 目录下，并启动 Tomcat。现在你可以通过 `http://localhost:[PORT]/rebuild/` 进行访问。默认用户名及密码均为 `admin`。


### 快速预览

RB 内置了一个 Jetty 服务端插件，你可以直接启动快速预览效果。

```shell
mvn clean jetty:run -Drbpass=PASSKEY
```

启动完成后可以通过 [http://127.0.0.1:18080/rebuild/](http://127.0.0.1:18080/rebuild/) 进行访问。请注意此功能仅为快速预览而设计，任何时候都不应该将其作为开发或是产品部署使用。


## 使用 Eclipse/IDEA 开发

RB 是一个标准的 Maven 项目，请直接使用 Eclipse/IDEA 的导入功能，将其作为 Maven 项目导入即可。


## 遇到问题

如遇问题，欢迎 [issue](https://github.com/getrebuild/rebuild/issues) 或 [PR](https://github.com/getrebuild/rebuild/pulls)
