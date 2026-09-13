# Bulk Email Blocking and Unblocking System

A beginner-friendly Flask web application for managing email accounts in bulk.

## Features

- Admin login
- Dashboard with total, active, and blocked accounts
- Search and filters
- CSV / XLSX upload
- Duplicate and invalid-email handling
- Select-and-block / unblock
- Domain-based block / unblock
- Blocking and unblocking history
- Operation reports
- SQLite by default; MySQL-ready through `DATABASE_URL`
- Responsive interface

## Install

Use Python 3.10+.

### Windows

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

## Initialize database

```bash
flask --app app init-db
flask --app app seed
```

## Run

```bash
python app.py
```

Open http://127.0.0.1:5000

Demo login: `admin` / `admin123`

## CSV/XLSX format

Minimum:

```csv
email
student10@gmail.com
student11@gmail.com
```

Optional account type:

```csv
email,account_type
student10@gmail.com,STUDENT
staff10@college.com,STAFF
```

## MySQL

Install a MySQL driver such as PyMySQL:

```bash
pip install pymysql
```

Then set `DATABASE_URL`, for example:

```text
mysql+pymysql://root:password@localhost/bulk_email_system
```

## Production notes

- Change `SECRET_KEY`.
- Use a real MySQL database for deployment.
- Add HTTPS and CSRF protection before production.
- Connect block/unblock operations to the institution's actual email administration API if real mail accounts must be changed. The current app manages database status and audit history.
