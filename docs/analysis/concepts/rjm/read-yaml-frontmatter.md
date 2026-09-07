---
package: rjm
name: read_yaml_frontmatter
slug: read-yaml-frontmatter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/agent_registry.py, sha256: 1fc80c4c6f8e47f82c460cad6e02d91f2fe6766ffea24e7c70f9e5f5b7f07e1b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# read_yaml_frontmatter

## Definition — verbatim
(used, not defined)

> "read_yaml_frontmatter = _load_read_yaml_frontmatter()" — scripts/validation/agent_registry.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_registry.py | 61 | used here | Dynamic assignment loading frontmatter extraction function from build utility. |

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
defects: orphan

## Design notes
`read_yaml_frontmatter` is a dynamically loaded utility function reference for parsing YAML frontmatter from agent definition files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
