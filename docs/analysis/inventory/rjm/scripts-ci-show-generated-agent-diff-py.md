---
package: rjm
path: scripts/ci/show_generated_agent_diff.py
type: script
bytes: 2900
unit: inv-rjm-207
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/show_generated_agent_diff.py, sha256: 832ad5db29d2aef313457f5cd7ca9f5d03d93c7b0c12030eca95c35c3f77eaae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/show_generated_agent_diff.py

## Purpose — required, verbatim
> "Explain a generated-agent validation failure." — scripts/ci/show_generated_agent_diff.py:1

## Design intent — required
Runs during post-failure CI inspection to regenerate agent definitions from `templates/agents/*.shared.md` without validation flags, inspects `git diff --name-only` to identify exactly which generated files were manually modified, and outputs the detailed diff along with remediation steps.

## Phase — required
cross-phase

## Inputs — required
- CLI argument `"--repo-root"` — scripts/ci/show_generated_agent_diff.py:54: repository root to run git in

## Outputs — required
- Diagnostic list of manually edited files, remediation guide, and git diff printed to stdout (`sys.stdout.write(_run(["git", "diff"], root).stdout)` — scripts/ci/show_generated_agent_diff.py:90)

## Invokes — required
- script build/generate_agents.py — scripts/ci/show_generated_agent_diff.py:18

## Invoked by — required
- config .github/workflows/validate-generated-agents.yml — .github/workflows/validate-generated-agents.yml:255

## Concepts named — required, verbatim
`git diff` — scripts/ci/show_generated_agent_diff.py:8 — used here
`uv` — scripts/ci/show_generated_agent_diff.py:18 — used here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/show_generated_agent_diff.py`, language: Python 3, lines: 96
- documented invocation: `"Explain a generated-agent validation failure." — scripts/ci/show_generated_agent_diff.py:1`
- **executed:** yes
- actual command run: `uv run python scripts/ci/show_generated_agent_diff.py --repo-root .`, stdout: `=== Files that differ from generated output ===`, **actual exit code**: 0
- documented exit codes: none; actual exit paths: `scripts/ci/show_generated_agent_diff.py:77` (`return 0` on CalledProcessError), `scripts/ci/show_generated_agent_diff.py:81` (`return 0` if no differences detected), `scripts/ci/show_generated_agent_diff.py:91` (`return 0`), `scripts/ci/show_generated_agent_diff.py:95` (`raise SystemExit(main())`)
- for validators/gates: diagnostic helper; always returns 0 to allow CI step logs to show diff without aborting the overall workflow report
- does the output match what the documentation claims? yes, regenerates agents and prints diff if differences exist

## Defects — required
none

## Observations
Specifically distinguishes manual edits to generated agent files from template modifications, directing developers to edit `templates/agents/*.shared.md` rather than downstream generated artifacts.

## Context cost
2900 bytes, approximately 725 tokens.
