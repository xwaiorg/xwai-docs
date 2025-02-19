---
sidebar_position: 2
---

# VSCode GO语言环境配置

## 1. 安装 go 语言插件
![Locale Dropdown](./img/go%20插件.png)

### 有可能遇到下面报错：安装go插件的go语言版本太低
Failed to find a go command (go1.21.0 or newer) needed to install tools. The go command (D:\Go\bin\go.exe) is too old (go1.20.7). If your project requires a Go version older than go1.21.0, please manually install the tools or, use the "go.toolsManagement.go" setting to configure a different go command (go 1.21.0+) to be used for tools installation. See https://github.com/golang/vscode-go/issues/3411.

1. 您遇到的错误提示表示，您当前安装的 Go 版本（go1.20.7）低于所需的最低版本（go1.21.0），因此无法安装所需的工具。
2. 解决方案，配置单独用于安装go插件的go语言版本，这个go语言版本不用于go项目
3. 升级 Go 版本，下载 go1.23.6.windows-386.zip，直接解压
4. 配置 VS Code 使用特定的 Go 命令：
  - 打开 VS Code 的设置（Ctrl + ,）。
  - 搜索 go.toolsManagement.go，找到该设置项。
  - 将其值设置为您希望 VS Code 使用的 Go 可执行文件的路径，例如：
  - "go.toolsManagement.go": "C:\\Go\\bin\\go.exe"
  - 保存设置后，重新启动 VS Code。
5. 等待安装成功
![Locale Dropdown](./img/go%20所有插件安装成功.png)

## 2. 通过命令安装Go语言所有相关插件
1. `ctrl+shift+p`
2. 输入： `Go install`
3. 选择: `Install/Update Tools`

## 3. Vscode Go proxy 设置

````````bash
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,https://goproxy.io,direct
`````````