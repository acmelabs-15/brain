---
package: addy
name: execution evals
slug: execution-evals
kind: technique
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 190d4a4a399018f1d7bf0895a953042fe0f285080e37ca45381785f80ba007c7}
  - {path: scripts/run-evals.js, sha256: e71343ae3468314574eecc8e7f6811a261c902698da0cc591805ea2664b795e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# execution evals

## Definition — verbatim
> "Execution evals materialize files[] fixtures and grade the" — scripts/run-evals.js:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 42 | defined | Mandates that execution evals be backed by concrete fixture files under evals/fixtures/. |
| scripts/run-evals.js | 22 | defined | Explains that execution evals unpack file fixtures in temporary workspaces and grade the full stream-json trace. |

## Consumes
Pre-configured file fixtures under `evals/fixtures/` and test case expectations.

## Produces
Evaluated git commits, modified files, and graded execution traces from headless agent runs.

## When applied
During Tier 3 behavioral evaluations of implementation-oriented coding skills.

## Sub-concepts
none

## Part of
behavioral-eval, three-tier-eval-framework

## Implementation status
clean

## Design notes
Execution evals provide hands-on behavioral testing for code-producing skills by initializing throwaway git repositories populated with real fixture files. By running an autonomous agent in this isolated workspace and grading its file edits, shell commands, and git commits, execution evals confirm that skills produce production-ready code.
