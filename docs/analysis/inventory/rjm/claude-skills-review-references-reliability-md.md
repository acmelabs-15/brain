---
package: rjm
path: .claude/skills/review/references/reliability.md
type: reference
bytes: 10147
unit: inv-rjm-152
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/references/reliability.md

## Purpose — required, verbatim
> "You are reviewing a pull request for production survivability: how the change behaves when its dependencies misbehave, time out, or fail." — .claude/skills/review/references/reliability.md:10

## Design intent — required
Provides the specialized reliability review axis prompt evaluating PR diffs across process boundaries for production survivability patterns, including timeouts on outbound calls, bounded retries with backoff and jitter, circuit breakers, bulkheads, bounded queue depths, and deadline propagation. It enforces manipulation-resistant context checks to prevent PRs from passing on truncated summaries. Without it, pull requests could introduce unbounded loops, missing network timeouts, cascading failures, or unconstrained resource usage that wedge production systems under failure conditions.

## Phase — required
rjm:review

## Inputs — required
- Context mode header `CONTEXT_MODE: [full|summary|partial]` — .claude/skills/review/references/reliability.md:14
- Pull request diff and supporting context
- Policy `AI-REVIEW-MODEL-POLICY.md` — .claude/skills/review/references/reliability.md:34
- Skill `slo-designer` — .claude/skills/review/references/reliability.md:51
- Skill `chaos-experiment` — .claude/skills/review/references/reliability.md:52
- Reference `release-it` in `software-engineering-library` — .claude/skills/review/references/reliability.md:53
- Reference `distributed-systems-fallacies.md` — .claude/skills/review/references/reliability.md:54

## Outputs — required
- Reliability Assessment rating table, Findings table, Recommendations, and Verdict block (`VERDICT: [PASS|WARN|CRITICAL_FAIL]`, `MESSAGE: [Brief explanation]`)
- Structured JSON output matching inline schema (`verdict`, `message`, `agent: "reliability"`, `timestamp`, `findings: [...]`) — .claude/skills/review/references/reliability.md:149-165
- Terminal verdict line matching regex — .claude/skills/review/references/reliability.md:190-191

## Invokes — required
- doc AI-REVIEW-MODEL-POLICY.md — .claude/skills/review/references/reliability.md:34
- skill slo-designer — .claude/skills/review/references/reliability.md:51
- skill chaos-experiment — .claude/skills/review/references/reliability.md:52
- reference release-it — .claude/skills/review/references/reliability.md:53
- reference distributed-systems-fallacies.md — .claude/skills/review/references/reliability.md:54
- config pr-quality-gate-output.schema.json — .claude/skills/review/references/reliability.md:147
- script verdict.py — .claude/skills/review/references/reliability.md:193

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:27
- skill review — .claude/skills/review/SKILL.md:29
- skill review — .claude/skills/review/SKILL.md:204

## Concepts named — required, verbatim
- `reliability` — .claude/skills/review/references/reliability.md:2 — defined here
- `production survivability` — .claude/skills/review/references/reliability.md:10 — defined here
- `Context Mode Enforcement` — .claude/skills/review/references/reliability.md:12 — defined here
- `CONTEXT_MODE` — .claude/skills/review/references/reliability.md:14 — used here
- `manipulation-resistance control` — .claude/skills/review/references/reliability.md:31 — defined here
- `Grounding Rules` — .claude/skills/review/references/reliability.md:36 — defined here
- `When This Axis Applies` — .claude/skills/review/references/reliability.md:43 — defined here
- `Reference Material` — .claude/skills/review/references/reliability.md:47 — defined here
- `Analysis Focus Areas` — .claude/skills/review/references/reliability.md:56 — defined here
- `Timeouts on Outbound Calls` — .claude/skills/review/references/reliability.md:58 — defined here
- `Retries` — .claude/skills/review/references/reliability.md:65 — defined here
- `exponential backoff and jitter` — .claude/skills/review/references/reliability.md:68 — used here
- `idempotency key` — .claude/skills/review/references/reliability.md:70 — used here
- `Circuit Breakers and Bulkheads` — .claude/skills/review/references/reliability.md:72 — defined here
- `Bounded Queues and Buffers` — .claude/skills/review/references/reliability.md:78 — defined here
- `Slow Responses and Deadlines` — .claude/skills/review/references/reliability.md:84 — defined here
- `Graceful Degradation and Health` — .claude/skills/review/references/reliability.md:90 — defined here
- `Reliability Assessment` — .claude/skills/review/references/reliability.md:99 — defined here
- `Findings` — .claude/skills/review/references/reliability.md:111 — defined here
- `Recommendations` — .claude/skills/review/references/reliability.md:117 — defined here
- `Verdict` — .claude/skills/review/references/reliability.md:121 — defined here
- `Critical Failure Triggers` — .claude/skills/review/references/reliability.md:134 — defined here
- `Structured JSON Output` — .claude/skills/review/references/reliability.md:145 — defined here
- `Output Schema` — .claude/skills/review/references/reliability.md:167 — defined here

## Structure
- `# Reliability Review Task` — .claude/skills/review/references/reliability.md:8
- `## Context Mode Enforcement (REQUIRED)` — .claude/skills/review/references/reliability.md:12
- `## Grounding Rules` — .claude/skills/review/references/reliability.md:36
- `## When This Axis Applies` — .claude/skills/review/references/reliability.md:43
- `## Reference Material` — .claude/skills/review/references/reliability.md:47
- `## Analysis Focus Areas` — .claude/skills/review/references/reliability.md:56
- `### 1. Timeouts on Outbound Calls` — .claude/skills/review/references/reliability.md:58
- `### 2. Retries` — .claude/skills/review/references/reliability.md:65
- `### 3. Circuit Breakers and Bulkheads` — .claude/skills/review/references/reliability.md:72
- `### 4. Bounded Queues and Buffers` — .claude/skills/review/references/reliability.md:78
- `### 5. Slow Responses and Deadlines` — .claude/skills/review/references/reliability.md:84
- `### 6. Graceful Degradation and Health` — .claude/skills/review/references/reliability.md:90
- `## Output Requirements` — .claude/skills/review/references/reliability.md:95
- `### Reliability Assessment` — .claude/skills/review/references/reliability.md:99
- `### Findings` — .claude/skills/review/references/reliability.md:111
- `### Recommendations` — .claude/skills/review/references/reliability.md:117
- `### Verdict` — .claude/skills/review/references/reliability.md:121
- `## Critical Failure Triggers` — .claude/skills/review/references/reliability.md:134
- `## Structured JSON Output` — .claude/skills/review/references/reliability.md:145
- `## Output Schema` — .claude/skills/review/references/reliability.md:167

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Manipulation-resistance control: Mandates that if `CONTEXT_MODE` is not `full` (`summary` or `partial`), the reviewer MUST NOT emit `PASS` (lines 25-29), preventing large PR diffs that trip summary mode from evading review.
- Grounding rules explicitly prohibit the LLM from asserting software versions are beta/unreleased or tools lack support based on stale training data.
- Scopes applicability strictly to integration points (network calls, child processes, queues, file watchers, MCP requests, retry loops), specifically instructing not to invent circuit breakers for in-process code (line 45).
- Declares vendor-portability status (line 198), noting that vendored installs rely on inline JSON schema documentation rather than `.agents/schemas/`.

## Context cost
10147 bytes (~2537 tokens). Invokes nothing additional unless referenced external skills/docs are consulted.
