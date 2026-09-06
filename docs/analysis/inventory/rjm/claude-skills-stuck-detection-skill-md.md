---
package: rjm
path: .claude/skills/stuck-detection/SKILL.md
type: skill
bytes: 6874
unit: inv-rjm-174
in_scope_via: .claude/skills/ai-agents-debugging-playbook/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/stuck-detection/SKILL.md, sha256: 2f9d0a80008c774d8d159505dfd7cc6cd42ffe2eafa704358716f9d12e71b1f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/stuck-detection/SKILL.md

## Purpose — required, verbatim
> "Detect when an agent is repeating the same topics across turns and surface a" — .claude/skills/stuck-detection/SKILL.md:18

## Design intent — required
Lightweight pre-flight guard for agent orchestrators to detect conversational loops and repetitive responses across turns. It extracts lexical topic signatures, measures Jaccard similarity across recent turns from a JSON history file, and triggers a `<stuck-detection>` self-reflection nudge to break repetitive loops deterministically without external API dependencies.

## Phase — required
cross-phase

## Inputs — required
- Agent response text passed via CLI argument or standard input — .claude/skills/stuck-detection/SKILL.md:78-79
- History state JSON file resolved via `--history`, `STUCK_DETECTION_HISTORY`, `STUCK_DETECTION_SESSION`, or XDG state directory — .claude/skills/stuck-detection/SKILL.md:119-125

## Outputs — required
- JSON payload with boolean `stuck`, topic `signature`, `similar_count`, and XML loop-breaking `nudge` payload when stuck — .claude/skills/stuck-detection/SKILL.md:94-99
- Updated history JSON file on disk — .claude/skills/stuck-detection/SKILL.md:58-59
- Injected `<stuck-detection>` nudge text into orchestrator's system prompt — .claude/skills/stuck-detection/SKILL.md:68-71

## Invokes — required
- script .claude/skills/stuck-detection/stuck_detection.py — .claude/skills/stuck-detection/SKILL.md:67

## Invoked by — required
- skill .claude/skills/ai-agents-debugging-playbook/SKILL.md — .claude/skills/ai-agents-debugging-playbook/SKILL.md:77

## Concepts named — required, verbatim
- `stuck-detection` — .claude/skills/stuck-detection/SKILL.md:2 — defined here
- `haiku` — .claude/skills/stuck-detection/SKILL.md:4 — used here
- `ADR-080` — .claude/skills/stuck-detection/SKILL.md:5 — used here
- `Stuck Detection Guard` — .claude/skills/stuck-detection/SKILL.md:16 — defined here
- `self-reflection nudge` — .claude/skills/stuck-detection/SKILL.md:19 — defined here
- `Topic signature` — .claude/skills/stuck-detection/SKILL.md:56 — defined here
- `Jaccard similarity` — .claude/skills/stuck-detection/SKILL.md:60 — used here
- `DEFAULT_MAX_HISTORY` — .claude/skills/stuck-detection/SKILL.md:109 — defined here
- `DEFAULT_STUCK_THRESHOLD` — .claude/skills/stuck-detection/SKILL.md:110 — defined here
- `DEFAULT_SIMILARITY_THRESHOLD` — .claude/skills/stuck-detection/SKILL.md:111 — defined here
- `MIN_TEXT_LENGTH` — .claude/skills/stuck-detection/SKILL.md:112 — defined here
- `SIGNATURE_SIZE` — .claude/skills/stuck-detection/SKILL.md:113 — defined here

## Structure
- `# Stuck Detection Guard` — .claude/skills/stuck-detection/SKILL.md:16
- `## Triggers` — .claude/skills/stuck-detection/SKILL.md:22
- `## Quick Reference` — .claude/skills/stuck-detection/SKILL.md:31
- `## When to Use` — .claude/skills/stuck-detection/SKILL.md:40
- `## How It Works` — .claude/skills/stuck-detection/SKILL.md:54
- `## Process` — .claude/skills/stuck-detection/SKILL.md:65
- `## Usage` — .claude/skills/stuck-detection/SKILL.md:74
- `### Output` — .claude/skills/stuck-detection/SKILL.md:91
- `## Configuration` — .claude/skills/stuck-detection/SKILL.md:102
- `### History Path` — .claude/skills/stuck-detection/SKILL.md:115
- `## Verification` — .claude/skills/stuck-detection/SKILL.md:131
- `## Anti-Patterns` — .claude/skills/stuck-detection/SKILL.md:144
- `## Integration` — .claude/skills/stuck-detection/SKILL.md:153
- `## Testing` — .claude/skills/stuck-detection/SKILL.md:158

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/stuck-detection/stuck_detection.py`, language: Python 3, lines: 311
- documented invocation:
  - "python3 .claude/skills/stuck-detection/stuck_detection.py check \"your response text\"" — .claude/skills/stuck-detection/SKILL.md:78
- **executed:** yes
- actual command run: `python3 .claude/skills/stuck-detection/stuck_detection.py --history /tmp/test_stuck_history.json check "This is a test response text that needs to be more than fifty characters long to pass the minimum text length."`
- abridged stdout:
  ```json
  {
    "stuck": false,
    "signature": "characters,fifty,length,long,text",
    "reason": "warming-up"
  }
  ```
- **actual exit code:** 0
- documented exit codes vs. actual exit paths: none explicitly documented in SKILL.md vs. code exit paths: `return 0` at line 307.
- for validators/gates: can it exit non-zero? Exits 2 on invalid arguments or unrecognized subcommand via argparse.
- does the output match what the documentation claims? Yes, matches documented output JSON structure and triggers `stuck: true` upon reaching consecutive similar entries.

## Defects — required
none

## Observations
- Employs strict internal tagging `<stuck-detection>` to prevent internal control prompts from leaking to end users.

## Context cost
6874 bytes (SKILL.md) + 11192 bytes (stuck_detection.py) = 18066 bytes, ~4500 tokens.
