---
package: rjm
name: Extension Point Evaluation
slug: extension-point-evaluation
kind: technique
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

# Extension Point Evaluation

## Definition — verbatim
> "### Step 3: Extension Point Evaluation" — .claude/skills/skillforge/references/evolution-scoring.md:185

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/evolution-scoring.md | 185 | defined here | Defines Step 3 of evolution scoring enforcing a minimum of two documented extension mechanisms. |

## Consumes
Candidate skill architecture and extension mechanisms.

## Produces
Documented extension point matrix and compliance verification against the 2-point minimum rule.

## When applied
Applied during Step 3 of evolution scoring to ensure the skill can accommodate future growth without modification.

## Sub-concepts
none

## Part of
evolution-scoring-framework

## Implementation status
defects: doc-drift

## Design notes
An evaluative check requiring every skill to expose at least two documented extension points (e.g. custom patterns, lenses, output templates, or config-based rules), ensuring extensibility without rewriting core logic.
