---
package: rjm
path: .claude/skills/orphan-ref-validator/scripts/filters.py
type: script
bytes: 9457
unit: inv-rjm-129
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/filters.py, sha256: 16a166b88e86a6d4dba483c3f6a96c99e318b30cae02007c26305592f777b153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/orphan-ref-validator/scripts/filters.py

## Purpose — required, verbatim
> "Curated filter sets for orphan-ref-validator." — .claude/skills/orphan-ref-validator/scripts/filters.py:2

## Design intent — required
Maintains curated allowlists and filter functions (`KNOWN_RETIRED_KEBAB_SKILLS`, `KNOWN_SINGLE_WORD_SKILLS`, `FOREIGN_SKILL_CATALOGS`, `METASYNTACTIC_PLACEHOLDERS`) to determine whether backticked kebab-case and single-word tokens are candidate skill references. By keeping candidate sets bounded to known historical skills and foreign catalogs while excluding non-skill words and example placeholders, it eliminates false positives across markdown prose and specs without requiring an unmaintainable global denylist of all English words.

## Phase — required
rjm:build

## Inputs — required
- Function argument tokens and lines:
  - `token: str` passed to `is_known_retired_kebab_skill()`, `foreign_skill_catalog()`, `is_qualified_foreign_skill()`, `is_known_single_word_skill()`, `is_metasyntactic_placeholder()`, and `is_known_kebab_word()` (.claude/skills/orphan-ref-validator/scripts/filters.py:93, 138, 143, 158, 169, 174)
  - `line: str` passed to `is_qualified_foreign_skill()` (.claude/skills/orphan-ref-validator/scripts/filters.py:143)

## Outputs — required
- Boolean and string return values:
  - `is_known_retired_kebab_skill(token)` returns `bool` (.claude/skills/orphan-ref-validator/scripts/filters.py:101)
  - `foreign_skill_catalog(token)` returns `str | None` (.claude/skills/orphan-ref-validator/scripts/filters.py:140)
  - `is_qualified_foreign_skill(token, line)` returns `bool` (.claude/skills/orphan-ref-validator/scripts/filters.py:154, 156)
  - `is_known_single_word_skill(token)` returns `bool` (.claude/skills/orphan-ref-validator/scripts/filters.py:166)
  - `is_metasyntactic_placeholder(token)` returns `bool` (.claude/skills/orphan-ref-validator/scripts/filters.py:171)
  - `is_known_kebab_word(token)` returns `bool` (.claude/skills/orphan-ref-validator/scripts/filters.py:193, 195)

## Invokes — required
none

## Invoked by — required
- script filters — .claude/skills/orphan-ref-validator/scripts/scan.py:87
- script __init__.py — .claude/skills/orphan-ref-validator/scripts/__init__.py:5

