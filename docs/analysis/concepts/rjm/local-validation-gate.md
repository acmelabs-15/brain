---
package: rjm
name: local validation gate
slug: local-validation-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-049-pre-pr-validation-gates.md, sha256: e9fca386ce2c9bfe87b801d629d7ebf2d44a14111a1bb6906e8e07b991006470}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# local validation gate

## Definition — verbatim
> "All PRs MUST pass a local validation gate before creation. The gate checks:" — .agents/architecture/ADR-049-pre-pr-validation-gates.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-049-pre-pr-validation-gates.md | 42 | defined here | Mandated as a required local verification barrier executing before any pull request is submitted. |

## Consumes
Local branch diff, commit count, file modifications, line additions, and ADR references.

## Produces
Validation pass/fail verdict gating pull request creation.

## When applied
Executed locally prior to creating a pull request or pushing branches.

## Sub-concepts
none

## Part of
pre-pr-validation-gates

## Implementation status
defects: missing-path

## Design notes
A deterministic quality enforcement check executed in the local agent environment prior to git branch push or pull request creation, preventing governance violations from reaching remote reviewers.
