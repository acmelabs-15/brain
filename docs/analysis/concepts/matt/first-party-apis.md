---
package: matt
name: first-party APIs
slug: first-party-apis
kind: reference
package_phase: matt:research
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/research/SKILL.md, sha256: 985569f15739c713d6784887c3d186d4ef9ac85bec5ad9c068d25bf0739928e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# first-party APIs

## Definition — verbatim
(used, not defined)

> "Investigate the question against **primary sources** (official docs, source code, specs, first-party APIs), not a secondary write-up of them." — skills/engineering/research/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/research/SKILL.md | 10 | used here | Listed as a primary source interface to inspect directly during technical research. |

## Consumes
Official service or platform documentation, endpoints, and interface contracts.

## Produces
Verified behavioral claims and technical evidence cited in research notes.

## When applied
When an agent is investigating a technical question during the research skill.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, other

## Design notes
Direct vendor-provided interfaces and endpoints considered authoritative primary sources in Matt's research workflow. Agents are instructed to evaluate first-party APIs directly rather than relying on secondary commentary or outdated tutorials.
