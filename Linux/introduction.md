# Introduction to Linux

## What is Linux?

Linux is an open-source operating system kernel created by Linus Torvalds in 1991. Today, "Linux" commonly refers to complete operating systems built around the Linux kernel, such as Ubuntu, Debian, and Red Hat Enterprise Linux.

An operating system manages:

- Hardware resources (CPU, memory, storage)
- Running applications
- Files and directories
- User accounts and permissions

---

## Why Linux?

### Advantages

- Free and open source
- Stable and reliable
- Secure
- Highly customizable
- Excellent for servers and cloud environments
- Powerful command-line interface

### Common Uses

- Web servers
- Databases
- Cloud infrastructure
- Containers and Kubernetes
- Development environments
- Embedded systems and IoT devices

---

## Linux Architecture

```text
+----------------------+
|      Applications    |
+----------------------+
|        Shell         |
+----------------------+
|        Kernel        |
+----------------------+
|      Hardware        |
+----------------------+
```

### Kernel

The core of Linux that communicates with hardware and manages:

- Processes
- Memory
- Devices
- File systems

### Shell

A command interpreter that allows users to interact with Linux.

Common shells:

- Bash
- Zsh
- Fish

---

## Linux File System

Linux uses a hierarchical directory structure.

```text
/
├── bin
├── boot
├── dev
├── etc
├── home
├── lib
├── opt
├── proc
├── root
├── tmp
├── usr
└── var
```

### Important Directories

| Directory | Purpose                     |
| --------- | --------------------------- |
| `/`       | Root directory              |
| `/home`   | User home directories       |
| `/root`   | Root user's home            |
| `/etc`    | Configuration files         |
| `/var`    | Logs and variable data      |
| `/tmp`    | Temporary files             |
| `/usr`    | User programs and utilities |
| `/bin`    | Essential commands          |
| `/dev`    | Device files                |

---

## Basic Linux Commands

### Navigation

```bash
pwd
```

Print current directory.

```bash
ls
```

List files and directories.

```bash
ls -la
```

Detailed listing including hidden files.

```bash
cd /home/user
```

Change directory.

---

### File Operations

Create a file:

```bash
touch file.txt
```

Create a directory:

```bash
mkdir projects
```

Copy files:

```bash
cp source.txt destination.txt
```

Move or rename:

```bash
mv old.txt new.txt
```

Delete file:

```bash
rm file.txt
```

Delete directory:

```bash
rm -r folder
```

---

### Viewing File Contents

```bash
cat file.txt
```

```bash
less file.txt
```

```bash
head file.txt
```

```bash
tail file.txt
```

View live logs:

```bash
tail -f app.log
```

---

### User Information

Current user:

```bash
whoami
```

Current logged-in users:

```bash
who
```

System information:

```bash
uname -a
```

---

## File Permissions

Example:

```bash
-rwxr-xr--
```

Breakdown:

```text
Owner  Group  Others
rwx    r-x    r--
```

| Symbol | Meaning |
| ------ | ------- |
| r      | Read    |
| w      | Write   |
| x      | Execute |

Change permissions:

```bash
chmod 755 script.sh
```

Change owner:

```bash
chown user:group file.txt
```

---

## Processes

List processes:

```bash
ps aux
```

Real-time process monitoring:

```bash
top
```

Kill a process:

```bash
kill PID
```

Force kill:

```bash
kill -9 PID
```

---

## Package Management

### Ubuntu/Debian

Update packages:

```bash
sudo apt update
```

Install package:

```bash
sudo apt install nginx
```

### Red Hat/CentOS

```bash
sudo yum install nginx
```

or

```bash
sudo dnf install nginx
```

---

## Networking Commands

Check IP address:

```bash
ip addr
```

Test connectivity:

```bash
ping google.com
```

Check open ports:

```bash
ss -tulpn
```

Download a file:

```bash
curl https://example.com
```

---

## Useful Commands for Developers

Find files:

```bash
find . -name "*.js"
```

Search text:

```bash
grep "error" app.log
```

Check disk usage:

```bash
df -h
```

Directory sizes:

```bash
du -sh *
```

View environment variables:

```bash
env
```

---

## Linux and Software Development

Common development stack:

```text
Linux
├── Git
├── Node.js
├── MySQL/PostgreSQL
├── Docker
├── Nginx
└── PM2
```

For a backend developer, learning Linux is essential because most production servers run Linux-based operating systems.

---
