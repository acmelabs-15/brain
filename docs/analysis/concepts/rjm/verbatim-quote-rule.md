---
package: rjm
name: Verbatim-quote rule
slug: verbatim-quote-rule
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md, sha256: 56a5414b5d3dd24132335dade19bf3a3294921a141558e38b8c1069f345a6e82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Verbatim-quote rule

## Definition — verbatim
(used, not defined)

> "Verbatim-quote rule (7 fix commits)" — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md | 18 | defines | Provenanced as the binding rule from canonical-source-mirror.md requiring character-for-character citation of canonical contracts. |

## Consumes
Any docstring, comment, rule, or test assertion claiming to mirror, match, or extend an existing repository contract.

## Produces
Character-for-character verbatim citations of canonical regexes, schemas, and exit codes alongside documented divergences.

## When applied
Whenever authoring or updating components whose behavior is claimed to align with an existing canonical source.

## Sub-concepts
none

## Part of
empirical-probe-toolkit

## Implementation status
defects: doc-drift

## Design notes
The verbatim-quote rule mandates character-for-character quotation whenever code or documentation claims to mirror an existing canonical source (such as a regex, schema, or exit-code contract). Established after PR #1887 required seven fix commits because an M4 evidence guard was authored against an imagined contract instead of the canonical regex, this rule prevents 'confident incorrectness' by forcing authors to cite and verify the canonical source directly.
