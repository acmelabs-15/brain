---
unit: inv-rjm-152
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-152

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/references/reliability.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/references/roadmap.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/references/security.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/references/spec-compliance.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-review-references-reliability-md.md (8140 bytes)
- docs/analysis/inventory/rjm/claude-skills-review-references-roadmap-md.md (7540 bytes)
- docs/analysis/inventory/rjm/claude-skills-review-references-security-md.md (8129 bytes)
- docs/analysis/inventory/rjm/claude-skills-review-references-spec-compliance-md.md (8362 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-152.md (4492 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-152` represents Part 3 of `.claude/skills/review/`, covering 4 canonical reference prompt files (`reliability.md`, `roadmap.md`, `security.md`, `spec-compliance.md`) totaling 43,143 bytes.
- Lifecycle position: Part of `rjm:review`, the 6th phase of the rjm lifecycle (following `/spec`, `/plan`, `/build`, `/test`, before `/ship`).
- Architectural role:
  - `spec-compliance.md`: Acts as the exclusive Stage-1 gating axis. A `CRITICAL_FAIL` halts `/review` immediately, skipping Stage 2. An `UNKNOWN` (INCONCLUSIVE) verdict occurs when no spec or acceptance criteria can be located; it does not short-circuit, allowing Stage 2 quality/security axes to run and merge.
  - `reliability.md`: Discovered Stage-2 axis focusing on production survivability, timeouts, bounded retries with backoff/jitter, idempotency keys, circuit breakers, bulkheads, bounded queue buffers, and deadline propagation.
  - `roadmap.md`: Discovered Stage-2 axis focusing on strategic alignment, feature scope completeness, user value, and product direction; enforces strict non-overlap with QA, architecture, and security.
  - `security.md`: Discovered Stage-2 axis scanning for OWASP Top 10, CWE injection flaws, exposed secrets, and workflow security; features PR type classification (CODE, WORKFLOW, PROMPT, CONFIG, DOCS) and a leading-verdict mandate to survive truncation.
- Common patterns across all 4 reference files:
  - `Context Mode Enforcement`: When `CONTEXT_MODE` is not `full` (`summary` or `partial`), reviewers are forbidden from emitting `PASS` (anti-manipulation control).
  - `Grounding Rules`: Reviewers are instructed not to make claims about software versions or tools based on stale LLM training cutoffs.
  - `Structured JSON Output`: All axes produce structured JSON blocks containing verdicts and findings arrays alongside human-readable markdown.
  - `Regex Verdict Line`: All axes emit a terminal regex-matched verdict line for aggregation by `.claude/lib/ai_review_common/verdict.py`.
- Defects identified:
  - `roadmap.md:205`: Category description in output schema documents generic examples (`coupling`, `error-handling`, `command-injection`, `missing-test`) rather than roadmap-specific categories (`alignment`, `scope`, `user-value`, `business-impact`, `investment`, `documentation`).
  - `security.md:233`: Category description lists generic cross-axis examples (`coupling`, `missing-test`) rather than security categories (`injection`, `authentication`, `secrets`, etc.).
  - `spec-compliance.md:136`: Line 136 cites verdict path as `scripts/ai_review_common/verdict.py`, whereas lines 195 and 200 cite `.claude/lib/ai_review_common/verdict.py`.
- Duplication ledger: None of this unit's 4 files appear in `docs/analysis/manifest/rjm-duplicates.md` (0 exact aliases, 0 variant pairs; no divergence cards required).

## Blocked or uncertain
none

## Time and size
- Source tokens read: ~10,800 tokens (43,143 bytes across 4 source files, plus context from SKILL.md).
- Output tokens written: ~8,000 tokens across 4 cards and 1 unit report.
