---
package: rjm
name: Mirror claims
slug: mirror-claims
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Mirror claims

## Definition — verbatim
> "Mirror claims (FM-9): any statement that a file \"matches\", \"mirrors\", or" — .claude/skills/ai-agents-docs-of-record/SKILL.md:200

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 200 | defined here | Defined as the citation rule governing FM-9 where claims of alignment between files must cite canonical paths and load-bearing fragments. |

## Consumes
Assertions in documentation, PRs, or comments that a file mirrors or matches another file.

## Produces
Byte-exact citations of load-bearing fragments and canonical paths, or documented divergence sections.

## When applied
Enforced whenever a file or documentation artifact asserts parity with another repository asset.

## Sub-concepts
none

## Part of
ai-agents-docs-of-record

## Implementation status
defects: missing-path, doc-drift

## Design notes
A verification gate targeting failure mode FM-9. It prohibits informal or unverified assertions that secondary files match canonical sources, mandating character-exact citations of load-bearing passages or explicit documentation of intentional divergence.
