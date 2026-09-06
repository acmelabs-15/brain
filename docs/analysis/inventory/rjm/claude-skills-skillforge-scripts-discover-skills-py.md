---
package: rjm
path: .claude/skills/skillforge/scripts/discover_skills.py
type: script
bytes: 16523
unit: inv-rjm-162
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/discover_skills.py, sha256: 54678530ba1813bb24971e1d38b689c5eae3dc0c7c16217436e119074ea3f4ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/scripts/discover_skills.py

## Purpose — required, verbatim
> "discover_skills.py - Scan all skill sources and build a searchable index" — .claude/skills/skillforge/scripts/discover_skills.py:3

## Design intent — required
Ecosystem discovery engine and indexer for skill lookup, triage, and recommendation. It scans five prioritized source locations (custom skills in `~/.claude/skills`, superpowers plugin cache, and Anthropic/Claude Code plugin marketplaces), parses YAML frontmatter and markdown body sections to extract skill names, versions, trigger phrases, keywords, and descriptions, classifies each skill across 19 domain categories (such as `spreadsheet`, `debugging`, `testing`, `security`, `database`, `frontend`, `ai_ml`), and generates a cached searchable JSON index at `~/.cache/skillrecommender/skill_index.json` (or a custom output path). Without it, skill triage and routing in Phase 0 would require expensive dynamic filesystem crawls on every prompt, or risk creating duplicate skills because existing capabilities across local and marketplace repositories remained undiscovered.

## Phase — required
rjm:Phase 0: Skill Triage

## Inputs — required
- CLI flags: `--output` / `-o` (Path to output JSON index, default `~/.cache/skillrecommender/skill_index.json`), `--verbose` / `-v` (flag for verbose console output), `--json` (flag to print result envelope as JSON) — .claude/skills/skillforge/scripts/discover_skills.py:419-434
- Filesystem skill sources enumerated in `SKILL_SOURCES` (`custom`, `superpowers`, `anthropic-agent-skills`, `claude-code-workflows`, `claude-code-plugins`) — .claude/skills/skillforge/scripts/discover_skills.py:70
- Markdown skill content read for YAML frontmatter, trigger tables, and purpose statements — .claude/skills/skillforge/scripts/discover_skills.py:144-255

## Outputs — required
- Searchable JSON index file saved to `~/.cache/skillrecommender/skill_index.json` (or `--output` path) containing schema version 2.0.0, timestamp, skills list, domain index mapping, sources mapping, and total count — .claude/skills/skillforge/scripts/discover_skills.py:396-406
- Formatted stdout summary: skill count, discovered domains, index file destination path, and missing source warnings; or full JSON Result payload when `--json` is supplied — .claude/skills/skillforge/scripts/discover_skills.py:446-455
- Exit code: 0 on success, 1 on general failure, 3 when all sources are missing — .claude/skills/skillforge/scripts/discover_skills.py:458-464

## Invokes — required
- script _constants — .claude/skills/skillforge/scripts/discover_skills.py:34

## Invoked by — required
- skill .claude/skills/skillforge/SKILL.md — .claude/skills/skillforge/SKILL.md:279
- reference .claude/skills/skillforge/references/phase0-triage.md — .claude/skills/skillforge/references/phase0-triage.md:31
- script .claude/skills/skillforge/scripts/triage_skill_request.py — .claude/skills/skillforge/scripts/triage_skill_request.py:23

## Concepts named — required, verbatim
- `skillrecommender` — .claude/skills/skillforge/scripts/discover_skills.py:5 — used here
- `RESULT TYPES` — .claude/skills/skillforge/scripts/discover_skills.py:43 — defined here
- `Result` — .claude/skills/skillforge/scripts/discover_skills.py:47 — defined here
- `SKILL SOURCES` — .claude/skills/skillforge/scripts/discover_skills.py:67 — defined here
- `SKILL_SOURCES` — .claude/skills/skillforge/scripts/discover_skills.py:70 — defined here
- `UNIVERSAL DOMAIN CLASSIFICATION` — .claude/skills/skillforge/scripts/discover_skills.py:104 — defined here
- `DOMAIN_KEYWORDS` — .claude/skills/skillforge/scripts/discover_skills.py:109 — defined here
- `PARSING FUNCTIONS` — .claude/skills/skillforge/scripts/discover_skills.py:141 — defined here
- `extract_frontmatter` — .claude/skills/skillforge/scripts/discover_skills.py:144 — defined here
- `get_version` — .claude/skills/skillforge/scripts/discover_skills.py:186 — defined here
- `extract_triggers` — .claude/skills/skillforge/scripts/discover_skills.py:202 — defined here
- `extract_keywords` — .claude/skills/skillforge/scripts/discover_skills.py:233 — defined here
- `classify_domain` — .claude/skills/skillforge/scripts/discover_skills.py:257 — defined here
- `parse_skill_file` — .claude/skills/skillforge/scripts/discover_skills.py:276 — defined here
- `DISCOVERY` — .claude/skills/skillforge/scripts/discover_skills.py:316 — defined here
- `discover_skills` — .claude/skills/skillforge/scripts/discover_skills.py:319 — defined here
- `STATE MANAGEMENT` — .claude/skills/skillforge/scripts/discover_skills.py:381 — defined here
- `get_index_path` — .claude/skills/skillforge/scripts/discover_skills.py:384 — defined here
- `save_index` — .claude/skills/skillforge/scripts/discover_skills.py:391 — defined here

