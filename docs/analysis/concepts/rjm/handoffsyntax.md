---
package: rjm
name: handoffSyntax
slug: handoffsyntax
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# handoffSyntax

## Definition — verbatim
> "handoffSyntax: \"#runSubagent\"" — CONTRIBUTING.md:433

## Also called — verbatim
> "| `handoffSyntax` | `#runSubagent` | Agent invocation syntax |" — templates/AGENTS.md:231
> "handoffSyntax: \"/agent\"" — CONTRIBUTING.md:448

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 433 | defined here | Platform configuration setting mapping agent handoff calls to `#runSubagent` for VS Code. |
| templates/AGENTS.md | 231 | defined here | Table row defining the platform configuration setting that configures agent invocation syntax. |

## Consumes
Platform configuration specifications and target harness invocation semantics.

## Produces
Platform-adapted subagent handoff invocation syntax strings (`#runSubagent` or `/agent`).

## When applied
Applied by `build/generate_agents.py` when transforming agent cross-delegation instructions into platform-native commands.

## Sub-concepts
none

## Part of
platform-configuration

## Implementation status
defects: doc-drift

## Design notes
Syntax abstraction property enabling portable agent definitions by translating generic handoff references into platform-specific subagent invocation directives.
