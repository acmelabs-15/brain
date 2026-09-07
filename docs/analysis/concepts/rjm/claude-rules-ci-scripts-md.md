---
package: rjm
name: .claude/rules/ci-scripts.md
slug: claude-rules-ci-scripts-md
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/check_bot_identity.py, sha256: 562f63926cad000cc717a27a4697e34a7a516d869efce24a70feed52abcd2be7}
  - {path: scripts/report_pr_supersession.py, sha256: 2cc8d0c693bc7b20f4b2650c5336e8747819582cad59559c70c8883352626304}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# .claude/rules/ci-scripts.md

## Definition — verbatim
(used, not defined)

> "be stdlib-only (see .claude/rules/ci-scripts.md MUST 18)." — scripts/ci/check_bot_identity.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_bot_identity.py | 30 | used here | Cited for rule MUST 18 requiring CI script dependencies to remain stdlib-only. |
| scripts/report_pr_supersession.py | 60 | used here | Cited for rule MUST 16 requiring stdlib-only imports in CI reporting tools. |

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
defects: missing-path

## Design notes
A rule configuration document file path (`.claude/rules/ci-scripts.md`) governing script standards recorded during inventory analysis, classified as `name-only` per D-023.
