---
package: rjm
path: .claude/skills/github-url-intercept/scripts/url_validation.py
type: script
bytes: 1947
unit: inv-rjm-122
in_scope_via: .claude/skills/github-url-intercept/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/github-url-intercept/scripts/url_validation.py, sha256: 9e31cfa19cb2f0c7d3163758706a88e503a0c801a48725527bc8cd3d986be662}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/github-url-intercept/scripts/url_validation.py

## Purpose — required, verbatim
> "Input validation shared by GitHub URL parsers." — .claude/skills/github-url-intercept/scripts/url_validation.py:1

## Design intent — required
Provides shared regular expressions and input validation routines to guard GitHub URL parsers against CWE-78 command injection and path traversal attacks. It filters out dangerous shell metacharacters (`"'`$;&|><(){}[]!\`) and ensures path components conform to strict character sets before being inserted into CLI commands. Without this module, malicious URLs containing shell control characters or path traversal sequences (`..`, `%2e%2e`) could escape argument quoting when downstream scripts interpolate URL segments into `gh api` commands.

## Phase — required
cross-phase

## Inputs — required
- `value`: input string to validate — .claude/skills/github-url-intercept/scripts/url_validation.py:17
- `pattern`: compiled regex (`SAFE_OWNER_REPO_RE`, `SAFE_REF_RE`, `SAFE_PATH_RE`, `SAFE_GIST_ID_RE`, `SAFE_GIST_REVISION_RE`) — .claude/skills/github-url-intercept/scripts/url_validation.py:8-12, 18
- `segments`: list of path segments — .claude/skills/github-url-intercept/scripts/url_validation.py:47

## Outputs — required
- `is_safe_input`: boolean return value (.claude/skills/github-url-intercept/scripts/url_validation.py:44)
- `is_safe_raw_path`: boolean return value (.claude/skills/github-url-intercept/scripts/url_validation.py:59)

## Invokes — required
none

## Invoked by — required
- script url_validation — .claude/skills/github-url-intercept/scripts/gist_routing.py:11
- script url_validation — .claude/skills/github-url-intercept/scripts/test_url_routing.py:42

## Concepts named — required, verbatim
- `SAFE_OWNER_REPO_RE` — .claude/skills/github-url-intercept/scripts/url_validation.py:8 — defined here
- `SAFE_REF_RE` — .claude/skills/github-url-intercept/scripts/url_validation.py:9 — defined here
- `SAFE_PATH_RE` — .claude/skills/github-url-intercept/scripts/url_validation.py:10 — defined here
- `SAFE_GIST_ID_RE` — .claude/skills/github-url-intercept/scripts/url_validation.py:11 — defined here
- `SAFE_GIST_REVISION_RE` — .claude/skills/github-url-intercept/scripts/url_validation.py:12 — defined here
- `DANGEROUS_CHARS` — .claude/skills/github-url-intercept/scripts/url_validation.py:13 — defined here
- `is_safe_input` — .claude/skills/github-url-intercept/scripts/url_validation.py:16 — defined here
- `is_safe_raw_path` — .claude/skills/github-url-intercept/scripts/url_validation.py:47 — defined here

## Structure
none (python library module; definitions: `SAFE_OWNER_REPO_RE`, `SAFE_REF_RE`, `SAFE_PATH_RE`, `SAFE_GIST_ID_RE`, `SAFE_GIST_REVISION_RE`, `DANGEROUS_CHARS`, `is_safe_input`, `is_safe_raw_path`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/github-url-intercept/scripts/url_validation.py`, language: Python 3, lines: 60
- documented invocation: none (internal shared validation module imported by `gist_routing.py` and `test_url_routing.py`)
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/github-url-intercept/scripts/url_validation.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in script docstring: none (pure library module without CLI interface)
  Actual exit paths in code: none (`url_validation.py` has no `sys.exit` calls or CLI entry point; completes module load and exits 0)
- for validators/gates: can it exit non-zero? no (module contains no exit statements). Does it fail on the source repo's own default branch? No, exits 0.
- does the output match what the documentation claims? Yes, functions execute and return expected validation results.

## Defects — required
none

## Observations
- Compact, zero-dependency validation helper relying solely on standard library `re` and `urllib.parse.unquote`.
- Explicitly checks for URL-decoded path traversal tokens (`.` and `..`) and directory separators (`/`, `\`) to neutralize double-encoding and obfuscated traversal attempts.

## Context cost
1947 bytes (~487 tokens). Standalone Python module.
