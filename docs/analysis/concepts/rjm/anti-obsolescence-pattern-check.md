---
package: rjm
name: Anti-Obsolescence Pattern Check
slug: anti-obsolescence-pattern-check
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/evolution-scoring.md, sha256: 7e5b7f9e76ce28a7545f65dc038b5e24a9820dd515183e5dbef0a06e8045c4cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Anti-Obsolescence Pattern Check

## Definition — verbatim
> "### Step 4: Anti-Obsolescence Pattern Check" — .claude/skills/skillforge/references/evolution-scoring.md:200

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/evolution-scoring.md | 200 | defined here | Defines Step 4 of evolution scoring checking adherence to six core anti-obsolescence design patterns. |

## Consumes
Draft skill specification, design decisions, and architectural choices.

## Produces
Verification checklist covering principles, rationales, coupling, degradation, versioning, and ecosystem fit.

## When applied
Applied as Step 4 in the evolution scoring workflow before calculating adjustment factors.

## Sub-concepts
none

## Part of
evolution-scoring-framework

## Implementation status
defects: doc-drift

## Design notes
A verification checklist validating that skill designs implement protective architectural patterns (principles over implementation, documented WHY, loose coupling, graceful degradation, and version agnosticism) to resist decay.
