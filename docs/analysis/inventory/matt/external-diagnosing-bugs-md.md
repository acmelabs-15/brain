---
package: matt
path: external/diagnosing-bugs.md
type: external-doc
bytes: 358695
unit: inv-matt-13
deprecated: false
aliases: []
memo_inputs:
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/diagnosing-bugs.md

## Purpose — required, verbatim
> "Diagnose a hard bug, starting from a repro that fails." — external/diagnosing-bugs.md:24

## Design intent — required
Prevents AI coding agents from jumping straight into ungrounded hypothesizing and code modification when confronted with complex bugs or regressions. Enforces a strict, gate-based six-phase diagnostic discipline requiring an automated, tight, red-capable reproduction loop before any hypothesis generation, instrumentation, or code fixes can occur. Without it, coding agents succumb to premature guessing and speculative code edits that produce ineffective or regression-prone fixes on subtle, intermittent, or system-level bugs.

## Phase — required
matt:Upkeep (in documentation navigation series item 4.2); also described as "is a reach-for-it-anytime standalone. You drop into it when something is broken and drop out when the fix and its regression test are in; it holds no state and needs no prior setup." — external/diagnosing-bugs.md:77

## Inputs — required
- Defect report: a bug report or symptom description ("diagnose", "debug this", something broken, throwing, failing, or slow) — external/diagnosing-bugs.md:28
- Existing feedback loop or reproduction seam (test suite, dev server, CLI fixture, headless browser, captured network/log trace, bisection harness) — external/diagnosing-bugs.md:34-43
- Environment access, captured artifacts (HAR files, log dumps, core dumps), or permission for temporary instrumentation when automated loop cannot be built — external/diagnosing-bugs.md:46, 61
- User guidance on ranked hypotheses (optional checkpoint before testing) — external/diagnosing-bugs.md:49, 57

## Outputs — required
- Minimal reproducible failure scenario / tight red feedback loop (fast, deterministic, sharp command) — external/diagnosing-bugs.md:45, 49
- 3–5 ranked, falsifiable hypotheses with explicit predictions — external/diagnosing-bugs.md:49, 71
- Targeted probes with tagged debug logs (`[DEBUG-a4f2]`) — external/diagnosing-bugs.md:49, 72
- Fix with regression test exercising the correct seam (or documented finding that no correct seam exists) — external/diagnosing-bugs.md:50, 74
- Commit or PR message stating the verified hypothesis — external/diagnosing-bugs.md:49, 73
- Cleaned codebase with temporary instrumentation removed — external/diagnosing-bugs.md:49, 72
- Hand-off recommendation to `improve-codebase-architecture` if correct seam is absent — external/diagnosing-bugs.md:50, 78

## Invokes — required
- command /diagnosing-bugs — external/diagnosing-bugs.md:28
- skill improve-codebase-architecture — external/diagnosing-bugs.md:50
- skill triage — external/diagnosing-bugs.md:58
- skill prototype — external/diagnosing-bugs.md:30
- skill tdd — external/diagnosing-bugs.md:30
- skill ask-matt — external/diagnosing-bugs.md:77
- script scripts/hitl-loop.template.sh — external/diagnosing-bugs.md:43
- command /diagnose — external/diagnosing-bugs.md:64

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `diagnosing-bugs` — external/diagnosing-bugs.md:24 — defined here
- `six-phase diagnosis` — external/diagnosing-bugs.md:25 — defined here
- `regression test` — external/diagnosing-bugs.md:25 — used here
- `performance regression` — external/diagnosing-bugs.md:25 — used here
- `feedback loop` — external/diagnosing-bugs.md:26 — defined here
- `bisection` — external/diagnosing-bugs.md:26 — used here
- `hypothesis-testing` — external/diagnosing-bugs.md:26 — used here
- `instrumentation` — external/diagnosing-bugs.md:26 — used here
- `/diagnosing-bugs` — external/diagnosing-bugs.md:28 — used here
- `model-invoked` — external/diagnosing-bugs.md:28 — used here
- `triage` — external/diagnosing-bugs.md:30 — used here
- `prototype` — external/diagnosing-bugs.md:30 — used here
- `tdd` — external/diagnosing-bugs.md:30 — used here
- `improve-codebase-architecture` — external/diagnosing-bugs.md:30 — used here
- `Phase 1` — external/diagnosing-bugs.md:32 — defined here
- `failing test` — external/diagnosing-bugs.md:34 — used here
- `snapshot` — external/diagnosing-bugs.md:36 — used here
- `replayed capture` — external/diagnosing-bugs.md:38 — used here
- `throwaway harness` — external/diagnosing-bugs.md:39 — used here
- `fuzz loop` — external/diagnosing-bugs.md:40 — used here
- `bisection harness` — external/diagnosing-bugs.md:41 — used here
- `git bisect run` — external/diagnosing-bugs.md:41 — used here
- `differential loop` — external/diagnosing-bugs.md:42 — used here
- `human-in-the-loop` — external/diagnosing-bugs.md:43 — used here
- `reproduction rate` — external/diagnosing-bugs.md:45 — used here
- `temporary instrumentation` — external/diagnosing-bugs.md:46 — used here
- `gates` — external/diagnosing-bugs.md:48 — defined here
- `Phase 2` — external/diagnosing-bugs.md:49 — defined here
- `Phase 3` — external/diagnosing-bugs.md:49 — defined here
- `Phase 4` — external/diagnosing-bugs.md:49 — defined here
- `Phase 5` — external/diagnosing-bugs.md:49 — defined here
- `load-bearing` — external/diagnosing-bugs.md:49 — used here
- `commit message` — external/diagnosing-bugs.md:49 — used here
- `correct seam` — external/diagnosing-bugs.md:50 — defined here
- `post-mortem` — external/diagnosing-bugs.md:50 — used here
- `performance branch` — external/diagnosing-bugs.md:55 — defined here
- `human checkpoint` — external/diagnosing-bugs.md:57 — defined here
- `root cause` — external/diagnosing-bugs.md:57 — used here
- `redaction guardrail` — external/diagnosing-bugs.md:61 — used here
- `hitl-loop.template.sh` — external/diagnosing-bugs.md:63 — used here
- `/diagnose` — external/diagnosing-bugs.md:64 — used here
- `standalone` — external/diagnosing-bugs.md:77 — defined here
- `ask-matt` — external/diagnosing-bugs.md:77 — used here
- `handoff` — external/diagnosing-bugs.md:78 — used here

