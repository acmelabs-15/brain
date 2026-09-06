---
package: rjm
path: .claude/skills/panning-for-gold/SKILL.md
type: skill
bytes: 8880
unit: inv-rjm-132
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/panning-for-gold/SKILL.md, sha256: 1f40dc18c6cd6fb4bd569c0803ca82dc42d45a86b7277259f9781a32c1afe286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/panning-for-gold/SKILL.md

## Purpose — required, verbatim
> "Turn raw, unstructured capture into an evaluated, actionable inventory of threads. Four phases: Front-gate, Extract, Evaluate, Synthesize." — .claude/skills/panning-for-gold/SKILL.md:10

## Design intent — required
Establishes a structured, four-phase triage workflow to convert unorganized inputs (voice memos, audio transcripts, stream-of-consciousness capture, and brain dumps) into durable, compoundable knowledge artifacts. It prevents speculative triage waste through Phase 0 Front-gate (six forcing questions), extracts raw threads without filtering in Phase 1 (Extract), evaluates thread validity, falsifiability, and depth in Phase 2 (Evaluate), and synthesizes a tiered `gold-found.md` document in Phase 3 (Synthesize). To prevent disconnected orphan notes from accumulating, it mandates an Elaboration Gate requiring High-Signal threads to explicitly link to existing workspace artifacts (skills, ADRs, Serena memories, issues, or session logs).

## Phase — required
cross-phase

## Inputs — required
- Trigger phrases: `pan for gold`, `triage transcript`, `synthesize gold-found` (.claude/skills/panning-for-gold/SKILL.md:18-20)
- Unstructured captures: transcripts and brain dumps placed in `<workspace>/transcripts/` (.claude/skills/panning-for-gold/SKILL.md:41)
- Phase 0 front-gate forcing questions answered inline (.claude/skills/panning-for-gold/SKILL.md:55-62)
- Existing workspace artifacts for the elaboration gate:
  - Skills: `.claude/skills/<name>/SKILL.md` (.claude/skills/panning-for-gold/SKILL.md:97)
  - ADRs: `.agents/architecture/ADR-*.md` (.claude/skills/panning-for-gold/SKILL.md:98)
  - Serena memories: `.serena/memories/**` (.claude/skills/panning-for-gold/SKILL.md:99)
  - Open GitHub issues (.claude/skills/panning-for-gold/SKILL.md:100)
  - Prior session logs: `.agents/sessions/YYYY-MM-DD-session-*.json` (.claude/skills/panning-for-gold/SKILL.md:101)

## Outputs — required
- Initial and final thread inventories written to `<workspace>/inventories/` (.claude/skills/panning-for-gold/SKILL.md:42)
- Per-thread evaluation files written to `<workspace>/evaluations/` (.claude/skills/panning-for-gold/SKILL.md:43)
- Consolidated `gold-found` documents written to `<workspace>/gold-found/` (.claude/skills/panning-for-gold/SKILL.md:44)

## Invokes — required
- script scripts/pan.py — .claude/skills/panning-for-gold/SKILL.md:124
- script scripts/inventory.py — .claude/skills/panning-for-gold/SKILL.md:125
- script scripts/synthesis.py — .claude/skills/panning-for-gold/SKILL.md:126
- reference references/inventory-template.md — .claude/skills/panning-for-gold/SKILL.md:139
- reference references/gold-found-template.md — .claude/skills/panning-for-gold/SKILL.md:140

## Invoked by — required
- skill book-to-skill — .claude/skills/book-to-skill/SKILL.md:31
- skill book-to-skill — .claude/skills/book-to-skill/SKILL.md:127
- skill world-model-diagnostic — .claude/skills/world-model-diagnostic/SKILL.md:291
- skill research-and-incorporate — .claude/skills/research-and-incorporate/SKILL.md:22

