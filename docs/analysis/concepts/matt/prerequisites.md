---
package: matt
name: Prerequisites
slug: prerequisites
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Prerequisites

## Definition — verbatim
> "Optional: include only when the skill needs something in place to be functional; omit the heading entirely otherwise." — .agents/writing-docs.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 34 | defined here | Specifies the optional Prerequisites section covering workspaces, prior setup, or repo tooling. |
| external/domain-modeling.md | 31 | defined here | Explains that domain-modeling has no upfront prerequisites and creates CONTEXT.md and docs/adr/ lazily. |
| external/implement.md | 32 | used here | States that implement has no upfront prerequisites and operates on self-contained task tickets. |

## Consumes
Workspace requirements, tracker configurations, or prior skill outputs.

## Produces
Explicit disclosure of necessary environmental setup or lazy-creation behavior in documentation.

## When applied
Included in documentation only when a skill requires environmental setup or existing artifacts to operate.

## Sub-concepts
none

## Part of
docs page

## Implementation status
defects: missing-path, doc-drift, orphan

## Design notes
An optional documentation section that explicitly enumerates external dependencies—such as configured issue trackers or workspace directories—required before a skill runs, while encouraging stateless tools to omit the heading entirely.