## Structure
- RESULT TYPES — .claude/skills/skillforge/scripts/discover_skills.py:43
- SKILL SOURCES — .claude/skills/skillforge/scripts/discover_skills.py:67
- UNIVERSAL DOMAIN CLASSIFICATION — .claude/skills/skillforge/scripts/discover_skills.py:104
- PARSING FUNCTIONS — .claude/skills/skillforge/scripts/discover_skills.py:141
- DISCOVERY — .claude/skills/skillforge/scripts/discover_skills.py:316
- STATE MANAGEMENT — .claude/skills/skillforge/scripts/discover_skills.py:381
- CLI — .claude/skills/skillforge/scripts/discover_skills.py:409

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/skillforge/scripts/discover_skills.py`, language: Python, lines: 469
- documented invocation:
  - `"python discover_skills.py" — .claude/skills/skillforge/scripts/discover_skills.py:13`
  - `"python discover_skills.py --verbose" — .claude/skills/skillforge/scripts/discover_skills.py:14`
  - `"python discover_skills.py --output custom_path.json" — .claude/skills/skillforge/scripts/discover_skills.py:15`
- **executed:** yes
- actual command run: `python3 scripts/discover_skills.py` (executed from `sources/rjm/.claude/skills/skillforge`), abridged stdout: `Discovered 1 skills\nDomains: ai_ml\nIndex saved to: /Users/peterkloss/.cache/skillrecommender/skill_index.json`, **actual exit code:** 0
- documented exit codes:
  - `"0  - Success" — .claude/skills/skillforge/scripts/discover_skills.py:18`
  - `"1  - General failure" — .claude/skills/skillforge/scripts/discover_skills.py:19`
  - `"3  - Directory not found" — .claude/skills/skillforge/scripts/discover_skills.py:20`
  vs. actual exit paths in code:
  - `.claude/skills/skillforge/scripts/discover_skills.py:459` (`sys.exit(1)`)
  - `.claude/skills/skillforge/scripts/discover_skills.py:462` (`sys.exit(3)`)
  - `.claude/skills/skillforge/scripts/discover_skills.py:464` (`sys.exit(0)`)
- for validators/gates: can it exit non-zero? yes (exits 1 on general failure, exits 3 when all sources are missing and total count is 0). does it fail on the source repo's own default branch? no (exits 0, successfully indexing available local skills).
- does the output match what the documentation claims? yes (emits total count, domain list, output target path, and exits with documented status code).

## Defects — required
- doc-drift · .claude/skills/skillforge/scripts/discover_skills.py:5 · states "Part of the skillrecommender skill." in module docstring, reflecting unupdated origin metadata from when the script was extracted/ported into SkillForge.
- missing-path · .claude/skills/skillforge/scripts/discover_skills.py:79-100 · hardcodes four external plugin directories under `~/.claude/plugins/cache/superpowers/` and `~/.claude/plugins/marketplaces/` that do not exist in default environments, generating persistent missing-source warnings.

## Observations
- Graceful YAML fallback: Lines 153-183 provide a robust fallback parser when PyYAML is unavailable, parsing basic top-level keys and 2-space indented `metadata` dictionary entries.
- Priority-weighted skill sorting: Skills are ordered by source priority (custom = 1, superpowers = 2, marketplaces = 3-5), ensuring local user customizations take precedence over cached or marketplace installations.

## Context cost
16523 bytes, ~4,130 tokens. When invoked, imports `_constants.py` (3038 bytes) if present, total ~19,561 bytes (~4,890 tokens).
