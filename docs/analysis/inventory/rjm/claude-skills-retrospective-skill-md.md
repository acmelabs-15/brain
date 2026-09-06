---
package: rjm
path: .claude/skills/retrospective/SKILL.md
type: skill
bytes: 11109
unit: inv-rjm-149
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/retrospective/SKILL.md

## Purpose — required, verbatim
> "Turn execution experience into institutional knowledge." — .claude/skills/retrospective/SKILL.md:18

## Design intent — required
Orchestration contract replacing the legacy `retrospective` agent with a structured, reproducible 6-phase retrospective workflow (Phase 0: Data Gathering, Phase 1: Generate Insights, Phase 2: Diagnosis, Phase 3: Decide What to Do, Phase 4: Learning Extraction, Phase 5: Persist and Close). It transforms raw execution experience, session logs, git history, and GitHub PR/issue activity into durable institutional knowledge. It separates deterministic mechanics (gathering evidence and scoring statement atomicity via Python scripts) from human/agent cognitive reasoning (Five Whys, fishbone diagrams, force field analysis, action classification). Enforces quality gates (requiring >=70% atomicity for memory persistence), standardizes artifact structure against `learning-template.md`, supports filling automated skeleton files, and routes triage items to GitHub issues or backlog memory.

## Phase — required
rjm:support

## Inputs — required
- Scope description (session, task, date, PR) via user argument — .claude/skills/retrospective/SKILL.md:61
- Session log from `.agents/sessions/` — .claude/skills/retrospective/SKILL.md:62
- Git history via `git log` over the period — .claude/skills/retrospective/SKILL.md:63
- GitHub activity (PRs and issues via the `github` skill) — .claude/skills/retrospective/SKILL.md:64
- Auto-retro skeleton file: `YYYY-MM-DD-auto-retro.md` — .claude/skills/retrospective/SKILL.md:53

## Outputs — required
- Retrospective markdown artifact at `.agents/retrospective/YYYY-MM-DD-[scope].md` — .claude/skills/retrospective/SKILL.md:52
- Persistent memory entries in Serena memory for learnings scoring >=70% atomicity — .claude/skills/retrospective/SKILL.md:151
- GitHub issues created for P0/P1 Delta triage items — .claude/skills/retrospective/SKILL.md:156
- Backlog memory files stored for P2/P3 Delta items — .claude/skills/retrospective/SKILL.md:156

## Invokes — required
- reference learning-template.md — .claude/skills/retrospective/SKILL.md:51
- reference frameworks.md — .claude/skills/retrospective/SKILL.md:85
- reference frameworks.md — .claude/skills/retrospective/SKILL.md:87
- reference frameworks.md — .claude/skills/retrospective/SKILL.md:89
- reference frameworks.md — .claude/skills/retrospective/SKILL.md:99
- reference frameworks.md — .claude/skills/retrospective/SKILL.md:101
- reference frameworks.md — .claude/skills/retrospective/SKILL.md:103
- reference frameworks.md — .claude/skills/retrospective/SKILL.md:105
- reference frameworks.md — .claude/skills/retrospective/SKILL.md:107
- reference diagnosis-and-actions.md — .claude/skills/retrospective/SKILL.md:114
- reference diagnosis-and-actions.md — .claude/skills/retrospective/SKILL.md:118
- reference diagnosis-and-actions.md — .claude/skills/retrospective/SKILL.md:128
- reference diagnosis-and-actions.md — .claude/skills/retrospective/SKILL.md:130
- reference diagnosis-and-actions.md — .claude/skills/retrospective/SKILL.md:132
- reference diagnosis-and-actions.md — .claude/skills/retrospective/SKILL.md:139
- reference learning-template.md — .claude/skills/retrospective/SKILL.md:142
- reference diagnosis-and-actions.md — .claude/skills/retrospective/SKILL.md:153
- reference frameworks.md — .claude/skills/retrospective/SKILL.md:155
- script run_retrospective.py — .claude/skills/retrospective/SKILL.md:191
- script extract_evidence.py — .claude/skills/retrospective/SKILL.md:192
- script score_atomicity.py — .claude/skills/retrospective/SKILL.md:193
- reference frameworks.md — .claude/skills/retrospective/SKILL.md:197
- reference diagnosis-and-actions.md — .claude/skills/retrospective/SKILL.md:200
- reference learning-template.md — .claude/skills/retrospective/SKILL.md:203
- agent retrospective.md — .claude/skills/retrospective/SKILL.md:205

## Invoked by — required
- doc README.md — README.md:407
- command retro.md — .claude/commands/retro.md:55
- skill ai-agents-docs-of-record — .claude/skills/ai-agents-docs-of-record/SKILL.md:31

