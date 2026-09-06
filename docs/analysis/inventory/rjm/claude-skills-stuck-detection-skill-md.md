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
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/stuck-detection/SKILL.md

## Purpose — required, verbatim
> "Detect when an agent is repeating the same topics across turns and surface a" — .claude/skills/stuck-detection/SKILL.md:18

## Design intent — required
Defines a lightweight, deterministic orchestrator guard that detects repetitive agent conversation loops by computing lexical Jaccard similarity across recent turn topic signatures. When repetition exceeds a threshold, it emits a structured `<stuck-detection>` self-reflection prompt nudge to break unproductive token-burning loops without requiring external semantic embedding services.

## Phase — required
none

## Inputs — required
- Trigger phrases: `check stuck loop`, `detect repetition`, `agent looping`, `reset stuck history` — .claude/skills/stuck-detection/SKILL.md:26-29
- Turn response text via CLI positional arguments or stdin — .claude/skills/stuck-detection/SKILL.md:78-79
- Optional environment variables: `STUCK_DETECTION_HISTORY`, `STUCK_DETECTION_SESSION`, `XDG_STATE_HOME` — .claude/skills/stuck-detection/SKILL.md:120-124
- History file containing recent topic signatures (`history.json`) — .claude/skills/stuck-detection/SKILL.md:124-125

## Outputs — required
- JSON evaluation payload indicating loop status (`stuck`, `signature`, `similar_count`, `nudge`) — .claude/skills/stuck-detection/SKILL.md:95-98
- Self-reflection nudge text enclosed in `<stuck-detection>` tags to be injected into the orchestrator's next system prompt — .claude/skills/stuck-detection/SKILL.md:70-71, 98
- Persisted topic signature history JSON on disk — .claude/skills/stuck-detection/SKILL.md:58-59, 124-125

## Invokes — required
- script .claude/skills/stuck-detection/stuck_detection.py — .claude/skills/stuck-detection/SKILL.md:67

## Invoked by — required
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-debugging-playbook/SKILL.md:77

## Concepts named — required, verbatim
- `stuck-detection` — .claude/skills/stuck-detection/SKILL.md:2 — defined here
- `haiku` — .claude/skills/stuck-detection/SKILL.md:4 — used here
- `ADR-080` — .claude/skills/stuck-detection/SKILL.md:5 — used here
- `Jaccard similarity` — .claude/skills/stuck-detection/SKILL.md:60 — used here
- `DEFAULT_MAX_HISTORY` — .claude/skills/stuck-detection/SKILL.md:109 — defined here
- `DEFAULT_STUCK_THRESHOLD` — .claude/skills/stuck-detection/SKILL.md:110 — defined here
- `DEFAULT_SIMILARITY_THRESHOLD` — .claude/skills/stuck-detection/SKILL.md:111 — defined here
- `MIN_TEXT_LENGTH` — .claude/skills/stuck-detection/SKILL.md:112 — defined here
- `SIGNATURE_SIZE` — .claude/skills/stuck-detection/SKILL.md:113 — defined here
- `STUCK_DETECTION_HISTORY` — .claude/skills/stuck-detection/SKILL.md:120 — defined here
- `STUCK_DETECTION_SESSION` — .claude/skills/stuck-detection/SKILL.md:121 — defined here
- `XDG_STATE_HOME` — .claude/skills/stuck-detection/SKILL.md:124 — used here

## Structure
- # Stuck Detection Guard — .claude/skills/stuck-detection/SKILL.md:16
- ## Triggers — .claude/skills/stuck-detection/SKILL.md:22
- ## Quick Reference — .claude/skills/stuck-detection/SKILL.md:31
- ## When to Use — .claude/skills/stuck-detection/SKILL.md:40
- ## How It Works — .claude/skills/stuck-detection/SKILL.md:54
- ## Process — .claude/skills/stuck-detection/SKILL.md:65
- ## Usage — .claude/skills/stuck-detection/SKILL.md:74
- ### Output — .claude/skills/stuck-detection/SKILL.md:91
- ## Configuration — .claude/skills/stuck-detection/SKILL.md:102
- ### History Path — .claude/skills/stuck-detection/SKILL.md:115
- ## Verification — .claude/skills/stuck-detection/SKILL.md:131
- ## Anti-Patterns — .claude/skills/stuck-detection/SKILL.md:144
- ## Integration — .claude/skills/stuck-detection/SKILL.md:153
- ## Testing — .claude/skills/stuck-detection/SKILL.md:158

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/stuck-detection/stuck_detection.py`, language: Python, lines: 311
- documented invocation: `python3 .claude/skills/stuck-detection/stuck_detection.py status` — .claude/skills/stuck-detection/SKILL.md:82
- **executed:** yes
- actual command run: `python3 .claude/skills/stuck-detection/stuck_detection.py status`, abridged stdout: `{\n  "history_length": 0,\n  "max_history": 10,\n  "stuck_threshold": 3,\n  "recent_signatures": []\n}`, **actual exit code:** 0
- documented exit codes: "0 - Success (regardless of stuck/not-stuck)" — .claude/skills/stuck-detection/stuck_detection.py:9 vs actual exit paths in code: `return 0` at .claude/skills/stuck-detection/stuck_detection.py:306 via `sys.exit(main())` at .claude/skills/stuck-detection/stuck_detection.py:310
- for validators/gates: not a validator/gate (returns 0 on normal status, extract, reset, and check operations)
- does the output match what the documentation claims: yes, output matches status, check, extract, and reset documentation

## Defects — required
none

## Observations
- The skill employs a disciplined approach to loop-breaking: nudges are explicitly marked as internal control text wrapped in `<stuck-detection>` tags that must never be rendered to end users.
- Unit tests in `tests/skills/stuck-detection/test_stuck_detection.py` (41 tests) all pass cleanly under pytest.

## Context cost
6874 bytes (plus 11192 bytes for `stuck_detection.py`), approximately 4515 tokens total.
