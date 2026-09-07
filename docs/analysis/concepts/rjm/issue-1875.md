---
package: rjm
name: Issue #1875
slug: issue-1875
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Issue #1875

## Definition — verbatim
(used, not defined)

> "# Issue #1875: the `skill` variant sources its content from a SKILL.md. The" — scripts/eval/eval-agent-vs-baseline.py:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agent-vs-baseline.py | 109 | used here | Explains the rationale for sourcing skill variants from SKILL.md. |

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
defects: exit-code-mismatch, script-bug

## Design notes
A GitHub issue tracking identifier cited in comments explaining skill variant prompt loading, classified as `name-only` per D-023.
