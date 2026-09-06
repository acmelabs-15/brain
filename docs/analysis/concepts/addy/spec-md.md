---
package: addy
name: SPEC.md
slug: spec-md
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
  - {path: .gemini/commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
  - {path: commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
  - {path: evals/cases/spec-driven-development.json, sha256: e6e637aad5de3e7dcec37ba6a3ae4ccf5f4394057a5a2266efb3e5f224ca719c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# SPEC.md

## Definition — verbatim
> "Save the spec as SPEC.md in the project root and confirm with the user before proceeding." — .gemini/commands/spec.toml:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/planning.toml | 6 | consumes | Prerequisite reading of existing SPEC.md before planning |
| .gemini/commands/spec.toml | 16 | produces | Designates SPEC.md in project root as output artifact of /spec |
| commands/spec.toml | 16 | produces | Designates SPEC.md in project root as output artifact of /spec |
| evals/cases/spec-driven-development.json | 45 | applies | Evaluates generation of SPEC.md covering objectives, behavior, data model, and testing |

## Consumes
User intent, feature requests, interview answers, and architectural constraints.

## Produces
Authoritative specification document governing subsequent planning and implementation phases.

## When applied
Produced during the Define phase via the `/spec` command before any code implementation begins.

## Sub-concepts
none

## Part of
spec-driven-development

## Implementation status
clean

## Design notes
`SPEC.md` is the canonical specification artifact in Addy's lifecycle. It records objectives, non-goals, data models, interface contracts, error handling, and testing strategies before development commences. By persisting requirements as a committed markdown artifact, it serves as the contract that guarantees human alignment and prevents scope drift during downstream planning and execution.
