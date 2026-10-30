---
id: RES-001
status: resolved
kind: research
from: IDEA-001#02
date: 2026-10-22
---
# RES-001: Can the local note store emit a change feed?

## Question
Can the local note store emit a change feed?

## Findings
- The note store is a SQLite file, opened in one place. Source: src/store/db.ts:8, checked 2026-10-22.
- SQLite's update hook reports each changed row with its table and row ID. Source: https://www.sqlite.org/c3ref/update_hook.html, checked 2026-10-22, etag: "6a1f-63d2c4e0".

## Follow-ups
- What does the sync service cost per active user per month?
