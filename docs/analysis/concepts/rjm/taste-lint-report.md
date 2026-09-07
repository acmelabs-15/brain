---
package: rjm
name: taste lint report
slug: taste-lint-report
kind: artifact
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# taste lint report

## Definition — verbatim
> "taste_lints.py with JSON output" — .claude/skills/taste-lints/SKILL.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/SKILL.md | 27 | defined here | Trigger phrase operation mapping the taste lint report to JSON output generation via `taste_lints.py`. |

## Consumes
Target files, staged changes, or repository directory contents.

## Produces
A structured JSON document containing scanned file counts, file category breakdowns, error/warning tallies, and violation lists.

## When applied
Applied when automated workflows or CI checks request machine-readable diagnostics of taste violations.

## Sub-concepts
none

## Part of
taste-invariants

## Implementation status
defects: other, doc-drift

## Design notes
The structured JSON artifact produced by `taste_lints.py --format json` detailing file metrics, violation locations, severity, and remediation guidance for automated ingestion.
