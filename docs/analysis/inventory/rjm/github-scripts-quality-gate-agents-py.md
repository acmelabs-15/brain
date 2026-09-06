---
package: rjm
path: .github/scripts/quality_gate_agents.py
type: script
bytes: 961
unit: inv-rjm-184
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: .github/scripts/quality_gate_agents.py, sha256: 8e6a842ebc6d91a06ed2422a2f5cb5f47c10755d98dcdd7a793d5fa528574f77}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/quality_gate_agents.py

## Purpose — required, verbatim
> "Shared quality gate agent metadata for workflow consumer scripts." — .github/scripts/quality_gate_agents.py:2

## Design intent — required
Serves as the canonical single source of truth for quality gate agent definitions and naming conventions used across workflow consumer scripts. It defines the tuple of active quality gate agents (`QUALITY_GATE_AGENTS`), their human-readable UI display names (`QUALITY_GATE_AGENT_DISPLAY_NAMES`), and helper functions (`agent_env_name` and `agent_arg_name`) that normalize agent identifiers into environment variable prefixes and argparse argument keys. Without this module, gate scripts and workflow steps would maintain duplicate, desynchronized lists of agent roles and naming transformations.

## Phase — required
none

## Inputs — required
- Positional string argument `agent` for helper functions — .github/scripts/quality_gate_agents.py:33, 38

## Outputs — required
- Exported constant `QUALITY_GATE_AGENTS` tuple — .github/scripts/quality_gate_agents.py:6
- Exported constant `QUALITY_GATE_AGENT_DISPLAY_NAMES` mapping — .github/scripts/quality_gate_agents.py:19
- Helper function `agent_env_name`: "Return the environment variable prefix for an agent name." — .github/scripts/quality_gate_agents.py:34
- Helper function `agent_arg_name`: "Return the argparse destination prefix for an agent name." — .github/scripts/quality_gate_agents.py:39

## Invokes — required
none

## Invoked by — required
- script quality_gate_agents — scripts/quality_gate/external_signal_gate.py:59

## Concepts named — required, verbatim
- `QUALITY_GATE_AGENTS` — .github/scripts/quality_gate_agents.py:6 — defined here
- `QUALITY_GATE_AGENT_DISPLAY_NAMES` — .github/scripts/quality_gate_agents.py:19 — defined here
- `agent_env_name` — .github/scripts/quality_gate_agents.py:33 — defined here
- `agent_arg_name` — .github/scripts/quality_gate_agents.py:38 — defined here

## Structure
- Script docstring — .github/scripts/quality_gate_agents.py:2
- Agent tuple constant — .github/scripts/quality_gate_agents.py:6
- Display names map — .github/scripts/quality_gate_agents.py:19
- Environment variable name helper — .github/scripts/quality_gate_agents.py:33
- Argparse name helper — .github/scripts/quality_gate_agents.py:38

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/quality_gate_agents.py`
- language: Python (python3)
- lines: 41
- documented invocation:
  - none (library module; contains shebang `#!/usr/bin/env python3` but no `if __name__ == "__main__":` entry point)
- executed: yes
- actual command run: `python3 sources/rjm/.github/scripts/quality_gate_agents.py`
- abridged stdout:
  ```text
  (exited 0 with no stdout/stderr; module importable without side effects)
  ```
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented: none documented (module file).
  - Actual exit paths: exits 0 on module execution.
- for validators/gates: not a gate; metadata module consumed by `scripts/quality_gate/external_signal_gate.py`. Cannot exit non-zero.
- does the output match what the documentation claims: yes (defines metadata structures and helper functions).

## Defects — required
none

## Observations
- Contains a shebang line (`#!/usr/bin/env python3` at line 1) even though it operates purely as an importable metadata module without a CLI parser or `main()` entry point.
- Maps 10 standard quality gate agents (`security`, `qa`, `analyst`, `architect`, `devops`, `roadmap`, `reliability`, `observability`, `agent-safety`, `decision-rigor`) ensuring consistent display formatting and environment variable resolution across CI workflows.

## Context cost
961 bytes (approx. 240 tokens).
