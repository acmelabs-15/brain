---
unit: inv-rjm-60
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-60

## Files assigned
- [x] `.agents/security/static-analysis-checklist.md`
- [x] `.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-security-static-analysis-checklist-md.md` (7770 bytes)
- `docs/analysis/inventory/rjm/agents-specs-design-design-004-agent-eval-harness-spike-md.md` (12012 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-60.md` (2195 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `DESIGN-004-agent-eval-harness-spike.md` establishes the technical design specification for the offline agent evaluation runner `scripts/eval/eval-agent-vs-baseline.py`. It belongs to the `REQ-004` / `DESIGN-004` / `TASK-004` specification triad originating from issue #1854. `REQ-004` is assigned to unit `inv-rjm-61`, and `TASK-004` is assigned to unit `inv-rjm-62`.
- `DESIGN-004` references `.agents/architecture/ADR-NNN-agent-eval-discipline.md (to be created)` at lines 11 and 445; this architectural decision record was subsequently materialized as `ADR-058-agent-eval-discipline.md` (inventoried in unit `inv-rjm-19`), which formally adopted the agent-vs-baseline efficacy methodology.
- `.agents/security/static-analysis-checklist.md` is invoked as external background reading by `.claude/skills/security-detection/SKILL.md:190` and `src/copilot-cli/skills/security-detection/SKILL.md:190` (inventoried in units `inv-rjm-41` and `inv-rjm-53`), which classify changed files and route security-critical findings to the security agent during pre-pr and review gates.

## Blocked or uncertain
none

## Time and size
Approximate source read: 26,147 bytes (~6,530 tokens). Approximate output written: ~21,932 bytes (~5,480 tokens).
