---
package: rjm
name: Mirror obligation
slug: mirror-obligation
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Mirror obligation

## Definition — verbatim
> "**Mirror obligation**: before asserting a claim or behavior is done, mirror it against the canonical source and name the inverse failure mode." — .claude/agents/implementer.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 49 | defined here | Pre-completion obligation requiring mirroring against canonical sources and naming inverse failure modes. |
| templates/agents/implementer.shared.md | 58 | defined here | Shared implementer template defining the mirror obligation prior to completion assertion. |

## Consumes
Candidate implementation artifacts, test results, and canonical source contracts.

## Produces
Documented parity verification against canonical contracts and an explicit identification of the inverse failure mode.

## When applied
Executed prior to asserting that any mirrored behavior, guard, or feature implementation is complete.

## Sub-concepts
none

## Part of
mirror-claim-rule, evidence-standards

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
The mirror obligation counteracts confirmation bias in AI implementers. Before marking a task complete, the agent is obligated to compare its artifact against the canonical source and name the inverse failure mode—explicitly describing how the guard or feature could fail—thereby catching subtle edge-case omissions.
