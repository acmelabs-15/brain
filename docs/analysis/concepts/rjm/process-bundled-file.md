---
package: rjm
name: process_bundled_file
slug: process-bundled-file
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/split_bundled_skills.py, sha256: 984becd29092df0d723645aa4250697a65d743f72cab46212c1934501d747257}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# process_bundled_file

## Definition — verbatim
(used, not defined)

> "def process_bundled_file(file_path: Path, output_dir: Path, dry_run: bool) -> int:" — scripts/split_bundled_skills.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/split_bundled_skills.py | 64 | defined here | Parses a bundled memory markdown file and writes extracted individual skill files. |

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
defects: exit-code-mismatch, orphan

## Design notes
`process_bundled_file` is a Python function identifier extracting individual skill markdown files rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
