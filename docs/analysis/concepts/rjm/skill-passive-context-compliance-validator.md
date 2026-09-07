---
package: rjm
name: Skill/Passive Context Compliance Validator
slug: skill-passive-context-compliance-validator
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Skill/Passive Context Compliance Validator

## Definition — verbatim
> "Skill/Passive Context Compliance Validator." — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 3 | defined here | Declared in docstring as the validation gate checking content placement against skill vs passive context rules. |

## Consumes
Agent instructions, skill configurations, and markdown memory documents across the repository.

## Produces
Structured JSON compliance verification reports with pass/fail verdicts and remediation recommendations.

## When applied
Executed during quality reviews and CI validation to ensure context optimization rules and document size limits are respected.

## Sub-concepts
checkresult, complianceresults, size-exception-fields

## Part of
context-optimizer

## Implementation status
defects: doc-drift

## Design notes
A deterministic compliance verification gate in rjm enforcing architectural guidelines for context placement. It prevents context bloat by ensuring that high-token documentation is placed in passive memory or on-demand skills rather than default agent context, checking file size thresholds and requiring explicit rationale comments for size exceptions.
