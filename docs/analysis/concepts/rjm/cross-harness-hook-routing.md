---
package: rjm
name: Cross-Harness Hook Routing
slug: cross-harness-hook-routing
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/build.md, sha256: 29d6811b2eb2712273cae310f4addb615187cc2a8746c35bc1bfc99c262234c5}
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Cross-Harness Hook Routing

## Definition — verbatim
> "## Cross-Harness Hook Routing" — .claude/commands/build.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/build.md | 13 | defined here | Establishes specialized skill routing rules when build tasks modify hook configurations or shims. |
| .claude/commands/test.md | 13 | defined here | Mandates reference verification and smoke testing across harnesses when testing hook modifications. |

## Consumes
Tasks, diffs, or configurations modifying Claude Code or GitHub Copilot CLI hook configurations, payloads, or generated shims.

## Produces
Delegated invocations to portability skills and multi-harness smoke test verifications.

## When applied
Whenever implementing or verifying changes that touch hook dispatchers, shims, event translation, or harness timeouts.

## Sub-concepts
none

## Part of
cross-harness-portability

## Implementation status
defects: doc-drift (.claude/commands/test.md:96); clean in .claude/commands/build.md

## Design notes
Cross-Harness Hook Routing defines explicit navigation and validation procedures for changes spanning multiple AI agent harnesses (e.g., Claude Code and GitHub Copilot CLI). It forces agents to load pinned harness specifications and execute changes through dedicated portability campaigns, ensuring contract parity and preventing harness-specific divergence.
