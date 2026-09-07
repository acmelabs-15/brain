---
package: rjm
name: CWE78_PATTERNS
slug: cwe78-patterns
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/scripts/scan_patterns.py, sha256: 7042ee02bc65663085aa668adb62073f2f003f7a974226850c782ffba4737b48}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CWE78_PATTERNS

## Definition — verbatim
(used, not defined)

> "CWE78_PATTERNS = {" — .claude/skills/security-scan/scripts/scan_patterns.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/scripts/scan_patterns.py | 17 | defined here | Dictionary constant mapping languages to lists of command injection regex patterns. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
CWE78_PATTERNS is a Python dictionary constant holding compiled regular expression patterns for command injection detection rather than a lifecycle concept.
