---
package: rjm
name: Phase 2: Grading
slug: phase-2-grading
kind: phase
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/quality-auditor.shared.md, sha256: 73cdee7f95b0c0e748d6ceeaea42ab94ddb32653de6c146cbeb4311d995d5713}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 2: Grading

## Definition — verbatim
> "### Phase 2: Grading" — templates/agents/quality-auditor.shared.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/quality-auditor.shared.md | 68 | defined here | Second phase of the quality auditor process, generating and validating domain scores. |

## Consumes
Verified domain list from Phase 1.

## Produces
JSON grading data persisted via `grade_domains.py --format json --output`.

## When applied
Executed after domain discovery to calculate numeric scores and letter grades.

## Sub-concepts
grade-domains-py

## Part of
quality-auditor

## Implementation status
defects: missing-path

## Design notes
The scoring phase of the quality auditor agent that evaluates domains across six architectural layers and confirms that identified gaps are specific and actionable.
