---
unit: inv-rjm-128
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-128

## Files assigned
- [x] `.claude/skills/observability/references/distributed-systems-fallacies.md` (3765 bytes) — read in full
- [x] `.claude/skills/observability/references/otel-migration-reference.md` (3606 bytes) — read in full
- [x] `.claude/skills/observability/references/otel-semantic-conventions.md` (3474 bytes) — read in full
- [x] `.claude/skills/observability/references/prometheus-recording-rules.md` (3493 bytes) — read in full
- [x] `.claude/skills/observability/references/three-pillars-reference.md` (2985 bytes) — read in full
- [x] `.claude/skills/observability/schema.json` (3163 bytes) — read in full
- [x] `.claude/skills/observability/scripts/query_logs.py` (8860 bytes) — read in full
- [x] `.claude/skills/observability/SKILL.md` (6308 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-observability-references-distributed-systems-fallacies-md.md` (6256 bytes)
- `docs/analysis/inventory/rjm/claude-skills-observability-references-otel-migration-reference-md.md` (6618 bytes)
- `docs/analysis/inventory/rjm/claude-skills-observability-references-otel-semantic-conventions-md.md` (5944 bytes)
- `docs/analysis/inventory/rjm/claude-skills-observability-references-prometheus-recording-rules-md.md` (6090 bytes)
- `docs/analysis/inventory/rjm/claude-skills-observability-references-three-pillars-reference-md.md` (6398 bytes)
- `docs/analysis/inventory/rjm/claude-skills-observability-schema-json.md` (3594 bytes)
- `docs/analysis/inventory/rjm/claude-skills-observability-scripts-query-logs-py.md` (7668 bytes)
- `docs/analysis/inventory/rjm/claude-skills-observability-skill-md.md` (9503 bytes)

## Scripts executed
- `.claude/skills/observability/scripts/query_logs.py`: `python3 sources/rjm/.claude/skills/observability/scripts/query_logs.py .agents/logs/sess-001.jsonl` — exit code 1 (`Error: File not found: .agents/logs/sess-001.jsonl`)
- `.claude/skills/observability/scripts/query_logs.py`: `python3 sources/rjm/.claude/skills/observability/scripts/query_logs.py <sample_log.jsonl>` — exit code 0 (valid table output matching schema)
- `.claude/skills/observability/scripts/query_logs.py`: `python3 sources/rjm/.claude/skills/observability/scripts/query_logs.py <sample_log.jsonl> --errors-only` — exit code 0
- `.claude/skills/observability/scripts/query_logs.py`: `python3 sources/rjm/.claude/skills/observability/scripts/query_logs.py <sample_log.jsonl> --output summary-sessions` — exit code 0
- `.claude/skills/observability/scripts/query_logs.py`: `python3 sources/rjm/.claude/skills/observability/scripts/query_logs.py <sample_log.jsonl> --output summary-tools` — exit code 0
- `.claude/skills/observability/scripts/query_logs.py`: `python3 sources/rjm/.claude/skills/observability/scripts/query_logs.py <invalid_json.jsonl>` — exit code 0 (warning emitted to stderr, skipped line, exited 0; reveals exit-code-mismatch defect against documented exit code 2)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/observability/SKILL.md` references sibling skill `../metrics/SKILL.md` (which exists in `sources/rjm/.claude/skills/metrics/SKILL.md`).
- `.claude/skills/observability/references/distributed-systems-fallacies.md` connects directly to stability patterns in `.claude/skills/software-engineering-library/references/release-it.md`, and is invoked by review axis prompts in `.claude/skills/review/references/architect.md` and `.claude/skills/review/references/reliability.md`.
- `otel-semantic-conventions.md` is invoked by `.claude/skills/review/references/observability.md` but was omitted from the References table in `SKILL.md`.

## Blocked or uncertain
none

## Time and size
Source: 35,654 bytes, ~8,900 tokens. Output: 52,071 bytes, ~13,000 tokens.
