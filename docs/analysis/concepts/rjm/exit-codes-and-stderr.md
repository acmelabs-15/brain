---
package: rjm
name: Exit codes and stderr
slug: exit-codes-and-stderr
kind: reference
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Exit codes and stderr

## Definition — verbatim
> "### Exit codes and stderr" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:272

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 272 | defined here | Subsection header tabulating exit codes 0, 2, nonzero, and timeout along with stderr visibility. |

## Consumes
Process exit codes, stdout JSON, and stderr output streams from hook commands.

## Produces
Deterministic harness behaviors (pass, warn, deny, fail open, or inject context) based on exit codes.

## When applied
Applied upon every hook process completion to determine host reaction and error propagation.

## Sub-concepts
none

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
The operational contract detailing how agent harnesses interpret hook return codes (0, 2, nonzero, timeout) and handle stderr streams across interactive and noninteractive execution contexts.
