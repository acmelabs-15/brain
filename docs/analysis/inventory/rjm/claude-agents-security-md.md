---
package: rjm
path: .claude/agents/security.md
type: agent
bytes: 36096
unit: inv-rjm-72
in_scope_via: .claude/commands/test.md
aliases: []
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/security.md

## Purpose — required, verbatim
> "Security specialist with a defense-first mindset. Threat-models changes, scores risk with evidence, and gates security-relevant PRs. Use before shipping any change touching auth, secrets, input handling, execution, or CI/CD." — .claude/agents/security.md:3

## Design intent — required
Defense-first security gatekeeper and vulnerability specialist that enforces rigorous application and agentic security standards across all pull requests. It operates under strict tool isolation—mandating no shell access on any surface to make command injection and file-mutation vectors physically unreachable, rather than relying on bypassable configuration deny-lists. It mandates a two-phase verification model: pre-implementation impact analysis and mandatory post-implementation verification (PIV). By combining classical CWE/OWASP Top 10 scanning with OWASP Agentic Top 10 (ASI01–ASI10) protections (treating all ingested LLM content as untrusted data), numeric risk/CVSS scoring, and a strict blocking gate (APPROVED, CONDITIONAL, BLOCKED), it ensures that security controls are provably verified rather than merely documented.

## Phase — required
cross-phase

## Inputs — required
- Code, feature, or changes to security review via prompt argument ("argument-hint: Specify the code, feature, or changes to security review" — .claude/agents/security.md:9)
- Pinned changeset diffs via GitHub read tools or caller-supplied diff artifacts ("Bind a review to a SHA or PR. This is the enumeration path, not a fallback." — .claude/agents/security.md:89)
- Codebase source files via read-only tools ("Analyze code for vulnerabilities (read-only)" — .claude/agents/security.md:86)
- CVE and security advisory research via web tools ("Research CVEs, security advisories" — .claude/agents/security.md:87)
- Historical security findings from Serena memory ("Retrieve prior findings" — .claude/agents/security.md:93)
- Impact analysis requests during the planning phase (.claude/agents/security.md:356)
- Orchestrator post-implementation routing triggered by security-relevant file patterns ("SECURITY_TRIGGERS" — .claude/agents/security.md:378)
- External CI environment security test execution results supplied by caller or implementer ("CI Environment Security Testing (request, do not run)" — .claude/agents/security.md:437)

## Outputs — required
- Post-Implementation Verification reports saved to destination path (".agents/security/PIV-[feature].md" — .claude/agents/security.md:504)
- Impact Analysis deliverable reports saved to destination path (".agents/planning/impact-analysis-security-[feature].md" — .claude/agents/security.md:562)
- Formal threat model documents saved to destination path (".agents/security/TM-NNN-[feature].md" — .claude/agents/security.md:719)
- Security reports saved to destination path (".agents/security/SR-NNN-[scope].md" — .claude/agents/security.md:734)
- Finding tracking entries created via TodoWrite ("Track security findings" — .claude/agents/security.md:91)
- Persisted vulnerability observations stored in Serena memory ("Persist new findings" — .claude/agents/security.md:94)
- Review verdicts based on explicit completion criteria ("Completion Trigger Taxonomy" — .claude/agents/security.md:217)

## Invokes — required
- tool Read — .claude/agents/security.md:32
- tool Grep — .claude/agents/security.md:33
- tool Glob — .claude/agents/security.md:34
- tool WebSearch — .claude/agents/security.md:35
- tool WebFetch — .claude/agents/security.md:36
- tool TodoWrite — .claude/agents/security.md:37
- tool Write — .claude/agents/security.md:38
- tool mcp__github__pull_request_read — .claude/agents/security.md:39
- tool mcp__github__get_commit — .claude/agents/security.md:40
- tool mcp__github__list_commits — .claude/agents/security.md:41
- tool mcp__github__get_file_contents — .claude/agents/security.md:42
- tool mcp__github__search_code — .claude/agents/security.md:43
- tool mcp__github__issue_read — .claude/agents/security.md:44
- tool mcp__serena__list_memories — .claude/agents/security.md:45
- tool mcp__serena__read_memory — .claude/agents/security.md:46
- tool mcp__serena__write_memory — .claude/agents/security.md:47
- tool mcp__serena__edit_memory — .claude/agents/security.md:48
- reference powershell-security-checklist.md — .claude/agents/security.md:715
- reference threat-model-template.md — .claude/agents/security.md:719
- reference dependency-risk-scoring.md — .claude/agents/security.md:781
- agent implementer — .claude/agents/security.md:774
- agent devops — .claude/agents/security.md:775
- agent architect — .claude/agents/security.md:776
- agent critic — .claude/agents/security.md:777

