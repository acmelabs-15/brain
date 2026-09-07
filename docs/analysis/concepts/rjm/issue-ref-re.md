---
package: rjm
name: ISSUE_REF_RE
slug: issue-ref-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/active_plan_closeout.py, sha256: ff907bbadd21f365e739dbb46fb15c8a6d851a03644bb202e283ce2c1510d602}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ISSUE_REF_RE

## Definition — verbatim
(used, not defined)

> "ISSUE_REF_RE = re.compile(" — scripts/validation/active_plan_closeout.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/active_plan_closeout.py | 21 | defined here | Compiled regular expression matching issue numbers from markdown issue citations or GitHub URLs. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`ISSUE_REF_RE` is a Python module regex pattern in `active_plan_closeout.py` extracting issue numbers from markdown text rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
