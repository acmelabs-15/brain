---
package: rjm
name: CREATE_NEW
slug: create-new
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
  - {path: .claude/skills/skillforge/references/phase0-triage.md, sha256: 628e380912aa067063d9fedfd0993b8e95080953861c288db7da44f34e8db952}
  - {path: .claude/skills/skillforge/scripts/triage_skill_request.py, sha256: 9fafbd937dd730d969654c465fd4f13eaba78f1866db92488b76c1c27cbc9740}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CREATE_NEW

## Definition — verbatim
> "| **CREATE_NEW** | Match <50% | Proceeds to Phase 1 (Deep Analysis) |" — .claude/skills/skillforge/references/phase0-triage.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase0-triage.md | 56 | defined here | Decision action row specifying condition (match <50%) and transition to Phase 1 deep analysis. |
| .claude/skills/skillforge/scripts/triage_skill_request.py | 11 | defined here | Docstring bullet defining the triage action when no good match exists and a new skill must be created. |
| .claude/skills/skillforge/SKILL.md | 84 | defined here | Process overview diagram step enumerating triage routing outcomes. |

## Consumes
Triage match score <50%, confirming no existing skill covers the requested capability.

## Produces
Authorization to proceed to Phase 1 (Deep Analysis) and full skill authoring.

## When applied
Applied during Phase 0 triage only when proven that the capability represents genuinely novel functionality.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, script-bug, missing-path

## Design notes
CREATE_NEW is the gateway decision action authorizing the engineering of a brand-new skill. By requiring low similarity (<50%) against the entire skill catalog, rjm guarantees that new skill creation is reserved for truly distinct, unaddressed domains.
