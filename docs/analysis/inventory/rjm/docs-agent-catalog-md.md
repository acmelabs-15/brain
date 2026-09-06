---
package: rjm
path: docs/agent-catalog.md
type: doc
bytes: 13376
unit: inv-rjm-188
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/agent-catalog.md

## Purpose — required, verbatim
> "Auto-generated index of every agent template under `templates/agents/`." — docs/agent-catalog.md:9

## Design intent — required
Provides a centralized, machine-generated inventory table of all 31 agent templates maintained under `templates/agents/`, documenting each agent's role category (support, strategic, executor, coordinator), lines of code, and functional scope. It serves as human documentation and as an automated contract: CI validates that this file never drifts from the underlying template definitions.

## Phase — required
cross-phase

## Inputs — required
- Agent templates under `templates/agents/*.shared.md` — docs/agent-catalog.md:5
- Generation script `build/generate_agent_catalog.py` — docs/agent-catalog.md:6
- Validation script `scripts/validation/validate_agent_catalog.py` — docs/agent-catalog.md:7

## Outputs — required
- Markdown documentation table indexing 31 agent templates with role, LOC, and description — docs/agent-catalog.md:14-48

## Invokes — required
- script build/generate_agent_catalog.py — docs/agent-catalog.md:6
- script scripts/validation/validate_agent_catalog.py — docs/agent-catalog.md:7
- template analyst — docs/agent-catalog.md:16
- template architect — docs/agent-catalog.md:17
- template backlog-generator — docs/agent-catalog.md:18
- template code-reviewer — docs/agent-catalog.md:19
- template code-simplifier — docs/agent-catalog.md:20
- template comment-analyzer — docs/agent-catalog.md:21
- template critic — docs/agent-catalog.md:22
- template debug — docs/agent-catalog.md:23
- template dependency-auditor — docs/agent-catalog.md:24
- template devops — docs/agent-catalog.md:25
- template explainer — docs/agent-catalog.md:26
- template high-level-advisor — docs/agent-catalog.md:27
- template implementer — docs/agent-catalog.md:28
- template independent-thinker — docs/agent-catalog.md:29
- template issue-feature-review — docs/agent-catalog.md:30
- template janitor — docs/agent-catalog.md:31
- template merge-resolver — docs/agent-catalog.md:32
- template milestone-planner — docs/agent-catalog.md:33
- template negotiation — docs/agent-catalog.md:34
- template orchestrator — docs/agent-catalog.md:35
- template pr-comment-responder — docs/agent-catalog.md:36
- template pr-test-analyzer — docs/agent-catalog.md:37
- template qa — docs/agent-catalog.md:38
- template quality-auditor — docs/agent-catalog.md:39
- template retrospective — docs/agent-catalog.md:40
- template roadmap — docs/agent-catalog.md:41
- template security — docs/agent-catalog.md:42
- template silent-failure-hunter — docs/agent-catalog.md:43
- template skillbook — docs/agent-catalog.md:44
- template task-decomposer — docs/agent-catalog.md:45
- template type-design-analyzer — docs/agent-catalog.md:46

## Invoked by — required
- doc README.md — README.md:533
- doc docs/getting-started.md — docs/getting-started.md:196
- script build/generate_agent_catalog.py — build/generate_agent_catalog.py:2
- script scripts/validation/validate_agent_catalog.py — scripts/validation/validate_agent_catalog.py:2

## Concepts named — required, verbatim
- `Agent Catalog` — docs/agent-catalog.md:1 — defined here
- `templates/agents/*.shared.md` — docs/agent-catalog.md:5 — used here
- `build/generate_agent_catalog.py` — docs/agent-catalog.md:6 — used here
- `scripts/validation/validate_agent_catalog.py` — docs/agent-catalog.md:7 — used here
- `support` — docs/agent-catalog.md:16 — used here
- `strategic` — docs/agent-catalog.md:17 — used here
- `executor` — docs/agent-catalog.md:19 — used here
- `coordinator` — docs/agent-catalog.md:22 — used here
- `analyst` — docs/agent-catalog.md:16 — used here
- `architect` — docs/agent-catalog.md:17 — used here
- `backlog-generator` — docs/agent-catalog.md:18 — used here
- `code-reviewer` — docs/agent-catalog.md:19 — used here
- `code-simplifier` — docs/agent-catalog.md:20 — used here
- `comment-analyzer` — docs/agent-catalog.md:21 — used here
- `critic` — docs/agent-catalog.md:22 — used here
- `debug` — docs/agent-catalog.md:23 — used here
- `dependency-auditor` — docs/agent-catalog.md:24 — used here
- `devops` — docs/agent-catalog.md:25 — used here
- `explainer` — docs/agent-catalog.md:26 — used here
- `high-level-advisor` — docs/agent-catalog.md:27 — used here
- `implementer` — docs/agent-catalog.md:28 — used here
- `independent-thinker` — docs/agent-catalog.md:29 — used here
- `issue-feature-review` — docs/agent-catalog.md:30 — used here
- `janitor` — docs/agent-catalog.md:31 — used here
- `merge-resolver` — docs/agent-catalog.md:32 — used here
- `milestone-planner` — docs/agent-catalog.md:33 — used here
- `negotiation` — docs/agent-catalog.md:34 — used here
- `orchestrator` — docs/agent-catalog.md:35 — used here
- `pr-comment-responder` — docs/agent-catalog.md:36 — used here
- `pr-test-analyzer` — docs/agent-catalog.md:37 — used here
- `qa` — docs/agent-catalog.md:38 — used here
- `quality-auditor` — docs/agent-catalog.md:39 — used here
- `retrospective` — docs/agent-catalog.md:40 — used here
- `roadmap` — docs/agent-catalog.md:41 — used here
- `security` — docs/agent-catalog.md:42 — used here
- `silent-failure-hunter` — docs/agent-catalog.md:43 — used here
- `skillbook` — docs/agent-catalog.md:44 — used here
- `task-decomposer` — docs/agent-catalog.md:45 — used here
- `type-design-analyzer` — docs/agent-catalog.md:46 — used here
- `Commonality/Variability Analysis (CVA)` — docs/agent-catalog.md:28 — used here
- `RICE` — docs/agent-catalog.md:41 — used here
- `KANO` — docs/agent-catalog.md:41 — used here
- `INVEST criteria` — docs/agent-catalog.md:26 — used here
- `Five Whys` — docs/agent-catalog.md:40 — used here

## Structure
- `# Agent Catalog` — docs/agent-catalog.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Clean, machine-generated index with CI validation preventing drift (`scripts/validation/validate_agent_catalog.py`). Indexes 31 agent templates categorized into four role groupings: support (10), strategic (4), executor (10), and coordinator (7). Highlights key methodologies per agent (e.g. CVA for implementer, RICE and KANO for roadmap, Five Whys for retrospective, INVEST criteria for explainer).

## Context cost
13376 bytes (~3350 tokens). Pure markdown reference file; loads no additional dependencies.
