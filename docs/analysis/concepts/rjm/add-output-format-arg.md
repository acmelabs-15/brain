---
package: rjm
name: add_output_format_arg
slug: add-output-format-arg
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/output.py, sha256: d440cb852e8bebf189d17d130b5715593516e4ce0a2d71bc303d7cf8357efead}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# add_output_format_arg

## Definition — verbatim
(used, not defined)

> "def add_output_format_arg(parser: argparse.ArgumentParser) -> None:" — scripts/github_core/output.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/output.py | 54 | defined here | CLI helper adding the standard --output-format flag to ArgumentParser instances. |

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
Argparse configuration helper function adding standardized format options to CLI tools, classified as name-only per D-023.
