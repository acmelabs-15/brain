---
package: rjm
name: Skill Markdown Portability
slug: skill-markdown-portability
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Skill Markdown Portability

## Definition — verbatim
> "Skill Markdown Portability" — scripts/validation/pre_pr_sequence.py:303

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 303 | defined here | Pre-PR gate checking skill markdown documentation for prohibited hard-coded upstream repository paths. |

## Consumes
Markdown files within skill directories and skill markdown portability baseline definitions.

## Produces
Pass/fail gate verdict enforcing path portability rules in skill documentation.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Skill Markdown Portability is a validation gate (Issue #2050) ensuring that markdown files in skills do not contain hard-coded upstream paths (such as .agents/ or upstream repository roots). This ensures skills function portably when installed as vendored plugins in downstream consumer repositories.
