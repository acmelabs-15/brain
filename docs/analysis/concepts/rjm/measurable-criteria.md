---
package: rjm
name: Measurable criteria
slug: measurable-criteria
kind: technique
package_phase: rjm:Phase 2: Specification
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Measurable criteria

## Definition — verbatim
> "Success is verifiable, not subjective" — .claude/skills/skillforge/references/specification-template.md:11

## Also called — verbatim
> "- **Measurable criteria:** Success is verifiable, not subjective" — .claude/skills/skillforge/references/specification-template.md:11

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/specification-template.md | 11 | used here | Defines the meta-prompting principle requiring verifiable, objective success criteria in specifications. |

## Consumes
Quality standards, functional requirements, and verification protocols.

## Produces
Verifiable test assertions, benchmark thresholds, and objective validation checklists.

## When applied
When defining success criteria and verification protocols for skills and scripts.

## Sub-concepts
none

## Part of
meta-prompting-principles

## Implementation status
clean

## Design notes
Replaces ambiguous quality goals with objective, verifiable criteria (pass/fail thresholds, exact exit codes, schema compliance) that can be checked deterministically.