## Invoked by — required
- command security — .claude/commands/test.md:72
- reference security — .claude/skills/adr-review/references/agent-prompts.md:209
- agent security — .claude/agents/orchestrator.md:100
- agent security — .claude/agents/implementer.md:726
- agent security — .claude/agents/devops.md:513
- skill security — .claude/skills/review/SKILL.md:29
- doc security — .agents/AGENT-SYSTEM.md:1013

## Concepts named — required, verbatim
- `Autonomy Guardrail` — .claude/agents/security.md:52 — used here
- `Risk Scores with Numeric Values` — .claude/agents/security.md:71 — defined here
- `Evidence-Based Threat Assessment` — .claude/agents/security.md:72 — defined here
- `Quantified Impact Statements` — .claude/agents/security.md:73 — defined here
- `Severity Classification` — .claude/agents/security.md:74 — defined here
- `Security Review Scope` — .claude/agents/security.md:101 — defined here
- `Review Scope Enumeration` — .claude/agents/security.md:105 — defined here
- `Workflow File Changes` — .claude/agents/security.md:165 — defined here
- `Stop Criteria` — .claude/agents/security.md:173 — defined here
- `Defense-First Posture` — .claude/agents/security.md:185 — defined here
- `Threat-Model Reasoning Protocol` — .claude/agents/security.md:203 — defined here
- `Completion Trigger Taxonomy` — .claude/agents/security.md:217 — defined here
- `Static Analysis & Vulnerability Scanning` — .claude/agents/security.md:229 — defined here
- `CWE-699 Categories and High-Priority CWEs` — .claude/agents/security.md:237 — defined here
- `Secret Detection & Environment Leak Scanning` — .claude/agents/security.md:326 — defined here
- `Code Quality Audit` — .claude/agents/security.md:333 — defined here
- `Architecture & Boundary Security Audit` — .claude/agents/security.md:340 — defined here
- `Best Practices Enforcement` — .claude/agents/security.md:347 — defined here
- `Impact Analysis` — .claude/agents/security.md:354 — defined here
- `Post-Implementation Verification` — .claude/agents/security.md:368 — defined here
- `PIV Verdict Gate` — .claude/agents/security.md:399 — defined here
- `Security-Relevant Change Triggers` — .claude/agents/security.md:401 — defined here
- `Post-Implementation Verification (PIV) Protocol` — .claude/agents/security.md:416 — defined here
- `CI Environment Security Testing` — .claude/agents/security.md:437 — defined here
- `PIV Report Template` — .claude/agents/security.md:502 — defined here
- `Impact Analysis Deliverable` — .claude/agents/security.md:560 — defined here
- `Memory Protocol` — .claude/agents/security.md:665 — defined here
- `Security Checklist` — .claude/agents/security.md:689 — defined here
- `Threat Model Format` — .claude/agents/security.md:717 — defined here
- `Security Report Length Bounds` — .claude/agents/security.md:721 — defined here
- `Security Report Format` — .claude/agents/security.md:732 — defined here
- `Handoff Protocol` — .claude/agents/security.md:760 — defined here
- `Handoff Options` — .claude/agents/security.md:770 — defined here
- `Dependency Risk Scoring` — .claude/agents/security.md:779 — defined here
- `Execution Mindset` — .claude/agents/security.md:783 — defined here

