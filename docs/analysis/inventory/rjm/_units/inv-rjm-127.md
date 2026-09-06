---
unit: inv-rjm-127
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-127

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/metrics/collect_metrics.py` (12936 bytes)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/metrics/SKILL.md` (7454 bytes)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/negotiation/references/skills.md` (11804 bytes)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/negotiation/SKILL.md` (5293 bytes)

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-metrics-collect-metrics-py.md` (8125 bytes)
- `docs/analysis/inventory/rjm/claude-skills-metrics-skill-md.md` (8810 bytes)
- `docs/analysis/inventory/rjm/claude-skills-negotiation-references-skills-md.md` (6555 bytes)
- `docs/analysis/inventory/rjm/claude-skills-negotiation-skill-md.md` (5780 bytes)

## Scripts executed
- `.claude/skills/metrics/collect_metrics.py`: `python3 .claude/skills/metrics/collect_metrics.py` (exit code: 0)
- `.claude/skills/metrics/collect_metrics.py`: `python3 sources/rjm/.claude/skills/metrics/collect_metrics.py --repo-path sources/rjm --since 1 --output json` (exit code: 0)
- `.claude/skills/metrics/collect_metrics.py`: `python3 sources/rjm/.claude/skills/metrics/collect_metrics.py --repo-path sources/rjm --since 1 --output markdown` (exit code: 0)
- `.claude/skills/metrics/collect_metrics.py`: `python3 sources/rjm/.claude/skills/metrics/collect_metrics.py --repo-path /nonexistent/path` (exit code: 1)
- `.claude/skills/metrics/collect_metrics.py`: `python3 sources/rjm/.claude/skills/metrics/collect_metrics.py --repo-path /tmp` (exit code: 1)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/negotiation`: A companion agent exists at `.claude/agents/negotiation.md` (inventoried in `inv-rjm-68`). Both share the same underlying deal intelligence and behavioral science literature (Fisher & Ury, Voss, Navarro, Hughes, Cialdini, Galinsky, Anthropic Project Deal).
- `.claude/skills/metrics`: Serves as a cross-lifecycle operational metrics collection utility. In `.claude/skills/metrics/SKILL.md:7-8`, model tier routing resolves to `haiku` under ADR-080 rule 3 ("routing/mechanical work where the cheaper tier suffices"), contrasting with negotiation tasks which explicitly require senior-tier models (Opus).
- `collect_metrics.py` defect: Docstring claims implementation of 8 key metrics from `docs/agent-metrics.md`, but implements only 4 (`metric_1_invocation_rate`, `metric_2_coverage`, `metric_4_infrastructure_review`, `metric_5_distribution`).
- `metrics/SKILL.md` defect: References "both scripts" and `$AgentPatterns` / `$InfrastructurePatterns` PowerShell arrays, but only `collect_metrics.py` exists in `.claude/skills/metrics/`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~9,370 tokens (~37.5 KB)
- Approximate tokens of output written: ~7,320 tokens (~29.3 KB)
