---
id: RES-001
status: resolved
kind: research
from: IDEA-001#02
date: 2026-10-09
---
# RES-001: Which spreadsheet apps open a CSV file without a prompt?

## Question
Which spreadsheet apps open a CSV file without a prompt?

## Findings
- Excel opens a CSV file directly and reads it as UTF-8 only when the file starts with a byte order mark. Source: https://support.microsoft.com/en-us/office/opening-csv-utf-8-files-correctly-in-excel-8a935af5-3416-4edd-ba7e-3dfd2bc4a032, checked 2026-10-09.
- Numbers and LibreOffice Calc open a UTF-8 CSV file directly. Source: https://help.libreoffice.org/latest/en-US/text/shared/guide/csv_files.html, checked 2026-10-09.

## Follow-ups
