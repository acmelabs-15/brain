---
package: rjm
name: YAML Style
slug: yaml-style
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# YAML Style

## Definition — verbatim
(used, not defined)

> "8. YAML Style (check YAML style with yamllint) [skip if --quick]" — scripts/validation/pre_pr.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr.py | 16 | used here | Documented as step 8 in the pre-PR validation sequence checking YAML formatting via yamllint. |

## Consumes
YAML documents across configuration, GitHub Actions workflows, and skill frontmatter.

## Produces
Pass/fail verification verdict reporting yamllint style and syntax conformance.

## When applied
Executed during the pre-PR validation suite; skipped when the `--quick` flag is supplied.

## Sub-concepts
none

## Part of
pre-pr

## Implementation status
defects: doc-drift

## Design notes
A quality gate in `pre_pr.py` enforcing yamllint formatting, indentation, and structure rules across repository YAML files. It is marked as skippable when `--quick` mode is enabled to support fast iteration.
