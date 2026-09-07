---
package: rjm
name: Runtime-contract exemplar
slug: runtime-contract-exemplar
kind: reference
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md, sha256: 56a5414b5d3dd24132335dade19bf3a3294921a141558e38b8c1069f345a6e82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Runtime-contract exemplar

## Definition — verbatim
(used, not defined)

> "Runtime-contract exemplar passes (6 tests)" — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md | 21 | defines | Identifies tests/build_scripts/test_generate_hooks_runtime_contract.py as the reference exemplar passing 6 tests. |

## Consumes
Hook generator scripts, plugin root variable definitions, and subprocess execution harnesses.

## Produces
Canonical test pattern combining real bash subprocess execution, foreign working directories, and negative controls.

## When applied
When authoring or evaluating test suites that verify generated hook artifacts and tool runtime contracts.

## Sub-concepts
negative-control-test-design

## Part of
empirical-probe-toolkit

## Implementation status
defects: doc-drift

## Design notes
Refers to tests/build_scripts/test_generate_hooks_runtime_contract.py as the canonical model for runtime-contract verification. Unlike tests that compare generated strings against identical expected strings, this exemplar runs generated commands in actual bash subprocesses under foreign working directories with explicit environment variables and negative controls.
