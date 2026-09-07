---
package: rjm
name: Scope adjustment
slug: scope-adjustment
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scope adjustment

## Definition — verbatim
> "Scope adjustment: original verdict" — .claude/skills/review/scripts/validate_findings_scope.py:253

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/scripts/validate_findings_scope.py | 253 | defined here | Explanatory note appended to adjusted review text when all findings are out-of-scope and verdict is downgraded. |

## Consumes
Axis review findings whose cited locations all fall outside the pull request three-dot diff.

## Produces
An appended scope adjustment rationale note and verdict downgrade from blocking failure to WARN.

## When applied
Applied when a review axis issues a blocking verdict based solely on pre-existing code outside the PR diff.

## Sub-concepts
none

## Part of
review

## Implementation status
clean

## Design notes
Scope adjustment is an automated mitigation technique in rjm's review validation that downgrades blocking verdicts to WARN when all reported issues are pre-existing, preventing unrelated codebase defects from stalling PR delivery.
