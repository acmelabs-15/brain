---
package: rjm
path: .claude/skills/review/references/security.md
type: reference
bytes: 11202
unit: inv-rjm-152
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/references/security.md

## Purpose — required, verbatim
> "You are reviewing a pull request for security vulnerabilities and risks." — .claude/skills/review/references/security.md:10

## Design intent — required
Establishes the specialized security review axis for pull requests, systematically scanning for OWASP Top 10 vulnerabilities, CWE injection flaws, exposed secrets, vulnerable dependencies, and infrastructure/workflow misconfigurations. It optimizes review performance and noise reduction through early PR type classification (skipping docs-only changes), suppresses expected false positives (test credentials, example keys), and mandates a leading-verdict format to guarantee that the review outcome survives truncation in token-constrained environments. Without it, pull requests could introduce critical vulnerabilities, credential leaks, or workflow injection points into the repository.

## Phase — required
rjm:review

## Inputs — required
- Context mode header `CONTEXT_MODE: [full|summary|partial]` — .claude/skills/review/references/security.md:14
- Pull request diff, changed file paths, and file classification — .claude/skills/review/references/security.md:47
- Policy `AI-REVIEW-MODEL-POLICY.md` — .claude/skills/review/references/security.md:34

## Outputs — required
- Leading verdict block as the first line of output (`VERDICT: [PASS|WARN|CRITICAL_FAIL]`, `MESSAGE: [Brief explanation]`) — .claude/skills/review/references/security.md:108-128
- Findings table with CWE column (`Severity | Category | Finding | Location | CWE`) and Recommendations — .claude/skills/review/references/security.md:132-140
- Structured JSON output matching inline schema (`verdict`, `message`, `agent: "security"`, `timestamp`, `findings: [...]`) — .claude/skills/review/references/security.md:207-224

## Invokes — required
- doc AI-REVIEW-MODEL-POLICY.md — .claude/skills/review/references/security.md:34
- config pr-quality-gate-output.schema.json — .claude/skills/review/references/security.md:205
- script verdict.py — .claude/skills/review/references/security.md:251

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:27
- skill review — .claude/skills/review/SKILL.md:29
- skill review — .claude/skills/review/SKILL.md:204

## Concepts named — required, verbatim
- `security` — .claude/skills/review/references/security.md:2 — defined here
- `Context Mode Enforcement` — .claude/skills/review/references/security.md:12 — defined here
- `CONTEXT_MODE` — .claude/skills/review/references/security.md:14 — used here
- `manipulation-resistance control` — .claude/skills/review/references/security.md:31 — defined here
- `Grounding Rules` — .claude/skills/review/references/security.md:36 — defined here
- `PR Type Detection` — .claude/skills/review/references/security.md:43 — defined here
- `Expected Patterns (Do NOT Flag)` — .claude/skills/review/references/security.md:58 — defined here
- `Analysis Focus Areas` — .claude/skills/review/references/security.md:72 — defined here
- `Vulnerability Scanning (OWASP Top 10)` — .claude/skills/review/references/security.md:74 — defined here
- `Secret Detection` — .claude/skills/review/references/security.md:82 — defined here
- `Dependency Security` — .claude/skills/review/references/security.md:92 — defined here
- `Infrastructure Security` — .claude/skills/review/references/security.md:98 — defined here
- `Output Requirements` — .claude/skills/review/references/security.md:106 — defined here
- `Findings` — .claude/skills/review/references/security.md:132 — defined here
- `Recommendations` — .claude/skills/review/references/security.md:138 — defined here
- `Verdict` — .claude/skills/review/references/security.md:142 — defined here
- `Verdict Thresholds` — .claude/skills/review/references/security.md:152 — defined here
- `CRITICAL_FAIL (Merge Blocked)` — .claude/skills/review/references/security.md:154 — defined here
- `For CODE and WORKFLOW PRs` — .claude/skills/review/references/security.md:156 — defined here
- `For DOCS-only PRs` — .claude/skills/review/references/security.md:171 — defined here
- `For CONFIG PRs` — .claude/skills/review/references/security.md:178 — defined here
- `WARN (Proceed with Caution)` — .claude/skills/review/references/security.md:185 — defined here
- `PASS (Standards Met)` — .claude/skills/review/references/security.md:194 — defined here
- `Structured JSON Output` — .claude/skills/review/references/security.md:203 — defined here
- `Output Schema` — .claude/skills/review/references/security.md:226 — defined here

## Structure
- `# Security Review Task` — .claude/skills/review/references/security.md:8
- `## Context Mode Enforcement (REQUIRED)` — .claude/skills/review/references/security.md:12
- `## Grounding Rules` — .claude/skills/review/references/security.md:36
- `## PR Type Detection (FIRST STEP)` — .claude/skills/review/references/security.md:43
- `## Expected Patterns (Do NOT Flag)` — .claude/skills/review/references/security.md:58
- `## Analysis Focus Areas` — .claude/skills/review/references/security.md:72
- `### 1. Vulnerability Scanning (OWASP Top 10)` — .claude/skills/review/references/security.md:74
- `### 2. Secret Detection` — .claude/skills/review/references/security.md:82
- `### 3. Dependency Security` — .claude/skills/review/references/security.md:92
- `### 4. Infrastructure Security` — .claude/skills/review/references/security.md:98
- `## Output Requirements` — .claude/skills/review/references/security.md:106
- `### Findings` — .claude/skills/review/references/security.md:132
- `### Recommendations` — .claude/skills/review/references/security.md:138
- `### Verdict` — .claude/skills/review/references/security.md:142
- `## Verdict Thresholds` — .claude/skills/review/references/security.md:152
- `### CRITICAL_FAIL (Merge Blocked)` — .claude/skills/review/references/security.md:154
- `#### For CODE and WORKFLOW PRs` — .claude/skills/review/references/security.md:156
- `#### For DOCS-only PRs` — .claude/skills/review/references/security.md:171
- `#### For CONFIG PRs` — .claude/skills/review/references/security.md:178
- `### WARN (Proceed with Caution)` — .claude/skills/review/references/security.md:185
- `### PASS (Standards Met)` — .claude/skills/review/references/security.md:194
- `## Structured JSON Output` — .claude/skills/review/references/security.md:203
- `## Output Schema` — .claude/skills/review/references/security.md:226

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- internal-contradiction · .claude/skills/review/references/security.md:233 · Output schema category description lists generic cross-axis examples (coupling, missing-test) rather than the security-specific category enum (injection, authentication, secrets, misconfiguration, dependency, infrastructure) defined in the JSON schema on line 216.

## Observations
- Leading-verdict design (issue #2006): Mandates emitting `VERDICT: [PASS|WARN|CRITICAL_FAIL]` as the very first line of output before any analysis or JSON block (lines 108-112), ensuring the review verdict survives token truncation.
- Categorization-driven bypass: Classifies PRs into CODE, WORKFLOW, PROMPT, CONFIG, DOCS; documentation-only PRs skip security scrutiny entirely and default to PASS unless real credentials or endpoints are exposed.
- Expected pattern exemptions (lines 58-70): Suppresses false alarms for test fixtures with fake credentials, example API keys in docs, properly masked `${{ secrets.GITHUB_TOKEN }}`, and `.env.example` templates.
- Cites vendor-portability status (line 258), noting upstream-only policy and schema references.

## Context cost
11202 bytes (~2800 tokens). Self-contained prompt with no external runtime dependencies.
