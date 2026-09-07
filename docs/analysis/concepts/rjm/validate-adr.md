---
package: rjm
name: validate-adr
slug: validate-adr
kind: gate
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md, sha256: 753b2079b2f8ad0d65f9142ba030eab785afdf790b91d3a5283898c887b66458}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate-adr

## Definition — verbatim
(used, not defined)

> "| `validate-adr` gate hooks | Direct | Switch to frontmatter-parse with `yaml.safe_load`; enforce enum and bidirectional supersession only after backfill and only once a consumer exists | High |" — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:147

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md | 147 | used here | Component impact table entry detailing the migration of ADR validation hooks to frontmatter parsing |

## Consumes
ADR document frontmatter and repository decision logs.

## Produces
Validation pass/fail verdicts enforcing ADR lifecycle schema compliance.

## When applied
Executed as pre-commit or CI gate on pull requests that create or modify ADRs.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: missing-path

## Design notes
validate-adr is a quality gate hook in rjm that validates the structural integrity, enum values, and bidirectional supersession links of architectural decision records, ensuring repository decision history remains consistent.
