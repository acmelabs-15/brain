---
package: rjm
name: three-source architecture
slug: three-source-architecture
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# three-source architecture

## Definition — verbatim
> "A three-source architecture would require:" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 43 | used here | Evaluated and rejected as an architectural option due to the overhead of maintaining three independent source trees. |

## Consumes
Separate agent definitions for Claude Code, Copilot CLI, and VS Code Copilot.

## Produces
Completely independent prompt files per platform with triplicated maintenance burden.

## When applied
Evaluated during ADR-036 architectural trade-off analysis and rejected.

## Sub-concepts
none

## Part of
two-source-agent-template-architecture

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
An architectural pattern analyzed and rejected in ADR-036 where each agent platform maintains its own bespoke source tree, rejected because triple maintenance of common governance sections would inevitably cause severe documentation and behavioral drift.
