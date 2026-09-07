---
package: rjm
name: Generated Files
slug: generated-files
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Generated Files

## Definition — verbatim
> "| Generated Files | `src/vs-code-agents/`, `src/copilot-cli/` | Output files used by each platform |" — CONTRIBUTING.md:160

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 160 | defined here | Table entry defining compiler output files consumed by client AI platforms. |

## Consumes
Shared templates (`templates/agents/*.shared.md`) and platform configuration YAML files.

## Produces
Platform-ready agent markdown files marked do-not-edit.

## When applied
Emitted by generator scripts during build and validated by drift detection in CI.

## Sub-concepts
none

## Part of
agent-template-system

## Implementation status
defects: internal-contradiction

## Design notes
Derived build artifacts that provide platform-native agent manifests, protected from direct modification by CI drift gates.
