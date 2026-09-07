---
package: rjm
name: Path traversal detected
slug: path-traversal-detected
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Path traversal detected

## Definition — verbatim
(used, not defined)

> "Path traversal detected" — .claude/skills/skillforge/scripts/validate-skill.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/validate-skill.py | 28 | defined here | Exception error message string raised when input path escapes the current working directory boundary. |

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
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
Exception error message string in validate-skill.py guarding against CWE-22 directory traversal vulnerabilities rather than an operational lifecycle concept.
