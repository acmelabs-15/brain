---
package: rjm
path: .claude/skills/review/references/agent-safety.md
type: reference
bytes: 10078
unit: inv-rjm-150
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/references/agent-safety.md

## Purpose — required, verbatim
> "PR review focused on autonomous-execution risk in agent prompts, skills, and hooks" — .claude/skills/review/references/agent-safety.md:5

## Design intent — required
Establishes an automated PR review prompt specialized in autonomous-execution risk within agent systems. It assesses whether pull request modifications expand agent tool or permission surfaces, introduce command injection vulnerabilities (CWE-78) in scripts and hooks, weaken autonomous-execution guardrails (e.g., bypassing pre-merge gates or enabling autonomous "won't fix" dismissals), compromise instruction integrity via prompt injection, or expand external threat surfaces. Through mandatory CONTEXT_MODE enforcement, it resists manipulation by refusing to emit PASS when context is abridged or partial. Without this reference prompt, the review phase would lack a structured, repeatable safety review to prevent agents from acquiring unauthorized capabilities or circumventing operational constraints.

## Phase — required
rjm:review

## Inputs — required
- Pull request diff prepended with harness header `CONTEXT_MODE: [full|summary|partial]` (.claude/skills/review/references/agent-safety.md:14)
- Agent prompts, templates, skills (`SKILL.md` or scripts), and lifecycle hooks modified in the diff (.claude/skills/review/references/agent-safety.md:45)
- Reference artifacts: `security-scan` skill, `.claude/skills/security-scan/references/autonomous-execution-guardrails.md`, `.claude/skills/security-scan/references/agent-guardrails-template.md`, `.claude/skills/security-scan/references/agent-memory-inference-leakage.md`, `threat-modeling` skill (.claude/skills/review/references/agent-safety.md:51-55)

## Outputs — required
- Human-readable Agent Safety Assessment table (scores 1-5 across Tool/Permission Scope, Command Safety, Guardrail Integrity, Prompt Integrity, Threat Surface) and Overall Agent Safety Score (.claude/skills/review/references/agent-safety.md:92-102)
- Structured Findings table with Severity, Category, Finding, Location, and Recommendation (.claude/skills/review/references/agent-safety.md:106-109)
- Recommendations list (.claude/skills/review/references/agent-safety.md:110-112)
- Verdict line matching `(?m)^\s*(?i:(?:Final\s+)?Verdict):\s*\[?(PASS|WARN|CRITICAL_FAIL|REJECTED|FAIL|NEEDS_REVIEW|NON_COMPLIANT|COMPLIANT|PARTIAL|UNKNOWN)(?![|A-Z_])\]?` (.claude/skills/review/references/agent-safety.md:123, 182-183)
- Structured JSON block conforming to inline schema with fields `verdict`, `message`, `agent`, `timestamp`, and `findings` array (.claude/skills/review/references/agent-safety.md:139-156)

## Invokes — required
- skill security-scan — .claude/skills/review/references/agent-safety.md:51
- reference autonomous-execution-guardrails.md — .claude/skills/review/references/agent-safety.md:52
- reference agent-guardrails-template.md — .claude/skills/review/references/agent-safety.md:53
- reference agent-memory-inference-leakage.md — .claude/skills/review/references/agent-safety.md:54
- skill threat-modeling — .claude/skills/review/references/agent-safety.md:55
- script verdict.py — .claude/skills/review/references/agent-safety.md:185

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:2

