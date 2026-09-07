---
package: rjm
name: Boundaries for Critique
slug: boundaries-for-critique
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md, sha256: 0d01d36f355d43bbaad3c0de28285c85ff04a8499d03b36b2247729acd7b8b21}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Boundaries for Critique

## Definition — verbatim
> "## Boundaries for Critique" — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/quality-boy-scout-rule.md | 28 | defined here | Defines the verification boundary matrix categorizing improvements as VERIFIED, FAILED, or UNCERTAIN. |

## Consumes
Proposed change diffs, touched file paths, and work ticket delivery constraints.

## Produces
Triaged verification ratings (VERIFIED, FAILED, UNCERTAIN) based on locality and safety boundaries.

## When applied
Applied when validating whether an opportunistic improvement stays within acceptable scope boundaries.

## Sub-concepts
none

## Part of
decision-critique-application

## Implementation status
defects: missing-path

## Design notes
Boundaries for Critique provides the concrete boundary criteria that separate legitimate opportunistic improvements from unapproved, high-risk refactorings bundled into feature diffs.
