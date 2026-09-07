---
package: rjm
name: COMPLETENESS_VERDICT
slug: completeness-verdict
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/check_spec_failures.py, sha256: 424864cf5d928f58a94a5cc24eee49781ce48be65e9ad81d88ae6a30175c8a9b}
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# COMPLETENESS_VERDICT

## Definition — verbatim
(used, not defined)

> "COMPLETENESS_VERDICT       - Verdict from completeness check" — .github/scripts/check_spec_failures.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/check_spec_failures.py | 6 | defined here | Environment variable input supplying the completeness validation check verdict. |
| .github/scripts/generate_spec_report.py | 10 | used here | Environment variable input supplying the completeness verdict for the spec report summary. |

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
defects: orphan, missing-path

## Design notes
COMPLETENESS_VERDICT is an environment variable identifier conveying spec completeness verification results rather than a lifecycle concept.
