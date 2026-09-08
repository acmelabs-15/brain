---
package: rjm
name: Generated Artifact Staleness
slug: generated-artifact-staleness
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

# Generated Artifact Staleness

## Definition — verbatim
> "Generated Artifact Staleness" — scripts/validation/pre_pr_sequence.py:297

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 297 | defined here | Pre-PR gate executing check-mode runs of generators to ensure committed generated files match source inputs. |

## Consumes
Generator inputs, template files, and committed generated trees.

## Produces
Pass/fail gate verdict confirming that committed generated files are completely up to date.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Generated Artifact Staleness is a shift-left validation gate (Issue #5079) executing sync_plugin_lib.py --check and build_all.py --check. By verifying that generated trees are up to date with their source inputs locally, it prevents manual edits from passing local tests only to be silently reverted by generator steps in CI.
