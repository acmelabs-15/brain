---
package: rjm
name: parse_yaml_frontmatter
slug: parse-yaml-frontmatter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/spec_utils.py, sha256: 4df2d5c43d281d37e689de849420f8003706ec909aceb87fc3a594595908db70}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/yaml_utils.py, sha256: 7c66fdec5a468d3dc1ba4ec8eb18af73cd9b9bb878d134309033ab27b7880b68}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parse_yaml_frontmatter

## Definition — verbatim
(used, not defined)

> "def parse_yaml_frontmatter(" — scripts/traceability/spec_utils.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/spec_utils.py | 54 | defined here | Defines cached frontmatter parser extracting specification metadata dictionaries. |
| scripts/validation/check_adr_lifecycle.py | 135 | used here | Imported to parse ADR markdown frontmatter during lifecycle validation. |
| scripts/validation/yaml_utils.py | 18 | defined here | Defines reusable YAML frontmatter parser for validation scripts. |

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
defects: script-bug, missing-path

## Design notes
A Python utility function identifier for parsing YAML frontmatter rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
