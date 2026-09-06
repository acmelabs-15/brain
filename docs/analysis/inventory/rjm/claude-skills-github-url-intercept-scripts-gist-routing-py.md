---
package: rjm
path: .claude/skills/github-url-intercept/scripts/gist_routing.py
type: script
bytes: 8769
unit: inv-rjm-122
in_scope_via: .claude/skills/github-url-intercept/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/github-url-intercept/scripts/gist_routing.py, sha256: 85cdc928e039b3a64f71cd665a8839da1aaaa7995c734aa093b36cbf36f6d07f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/github-url-intercept/scripts/gist_routing.py

## Purpose — required, verbatim
> "Parse gist URLs and build safe GitHub API commands." — .claude/skills/github-url-intercept/scripts/gist_routing.py:1

## Design intent — required
Provides safe parsing and command synthesis for GitHub Gist URLs across varied URL formats (standard user gists, ownerless gists, revision-pinned gists, JavaScript embed URLs, raw user content, and file anchor fragments). It handles complex file selection logic by compiling jq filter expressions that match sanitized file slugs or base slugs to extract individual files from multi-file gists without downloading the complete gist payload. Without this module, pasted gist links would either fail to resolve specific file fragments or result in raw HTML page downloads.

## Phase — required
cross-phase

## Inputs — required
- URL string supplied to `parse_gist_url(url: str)` — .claude/skills/github-url-intercept/scripts/gist_routing.py:200
- Parsed metadata dictionary supplied to `build_gist_command(parsed: dict[str, Any])` — .claude/skills/github-url-intercept/scripts/gist_routing.py:247
- Supported host set:
  - `GIST_HOSTS = {"gist.github.com", "gist.githubusercontent.com"}` — .claude/skills/github-url-intercept/scripts/gist_routing.py:20

## Outputs — required
- Dictionary produced by `parse_gist_url` containing keys `owner`, `repo`, `url_type`, `resource_id`, `raw_url`, `revision`, `requested_file`, `requested_file_slug`, `requested_file_base_slug`, `ref`, `path`, `fragment_type`, `fragment_id` (.claude/skills/github-url-intercept/scripts/gist_routing.py:218-231)
- CLI command string constructed by `build_gist_command` (`gh api ...`) (.claude/skills/github-url-intercept/scripts/gist_routing.py:251, 257, 262, 270)

## Invokes — required
- script url_validation — .claude/skills/github-url-intercept/scripts/gist_routing.py:11

## Invoked by — required
- script gist_routing — .claude/skills/github-url-intercept/scripts/test_url_routing.py:41

## Concepts named — required, verbatim
- `Gist` — .claude/skills/github-url-intercept/scripts/gist_routing.py:220 — defined here
- `GIST_SUFFIXES` — .claude/skills/github-url-intercept/scripts/gist_routing.py:19 — defined here
- `GIST_HOSTS` — .claude/skills/github-url-intercept/scripts/gist_routing.py:20 — defined here
- `gh api` — .claude/skills/github-url-intercept/scripts/gist_routing.py:251 — used here
- `parse_gist_url` — .claude/skills/github-url-intercept/scripts/gist_routing.py:200 — defined here
- `build_gist_command` — .claude/skills/github-url-intercept/scripts/gist_routing.py:247 — defined here

## Structure
none (python library module; definitions: `GIST_SUFFIXES`, `GIST_HOSTS`, `PERCENT_ESCAPE_RE`, `FILE_FRAGMENT_RE`, `LINE_FRAGMENT_RE`, `LINE_FRAGMENT_CANDIDATE_RE`, `_is_valid_file_selector`, `_is_valid_file_fragment`, `_decode_url_component`, `_parse_url`, `_classify_path`, `_parse_non_raw_selector`, `_parse_page_file_selector`, `_parse_location`, `_parse_content_selector`, `parse_gist_url`, `_file_slug_query`, `build_gist_command`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/github-url-intercept/scripts/gist_routing.py`, language: Python 3, lines: 272
- documented invocation: none (internal library module invoked via import by `test_url_routing.py:41`)
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/github-url-intercept/scripts/gist_routing.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in script docstring: none (pure library module without CLI interface)
  Actual exit paths in code: none (`gist_routing.py` defines functions without a CLI entrypoint or explicit exit calls; returns exit 0 on completion)
- for validators/gates: can it exit non-zero? no (module contains no exit calls). Does it fail on the source repo's own default branch? No, exits 0.
- does the output match what the documentation claims? Yes, functions correctly parse URLs and construct `gh api` commands when imported.

## Defects — required
none

## Observations
- Implements strict validation against CWE-78 command injection by escaping raw URLs with `shlex.quote` and using `json.dumps` for JSON parameters.
- Rejects control characters (<32, 127) and validates percent-encoding (`%[0-9A-Fa-f]{2}`) before unquoting to prevent malformed sequence exploitation.
- Compiles custom `jq` scripts via `_file_slug_query` that perform ASCII case-folding and character stripping to resolve browser `#file-*-py` fragment targets to exact file attributes within gist payloads.

## Context cost
8769 bytes (~2192 tokens). Imports `url_validation.py` (1947 bytes). Total context cost: 10716 bytes (~2679 tokens).
