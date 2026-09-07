---
package: rjm
name: Developer-facing wrappers
slug: developer-facing-wrappers
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-019-script-organization.md, sha256: 2ab5f297286e665054fbf02d023135e98f2ffd172494a4c2ff32fc3e5e224292}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Developer-facing wrappers

## Definition — verbatim
> "**Developer-facing wrappers** (`scripts/`):" — .agents/architecture/ADR-019-script-organization.md:161

> "- `New-ValidatedPR.ps1` - Wraps skill, adds CLI conveniences" — .agents/architecture/ADR-019-script-organization.md:162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-019-script-organization.md | 161 | defined here | Defined in implementation notes as root `scripts/` wrappers wrapping internal skills for developer ergonomics. |

## Consumes
Internal skill scripts and agent automation patterns located in `.claude/skills/*/scripts/`.

## Produces
User-friendly command-line tools in `scripts/` with simplified arguments and developer defaults.

## When applied
Applied whenever an internal skill automation script needs to be made readily accessible to human engineers.

## Sub-concepts
none

## Part of
intended-audience-and-execution-context

## Implementation status
clean

## Design notes
Architectural pattern establishing thin developer-facing CLI wrapper scripts at the repository root that delegate to internal skill implementations, decoupling public developer interfaces from internal agent implementation details.
