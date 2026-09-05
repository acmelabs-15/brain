---
package: addy
path: skills/debugging-and-error-recovery/SKILL.md
type: skill
bytes: 10837
unit: inv-addy-40
aliases: []
memo_inputs:
  - {path: skills/debugging-and-error-recovery/SKILL.md, sha256: 67ce2c9442da0c5a6e3515617fc9c4003cfe232ef7c7210da342f40f508f9958}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/debugging-and-error-recovery/SKILL.md

## Purpose — required, verbatim
> "Systematic debugging with structured triage. When something breaks, stop adding features, preserve evidence, and follow a structured process to find and fix the root cause. Guessing wastes time. The triage checklist works for test failures, build errors, runtime bugs, and production incidents." — skills/debugging-and-error-recovery/SKILL.md:10

## Design intent — required
Establishes a systematic, six-step Stop-the-Line engineering discipline and structured triage workflow for debugging failures (test failures, build breaks, runtime bugs, and production incidents). Prevents guessing and hasty symptom-level patching by mandating reproduction, bisection/localization, reduction to minimal test cases, root-cause resolution, and permanent regression guard tests before resuming feature work.

## Phase — required
addy:Verify

## Inputs — required
- Test failure outputs, build logs, and console error messages
- Stack traces, request/response data, database queries, and environment configs
- Git commit history for bisection (`git bisect`)
- User bug reports and reproduction conditions

## Outputs — required
- Documented minimal reproduction case
- Root cause fix in application code
- Automated regression test preventing recurrence
- Temporary or permanent instrumentation / logging

## Invokes — required
- skill test-driven-development — skills/debugging-and-error-recovery/SKILL.md:75

## Invoked by — required
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:32
- skill doubt-driven-development — skills/doubt-driven-development/SKILL.md:228
- skill ci-cd-and-automation — skills/ci-cd-and-automation/SKILL.md:189
- skill observability-and-instrumentation — skills/observability-and-instrumentation/SKILL.md:21
- command build — commands/build.toml:36
- doc README.md — README.md:262
- doc CLAUDE.md — CLAUDE.md:24
- doc AGENTS.md — AGENTS.md:28

## Concepts named — required, verbatim
- `Debugging and Error Recovery` — skills/debugging-and-error-recovery/SKILL.md:6 — defined here
- `Stop-the-Line Rule` — skills/debugging-and-error-recovery/SKILL.md:21 — defined here
- `Triage Checklist` — skills/debugging-and-error-recovery/SKILL.md:36 — defined here
- `test-driven-development` — skills/debugging-and-error-recovery/SKILL.md:75 — used here
- `git bisect` — skills/debugging-and-error-recovery/SKILL.md:104 — used here
- `Root Cause` — skills/debugging-and-error-recovery/SKILL.md:121 — defined here
- `Safe Fallback Patterns` — skills/debugging-and-error-recovery/SKILL.md:214 — defined here
- `Instrumentation Guidelines` — skills/debugging-and-error-recovery/SKILL.md:243 — defined here
- `Untrusted Data` — skills/debugging-and-error-recovery/SKILL.md:272 — defined here

## Structure
- `# Debugging and Error Recovery`
- `## Overview`
- `## When to Use`
- `## The Stop-the-Line Rule`
- `## The Triage Checklist`
- `### Step 1: Reproduce`
- `### Step 2: Localize`
- `### Step 3: Reduce`
- `### Step 4: Fix the Root Cause`
- `### Step 5: Guard Against Recurrence`
- `### Step 6: Verify End-to-End`
- `## Error-Specific Patterns`
- `### Test Failure Triage`
- `### Build Failure Triage`
- `### Runtime Error Triage`
- `## Safe Fallback Patterns`
- `## Instrumentation Guidelines`
- `## Common Rationalizations`
- `## Treating Error Output as Untrusted Data`
- `## Red Flags`
- `## Verification`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Mandates that error outputs, stack traces, and logs from external systems or failed executions must be treated as untrusted data rather than instructions to follow, mitigating prompt injection via error messages. Enforces the Stop-the-Line rule: never push past a broken build or failing test to work on the next feature.

## Context cost
10837 bytes (~2709 tokens). Following invokes to `test-driven-development` would load additional context if needed.
