---
package: rjm
name: _IGNORE_WITH_REASON
slug: ignore-with-reason
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_citation_freshness.py, sha256: 2cabc79d74cce6a5aef3cdbb5db6b92d10164f69e0c58717646e8ca8fe68406a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _IGNORE_WITH_REASON

## Definition — verbatim
(used, not defined)

> "_IGNORE_WITH_REASON = re.compile(re.escape(IGNORE_MARKER)" — scripts/validation/check_citation_freshness.py:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 103 | defined here | Compiled regular expression matching ignore directives accompanied by a non-empty reason string. |

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
A Python regular expression constant identifier in `check_citation_freshness.py` validating ignore marker syntax, classified as `name-only` per D-023.
