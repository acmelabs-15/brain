---
unit: inv-rjm-150
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-150

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/references/agent-safety.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/references/analyst.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/references/architect.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/references/code-quality.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-review-references-agent-safety-md.md (9369 bytes)
- docs/analysis/inventory/rjm/claude-skills-review-references-analyst-md.md (8243 bytes)
- docs/analysis/inventory/rjm/claude-skills-review-references-architect-md.md (10893 bytes)
- docs/analysis/inventory/rjm/claude-skills-review-references-code-quality-md.md (8640 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-150.md (4787 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-150` covers `.claude/skills/review` part 1: `references/agent-safety.md`, `references/analyst.md`, `references/architect.md`, and `references/code-quality.md` (40,901 bytes total across 4 source reference files). Sibling units cover the other references, scripts, and `SKILL.md` of the `review` skill.
- Review architecture & lifecycle role: These four files represent 4 of the 11 discovered Stage-2 canonical review axes orchestrated by `.claude/skills/review/SKILL.md` in Phase 6 (Review) of the `rjm` lifecycle. While `analyst` is configured as an always-on axis along with the Stage-1 `spec-compliance` gate, `architect`, `agent-safety`, and `code-quality` are selected dynamically based on PR diff risk (with general-purpose subagent fallback where dedicated agents are absent).
- Shared protocol standards:
  - Context Mode Enforcement: All four files mandate reading a harness-provided `CONTEXT_MODE: [full|summary|partial]` header and strictly prohibit emitting `PASS` when the diff is abridged or summarized, serving as a manipulation-resistance control against adversarial PRs.
  - Dual-output reporting: All four files require a human-readable assessment table followed by an RFC-compliant structured JSON output block with schema validation and regex-parseable terminal verdict line consumed by `.claude/lib/ai_review_common/verdict.py`.
- Architectural & domain interactions:
  - `analyst.md` defines a strict "Scope and Non-Overlap" boundary to eliminate the verbatim-duplication noise pattern (Issue #2480), deferring architecture to `architect`, maintainability/coupling/cohesion to `code-quality`, tests to `qa`, security to `security`, and formatting to deterministic CI.
  - `code-quality.md` bridges prompt-based maintainability reviews and automated scoring by invoking or deferring to the `code-qualities-assessment` skill (unit inv-rjm-100/101/102).
  - `architect.md` references external reasoning and analysis skills (`chestertons-fence`, `decision-critic`, `cva-analysis`) and formal ADR criteria.
  - `agent-safety.md` evaluates autonomous execution risks, CWE-78 command construction, and operational guardrails, referencing the Four Laws of agent safety and security scanning skills.
- Defects & Documentation Drift:
  - Common across all 4 files: All files cite upstream-only paths (`.agents/governance/AI-REVIEW-MODEL-POLICY.md` and `.agents/schemas/pr-quality-gate-output.schema.json`) that do not ship in vendored plugin installations, though mitigated by inlining schemas and declared vendor-portability comments.
  - Format inconsistencies: Markdown findings tables inconsistently format severity headers (`Priority` vs `Severity`, title-case `Critical/High/Medium/Low` vs JSON schema lowercase `critical|high|medium|low`), and some markdown tables omit `Recommendation` or `Category` columns that the JSON schema and Output Schema sections explicitly mandate.
- Duplication ledger: None of the 4 files appear in `docs/analysis/manifest/rjm-duplicates.md` (no divergence cards required).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~10,225 tokens (40,901 bytes across 4 assigned files) plus ~6,090 tokens context read (`SKILL.md`, 24,362 bytes).
- Approximate tokens of output written: ~9,500 tokens across 4 inventory cards and 1 work-unit report (40,965 bytes total).
