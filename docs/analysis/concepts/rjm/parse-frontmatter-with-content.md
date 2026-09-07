---
package: rjm
name: parse_frontmatter_with_content
slug: parse-frontmatter-with-content
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/spec_utils.py, sha256: 4df2d5c43d281d37e689de849420f8003706ec909aceb87fc3a594595908db70}
  - {path: scripts/traceability/update_spec_references.py, sha256: c247562ca5f32a067a056a068c18179a30a0a23790cd0b64efd0ff0273ae7282}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parse_frontmatter_with_content

## Definition — verbatim
(used, not defined)

> "def parse_frontmatter_with_content(" — scripts/traceability/spec_utils.py:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/spec_utils.py | 117 | defined here | Defines utility function parsing frontmatter while preserving raw markdown content and body. |
| scripts/traceability/update_spec_references.py | 32 | used here | Imported to read existing frontmatter structures prior to modifying spec relationships. |

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
defects: script-bug, missing-path, orphan

## Design notes
A Python helper function identifier for extracting frontmatter and body content rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
