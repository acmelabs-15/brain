---
package: rjm
name: update_yaml_references
slug: update-yaml-references
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/update_spec_references.py, sha256: c247562ca5f32a067a056a068c18179a30a0a23790cd0b64efd0ff0273ae7282}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# update_yaml_references

## Definition — verbatim
(used, not defined)

> "def update_yaml_references(" — scripts/traceability/update_spec_references.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/update_spec_references.py | 38 | defined here | Defines function rewriting the `related:` list in specification YAML frontmatter. |

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
defects: script-bug, orphan

## Design notes
A Python utility function identifier updating frontmatter reference lists rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
