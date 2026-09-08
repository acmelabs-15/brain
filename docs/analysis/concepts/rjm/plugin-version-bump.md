---
package: rjm
name: Plugin Version Bump
slug: plugin-version-bump
kind: gate
package_phase: rjm:ship
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

# Plugin Version Bump

## Definition — verbatim
> "Plugin Version Bump" — scripts/validation/pre_pr_sequence.py:377

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 377 | defined here | Pre-PR gate verifying that source code changes include a plugin.json version bump. |

## Consumes
Git diff against the base branch and `plugin.json` version definitions.

## Produces
Pass/fail verification verdict ensuring plugin version is incremented when source code is altered.

## When applied
Evaluated during the pre-PR validation sequence whenever plugin source changes are present.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
A pre-PR validation gate in `pre_pr_sequence.py` enforcing issue #2118, which mandates that any modification to plugin source files must increment the version string in `plugin.json` to guarantee proper marketplace distribution and consumer caching invalidation.
