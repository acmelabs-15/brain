---
package: rjm
name: Information hiding
slug: information-hiding
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Information hiding

## Definition — verbatim
> "**Information hiding**: a module keeps a design decision inside itself, so callers do not see it and do not become coupled to it." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 17 | defined here | Defined in core vocabulary as the technique where a module keeps a design decision inside itself to prevent caller coupling. |

## Consumes
Internal module design decisions, data representation choices, and algorithm selections.

## Produces
Decoupled modules with narrow interfaces that callers can use without knowing internal mechanics.

## When applied
Applied when adding configuration knobs, exposing cross-boundary schemas, or resolving duplicate changes across files.

## Sub-concepts
none

## Part of
deep-module

## Implementation status
clean

## Design notes
The fundamental technique in rjm's modular architecture for bounding complexity. By encapsulating volatile design decisions within a single module, it ensures future modifications remain strictly localized rather than radiating across orchestrators and callers.