## Concepts named — required, verbatim
- `orphan-ref-validator` — .claude/skills/orphan-ref-validator/scripts/filters.py:2 — used here
- `scan.py` — .claude/skills/orphan-ref-validator/scripts/filters.py:6 — used here
- `MODEL_ID_RE` — .claude/skills/orphan-ref-validator/scripts/filters.py:13 — defined here
- `KNOWN_SINGLE_WORD_SKILLS` — .claude/skills/orphan-ref-validator/scripts/filters.py:80 — defined here
- `KEBAB_DENYLIST` — .claude/skills/orphan-ref-validator/scripts/filters.py:39 — used here
- `KNOWN_RETIRED_KEBAB_SKILLS` — .claude/skills/orphan-ref-validator/scripts/filters.py:51 — defined here
- `doc-coverage` — .claude/skills/orphan-ref-validator/scripts/filters.py:52 — used here
- `doc-sync` — .claude/skills/orphan-ref-validator/scripts/filters.py:53 — used here
- `github-pr-reply` — .claude/skills/orphan-ref-validator/scripts/filters.py:54 — used here
- `guard-maturity` — .claude/skills/orphan-ref-validator/scripts/filters.py:55 — used here
- `session-end` — .claude/skills/orphan-ref-validator/scripts/filters.py:56 — used here
- `session-init` — .claude/skills/orphan-ref-validator/scripts/filters.py:57 — used here
- `session-log-fixer` — .claude/skills/orphan-ref-validator/scripts/filters.py:58 — used here
- `session-migration` — .claude/skills/orphan-ref-validator/scripts/filters.py:59 — used here
- `session-qa-eligibility` — .claude/skills/orphan-ref-validator/scripts/filters.py:60 — used here
- `SKILL_REF_RE` — .claude/skills/orphan-ref-validator/scripts/filters.py:65 — used here
- `incoherence` — .claude/skills/orphan-ref-validator/scripts/filters.py:83 — used here
- `doc-accuracy` — .claude/skills/orphan-ref-validator/scripts/filters.py:83 — used here
- `METASYNTACTIC_PLACEHOLDERS` — .claude/skills/orphan-ref-validator/scripts/filters.py:87 — defined here
- `is_known_retired_kebab_skill` — .claude/skills/orphan-ref-validator/scripts/filters.py:93 — defined here
- `FOREIGN_SKILL_CATALOGS` — .claude/skills/orphan-ref-validator/scripts/filters.py:116 — defined here
- `claim-verification-before-ingest` — .claude/skills/orphan-ref-validator/scripts/filters.py:117 — used here
- `front-gate-before-pipeline` — .claude/skills/orphan-ref-validator/scripts/filters.py:118 — used here
- `gstack` — .claude/skills/orphan-ref-validator/scripts/filters.py:117 — used here
- `foreign_skill_catalog` — .claude/skills/orphan-ref-validator/scripts/filters.py:138 — defined here
- `is_qualified_foreign_skill` — .claude/skills/orphan-ref-validator/scripts/filters.py:143 — defined here
- `is_known_single_word_skill` — .claude/skills/orphan-ref-validator/scripts/filters.py:158 — defined here
- `is_metasyntactic_placeholder` — .claude/skills/orphan-ref-validator/scripts/filters.py:169 — defined here
- `is_known_kebab_word` — .claude/skills/orphan-ref-validator/scripts/filters.py:174 — defined here

## Structure
none (python library module; constants and functions: `MODEL_ID_RE`, `KNOWN_RETIRED_KEBAB_SKILLS`, `KNOWN_SINGLE_WORD_SKILLS`, `METASYNTACTIC_PLACEHOLDERS`, `is_known_retired_kebab_skill`, `FOREIGN_SKILL_CATALOGS`, `_CATALOG_QUALIFIER_PATTERNS`, `foreign_skill_catalog`, `is_qualified_foreign_skill`, `is_known_single_word_skill`, `is_metasyntactic_placeholder`, `is_known_kebab_word`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/orphan-ref-validator/scripts/filters.py`, language: Python 3, lines: 195
- documented invocation:
  - "from filters import (" — .claude/skills/orphan-ref-validator/scripts/scan.py:87
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/orphan-ref-validator/scripts/filters.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (support library module without CLI entrypoint).
  Actual exit paths in code: no `sys.exit` or `exit` calls in code; exits 0 implicitly.
- for validators/gates: can it exit non-zero? no (pure helper module). Does it fail on the source repo's own default branch? no, exits 0.
- does the output match what the documentation claims? yes, successfully provides token filtering and catalog matching logic.

## Defects — required
none

## Observations
- Discusses in lines 121-131 a workaround for Semgrep's LDAP injection static analysis rule (`_CATALOG_QUALIFIER_PATTERNS` compiled at import time to avoid dynamic string interpolation in `re.search` that false-positives as an LDAP search sink).
- Solves the open-world problem of denylists: instead of trying to enumerate every non-skill word in English, it bounds detection to known retired skills (`KNOWN_RETIRED_KEBAB_SKILLS`, `KNOWN_SINGLE_WORD_SKILLS`) and live catalog entries, drastically cutting false positives in prose (e.g. dropping skill_name findings across `.serena/memories` from 1485 to 135 per lines 33-37).

## Context cost
9457 bytes (~2364 tokens). Python standard library only (`re`).
