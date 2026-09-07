---
package: rjm
name: ACTION
slug: action
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/skillforge/scripts/triage_skill_request.py, sha256: 9fafbd937dd730d969654c465fd4f13eaba78f1866db92488b76c1c27cbc9740}
  - {path: .claude/skills/threat-modeling/references/advanced-analysis.md, sha256: 71807836a18c20f53ad723da5a0229d50df04e4b8f1224d74b9f1c4393c936e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ACTION

## Definition — verbatim
(used, not defined)

> "| ACTION |" — .claude/skills/review/references/devops.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 50 | defined here | PR scope category designating composite action files under .github/actions/** for composite action review. |
| .claude/skills/skillforge/scripts/triage_skill_request.py | 59 | defined here | Python class defining possible skill request triage actions (USE_EXISTING, CREATE_NEW, etc.). |
| .claude/skills/threat-modeling/references/advanced-analysis.md | 39 | used here | Cyber Kill Chain phase where the attacker executes objectives such as data exfiltration. |

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
defects: doc-drift, script-bug, missing-path

## Design notes
A category label for GitHub composite actions, a Python triage action enum class, and a Cyber Kill Chain phase, classified as `kind: name-only` per D-023.