## Concepts named — required, verbatim
- `panning-for-gold` — .claude/skills/panning-for-gold/SKILL.md:2 — defined here
- `Front-gate` — .claude/skills/panning-for-gold/SKILL.md:10 — defined here
- `Extract` — .claude/skills/panning-for-gold/SKILL.md:10 — defined here
- `Evaluate` — .claude/skills/panning-for-gold/SKILL.md:10 — defined here
- `Synthesize` — .claude/skills/panning-for-gold/SKILL.md:10 — defined here
- `pan for gold` — .claude/skills/panning-for-gold/SKILL.md:18 — defined here
- `triage transcript` — .claude/skills/panning-for-gold/SKILL.md:19 — defined here
- `synthesize gold-found` — .claude/skills/panning-for-gold/SKILL.md:20 — defined here
- `front-gate-before-pipeline` — .claude/skills/panning-for-gold/SKILL.md:53 — used here
- `Demand Reality` — .claude/skills/panning-for-gold/SKILL.md:57 — defined here
- `Status Quo` — .claude/skills/panning-for-gold/SKILL.md:58 — defined here
- `Desperate Specificity` — .claude/skills/panning-for-gold/SKILL.md:59 — defined here
- `Narrowest Wedge` — .claude/skills/panning-for-gold/SKILL.md:60 — defined here
- `Observation` — .claude/skills/panning-for-gold/SKILL.md:61 — defined here
- `Future-fit` — .claude/skills/panning-for-gold/SKILL.md:62 — defined here
- `Signal` — .claude/skills/panning-for-gold/SKILL.md:75 — used here
- `Quote` — .claude/skills/panning-for-gold/SKILL.md:76 — used here
- `Context` — .claude/skills/panning-for-gold/SKILL.md:77 — used here
- `Initial take` — .claude/skills/panning-for-gold/SKILL.md:78 — used here
- `High-Signal` — .claude/skills/panning-for-gold/SKILL.md:91 — used here
- `Medium-Signal` — .claude/skills/panning-for-gold/SKILL.md:91 — used here
- `Low-Signal` — .claude/skills/panning-for-gold/SKILL.md:91 — used here
- `Elaboration gate` — .claude/skills/panning-for-gold/SKILL.md:93 — defined here

## Structure
- `# Panning for Gold` — .claude/skills/panning-for-gold/SKILL.md:8
- `## Triggers` — .claude/skills/panning-for-gold/SKILL.md:14
- `## When to Use` — .claude/skills/panning-for-gold/SKILL.md:22
- `## Workspace Layout` — .claude/skills/panning-for-gold/SKILL.md:35
- `## Process` — .claude/skills/panning-for-gold/SKILL.md:49
- `### Phase 0: Front-gate (run before Extract)` — .claude/skills/panning-for-gold/SKILL.md:51
- `### Phase 1: Extract` — .claude/skills/panning-for-gold/SKILL.md:66
- `### Phase 2: Evaluate` — .claude/skills/panning-for-gold/SKILL.md:83
- `### Phase 3: Synthesize` — .claude/skills/panning-for-gold/SKILL.md:89
- `## CLI` — .claude/skills/panning-for-gold/SKILL.md:109
- `## Scripts` — .claude/skills/panning-for-gold/SKILL.md:120
- `## Verification` — .claude/skills/panning-for-gold/SKILL.md:128
- `## References` — .claude/skills/panning-for-gold/SKILL.md:137

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/panning-for-gold/scripts/pan.py`, language: Python 3, lines: 218
- documented invocation:
  - "pan.py init      --workspace <path>" — .claude/skills/panning-for-gold/SKILL.md:112
  - "pan.py validate  --inventory <file>" — .claude/skills/panning-for-gold/SKILL.md:113
  - "pan.py merge     --pass1 <file> --final <file> --output <file>" — .claude/skills/panning-for-gold/SKILL.md:114
  - "pan.py synth     --inventory <file> --evaluations <dir> --output <file>" — .claude/skills/panning-for-gold/SKILL.md:115
  - "scripts/pan.py" — .claude/skills/panning-for-gold/SKILL.md:124
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/panning-for-gold/scripts/pan.py --help`
  abridged stdout:
  ```text
  usage: pan.py [-h] {init,validate,merge,synth} ...
  Triage raw input into evaluated thread inventories.
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in SKILL.md:
  - "`0` success; `1` validation failure (malformed inventory or evaluation); `2` usage or I/O error." — .claude/skills/panning-for-gold/SKILL.md:124
  Actual exit paths in code:
  - Returns 0 on successful command completion (.claude/skills/panning-for-gold/scripts/pan.py:103, 117, 139, 172).
  - Returns 1 on validation or synthesis logic errors (.claude/skills/panning-for-gold/scripts/pan.py:115, 130, 151, 164).
  - Returns 2 on path validation, missing files, missing directories, or overwrite without force (.claude/skills/panning-for-gold/scripts/pan.py:98, 112, 127, 135, 148, 155, 168).
- for validators/gates: can it exit non-zero? yes. does it fail on default branch? no.
- does output match documentation? yes.

- path: `.claude/skills/panning-for-gold/scripts/inventory.py`, language: Python 3, lines: 227
- documented invocation:
  - "scripts/inventory.py" — .claude/skills/panning-for-gold/SKILL.md:125
  - "The script delegates to `inventory.py` for parsing and merging, and `synthesis.py` for gold-found generation." — .claude/skills/panning-for-gold/SKILL.md:118
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/panning-for-gold/scripts/inventory.py`
  abridged stdout: (empty)
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented: "Returns to caller; surfaced through `pan.py` exit codes." — .claude/skills/panning-for-gold/SKILL.md:125
  Actual: Library module returning values or raising exceptions to caller (`pan.py`).
