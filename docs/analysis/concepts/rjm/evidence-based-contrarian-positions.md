---
package: rjm
name: Evidence-based contrarian positions
slug: evidence-based-contrarian-positions
kind: technique
package_phase: rjm:strategic
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Evidence-based contrarian positions

## Definition — verbatim
> "- **Evidence-based contrarian positions**: Every challenge must cite specific evidence or reasoning" — templates/agents/independent-thinker.shared.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/independent-thinker.shared.md | 38 | defines | Core directive requiring all assumptions and proposals to be challenged using specific empirical evidence or reasoning. |

## Consumes
Architectural proposals, assumptions, technical plans, and retrieved evidence.

## Produces
Factual challenges and alternative proposals backed by cited primary sources.

## When applied
Applied when challenging architectural decisions, design assumptions, or consensus proposals.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Enforces that adversarial review and devil's advocate challenges must not be mere contrarianism or skepticism for its own sake, but must be grounded in specific citations, benchmarks, ADRs, or deductive technical reasoning.
