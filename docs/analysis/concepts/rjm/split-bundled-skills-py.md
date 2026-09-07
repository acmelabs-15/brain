---
package: rjm
name: split_bundled_skills.py
slug: split-bundled-skills-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/README.md, sha256: 551daff8daf63618ebc955fce182f2eddd5e1bc7d87ee330de6f523d06fed2c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# split_bundled_skills.py

## Definition — verbatim
(used, not defined)

> "| `scripts/split_bundled_skills.py` | Splits bundled skill files into individual skill memory files. | `uv run python scripts/split_bundled_skills.py --help` |" — scripts/README.md:226

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/README.md | 226 | used here | Table row documenting the utility that splits bundled skill files into individual skill files. |

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
defects: doc-drift, missing-path, internal-contradiction

## Design notes
split_bundled_skills.py is a Python utility script filename rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