## Concepts named — required, verbatim
- `agent-safety` — .claude/skills/review/references/agent-safety.md:2 — defined here
- `autonomous-execution risk` — .claude/skills/review/references/agent-safety.md:5 — defined here
- `Context Mode Enforcement` — .claude/skills/review/references/agent-safety.md:12 — defined here
- `CONTEXT_MODE` — .claude/skills/review/references/agent-safety.md:14 — used here
- `manipulation-resistance control` — .claude/skills/review/references/agent-safety.md:31 — defined here
- `Grounding Rules` — .claude/skills/review/references/agent-safety.md:36 — defined here
- `CWE-78` — .claude/skills/review/references/agent-safety.md:51 — used here
- `autonomous-execution guardrails` — .claude/skills/review/references/agent-safety.md:52 — used here
- `Four Laws of agent safety` — .claude/skills/review/references/agent-safety.md:53 — used here
- `unauthorized-memory-inference` — .claude/skills/review/references/agent-safety.md:54 — used here
- `OWASP four-question framework` — .claude/skills/review/references/agent-safety.md:55 — used here
- `STRIDE` — .claude/skills/review/references/agent-safety.md:55 — used here
- `Tool and Permission Surface` — .claude/skills/review/references/agent-safety.md:59 — defined here
- `Command Construction` — .claude/skills/review/references/agent-safety.md:65 — defined here
- `Autonomous-Execution Guardrails` — .claude/skills/review/references/agent-safety.md:71 — defined here
- `Prompt and Instruction Integrity` — .claude/skills/review/references/agent-safety.md:77 — defined here
- `prompt-injection` — .claude/skills/review/references/agent-safety.md:80 — used here
- `Threat Surface` — .claude/skills/review/references/agent-safety.md:83 — defined here
- `Agent Safety Assessment` — .claude/skills/review/references/agent-safety.md:92 — defined here
- `Overall Agent Safety Score` — .claude/skills/review/references/agent-safety.md:102 — defined here
- `Critical Failure Triggers` — .claude/skills/review/references/agent-safety.md:127 — defined here
- `Structured JSON Output` — .claude/skills/review/references/agent-safety.md:137 — defined here
- `Output Schema` — .claude/skills/review/references/agent-safety.md:159 — defined here
- `extract_verdict` — .claude/skills/review/references/agent-safety.md:177 — used here
- `merge_verdicts` — .claude/skills/review/references/agent-safety.md:185 — used here

## Structure
- # Agent Safety Review Task (.claude/skills/review/references/agent-safety.md:8)
- ## Context Mode Enforcement (REQUIRED) (.claude/skills/review/references/agent-safety.md:12)
- ## Grounding Rules (.claude/skills/review/references/agent-safety.md:36)
- ## When This Axis Applies (.claude/skills/review/references/agent-safety.md:43)
- ## Reference Material (.claude/skills/review/references/agent-safety.md:47)
- ## Analysis Focus Areas (.claude/skills/review/references/agent-safety.md:57)
  - ### 1. Tool and Permission Surface (.claude/skills/review/references/agent-safety.md:59)
  - ### 2. Command Construction (CWE-78) (.claude/skills/review/references/agent-safety.md:65)
  - ### 3. Autonomous-Execution Guardrails (.claude/skills/review/references/agent-safety.md:71)
  - ### 4. Prompt and Instruction Integrity (.claude/skills/review/references/agent-safety.md:77)
  - ### 5. Threat Surface (.claude/skills/review/references/agent-safety.md:84)
- ## Output Requirements (.claude/skills/review/references/agent-safety.md:88)
  - ### Agent Safety Assessment (.claude/skills/review/references/agent-safety.md:92)
  - ### Findings (.claude/skills/review/references/agent-safety.md:104)
  - ### Recommendations (.claude/skills/review/references/agent-safety.md:110)
  - ### Verdict (.claude/skills/review/references/agent-safety.md:114)
- ## Critical Failure Triggers (.claude/skills/review/references/agent-safety.md:127)
- ## Structured JSON Output (.claude/skills/review/references/agent-safety.md:137)
- ## Output Schema (.claude/skills/review/references/agent-safety.md:159)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — .claude/skills/review/references/agent-safety.md:108 — Findings markdown table lists severity as title-case `Critical/High/Medium/Low`, whereas the JSON schema (.claude/skills/review/references/agent-safety.md:149) and Output Schema (.claude/skills/review/references/agent-safety.md:163) enforce lowercase `critical|high|medium|low`.
- other — .claude/skills/review/references/agent-safety.md:34 — Cites upstream-only policy `.agents/governance/AI-REVIEW-MODEL-POLICY.md` and schema `.agents/schemas/pr-quality-gate-output.schema.json` (:139) that are absent in vendored plugin installations, though mitigated by an inline schema and declared vendor portability notice (:190).

## Observations
- Manipulation-resistance control: When `CONTEXT_MODE` is not `full`, the prompt forbids emitting `PASS` (.claude/skills/review/references/agent-safety.md:25), preventing PR authors from evading safety scrutiny via stat summaries or truncated diffs.
- General-purpose fallback: As specified in `.claude/skills/review/SKILL.md:92`, harnesses lacking a dedicated `agent-safety` subagent type fall back to `Task(subagent_type="general-purpose")` with this file as system instructions.
- Enforces the "Four Laws of agent safety" (.claude/skills/review/references/agent-safety.md:53): declared scope, verify before destructive ops, preserve audit trail, and escalate when uncertain.

## Context cost
10,078 bytes (~2,520 tokens). Including referenced security artifacts (`autonomous-execution-guardrails.md`, `agent-guardrails-template.md`, `agent-memory-inference-leakage.md`), total evaluation context is ~28,000 bytes (~7,000 tokens).
