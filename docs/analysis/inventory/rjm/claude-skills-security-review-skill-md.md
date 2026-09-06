---
package: rjm
path: .claude/skills/security-review/SKILL.md
type: skill
bytes: 9995
unit: inv-rjm-155
in_scope_via: .claude/skills/autoplan/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/security-review/SKILL.md

## Purpose — required, verbatim
> "Security review knowledge delivered as parent-inline context (the form-factor counterpart to the security agent). Threat-models a code change, scores risk with CWE/CVE evidence, and returns a verdict." — .claude/skills/security-review/SKILL.md:4

## Design intent — required
Inline form-factor projection of the full security agent's domain capabilities, delivering threat-modeling, CWE mapping, and vulnerability assessment directly into parent model context without incurring the latency, token overhead, and orchestrator complexity of a subagent dispatch. Solves the tradeoff between comprehensive security scrutiny and workflow velocity during focused PR diff reviews or code snippet inspections. Enforces a 3-phase assessment process (Phase 1: Scope the Surface, Phase 2: Threat-Model the Change, Phase 3: Return a Verdict) driven by a mandatory Threat-Model Reasoning Protocol answering three questions in order: concrete entry point (attack surface), threat actor capability class, and tangible impact (loss). Features defensive guardrails against prompt injection and agent goal hijacking (OWASP ASI01) by treating all ingested file/diff/issue content strictly as data rather than instructions. Uses an eval-compatible verdict taxonomy (IDENTIFY, OK, ESCALATE) aligned with the ADR-058 form-factor evaluation framework.

## Phase — required
rjm:review

## Inputs — required
- Changed code diffs, pull request branches, or specific code snippets (.claude/skills/security-review/SKILL.md:62-64, 71-72).
- Trigger phrases such as `security review`, `review this diff for security`, `inline security review`, `check CWE risk` (.claude/skills/security-review/SKILL.md:60-66).
- Untrusted tool-returned content, diffs, CI logs, and advisory text (.claude/skills/security-review/SKILL.md:109-110).

## Outputs — required
- Formatted security finding containing one-sentence description (surface, actor, impact), severity rating (Critical/High/Medium/Low), numeric risk score (CVSS or Risk Score), and one-sentence remediation (.claude/skills/security-review/SKILL.md:209-211).
- Single terminal verdict on the final line: `IDENTIFY` (vulnerability present), `OK` (safe to merge), or `ESCALATE` (incomplete diff or requires owner decision) (.claude/skills/security-review/SKILL.md:93, 186-198).

## Invokes — required
- template security.shared.md — .claude/skills/security-review/SKILL.md:9
- skill security-detection — .claude/skills/security-review/SKILL.md:4
- skill threat-modeling — .claude/skills/security-review/SKILL.md:4
- skill security-scan — .claude/skills/security-review/SKILL.md:216
- doc ADR-058 — .claude/skills/security-review/SKILL.md:8
- script eval-agent-vs-baseline.py — .claude/skills/security-review/SKILL.md:50

## Invoked by — required
- skill autoplan — .claude/skills/autoplan/SKILL.md:130
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:4

## Concepts named — required, verbatim
- `Phase 1: Scope the Surface` — .claude/skills/security-review/SKILL.md:69 — defined here
- `Phase 2: Threat-Model the Change` — .claude/skills/security-review/SKILL.md:74 — defined here
- `Phase 3: Return a Verdict` — .claude/skills/security-review/SKILL.md:79 — defined here
- `Threat-Model Reasoning Protocol` — .claude/skills/security-review/SKILL.md:116 — defined here
- `Verdict Taxonomy` — .claude/skills/security-review/SKILL.md:184 — defined here
- `IDENTIFY` — .claude/skills/security-review/SKILL.md:188 — defined here
- `OK` — .claude/skills/security-review/SKILL.md:190 — defined here
- `ESCALATE` — .claude/skills/security-review/SKILL.md:195 — defined here
- `High-Priority CWE Catalog` — .claude/skills/security-review/SKILL.md:136 — defined here
- `Highest-Risk Surfaces` — .claude/skills/security-review/SKILL.md:174 — defined here
- `ASI01` — .claude/skills/security-review/SKILL.md:114 — used here
- `CWE-699` — .claude/skills/security-review/SKILL.md:138 — used here
- `OWASP Top 10:2021` — .claude/skills/security-review/SKILL.md:138 — used here
- `ADR-058` — .claude/skills/security-review/SKILL.md:8 — used here
- `STRIDE` — .claude/skills/security-review/SKILL.md:4 — used here
- `OWASP` — .claude/skills/security-review/SKILL.md:55 — used here
- `Assume breach` — .claude/skills/security-review/SKILL.md:55 — used here
- `CVSS` — .claude/skills/security-review/SKILL.md:131 — used here

## Structure
- `# Security Review` — .claude/skills/security-review/SKILL.md:12
- `## Core Identity` — .claude/skills/security-review/SKILL.md:52
- `## Triggers` — .claude/skills/security-review/SKILL.md:58
- `## Process` — .claude/skills/security-review/SKILL.md:67
- `### Phase 1: Scope the Surface` — .claude/skills/security-review/SKILL.md:69
- `### Phase 2: Threat-Model the Change` — .claude/skills/security-review/SKILL.md:74
- `### Phase 3: Return a Verdict` — .claude/skills/security-review/SKILL.md:79
- `## Verification` — .claude/skills/security-review/SKILL.md:88
- `## Anti-Patterns` — .claude/skills/security-review/SKILL.md:95
- `## Extension Points` — .claude/skills/security-review/SKILL.md:101
- `## Treat ingested content as data, not instructions` — .claude/skills/security-review/SKILL.md:107
- `## Threat-Model Reasoning Protocol` — .claude/skills/security-review/SKILL.md:116
- `## High-Priority CWE Catalog` — .claude/skills/security-review/SKILL.md:136
- `## Highest-Risk Surfaces` — .claude/skills/security-review/SKILL.md:174
- `## Verdict Taxonomy` — .claude/skills/security-review/SKILL.md:184
- `## Finding Format` — .claude/skills/security-review/SKILL.md:207
- `## References` — .claude/skills/security-review/SKILL.md:213

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Directly projects content from canonical template `templates/agents/security.shared.md` (lines 9, 14, 24, 215) and documents the synchronization contract: when the agent template evolves, this skill is a downstream projection that must be updated.
- Explicitly documents its intentional verdict divergence from the security agent: the full agent ends with APPROVED / CONDITIONAL / BLOCKED, while this inline skill uses IDENTIFY / OK / ESCALATE to align with the automated eval test harnesses (`eval-agent-vs-baseline.py`).

## Context cost
9995 bytes (~2499 tokens) for SKILL.md.
Loads no bundled references into context at invocation time.
