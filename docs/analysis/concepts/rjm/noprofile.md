---
package: rjm
name: -NoProfile
slug: noprofile
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-027-github-mcp-agent-isolation.md, sha256: 3a0cae5d7a44bc1fa4645e919b1e487e35e0c6ab4826e09df105a5c508907ac3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# -NoProfile

## Definition — verbatim
(used, not defined)

> "- **Without -NoProfile**: 1,044ms per call" — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-027-github-mcp-agent-isolation.md | 20 | used here | PowerShell CLI argument benchmarked to evaluate latency reduction by suppressing user profile script execution. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A command-line switch for PowerShell (`-NoProfile`) used to skip loading profile scripts during execution, representing a CLI argument flag rather than an agent lifecycle concept.
