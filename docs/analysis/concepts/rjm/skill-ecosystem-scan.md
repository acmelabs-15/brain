---
package: rjm
name: SKILL ECOSYSTEM SCAN
slug: skill-ecosystem-scan
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase0-triage.md, sha256: 628e380912aa067063d9fedfd0993b8e95080953861c288db7da44f34e8db952}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SKILL ECOSYSTEM SCAN

## Definition — verbatim
> "Step 2: SKILL ECOSYSTEM SCAN" — .claude/skills/skillforge/references/phase0-triage.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase0-triage.md | 30 | defined here | Diagram box and procedure step loading the skill index to match user input against 250+ skills. |

## Consumes
Classified input and the global skill index of 250+ existing skills (via discover_skills.py).

## Produces
Ranked list of matching skills with confidence percentages and match rationales.

## When applied
Applied as Step 2 of Phase 0 triage to evaluate potential overlap with existing skills.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
clean

## Design notes
Skill Ecosystem Scan matches classified inputs against the repository's entire catalog of skills. In rjm, this step produces quantitative confidence scores to determine whether the user request can be served by existing assets before committing resources to authoring new skills.
