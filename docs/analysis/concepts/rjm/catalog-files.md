---
package: rjm
name: catalog_files
slug: catalog-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/modules/slash_command_validator.py, sha256: b2263f8d242bd1a006e15dc1725c0c36f2c7cb7e03811acdb2b400ee50a5b957}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# catalog_files

## Definition — verbatim
(used, not defined)

> "    catalog_files = {\"README.md\", \"INDEX.md\", \"CATALOG.md\", \"CLAUDE.md\"}" — scripts/modules/slash_command_validator.py:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/modules/slash_command_validator.py | 33 | defined here | Set of non-command documentation markdown files excluded from frontmatter validation. |

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
A local variable identifier (`catalog_files`) defining filenames exempt from frontmatter validation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
