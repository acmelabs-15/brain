---
package: rjm
name: TEMPLATE
slug: template
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/threat-modeling/scripts/generate_threat_matrix.py, sha256: efe078c6f610c0f98a1c52c3fe0ef180e0da08116dcaa84bc582a3efdcd12bb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# TEMPLATE

## Definition — verbatim
(used, not defined)

> "| TEMPLATE |" — .claude/skills/review/references/devops.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 52 | defined here | PR scope category designating GitHub issue and markdown templates for template review. |
| .claude/skills/threat-modeling/scripts/generate_threat_matrix.py | 41 | defined here | Python module constant storing the markdown template skeleton for threat matrix documents. |

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
A pull request scope category label for GitHub issue templates and a Python string template constant for threat modeling matrices, classified as `kind: name-only` per D-023.
