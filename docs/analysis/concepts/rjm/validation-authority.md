---
package: rjm
name: Validation Authority
slug: validation-authority
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/validation-authority/SKILL.md, sha256: 0b8799627fe980eeb0ca75f7e04440cdadc66e19a715e92c10cc31598282ae9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Validation Authority

## Definition — verbatim
> "When integrating external validators (PSScriptAnalyzer, markdownlint, ESLint, etc.), respect upstream defaults. Modify local configuration to match upstream behavior. Do not modify upstream tool code." — .claude/skills/validation-authority/SKILL.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/validation-authority/SKILL.md | 11 | defined here | Skill document establishing the pattern of treating upstream validators as authoritative. |

## Consumes
Upstream validator failure reports, external tool default specifications, local configuration files.

## Produces
Updated local validator configurations with documented override rationales.

## When applied
Applied when validation fails unexpectedly, before modifying validator configuration, or when integrating a new external validator.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Validation Authority is an engineering pattern mandating that agents and developers treat upstream static analysis tools as authoritative standards rather than modifying tool source code or introducing unjustified rule suppressions.
