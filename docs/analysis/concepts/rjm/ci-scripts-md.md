---
package: rjm
name: ci-scripts.md
slug: ci-scripts-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_links_baseline.txt, sha256: 4262fd40d4013e80319f8a92abc1890d4320f895e63b5889d48cf8b8d2c0bec4}
  - {path: scripts/validation/check_citation_freshness.py, sha256: 2cabc79d74cce6a5aef3cdbb5db6b92d10164f69e0c58717646e8ca8fe68406a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ci-scripts.md

## Definition — verbatim
(used, not defined)

> "# link the current change introduced (.claude/rules/ci-scripts.md MUST NOT 4" — scripts/validation/check_adr_links_baseline.txt:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links_baseline.txt | 22 | used here | Baseline comment citing rule ci-scripts.md prohibiting adding baseline allowances for newly introduced defects. |
| scripts/validation/check_citation_freshness.py | 19 | used here | Script docstring citing rule ci-scripts.md requirement to assert state against HEAD. |

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
`ci-scripts.md` is a repository rule documentation file name rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
