---
package: rjm
name: validate_findings_scope.py
slug: validate-findings-scope-py
kind: name-only
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_findings_scope.py

## Definition — verbatim
(used, not defined)

> "run `validate_findings_scope.py`" — .claude/skills/review/SKILL.md:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 96 | defined here | Python script filtering findings against files changed in PR diff. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
review

## Implementation status
defects: missing-path, doc-drift

## Design notes
`validate_findings_scope.py` is a Python validation script filename used to filter out-of-scope review findings rather than an operational lifecycle concept, classified as name-only per D-023.
