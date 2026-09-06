---
package: rjm
path: scripts/github_core/log_safety.py
type: script
bytes: 640
unit: inv-rjm-241
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/log_safety.py, sha256: d4696f8fd629359f3749743a18a0aea99e5c83a5d8f56835fbb50f3c14e318a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/log_safety.py

## Purpose — required, verbatim
> "Log sanitation helpers for GitHub Core (CWE-117 log forging defense)." — scripts/github_core/log_safety.py:1

## Design intent — required
Provides log sanitation against CWE-117 log forging attacks by escaping carriage return (`\r`) and newline (`\n`) characters in untrusted remote strings (such as GraphQL or REST error messages) before they are interpolated into log messages.

## Phase — required
cross-phase

## Inputs — required
Any object or string to be sanitized for logging.

## Outputs — required
Sanitized string with carriage returns and line feeds converted to literal `\r` and `\n`.

## Invokes — required
none

## Invoked by — required
- script log_safety — scripts/github_core/api.py:35
- script log_safety — scripts/github_core/review_threads.py:15

## Concepts named — required, verbatim
- `CWE-117` — scripts/github_core/log_safety.py:1 — used here
- `safe_log_str` — scripts/github_core/log_safety.py:6 — defined here

## Structure
- def safe_log_str — scripts/github_core/log_safety.py:6

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/github_core/log_safety.py`, Python, 16 lines
- **documented invocation:** none
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/github_core/log_safety.py`
- **abridged stdout:** (empty)
- **actual exit code:** 0
- **documented exit codes:** none vs. actual exit paths in code: none (library module without process exit calls)
- **validators/gates:** none
- **output match:** yes (clean execution as a library module)

## Defects — required
none

## Observations
Centralizes log sanitization across 12 call sites into a single tested helper to guard against log injection and fake log line insertion.

## Context cost
640 bytes (~160 tokens). Standard library only.