- for validators/gates: can it exit non-zero? no (library module). does it fail on default branch? no.
- does output match documentation? yes.

- path: `.claude/skills/panning-for-gold/scripts/synthesis.py`, language: Python 3, lines: 136
- documented invocation:
  - "scripts/synthesis.py" — .claude/skills/panning-for-gold/SKILL.md:126
  - "The script delegates to `inventory.py` for parsing and merging, and `synthesis.py` for gold-found generation." — .claude/skills/panning-for-gold/SKILL.md:118
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/panning-for-gold/scripts/synthesis.py`
  abridged stdout: (empty)
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented: "Returns to caller; surfaced through `pan.py` exit codes." — .claude/skills/panning-for-gold/SKILL.md:126
  Actual: Library module returning string or raising `SynthesisError` to caller (`pan.py`).
- for validators/gates: can it exit non-zero? no (library module). does it fail on default branch? no.
- does output match documentation? yes.

## Defects — required
- `doc-drift` · .claude/skills/panning-for-gold/SKILL.md:93 · Line 93 explains that the elaboration gate (`Connects to:`) is documentation-only and not enforced by `scripts/synthesis.py`, noting that future work may add a `pan.py validate --gold-found` check; however, the acceptance checklist at line 135 presents it as a mandatory verification checkbox.
- `missing-path` · .claude/skills/panning-for-gold/SKILL.md:53 · Mentions the external gstack skill `front-gate-before-pipeline` ("the gstack `front-gate-before-pipeline` skill if it is available in the workspace"), which does not exist in the repository tree.

## Observations
- Implements the cognitive elaboration principle (*Make It Stick*) (.claude/skills/panning-for-gold/SKILL.md:107), mandating that triaged threads connect to existing artifacts (skills, ADRs, Serena memories, issues, sessions) to avoid orphan note entropy.
- Vendor portability is declared (.claude/skills/panning-for-gold/SKILL.md:12), making optional external stores (`.agents/`, `.serena/`) best-effort targets that gracefully degrade if unavailable.

## Context cost
8880 bytes (~2220 tokens). Total skill bundle cost (SKILL.md + 2 references + 4 scripts) = 28,706 bytes (~7,177 tokens).
