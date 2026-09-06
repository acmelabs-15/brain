---
package: rjm
path: scripts/redact_secrets.py
type: script
bytes: 16302
unit: inv-rjm-257
in_scope_via: .claude/commands/checkpoint.md
aliases: []
memo_inputs:
  - {path: scripts/redact_secrets.py, sha256: def1d7ea6d1ac0b380277b817a9ca13a072d1e076ce59e8513eff753691eba61}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/redact_secrets.py

## Purpose — required, verbatim
> "Redact secret/PII token shapes from free-text before it is emitted." — scripts/redact_secrets.py:2

## Design intent — required
In-process credential and sensitive data sanitization utility designed to remediate CWE-209 (information disclosure) and CWE-532 (sensitive data exposure in log files) vulnerabilities (addressing issue #1975 and REQ-008 Sec F4). It intercepts untrusted free-text outputs—specifically proposer Q3/Q4 interview answers, checkpoint body messages, and halt-block evidence fields—and replaces identified secret and PII token shapes with formatted placeholders `[redacted: <reason>]` before they can flow into PR descriptions, session logs, or git-tracked metrics files. Includes specialized CI sink redaction (`redact_ci_sink`) for exact environment secrets, authorization headers, credential assignments, and URLs containing embedded credentials. Without it, agents and scripts would inadvertently commit live private keys, API tokens, JWTs, emails, or environment credentials into repository records.

## Phase — required
cross-phase

## Inputs — required
- Command-line argument `[FILE]` or stdin text stream — scripts/redact_secrets.py:23
- Untrusted free-text string `text` passed to `redact` — scripts/redact_secrets.py:137
- Environment secret values `secret_values` and flag `redact_assignments` passed to `redact_ci_sink` — scripts/redact_secrets.py:157

## Outputs — required
- Redacted text written to `sys.stdout` — scripts/redact_secrets.py:418
- `RedactionResult` frozen dataclass containing `text` (str) and `reasons` (tuple of str) — scripts/redact_secrets.py:126
- Usage and I/O error messages written to `sys.stderr` — scripts/redact_secrets.py:411,416

## Invokes — required
none

## Invoked by — required
- .claude/commands/checkpoint.md:4
- .claude/rules/secret-redaction.md:21
- .claude/skills/spec-generator/references/spec-step0-gates.md:99
- .claude/skills/spec-generator/references/spec-prior-art-schema.md:84

## Concepts named — required, verbatim
- `Issue #1975` — scripts/redact_secrets.py:4 — used here
- `REQ-008` — scripts/redact_secrets.py:4 — used here
- `CWE-209` — scripts/redact_secrets.py:4 — used here
- `CWE-532` — scripts/redact_secrets.py:4 — used here
- `CodeQL` — scripts/redact_secrets.py:10 — used here
- `gitleaks` — scripts/redact_secrets.py:10 — used here
- `hex-secret` — scripts/redact_secrets.py:15 — defined here
- `ADR-035` — scripts/redact_secrets.py:19 — used here
- `private-key` — scripts/redact_secrets.py:38 — defined here
- `github-token` — scripts/redact_secrets.py:45 — defined here
- `github-pat` — scripts/redact_secrets.py:46 — defined here
- `stripe-key` — scripts/redact_secrets.py:47 — defined here
- `aws-access-key-id` — scripts/redact_secrets.py:48 — defined here
- `slack-token` — scripts/redact_secrets.py:49 — defined here
- `jwt` — scripts/redact_secrets.py:50 — defined here
- `bearer-token` — scripts/redact_secrets.py:51 — defined here
- `email` — scripts/redact_secrets.py:56 — defined here
- `RedactionResult` — scripts/redact_secrets.py:126 — defined here
- `redact` — scripts/redact_secrets.py:137 — defined here
- `redact_ci_sink` — scripts/redact_secrets.py:157 — defined here
- `environment-secret` — scripts/redact_secrets.py:175 — defined here
- `authorization-header` — scripts/redact_secrets.py:178 — defined here
- `url-credential` — scripts/redact_secrets.py:184 — defined here
- `credential-assignment` — scripts/redact_secrets.py:400 — defined here
- `main` — scripts/redact_secrets.py:408 — defined here

## Structure
- Module docstring detailing vulnerability context, scope caveats, and exit codes (lines 1-25)
- Token shape regex patterns `_RULES` (lines 27-66)
- Unicode and JSON serialization helpers and credential key regexes (lines 68-123)
- `RedactionResult` frozen dataclass (lines 125-135)
- `redact` core text redactor (lines 137-155)
- `redact_ci_sink` CI environment credential redactor with structural value scanners (lines 157-405)
- `main` CLI runner and argument parser (lines 408-420)
- Entrypoint `__main__` caller (lines 422-424)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/redact_secrets.py`
- **language:** Python 3
- **lines:** 424
- **documented invocation:**
  - `redact_secrets.py [FILE]          # FILE or stdin -> redacted text on stdout` — scripts/redact_secrets.py:23
  - `echo "Bearer abc..." | redact_secrets.py` — scripts/redact_secrets.py:24
- **executed:** yes
- **command:** `echo "Bearer abc12345678" | python3 sources/rjm/scripts/redact_secrets.py`
- **stdout:**
  ```text
  [redacted: bearer-token]
  ```
- **actual exit code:** 0
- **documented exit codes:**
  - > "Exit codes (ADR-035): 0 = success (redactions may or may not have occurred)," — scripts/redact_secrets.py:19
  - > "2 = usage error." — scripts/redact_secrets.py:20
- **actual exit paths:**
  - `return 2` — scripts/redact_secrets.py:412
  - `return 2` — scripts/redact_secrets.py:417
  - `return 0` — scripts/redact_secrets.py:419
  - `sys.exit(main())` — scripts/redact_secrets.py:423
- **for validators/gates:** Not a gate (redactor utility). Can exit non-zero on usage errors (when more than one argument is passed, e.g. `python3 sources/rjm/scripts/redact_secrets.py arg1 arg2` exits 2) or when the input file cannot be read (OSError/UnicodeDecodeError, exits 2). On valid input or stdin, exits 0.
- **output matches documentation:** yes, replaces matched token shapes (e.g. `Bearer ...`) with `[redacted: bearer-token]` and exits 0.

## Defects — required
none

## Observations
- The implementation features deep serialization awareness: `_json_key_word` constructs regexes matching JSON Unicode-escaped characters (e.g. `\u0061\u0070\u0069`), and `_yaml_block_value_end` parses YAML indented block scalar headers (`|` and `>`), ensuring secrets embedded in structured configuration or log payloads cannot evade regex matching through encoding.
- Documents a critical false-positive caveat regarding commit SHAs: the `hex-secret` pattern matches any run of 32 or more hex characters, which matches 40-character git commit SHAs and 64-character hash digests. Callers handling legitimate git SHAs must pass `include_hex=False` (lines 13-17).

## Context cost
16302 bytes, ~4075 tokens. Loads no other internal files. Total context cost: 16302 bytes.
