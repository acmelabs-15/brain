---
package: rjm
name: Coded Consequences Convention
slug: coded-consequences-convention
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Coded Consequences Convention

## Definition — verbatim
> "The Project Canonical format supports coded bullets so multi-item sections can be" — .claude/skills/adr-generator/references/adr-template.md:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-template.md | 154 | defined here | Section documenting the optional 3-letter plus 3-digit numbered bullet scheme for precise consequence cross-referencing. |

## Consumes
Consequence statements in complex ADR documents.

## Produces
Indexed, unique identifiers for consequence bullets enabling granular citations in review threads and subsequent ADRs.

## When applied
Optional convention applied when drafting detailed ADRs where individual consequences require precise reference.

## Sub-concepts
none

## Part of
adr-template

## Implementation status
clean

## Design notes
An addressing pattern in rjm's Project Canonical ADR format that labels consequence items with structured 3-letter codes and zero-padded numbers (e.g. `SEC-001`, `OPS-001`). This convention prevents ambiguity during code reviews and architectural audits, allowing engineers and agents to reference specific trade-offs and risks by exact identifier.
