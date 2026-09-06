---
package: rjm
path: .claude/skills/reviewer-findings/SKILL.md
type: skill
bytes: 20707
unit: inv-rjm-155
in_scope_via: .agents/architecture/ADR-058-agent-eval-discipline.md
aliases: []
memo_inputs:
  - {path: .claude/skills/reviewer-findings/SKILL.md, sha256: 04e77c280908ff452996e9cc7874985d34475f7fae25d2a49f1c2f4a2403b9b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/reviewer-findings/SKILL.md

## Purpose — required, verbatim
> "A review finding is evidence that someone looked, not proof that they were right. Verify it before you act on it. This skill is the discipline for consuming a finding; it does not produce one." — .claude/skills/reviewer-findings/SKILL.md:10-12

## Design intent — required
Discipline and rigorous verification protocol for consuming review findings (from human reviewers, bots, linters, adversarial sub-agents, or cross-session handoffs) without succumbing to uncritical compliance. Solves the dangerous failure mode where an agent accepts a plausible finding that is factually false or addresses the motivation of an earlier commit rather than the current tree state. Deconstructs every review comment into three independent claims—verdict (behavioral/structural defect), diagnosis (underlying root cause), and prescription (recommended remediation)—and requires independent evidence for each before taking action. Implements strict, injection-safe shell execution protocols (CWE-78, CWE-20) for verifying premises via git (`git --literal-pathspecs grep`, literal whole-block comparisons of `git show` blobs, and bounded pickaxe searches with `git log -S`) using dedicated needle and path files, disambiguating disposition into Confirmed, Declined (refuted with line and commit evidence), or Unreproduced (unverifiable, keeping the thread open). Without it, automated agents regularly apply bogus, partial, or backwards fixes because the reviewer's verdict sounded plausible or agreed with a pre-fix state of the repository.

## Phase — required
rjm:review

## Inputs — required
- Review comments, automated bot feedback, adversarial subagent reports, or inherited findings from handoffs and session logs (.claude/skills/reviewer-findings/SKILL.md:21-24).
- The reviewed commit / PR head commit in the target repository (.claude/skills/reviewer-findings/SKILL.md:77-78, 125).
- Quoted needle text and cited file paths extracted into temporary filesystem files to prevent shell command injection (.claude/skills/reviewer-findings/SKILL.md:85-86).

## Outputs — required
- Evidence-based triage disposition: `Confirmed`, `Declined` (refuted), or `Unreproduced` (unverifiable) (.claude/skills/reviewer-findings/SKILL.md:54-58).
- Review thread reply naming the exact measurements, test fixtures, commands executed, or git evidence (commit, file, line) (.claude/skills/reviewer-findings/SKILL.md:280-290).
- Verified, re-derived code remediation when the verdict is confirmed (.claude/skills/reviewer-findings/SKILL.md:283).

## Invokes — required
- skill review — .claude/skills/reviewer-findings/SKILL.md:4
- skill pr-comment-responder — .claude/skills/reviewer-findings/SKILL.md:4

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `The three claims` — .claude/skills/reviewer-findings/SKILL.md:26 — defined here
- `Verdict` — .claude/skills/reviewer-findings/SKILL.md:33 — defined here
- `Diagnosis` — .claude/skills/reviewer-findings/SKILL.md:34 — defined here
- `Prescription` — .claude/skills/reviewer-findings/SKILL.md:35 — defined here
- `premise verification` — .claude/skills/reviewer-findings/SKILL.md:51 — defined here
- `Confirmed` — .claude/skills/reviewer-findings/SKILL.md:56 — defined here
- `Declined` — .claude/skills/reviewer-findings/SKILL.md:57 — defined here
- `Unreproduced` — .claude/skills/reviewer-findings/SKILL.md:58 — defined here
- `CWE-78` — .claude/skills/reviewer-findings/SKILL.md:81 — used here
- `CWE-20` — .claude/skills/reviewer-findings/SKILL.md:108 — used here
- `needle file` — .claude/skills/reviewer-findings/SKILL.md:86 — defined here
- `path file` — .claude/skills/reviewer-findings/SKILL.md:86 — defined here
- `blob file` — .claude/skills/reviewer-findings/SKILL.md:246 — defined here
- `literal whole-block comparison` — .claude/skills/reviewer-findings/SKILL.md:145 — defined here
- `pickaxe` — .claude/skills/reviewer-findings/SKILL.md:162 — used here
- `--literal-pathspecs` — .claude/skills/reviewer-findings/SKILL.md:120 — used here
- `Nit:` — .claude/skills/reviewer-findings/SKILL.md:258 — used here
- `Won't Fix` — .claude/skills/reviewer-findings/SKILL.md:288 — used here
- `fail-opens` — .claude/skills/reviewer-findings/SKILL.md:309 — used here

## Structure
- `# Reviewer Findings` — .claude/skills/reviewer-findings/SKILL.md:8
- `## Triggers` — .claude/skills/reviewer-findings/SKILL.md:14
- `## The three claims` — .claude/skills/reviewer-findings/SKILL.md:26
- `## The dangerous shape: reviewing the motivation, not the result` — .claude/skills/reviewer-findings/SKILL.md:41
- `## Process` — .claude/skills/reviewer-findings/SKILL.md:72
- `## MUST` — .claude/skills/reviewer-findings/SKILL.md:190
- `## SHOULD` — .claude/skills/reviewer-findings/SKILL.md:256
- `## MUST NOT` — .claude/skills/reviewer-findings/SKILL.md:267
- `## Replying` — .claude/skills/reviewer-findings/SKILL.md:278
- `## Verification` — .claude/skills/reviewer-findings/SKILL.md:292
- `## Why this exists` — .claude/skills/reviewer-findings/SKILL.md:303
- `## Anti-Patterns` — .claude/skills/reviewer-findings/SKILL.md:322

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan — .claude/skills/reviewer-findings/SKILL.md:1 — Not invoked by any in-scope lifecycle file; only referenced by excluded PR tooling (.claude/skills/pr-comment-responder/SKILL.md:201) and pulled into scope via directory walk from ADR-058.
- missing-path — .claude/skills/reviewer-findings/SKILL.md:64 — Cites Serena memory path `.serena/memories/pr-review/dispatched-model-reviewer-reliability.md` which is an excluded path and does not exist in standard distributions (declared vendor portability note on lines 66-70 notes it is non-runtime evidence).

## Observations
- Demonstrates extreme defensive bash/git engineering: guards against shell injection (CWE-78) and path truncation (CWE-20) by enforcing the sentinel byte idiom `X=$(cat f; printf x); X=${X%x}` rather than plain command substitution `$(cat f)` which strips trailing newlines.
- Enforces `--literal-pathspecs` to prevent git pathspec magic (`:(glob)**`) from traversing unrelated repository files when checking untrusted paths cited in review comments.
- Accurately observes that `git grep` and `git log -S` can both false-confirm multi-line current-state claims, mandating a whole-block python comparison against a `git show` blob file instead.

## Context cost
20707 bytes (~5177 tokens) for SKILL.md.
Loads no external reference files when invoked. Total context cost: 20707 bytes (~5177 tokens).
