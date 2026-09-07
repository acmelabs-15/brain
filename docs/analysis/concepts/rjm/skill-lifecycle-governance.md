---
package: rjm
name: skill lifecycle governance
slug: skill-lifecycle-governance
kind: pattern
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skill lifecycle governance

## Definition — verbatim
> "This PRD defines a Skills Index Registry to enable O(1) skill lookup by ID, establish consistent naming conventions, and provide skill lifecycle governance." — .agents/archive/planning/PRD-skills-index-registry.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 20 | defined here | Defined as an objective for managing skill lifecycle from creation through validation to deprecation. |

## Consumes
Skill creation proposals, validation criteria, and obsolescence signals.

## Produces
Formal lifecycle transitions (Draft → Active → Deprecated) and registry updates tracking skill currency.

## When applied
Applied throughout the creation, validation, maintenance, and deprecation of skills.

## Sub-concepts
skill-lifecycle-states, skill-creation-process, skill-deprecation-process

## Part of
skills-index-registry

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The governance policy and procedural framework in rjm ensuring that learned skills progress through formal states (Draft, Active, Deprecated) rather than accumulating unchecked, preventing outdated patterns from being recommended to executing agents.