## Concepts named — required, verbatim
- `retrospective` — .claude/skills/retrospective/SKILL.md:2 — defined here
- `Five Whys` — .claude/skills/retrospective/SKILL.md:4 — used here
- `fishbone` — .claude/skills/retrospective/SKILL.md:4 — used here
- `atomicity` — .claude/skills/retrospective/SKILL.md:4 — used here
- `reflect` — .claude/skills/retrospective/SKILL.md:4 — used here
- `ADR-008` — .claude/skills/retrospective/SKILL.md:11 — used here
- `ADR-017` — .claude/skills/retrospective/SKILL.md:11 — used here
- `ADR-037` — .claude/skills/retrospective/SKILL.md:11 — used here
- `Phase 0: Data Gathering` — .claude/skills/retrospective/SKILL.md:80 — defined here
- `4-Step Debrief` — .claude/skills/retrospective/SKILL.md:84 — used here
- `Execution Trace` — .claude/skills/retrospective/SKILL.md:86 — used here
- `Outcome Classification` — .claude/skills/retrospective/SKILL.md:88 — used here
- `Mad, Sad, Glad` — .claude/skills/retrospective/SKILL.md:88 — used here
- `Phase 1: Generate Insights` — .claude/skills/retrospective/SKILL.md:94 — defined here
- `Fishbone Analysis` — .claude/skills/retrospective/SKILL.md:100 — used here
- `Force Field Analysis` — .claude/skills/retrospective/SKILL.md:102 — used here
- `Patterns and Shifts` — .claude/skills/retrospective/SKILL.md:104 — used here
- `Learning Matrix` — .claude/skills/retrospective/SKILL.md:106 — used here
- `Phase 2: Diagnosis` — .claude/skills/retrospective/SKILL.md:109 — defined here
- `Phase 3: Decide What to Do` — .claude/skills/retrospective/SKILL.md:123 — defined here
- `Action Classification` — .claude/skills/retrospective/SKILL.md:127 — used here
- `Keep, Drop, Add, Modify` — .claude/skills/retrospective/SKILL.md:127 — used here
- `SMART Validation` — .claude/skills/retrospective/SKILL.md:129 — used here
- `Dependency Ordering` — .claude/skills/retrospective/SKILL.md:131 — used here
- `Phase 4: Learning Extraction` — .claude/skills/retrospective/SKILL.md:134 — defined here
- `Atomicity Scoring` — .claude/skills/retrospective/SKILL.md:139 — used here
- `Learning Extraction Template` — .claude/skills/retrospective/SKILL.md:142 — used here
- `Phase 5: Persist and Close` — .claude/skills/retrospective/SKILL.md:147 — defined here
- `Serena memory` — .claude/skills/retrospective/SKILL.md:151 — used here
- `+/Delta` — .claude/skills/retrospective/SKILL.md:154 — used here
- `ROTI` — .claude/skills/retrospective/SKILL.md:154 — used here
- `Helped, Hindered, Hypothesis` — .claude/skills/retrospective/SKILL.md:154 — used here

## Structure
- `# Retrospective` — .claude/skills/retrospective/SKILL.md:14
- `## Triggers` — .claude/skills/retrospective/SKILL.md:28
- `## When to Use` — .claude/skills/retrospective/SKILL.md:40
- `## Inputs` — .claude/skills/retrospective/SKILL.md:57
- `## Process` — .claude/skills/retrospective/SKILL.md:73
- `### Phase 0: Data Gathering` — .claude/skills/retrospective/SKILL.md:80
- `### Phase 1: Generate Insights` — .claude/skills/retrospective/SKILL.md:94
- `### Phase 2: Diagnosis` — .claude/skills/retrospective/SKILL.md:109
- `### Phase 3: Decide What to Do` — .claude/skills/retrospective/SKILL.md:123
- `### Phase 4: Learning Extraction` — .claude/skills/retrospective/SKILL.md:134
- `### Phase 5: Persist and Close` — .claude/skills/retrospective/SKILL.md:147
- `## Success Criteria` — .claude/skills/retrospective/SKILL.md:161
- `## Boundaries` — .claude/skills/retrospective/SKILL.md:176
- `## Scripts` — .claude/skills/retrospective/SKILL.md:187
- `## References` — .claude/skills/retrospective/SKILL.md:195

## Scripts — required if type is script or the skill ships scripts
The skill ships three scripts:

### 1. `scripts/run_retrospective.py`
- path: `.claude/skills/retrospective/scripts/run_retrospective.py`, language: Python 3, lines: 519
- documented invocation:
  - "scripts/run_retrospective.py" — .claude/skills/retrospective/SKILL.md:191
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/retrospective/scripts/run_retrospective.py --project-dir /Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-10/.agents/worker_17 --output /Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-10/.agents/worker_17/test-retro.md --scope "2026-09-05-test" --learning "Always run lint before commit to prevent 50% of CI failures"`
  abridged stdout:
  ```
  /Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-10/.agents/worker_17/test-retro.md
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in SKILL.md:
  - "`0` artifact written; `1` a supplied learning scored below the persistence threshold (still written); `2` usage or configuration error; `3` unexpected external failure." — .claude/skills/retrospective/SKILL.md:191
  Actual exit paths in code:
  - `return 0` (.claude/skills/retrospective/scripts/run_retrospective.py:514) on success
  - `return 1` (.claude/skills/retrospective/scripts/run_retrospective.py:514) when `any_below` is true
  - `return 2` (.claude/skills/retrospective/scripts/run_retrospective.py:477, 492, 504) on configuration or argument errors
  - `return 3` (.claude/skills/retrospective/scripts/run_retrospective.py:486, 511) on external failures (gather exception, OSError)
  - `sys.exit(main())` — .claude/skills/retrospective/scripts/run_retrospective.py:518
