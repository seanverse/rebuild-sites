# 系统配置

目前系统暂未提供配置界面，如需修改系统配置请搜索安装目录下的 `application.properties` 文件，然后修改相应的配置项。以下表格是对配置项的说明。

| 配置项                | 说明                                             |
| --------------------- | ------------------------------------------------ |
| AppName               | （系统）名称                                     |
| HomeURL               | 域名/主页地址                                    |
| OpenSignUp            | 是否开放公开注册功能（取值 `true` 或 `false`）   |
| LiveWallpaper         | 是否开启登录页每日一图（取值 `true` 或 `false`） |
| RecycleBinKeepingDays | 回收站数据保留天数（数字，0为不启用）            |
| PasswordPolicy        | 登录密码安全策略（取值 `1-3`）                   |
| DataDirectory         | 数据存在目录（默认 `$USER_DIR$/.rebuild/`）      |



## 第三方服务配置

如果需要修改第三方服务配置，请参考 [修改第三方服务配置](../dev/index.md) 章节。

