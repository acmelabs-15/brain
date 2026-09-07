---
package: rjm
name: compliance comment
slug: compliance-comment
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-024-github-actions-runner-selection.md, sha256: c14e8a1d3bc9a4b97a8f5ebea77d7818f534b2394531bfed8436279d464f7def}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# compliance comment

## Definition — verbatim
> "3. Add ADR-024 compliance comment" — .agents/architecture/ADR-024-github-actions-runner-selection.md:183

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-024-github-actions-runner-selection.md | 183 | defined here | Step in migration checklist requiring workflow authors to document runner selection compliance. |

## Consumes
Runner selection choice and architectural rationale for the workflow job.

## Produces
Inline YAML comment preceding `runs-on:` documenting adherence to runner policy or formal exception tracking.

## When applied
Required for all GitHub Actions workflow files whenever adding or editing runner definitions.

## Sub-concepts
none

## Part of
runner-selection-policy

## Implementation status
clean

## Design notes
An inline governance documentation pattern in CI workflow definitions requiring every runner assignment to be annotated with an architectural justification comment, ensuring transparent cost accountability and traceability back to ADR-024.
