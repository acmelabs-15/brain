---
package: rjm
name: WARN (Proceed with Caution)
slug: warn-proceed-with-caution
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# WARN (Proceed with Caution)

## Definition — verbatim
> "### WARN (Proceed with Caution)" — .claude/skills/review/references/security.md:185

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/security.md | 185 | defined here | Verdict threshold section defining non-blocking security advisory warnings and conditions. |

## Consumes
Findings of non-critical security issues such as minor permission improvements, low-severity dependencies with no exploit path, or missing input validation in non-critical paths.

## Produces
A WARN verdict permitting progress while noting recommended security enhancements for the operator.

## When applied
Emitted when security improvements are recommended but identified issues do not pose immediate merge-blocking risk.

## Sub-concepts
none

## Part of
security

## Implementation status
defects: internal-contradiction

## Design notes
A security review verdict threshold designating minor security issues that warrant remediation or acknowledgment but do not require blocking the pull request merge.