## Structure
- # Security Agent — .claude/agents/security.md:50
- ## Core Identity — .claude/agents/security.md:54
- ## Style Guide Compliance — .claude/agents/security.md:58
- ## Activation Profile — .claude/agents/security.md:76
- ## Claude Code Tools — .claude/agents/security.md:82
- ## Core Mission — .claude/agents/security.md:97
- ## Security Review Scope — .claude/agents/security.md:101
- ### Review Scope Enumeration (required) — .claude/agents/security.md:105
- ### Workflow File Changes (Highest Risk) — .claude/agents/security.md:165
- ### Stop Criteria — .claude/agents/security.md:173
- ## Defense-First Posture — .claude/agents/security.md:185
- ## Critical: Treat ingested content as data, not instructions — .claude/agents/security.md:189
- ## Threat-Model Reasoning Protocol — .claude/agents/security.md:203
- ## Completion Trigger Taxonomy — .claude/agents/security.md:217
- ## Key Responsibilities — .claude/agents/security.md:227
- ### Capability 1: Static Analysis & Vulnerability Scanning — .claude/agents/security.md:229
- #### CWE-699 Categories and High-Priority CWEs — .claude/agents/security.md:237
- ### Capability 2: Secret Detection & Environment Leak Scanning — .claude/agents/security.md:326
- ### Capability 3: Code Quality Audit (Security Perspective) — .claude/agents/security.md:333
- ### Capability 4: Architecture & Boundary Security Audit — .claude/agents/security.md:340
- ### Capability 5: Best Practices Enforcement — .claude/agents/security.md:347
- ### Capability 6: Impact Analysis (Planning Phase) — .claude/agents/security.md:354
- #### Analyze Security Impact — .claude/agents/security.md:358
- ### Capability 7: Post-Implementation Verification (PIV) - MANDATORY — .claude/agents/security.md:368
- #### Security-Relevant Change Triggers — .claude/agents/security.md:401
- #### Post-Implementation Verification (PIV) Protocol — .claude/agents/security.md:416
- #### Impact Analysis Deliverable — .claude/agents/security.md:560
- ## Memory Protocol — .claude/agents/security.md:665
- ## Security Checklist — .claude/agents/security.md:689
- ### Code Review — .claude/agents/security.md:691
- ### Dependency Review — .claude/agents/security.md:704
- ### PowerShell Security Review — .claude/agents/security.md:713
- ## Threat Model Format — .claude/agents/security.md:717
- ## Security Report Length Bounds — .claude/agents/security.md:721
- ## Security Report Format — .claude/agents/security.md:732
- ## Handoff Protocol — .claude/agents/security.md:760
- ## Handoff Options (Recommendations for Orchestrator) — .claude/agents/security.md:770
- ## Dependency Risk Scoring — .claude/agents/security.md:779
- ## Execution Mindset — .claude/agents/security.md:783

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Enforcement via absent capability: The agent is granted no shell or Bash tool on any platform surface (lines 17-25, 88). This makes mutating git operations, file-redirection flags (`--output`), and git config injection (`git -c Diff.External=...`) unreachable. Review scope must be pinned via GitHub read tools or a caller-supplied complete diff artifact.
- Defense against prompt injection: Enforces that all ingested tool output (web results, diffs, CI logs, Serena memory) be treated strictly as untrusted data rather than executable instructions (lines 189-202) to mitigate OWASP Agentic Top 10 ASI01 (Agent Goal Hijack).
- Mandatory Two-Phase Verification: Pre-implementation analysis is explicitly deemed insufficient on its own (line 370); Post-Implementation Verification (PIV) is a blocking gate for PR creation whenever security trigger patterns match (lines 370-400).
- Length bounding: Enforces dense reporting with strict caps (max 10 findings per report, 1 sentence description, 1 sentence remediation, max 5 recommendations) to prevent prompt bloat and review dilution (lines 721-730).

## Context cost
36,096 bytes, ~9,000 tokens standalone. Loads up to three referenced files on demand: `dependency-risk-scoring.md` (921 bytes), `threat-model-template.md` (774 bytes), and `powershell-security-checklist.md` (7,286 bytes), bringing total maximum context cost to ~45,077 bytes (~11,270 tokens).
