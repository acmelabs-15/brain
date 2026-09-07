---
package: rjm
name: size exceptions
slug: size-exceptions
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# size exceptions

## Definition — verbatim
> "Declared size exceptions include rationale and safeguard evidence" — .claude/skills/context-optimizer/SKILL.md:295

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/SKILL.md | 295 | used here | Listed as an evaluated compliance check ensuring declared size exceptions include rationale and safeguard evidence. |

## Consumes
Skill or passive context files that legitimately exceed default line or token thresholds.

## Produces
Structured HTML comment block declaring rationale, preserved invariants, behavioral tests, and review triggers.

## When applied
When a skill or context file exceeds standard line limits and requires documented exemption.

## Sub-concepts
size-exception-rationale, size-exception-fields

## Part of
skill-passive-context-compliance-validator

## Implementation status
defects: doc-drift, missing-path

## Design notes
Size exceptions provide a governed escape hatch for components that legitimately require higher line or token counts, ensuring that size limit violations cannot be ignored without explicit, testable, and reviewed justifications.
