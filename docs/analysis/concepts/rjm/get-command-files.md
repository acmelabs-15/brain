---
package: rjm
name: get_command_files
slug: get-command-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/command_size.py, sha256: cbeb57d3bc9941c5f9fdabed6fe453b2240a62f4f4b68b21f9dcd9b7dd706861}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# get_command_files

## Definition — verbatim
(used, not defined)

> "def get_command_files(" — scripts/validation/command_size.py:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/command_size.py | 116 | defined here | Helper function collecting command Markdown files to validate based on path arguments or changed files list. |

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
A file discovery function identifier in command_size.py, classified as name-only per D-023.
