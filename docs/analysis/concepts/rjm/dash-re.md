---
package: rjm
name: _DASH_RE
slug: dash-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_dash.py, sha256: 706e2794af3fd28adc259ad441a2bcf0795a0e7675cd0093673750fc051a845d}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _DASH_RE

## Definition — verbatim
(used, not defined)

> "_DASH_RE = re.compile(\"[\u2013\u2014]\")" — scripts/validation/checks_dash.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_dash.py | 28 | defined here | Compiled regular expression matching Unicode em-dash and en-dash characters. |
| scripts/validation/pr_description.py | 633 | defined here | Compiled regular expression prohibiting Unicode dash characters in PR descriptions. |

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
defects: script-bug, doc-drift

## Design notes
A compiled regular expression pattern constant in `scripts/validation/checks_dash.py` and `scripts/validation/pr_description.py`, classified as name-only per D-023.