- for validators/gates: can it exit non-zero? Yes (1 on learning below threshold, 2 on bad arguments, 3 on external failure). Does it fail on the source repo's own default branch? Runs cleanly and produces the artifact.
- does the output match what the documentation claims? Yes, matches section order and placeholders of learning-template.md.

### 2. `scripts/score_atomicity.py`
- path: `.claude/skills/retrospective/scripts/score_atomicity.py`, language: Python 3, lines: 299
- documented invocation:
  - "scripts/score_atomicity.py" — .claude/skills/retrospective/SKILL.md:193
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/retrospective/scripts/score_atomicity.py "The caching strategy was effective"`
  abridged stdout:
  ```
  Atomicity: 25% (Rejected)
  Deductions:
    vague: -20%
    missing_evidence: -25%
    no_action: -30%
  ```
  **actual exit code**: 1
- documented exit codes vs. actual exit paths:
  Documented in SKILL.md:
  - "`0` at or above threshold; `1` below threshold (refine or reject); `2` usage or configuration error." — .claude/skills/retrospective/SKILL.md:193
  Actual exit paths in code:
  - `return 0` (.claude/skills/retrospective/scripts/score_atomicity.py:294) when `result.score >= PERSISTENCE_THRESHOLD`
  - `return 1` (.claude/skills/retrospective/scripts/score_atomicity.py:294) when `result.score < PERSISTENCE_THRESHOLD`
  - `return 2` (.claude/skills/retrospective/scripts/score_atomicity.py:281) on empty learning
  - `sys.exit(main())` — .claude/skills/retrospective/scripts/score_atomicity.py:298
- for validators/gates: can it exit non-zero? Yes (1 when score < 70%, 2 on empty string). Does it fail on default branch? Not a repository validator.
- does the output match what the documentation claims? Yes, matches atomicity scoring rubric and quality thresholds from references/diagnosis-and-actions.md.

### 3. `scripts/extract_evidence.py`
- path: `.claude/skills/retrospective/scripts/extract_evidence.py`, language: Python 3, lines: 428
- documented invocation:
  - "scripts/extract_evidence.py" — .claude/skills/retrospective/SKILL.md:192
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/retrospective/scripts/extract_evidence.py --scope "2026-09-05" --project-dir /Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-10/.agents/worker_17`
  abridged stdout:
  ```json
  {
    "scope": "2026-09-05",
    "session_log_path": "",
    "session_log_available": false,
    "work_items": [],
    "outcomes": [],
    "git_available": true,
    "commits": [],
    "notes": [
      "No session log found under .agents/sessions/."
    ]
  }
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in SKILL.md:
  - "`0` evidence gathered (sources may be marked absent); `2` usage or configuration error; `3` unexpected external failure." — .claude/skills/retrospective/SKILL.md:192
  Actual exit paths in code:
  - `return 0` (.claude/skills/retrospective/scripts/extract_evidence.py:423) on evidence gathered
  - `return 2` (.claude/skills/retrospective/scripts/extract_evidence.py:408) on bad project-dir
  - `return 3` (.claude/skills/retrospective/scripts/extract_evidence.py:417) on unexpected exception
  - `sys.exit(main())` — .claude/skills/retrospective/scripts/extract_evidence.py:427
- for validators/gates: can it exit non-zero? Yes (2 on bad project directory, 3 on unhandled failure).
- does the output match what the documentation claims? Yes, returns JSON evidence bundle with graceful degradation flags.

## Defects — required
- `internal-contradiction` · .claude/skills/retrospective/SKILL.md:25,53,182 · Line 25 states the Stop hook that once invoked retrospective automatically was deleted in #3349, but lines 53 and 182 still refer to auto-retro skeletons produced by the Stop hook and the Stop hook parsing inputs to call this skill.

## Observations
- Orchestration contract transitioning retrospective from a monolithic 46KB agent prompt to a modular, declarative skill with external references and deterministic scripts.
- Integrates with external systems cleanly through graceful degradation: when session log or git history is absent, sections are marked rather than hallucinating facts.
- Incorporates explicit ADR traceability: ADR-008 (protocol automation lifecycle hooks), ADR-017 (tiered memory index architecture), ADR-035 (exit code standardization), and ADR-037 (memory router architecture).

## Context cost
11109 bytes (~2777 tokens); loads references and scripts totaling ~65KB (~16250 tokens).