## Structure
- "What it does" — external/diagnosing-bugs.md:24
- "When to reach for it" — external/diagnosing-bugs.md:27
- "The tight loop is the skill" — external/diagnosing-bugs.md:31
- "The gates between phases" — external/diagnosing-bugs.md:47
- "Common questions" — external/diagnosing-bugs.md:51
- "It&#x27;s working if" — external/diagnosing-bugs.md:66
- "Where it fits" — external/diagnosing-bugs.md:76
- "Related reading" — external/diagnosing-bugs.md:78

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/diagnosing-bugs.md:61 — External documentation asserts "None of those are sanitised by instruction." and "proposes a redaction guardrail. It is open and unimplemented. Treat redaction as your job for now" whereas in-repo skill definition `skills/engineering/diagnosing-bugs/SKILL.md:12-14` already specifies a mandatory `## Redact` section: "Redact every secret first: write <REDACTED> in its place."
- doc-drift — external/diagnosing-bugs.md:59 — External documentation notes that "Partly, and neither skill admits it." and "Triage&#x27;s step 3 is essentially a shallow, bounded instance of diagnosing-bugs Phase 1–2, but neither file mentions the other.", but neither in-repo skill references the other.
- orphan — external/diagnosing-bugs.md:1 — External documentation snapshot fetched from https://aihero.dev/skills-diagnosing-bugs; nothing within the source repository references this external documentation path directly.

## Observations
- Strict gate discipline: The skill explicitly treats phases as hard gates rather than a checklist ("The phases are gates, not a checklist. Each one refuses to open until something specific is true." — external/diagnosing-bugs.md:48), enforcing that an automated, tight, red-capable command must exist before any hypothesis generation or coding can begin ("If no red-capable command exists, there is no Phase 2." — external/diagnosing-bugs.md:26).
- Ladder of loop construction: Provides a 10-level hierarchy for constructing the tight feedback loop, from unit/integration tests to HTTP curls, CLI diffs, headless browser tests, trace replays, fuzz loops, and human-in-the-loop bash scripts.
- Architectural escape hatch: In Phase 5, if no correct seam exists to exercise the bug at the call site, the skill instructs the agent to document the absence as a finding rather than writing a shallow test, routing to `improve-codebase-architecture` for post-mortem analysis.
- Real-world failure modes: FAQ documents concrete issues reported by community users on GitHub, such as over-triggering on GPT-5.6-Sol (issue #578), human gate desires before writing fixes (issue #124), and potential secret leakage in pasted repro output (issue #674).
- High HTML wrapper overhead: The raw snapshot is 358,695 bytes, but the actual markdown/article prose comprises ~12 KB; the remaining ~346 KB consists of inlined SVG icons, Next.js hydration payloads, and site navigation menus.

## Context cost
358,695 bytes (raw HTML snapshot). If loaded in full into LLM context, consumes ~90,000 tokens. The actual article prose alone is ~12 KB (~3,000 tokens).
