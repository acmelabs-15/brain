---
package: addy
path: skills/constraint-driven-development/references/floor-guard.md
type: reference
bytes: 5851
unit: inv-addy-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/constraint-driven-development/references/floor-guard.md, sha256: dba15dad8f5a5cbae464ec8457e6dd014a7bcb3ad13a360a6908d54991a5415e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/constraint-driven-development/references/floor-guard.md

## Purpose — required, verbatim
> "Every numbered dimension in `CONSTRAINTS.md` maps to a de facto tool (Step 4). The **floor** does not: it is a diff-scoped check for the five moves in Step 6, and without a shipped reference every agent invents its own, so two runs (or a Python repo and a Go one) produce two different guards. That is the exact non-determinism this skill exists to remove." — skills/constraint-driven-development/references/floor-guard.md:3

## Design intent — required
Provides a stack-adaptable reference implementation (`floor-guard.mjs`) for enforcing the non-negotiable floor rules of `CONSTRAINTS.md` across working tree and pull request diffs. While numbered constraint dimensions map directly to existing ecosystem tools (linters, test runners, vulnerability scanners), the floor checks for agent shortcuts (added suppressions, deleted/skipped tests, stripped assertions, unfinished stubs, and loosened thresholds) lack a standard standalone tool. Without this shipped reference, each agent or project would invent divergent, inconsistent guard implementations; this reference establishes a unified contract, exit code standard (0/1/2), diff-gathering pattern (including untracked files), and AST/regex heuristics to prevent agents from lowering the quality bar.

## Phase — required
addy:Define ("Define" — README.md:356; reference for constraint-driven-development, executed across BUILD and REVIEW phases — skills/constraint-driven-development/SKILL.md:192, 194)

## Inputs — required
- Diff between merge base and working tree including untracked files: "- **Input:** the diff between the merge base and the working tree (added *and* removed lines, plus untracked files). A guard that reads only `git diff` misses new files and staged-but-uncommitted work." — skills/constraint-driven-development/references/floor-guard.md:9
- CLI arguments: `--base <ref>` (default: `origin/main`) — skills/constraint-driven-development/references/floor-guard.md:20, 25
- Optional path exemption configuration: `.constraintsignore` — skills/constraint-driven-development/references/floor-guard.md:98

## Outputs — required
- Standard process exit codes:
  - Exit `0`: clean change ("floor-guard: clean" — skills/constraint-driven-development/references/floor-guard.md:88)
  - Exit `1`: at least one floor violation ("floor violation(s):" — skills/constraint-driven-development/references/floor-guard.md:89)
  - Exit `2`: execution failure / missing merge base ("floor-guard: no merge base against " — skills/constraint-driven-development/references/floor-guard.md:35)
- Standard error logging reporting rule name and file location: "console.error(` [${f.rule}] ${f.file}: ${f.text}`);" — skills/constraint-driven-development/references/floor-guard.md:90
- No files written to disk.

## Invokes — required
- doc CONSTRAINTS.md — skills/constraint-driven-development/references/floor-guard.md:3

## Invoked by — required
- skill constraint-driven-development — skills/constraint-driven-development/SKILL.md:216

