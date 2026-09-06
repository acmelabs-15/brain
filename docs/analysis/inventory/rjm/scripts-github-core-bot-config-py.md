---
package: rjm
path: scripts/github_core/bot_config.py
type: script
bytes: 13186
unit: inv-rjm-241
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/bot_config.py, sha256: 4abe6cd8dcb35770ac9ecbe56df1692756c1371cdbbc21b4387ce768490f5415}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/bot_config.py

## Purpose — required, verbatim
> "Bot authors configuration: loading, caching, and lookup." — scripts/github_core/bot_config.py:1

## Design intent — required
Provides centralized configuration loading, caching, and classification for bot accounts and authors (reviewers, automation, repository bots). It includes a lightweight YAML parser fallback when PyYAML is unavailable, prevents path traversal attacks (CWE-22) when loading `.github/bot-authors.yml`, and canonicalizes bot logins and account IDs to avoid misclassifying bot activity (e.g. Copilot reviewer vs. Copilot coding agent) across GitHub REST and GraphQL APIs.

## Phase — required
cross-phase

## Inputs — required
Optional configuration file at repo-root `.github/bot-authors.yml`, `config_path` parameter, `login` username string, `user_type` string, and numeric `account_id` integer.

## Outputs — required
Python dictionaries and lists of bot author usernames; boolean classification verdicts from `is_bot`; canonicalized username strings from `canonicalize_login`.

## Invokes — required
none

## Invoked by — required
- script bot_config — scripts/github_core/__init__.py:40
- script bot_config — scripts/update_reviewer_signal_stats.py:40

## Concepts named — required, verbatim
- `_DEFAULT_BOTS` — scripts/github_core/bot_config.py:29 — defined here
- `CWE-22` — scripts/github_core/bot_config.py:197 — used here
- `get_bot_authors_config` — scripts/github_core/bot_config.py:170 — defined here
- `get_bot_authors` — scripts/github_core/bot_config.py:237 — defined here
- `canonicalize_login` — scripts/github_core/bot_config.py:309 — defined here
- `is_bot` — scripts/github_core/bot_config.py:328 — defined here

## Structure
- # Bot configuration — scripts/github_core/bot_config.py:26
- def _find_repo_root — scripts/github_core/bot_config.py:52
- def _cache_bot_config — scripts/github_core/bot_config.py:67
- def _strip_inline_comment — scripts/github_core/bot_config.py:78
- def _strip_quotes — scripts/github_core/bot_config.py:98
- def _parse_mapping_line — scripts/github_core/bot_config.py:110
- def _parse_simple_yaml — scripts/github_core/bot_config.py:133
- def get_bot_authors_config — scripts/github_core/bot_config.py:170
- def get_bot_authors — scripts/github_core/bot_config.py:237
- def canonicalize_login — scripts/github_core/bot_config.py:309
- def is_bot — scripts/github_core/bot_config.py:328

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/github_core/bot_config.py`, Python, 352 lines
- **documented invocation:** none
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/github_core/bot_config.py`
- **abridged stdout:** (empty)
- **actual exit code:** 0
- **documented exit codes:** none vs. actual exit paths in code: none (library module without process exit calls)
- **validators/gates:** none
- **output match:** yes (clean execution as a library module)

## Defects — required
none

## Observations
Includes a self-contained zero-dependency YAML subset parser (`_parse_simple_yaml`) to ensure bot configuration parsing works reliably even in environments lacking PyYAML (issue #1844). Also includes CWE-22 path validation to prevent reading configuration files outside the repository root.

## Context cost
13,186 bytes (~3,400 tokens). Loads standard library only.
