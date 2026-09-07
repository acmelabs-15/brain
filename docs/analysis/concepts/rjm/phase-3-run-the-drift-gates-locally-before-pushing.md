---
package: rjm
name: Phase 3: Run the Drift Gates Locally Before Pushing
slug: phase-3-run-the-drift-gates-locally-before-pushing
kind: phase
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-generation-and-release/SKILL.md, sha256: f21f81ca99b028e049733f4a75da58c62b2603d0c74e74bfd6a88459ae76272d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 3: Run the Drift Gates Locally Before Pushing

## Definition — verbatim
> "### Phase 3: Run the Drift Gates Locally Before Pushing" — .claude/skills/ai-agents-generation-and-release/SKILL.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 100 | defined here | Phase heading defining the local execution matrix of drift gates prior to pushing code. |

## Consumes
Regenerated repository working tree, pre-push git hooks.

## Produces
Validation verdicts across the 7 drift gates (agent templates, pipeline staleness, lib mirrors, etc.).

## When applied
Locally prior to running `git push` or opening a pull request.

## Sub-concepts
agent-template-drift, full-pipeline-staleness, lib-mirror-drift, manifest-description-parity

## Part of
ai-agents-generation-and-release

## Implementation status
defects: unfailable-gate, doc-drift

## Design notes
Phase 3 defines the pre-push verification checkpoint where developers run the entire drift gate matrix locally before pushing commits. By executing validation gates locally (`build_all.py --check`, `generate_agents.py --validate`, `sync_plugin_lib.py --check`), contributors catch divergence early and avoid expensive CI failure cycles.
