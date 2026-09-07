---
package: rjm
name: Phase 0: Load the Settled Contract
slug: phase-0-load-the-settled-contract
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 0: Load the Settled Contract

## Definition — verbatim
> "### Phase 0: Load the Settled Contract" — .claude/skills/ai-agents-portability-campaign/SKILL.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 27 | defined here | Preliminary phase requiring verification of the official cross-harness contract before proposing hook modifications. |

## Consumes
`agent-harness-reference` official sidecar, hook specification documents, and platform contracts.

## Produces
Ground-truth baseline understanding of supported event formats, casing, and lifecycle differences.

## When applied
Executed as the initial mandatory step before touching any hook or agent source code.

## Sub-concepts
none

## Part of
ai-agents-portability-campaign

## Implementation status
defects: doc-drift, missing-path

## Design notes
Phase 0 establishes epistemic rigor by requiring developers to load and verify the settled cross-harness contract from official documentation and probe evidence prior to drafting changes. This prevents wasted effort caused by relying on stale assumptions or conflicting memory aids.
