---
package: rjm
name: Spec References
slug: spec-references
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Spec References

## Definition — verbatim
(used, not defined)

> "### Spec References" — .github/scripts/generate_spec_report.py:196

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/generate_spec_report.py | 196 | used here | Markdown table section heading in validation report displaying parsed specification and issue references. |

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
`Spec References` is a markdown report section heading in `generate_spec_report.py` listing parsed specification and issue references rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
