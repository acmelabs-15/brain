---
package: rjm
name: collect_records
slug: collect-records
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# collect_records

## Definition — verbatim
(used, not defined)

> "def collect_records(adr_dir: Path, repo_root: Path) -> tuple[list[Record], list[Violation]]:" — scripts/validation/check_adr_lifecycle.py:414

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 414 | defined here | Function scanning the ADR directory and collecting Record instances and frontmatter violations in filename order. |

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
A Python function identifier scanning the ADR directory to load and return Record instances and parsing violations, classified as `name-only` per D-023 because it is a code function identifier rather than a development lifecycle concept.
