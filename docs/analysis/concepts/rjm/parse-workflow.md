---
package: rjm
name: parse_workflow
slug: parse-workflow
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflow/loader.py, sha256: 2c6b6b29ceef95cd8be24b14975396f72bbc4972f11fb49fcf5c21dcce6e80cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# parse_workflow

## Definition — verbatim
(used, not defined)

> "def parse_workflow(data: dict[str, Any]) -> WorkflowDefinition:" — scripts/workflow/loader.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/loader.py | 38 | defined here | Function that validates and converts a parsed YAML mapping into a `WorkflowDefinition` dataclass instance. |

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
defects: doc-drift, orphan

## Design notes
A Python parsing function in `scripts/workflow/loader.py` that converts raw dictionaries into typed workflow definitions, classified as name-only per D-023.
