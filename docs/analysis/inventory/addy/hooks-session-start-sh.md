---
package: addy
path: hooks/session-start.sh
type: script
bytes: 1392
unit: inv-addy-9
---

# hooks/session-start.sh

## Purpose — required, verbatim
> "Injects the using-agent-skills meta-skill into every new session" — hooks/session-start.sh:3

## Design intent — required
Automates discovery and baseline skill routing upon session startup. When Claude Code or Codex CLI initializes a session (`SessionStart` event), this hook reads the `using-agent-skills/SKILL.md` meta-skill file and wraps it into the canonical `SessionStart` JSON envelope (`hookSpecificOutput: {hookEventName: "SessionStart", additionalContext: ...}`). This guarantees the agent begins with complete knowledge of available skills and the discovery flowchart, preventing hallucinated commands and omitted skills.

## Phase — required
cross-phase

## Inputs — required
- File: `skills/using-agent-skills/SKILL.md` (resolved via `$(dirname "$SCRIPT_DIR")/skills/using-agent-skills/SKILL.md`) — hooks/session-start.sh:10-11

## Outputs — required
- stdout: JSON string formatted as `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}` — hooks/session-start.sh:6,25,27

## Invokes — required
- file skills/using-agent-skills/SKILL.md — hooks/session-start.sh:11,19
- command jq — hooks/session-start.sh:13,21

## Invoked by — required
- hooks/hooks.json:8 — executed on `SessionStart` event

## Concepts named — required, verbatim
- `SessionStart` — hooks/session-start.sh:2 — used here
- `using-agent-skills` — hooks/session-start.sh:3 — used here
- `meta-skill` — hooks/session-start.sh:3 — used here
- `SessionStart envelope` — hooks/session-start.sh:5 — defined here
- `additionalContext` — hooks/session-start.sh:6 — used here
- `Codex CLI` — hooks/session-start.sh:7 — used here
- `Claude Code` — hooks/session-start.sh:7 — used here
- `skill discovery flowchart` — hooks/session-start.sh:22 — used here

## Structure
- `#!/bin/bash`
- `# agent-skills session start hook`

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/session-start.sh`, language: bash, lines: 29
- documented invocation: `bash "$SCRIPT"` — hooks/hooks.json:8
- executed: yes
- actual command run: `bash hooks/session-start.sh`
- actual exit code: 0
- documented exit codes: `exit 0` — hooks/session-start.sh:15
- actual exit paths in code: line 15 (`exit 0`), line 28 (implicit `exit 0`)
- for validators/gates: never exits non-zero; fails open with fallback warning envelope if jq or file is missing
- does the output match what the documentation claims? yes; outputs valid JSON with `hookSpecificOutput.hookEventName = "SessionStart"` containing the full text of `using-agent-skills/SKILL.md`.

## Defects — required
- `cross-file-contradiction` · hooks/session-start.sh:5-7 vs hooks/session-start-test.sh:24-26 · `session-start.sh` was migrated to the standard Claude Code/Codex CLI envelope (`hookSpecificOutput: {hookEventName: "SessionStart", additionalContext: ...}`), but `session-start-test.sh` was not updated and still asserts legacy `{priority: "IMPORTANT", message: "..."}`, causing `session-start-test.sh` to fail.

## Observations
- Graceful degradation: if `jq` is not installed on PATH, the script emits a valid JSON envelope warning the user to install `jq` while leaving individual skills available (hooks/session-start.sh:14).
- Injects 10,426 bytes of meta-skill instructions into every agent session start context.

## Context cost
1,392 bytes script (~348 tokens); emits ~2,954 tokens when loading `skills/using-agent-skills/SKILL.md`.