## Concepts named — required, verbatim
- `Floor guard` — skills/constraint-driven-development/references/floor-guard.md:1 — defined here
- `CONSTRAINTS.md` — skills/constraint-driven-development/references/floor-guard.md:3 — used here
- `floor` — skills/constraint-driven-development/references/floor-guard.md:3 — used here
- `merge base` — skills/constraint-driven-development/references/floor-guard.md:9 — used here
- `working tree` — skills/constraint-driven-development/references/floor-guard.md:9 — used here
- `untracked files` — skills/constraint-driven-development/references/floor-guard.md:9 — used here
- `silenced checker` — skills/constraint-driven-development/references/floor-guard.md:10 — used here
- `unfinished work` — skills/constraint-driven-development/references/floor-guard.md:10 — used here
- `Exceptions` — skills/constraint-driven-development/references/floor-guard.md:10 — used here
- `Redaction` — skills/constraint-driven-development/references/floor-guard.md:12 — used here
- `floor-guard.mjs` — skills/constraint-driven-development/references/floor-guard.md:19 — defined here
- `SUPPRESSIONS` — skills/constraint-driven-development/references/floor-guard.md:57 — defined here
- `STUBS` — skills/constraint-driven-development/references/floor-guard.md:59 — defined here
- `SKIPS` — skills/constraint-driven-development/references/floor-guard.md:61 — defined here
- `silenced-checker` — skills/constraint-driven-development/references/floor-guard.md:64 — defined here
- `unfinished-work` — skills/constraint-driven-development/references/floor-guard.md:65 — defined here
- `test-made-easier` — skills/constraint-driven-development/references/floor-guard.md:66 — defined here
- `new-exception` — skills/constraint-driven-development/references/floor-guard.md:67 — defined here
- `assertion-removed` — skills/constraint-driven-development/references/floor-guard.md:73 — defined here
- `threshold-lowered` — skills/constraint-driven-development/references/floor-guard.md:84 — defined here
- `.constraintsignore` — skills/constraint-driven-development/references/floor-guard.md:98 — defined here
- `Escalation Path` — skills/constraint-driven-development/references/floor-guard.md:99 — used here

## Structure
- `# Floor guard: reference implementation` — skills/constraint-driven-development/references/floor-guard.md:1
- `## Contract` — skills/constraint-driven-development/references/floor-guard.md:7
- `## Reference (Node, ~stack-agnostic patterns)` — skills/constraint-driven-development/references/floor-guard.md:15
- `## Adapting it` — skills/constraint-driven-development/references/floor-guard.md:95

## Scripts — required if type is script or the skill ships scripts
- path: `skills/constraint-driven-development/references/floor-guard.md` (embedded reference script `floor-guard.mjs`, lines 18-93)
- language: JavaScript (Node.js ESM)
- lines: 76 lines of script code (lines 18-93)
- documented invocation: `// Usage: node floor-guard.mjs [--base <ref>]   (default base: origin/main)` — skills/constraint-driven-development/references/floor-guard.md:20
- **executed:** yes
- actual command run: `node --input-type=module -e "$(sed -n '19,92p' sources/addy/skills/constraint-driven-development/references/floor-guard.md)" -- --base HEAD`
- abridged stdout: `floor-guard: clean`
- **actual exit code:** `0` (clean run against HEAD; also tested with `--base nonexistent-branch` yielding exit code `2` with `floor-guard: no merge base against nonexistent-branch`)
- documented exit codes: "- **Exit codes:** `0` clean, `1` at least one floor violation (block the change), `2` the guard could not run (no merge base, not a git repo). Never let a `2` read as a `0`." — skills/constraint-driven-development/references/floor-guard.md:11
- actual exit paths in code:
  - `process.exit(2);` — skills/constraint-driven-development/references/floor-guard.md:35
  - `process.exit(0);` — skills/constraint-driven-development/references/floor-guard.md:88
  - `process.exit(1);` — skills/constraint-driven-development/references/floor-guard.md:92
- for validators/gates: can it exit non-zero? Yes: exits 1 on detected floor violations, 2 when git merge base fails. Exits 0 on clean worktree.
- does the output match what the documentation claims? Yes, exit codes 0, 1, and 2 match documented contract exactly.

## Defects — required
none

## Observations
- Captures untracked files explicitly via `git ls-files --others --exclude-standard` followed by `git diff --no-index /dev/null <file>`, closing a common gap where git diff alone misses uncommitted files.
- Enforces strict secret redaction ("- **Reports the rule and the location, never the matched secret value.** Redaction is not optional (Step 4)." — skills/constraint-driven-development/references/floor-guard.md:12), preventing leaked keys from appearing in agent transcripts or commit messages.
- Targets five specific moves agents use to pass broken tests: silenced linters, skipped tests, removed assertions, unimplemented stubs, and loosened constraint thresholds.

## Context cost
5,851 bytes (~1,460 tokens) for this document. Isolated reference file (loads no external references).
