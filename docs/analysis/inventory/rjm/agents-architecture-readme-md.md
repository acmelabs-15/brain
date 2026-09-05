---
package: rjm
path: .agents/architecture/README.md
type: agent
bytes: 27806
unit: inv-rjm-50
in_scope_via: AGENTS.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/README.md, sha256: 30583d895e16edee8c41ae77fc6514448fe58f8c102210a52299f4592b14a39f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/README.md

## Purpose — required, verbatim
> "Current state of the decision corpus, grouped by lifecycle status. Start here rather than grepping `ADR-*.md`: a keyword match in a superseded record reads exactly like a keyword match in an accepted one." — .agents/architecture/README.md:3-5

## Design intent — required
Serves as the generated index and primary navigation entry point for rjm's 104 Architecture Decision Records (ADRs), grouping decisions by lifecycle status (Accepted, Proposed, Retired, Rejected, Needs backfill) derived from YAML frontmatter (ADR-073). It provides and explains the canonical Python snippet for querying frontmatter directly without external tool dependencies, documents normalization constraints (`strip().lower()`) and fence delimiter rules, and records the regeneration command (`uv run python build/scripts/build_all.py`). Without this index, agents and engineers would grep ADR markdown files directly, inadvertently treating superseded decisions as active architectural constraints.

## Phase — required
cross-phase

## Inputs — required
- "Status comes from each record's YAML frontmatter (ADR-073), never from its prose." — .agents/architecture/README.md:7
- "Regenerate after any ADR change with `uv run python build/scripts/build_all.py`." — .agents/architecture/README.md:8
- "for path in sorted(pathlib.Path('.agents/architecture').glob('ADR-[0-9]*.md')):" — .agents/architecture/README.md:20
- "`_status_of` in `scripts/validation/check_adr_lifecycle.py` returns `str(value).strip().lower()`" — .agents/architecture/README.md:33-35
- "`generate_adr_index.py`'s `_FRONTMATTER_RE` is" — .agents/architecture/README.md:73

## Outputs — required
- "Current state of the decision corpus, grouped by lifecycle status." — .agents/architecture/README.md:3
- "Accepted" — .agents/architecture/README.md:89
- "Proposed" — .agents/architecture/README.md:155
- "Retired" — .agents/architecture/README.md:191
- "Rejected" — .agents/architecture/README.md:210
- "Needs backfill" — .agents/architecture/README.md:221

## Invokes — required
- script build/scripts/build_all.py — .agents/architecture/README.md:8
- script scripts/validation/check_adr_lifecycle.py — .agents/architecture/README.md:34
- script generate_adr_index.py — .agents/architecture/README.md:73
- doc ADR-001 — .agents/architecture/README.md:95
- doc ADR-002 — .agents/architecture/README.md:197
- doc ADR-003 — .agents/architecture/README.md:96
- doc ADR-004 — .agents/architecture/README.md:198
- doc ADR-005 — .agents/architecture/README.md:199
- doc ADR-006 — .agents/architecture/README.md:97
- doc ADR-007 — .agents/architecture/README.md:98
- doc ADR-008 — .agents/architecture/README.md:99
- doc ADR-009 — .agents/architecture/README.md:100
- doc ADR-010 — .agents/architecture/README.md:101
- doc ADR-011 — .agents/architecture/README.md:161
- doc ADR-012 — .agents/architecture/README.md:162
- doc ADR-013 — .agents/architecture/README.md:163
- doc ADR-014 — .agents/architecture/README.md:102
- doc ADR-015 — .agents/architecture/README.md:103
- doc ADR-016 — .agents/architecture/README.md:104
- doc ADR-017 — .agents/architecture/README.md:105
- doc ADR-018 — .agents/architecture/README.md:106
- doc ADR-019 — .agents/architecture/README.md:107
- doc ADR-020 — .agents/architecture/README.md:164
- doc ADR-021 — .agents/architecture/README.md:108
- doc ADR-022 — .agents/architecture/README.md:165
- doc ADR-023 — .agents/architecture/README.md:109
- doc ADR-024 — .agents/architecture/README.md:200
- doc ADR-025 — .agents/architecture/README.md:201
- doc ADR-026 — .agents/architecture/README.md:110
- doc ADR-027 — .agents/architecture/README.md:166
- doc ADR-028 — .agents/architecture/README.md:202
- doc ADR-029 — .agents/architecture/README.md:111
- doc ADR-030 — .agents/architecture/README.md:216
- doc ADR-031 — .agents/architecture/README.md:217
- doc ADR-032 — .agents/architecture/README.md:112
- doc ADR-033 — .agents/architecture/README.md:113
- doc ADR-034 — .agents/architecture/README.md:114
- doc ADR-035 — .agents/architecture/README.md:115
- doc ADR-036 — .agents/architecture/README.md:203
- doc ADR-037 — .agents/architecture/README.md:116
- doc ADR-038 — .agents/architecture/README.md:167
- doc ADR-039 — .agents/architecture/README.md:204
- doc ADR-040 — .agents/architecture/README.md:117
- doc ADR-041 — .agents/architecture/README.md:118
- doc ADR-042 — .agents/architecture/README.md:119
- doc ADR-043 — .agents/architecture/README.md:120
- doc ADR-044 — .agents/architecture/README.md:205
- doc ADR-045 — .agents/architecture/README.md:121
- doc ADR-046 — .agents/architecture/README.md:122
- doc ADR-047 — .agents/architecture/README.md:123
- doc ADR-048 — .agents/architecture/README.md:168
- doc ADR-049 — .agents/architecture/README.md:169
- doc ADR-050 — .agents/architecture/README.md:124
- doc ADR-051 — .agents/architecture/README.md:125
- doc ADR-052 — .agents/architecture/README.md:126
- doc ADR-053 — .agents/architecture/README.md:127
- doc ADR-054 — .agents/architecture/README.md:128
- doc ADR-055 — .agents/architecture/README.md:129
- doc ADR-056 — .agents/architecture/README.md:206
- doc ADR-057 — .agents/architecture/README.md:130
- doc ADR-058 — .agents/architecture/README.md:170
- doc ADR-059 — .agents/architecture/README.md:171
- doc ADR-060 — .agents/architecture/README.md:131
- doc ADR-061 — .agents/architecture/README.md:218
- doc ADR-062 — .agents/architecture/README.md:132
- doc ADR-063 — .agents/architecture/README.md:133
- doc ADR-064 — .agents/architecture/README.md:172
- doc ADR-065 — .agents/architecture/README.md:173
- doc ADR-066 — .agents/architecture/README.md:134
- doc ADR-067 — .agents/architecture/README.md:174
- doc ADR-068 — .agents/architecture/README.md:135
- doc ADR-069 — .agents/architecture/README.md:175
- doc ADR-070 — .agents/architecture/README.md:176
- doc ADR-071 — .agents/architecture/README.md:136
- doc ADR-072 — .agents/architecture/README.md:177
- doc ADR-073 — .agents/architecture/README.md:137
- doc ADR-074 — .agents/architecture/README.md:138
- doc ADR-075 — .agents/architecture/README.md:178
- doc ADR-076 — .agents/architecture/README.md:139
- doc ADR-077 — .agents/architecture/README.md:179
- doc ADR-078 — .agents/architecture/README.md:180
- doc ADR-079 — .agents/architecture/README.md:207
- doc ADR-080 — .agents/architecture/README.md:140
- doc ADR-081 — .agents/architecture/README.md:141
- doc ADR-082 — .agents/architecture/README.md:142
- doc ADR-083 — .agents/architecture/README.md:143
- doc ADR-084 — .agents/architecture/README.md:144
- doc ADR-085 — .agents/architecture/README.md:145
- doc ADR-086 — .agents/architecture/README.md:146
- doc ADR-087 — .agents/architecture/README.md:181
- doc ADR-088 — .agents/architecture/README.md:182
- doc ADR-089 — .agents/architecture/README.md:183
- doc ADR-090 — .agents/architecture/README.md:184
- doc ADR-091 — .agents/architecture/README.md:208
- doc ADR-092 — .agents/architecture/README.md:147
- doc ADR-093 — .agents/architecture/README.md:185
- doc ADR-094 — .agents/architecture/README.md:148
- doc ADR-095 — .agents/architecture/README.md:219
- doc ADR-096 — .agents/architecture/README.md:149
- doc ADR-097 — .agents/architecture/README.md:150
- doc ADR-098 — .agents/architecture/README.md:186
- doc ADR-099 — .agents/architecture/README.md:151
- doc ADR-100 — .agents/architecture/README.md:187
- doc ADR-101 — .agents/architecture/README.md:188
- doc ADR-102 — .agents/architecture/README.md:152
- doc ADR-103 — .agents/architecture/README.md:153
- doc ADR-104 — .agents/architecture/README.md:189

## Invoked by — required
- doc AGENTS.md — AGENTS.md:10

## Concepts named — required, verbatim
`Architecture Decision Records` — .agents/architecture/README.md:1 — defined here
`ADR-*.md` — .agents/architecture/README.md:4 — used here
`YAML frontmatter` — .agents/architecture/README.md:7 — used here
`ADR-073` — .agents/architecture/README.md:7 — used here
`Querying the corpus directly` — .agents/architecture/README.md:10 — defined here
`_CLOSING_FENCE` — .agents/architecture/README.md:18 — defined here
`Needs backfill` — .agents/architecture/README.md:23 — defined here
`Accepted` — .agents/architecture/README.md:28 — defined here
`status-enum` — .agents/architecture/README.md:36 — used here
`check_adr_lifecycle` — .agents/architecture/README.md:44 — used here
`yq` — .agents/architecture/README.md:50 — used here
`ADR-042` — .agents/architecture/README.md:51 — used here
`_FRONTMATTER_RE` — .agents/architecture/README.md:73 — used here
`AdrIndexError` — .agents/architecture/README.md:81 — used here
`Proposed` — .agents/architecture/README.md:155 — defined here
`Retired` — .agents/architecture/README.md:191 — defined here
`Rejected` — .agents/architecture/README.md:210 — defined here

## Structure
- # Architecture Decision Records — .agents/architecture/README.md:1
- ## Querying the corpus directly — .agents/architecture/README.md:10
- ## Accepted — .agents/architecture/README.md:89
- ## Proposed — .agents/architecture/README.md:155
- ## Retired — .agents/architecture/README.md:191
- ## Rejected — .agents/architecture/README.md:210
- ## Needs backfill — .agents/architecture/README.md:221

## Scripts — required if type is script or the skill ships scripts
### Inline Python ADR Query Snippet
- path: inline snippet in `.agents/architecture/README.md`
- language: Python
- lines: 15
- documented invocation:
"import pathlib, re, yaml" — .agents/architecture/README.md:16
- **executed:** yes
- actual command run: `uv run --directory sources/rjm python -c "import pathlib, re, yaml; _CLOSING_FENCE = re.compile(r'\r?\n---\r?\n'); [print(front.get('id') or p.name) for p in sorted(pathlib.Path('.agents/architecture').glob('ADR-[0-9]*.md')) if p.read_text(encoding='utf-8').startswith('---') and (closing := _CLOSING_FENCE.search(p.read_text(encoding='utf-8'), 3)) and str((yaml.safe_load(p.read_text(encoding='utf-8')[3:closing.start()]) or {}).get('status', '')).strip().lower() == 'accepted']"`
- stdout: 59 accepted ADR IDs (ADR-001 through ADR-103)
- **actual exit code:** 0
- documented exit codes: none explicitly documented in markdown prose; raises `ValueError` on unclosed frontmatter
- does the output match what the documentation claims? yes, extracts and prints the 59 accepted ADR identifiers matching the Accepted table

### ADR Index Generator
- path: `build/scripts/generate_adr_index.py`
- language: Python
- lines: 1198
- documented invocation:
"generate_adr_index.py" — .agents/architecture/README.md:73
- **executed:** yes
- actual command run: `uv run --directory sources/rjm python build/scripts/generate_adr_index.py --check`
- stdout: `OK: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/README.md matches /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture (104 ADR record(s))`
- **actual exit code:** 0
- documented exit codes: exit 0 on match, exit 1 if committed index differs from generated
- does the output match what the documentation claims? yes, verifies that `.agents/architecture/README.md` matches the 104 ADR records

### Build All Script
- path: `build/scripts/build_all.py`
- language: Python
- lines: 1044
- documented invocation:
"uv run python build/scripts/build_all.py" — .agents/architecture/README.md:8
- **executed:** yes
- actual command run: `uv run --directory sources/rjm python build/scripts/build_all.py --help`
- stdout: displays build_all CLI options and exit code descriptions
- **actual exit code:** 0
- documented exit codes: 0 - success, 1 - generator logic error, 2 - configuration error / staleness detected (--check), 3 - audit blocklist violation
- does the output match what the documentation claims? yes, documents build orchestration for generated artifacts including `.agents/architecture/README.md`

### ADR Lifecycle Gate
- path: `scripts/validation/check_adr_lifecycle.py`
- language: Python
- lines: 1293
- documented invocation:
"`scripts/validation/check_adr_lifecycle.py` returns" — .agents/architecture/README.md:34
- **executed:** yes
- actual command run: `uv run --directory sources/rjm python scripts/validation/check_adr_lifecycle.py`
- stdout: `[PASS] 0 violation(s) across 104 ADR record(s), no check above its baseline.`
- **actual exit code:** 0
- documented exit codes: 0 on pass, non-zero when violations exceed baseline
- for validators/gates: can it exit non-zero? yes; does it fail on source repo's default branch? no, passes with 0 violations across 104 records
- does the output match what the documentation claims? yes, validates ratcheted lifecycle checks for the entire ADR corpus

## Defects — required
none

## Observations
Generated by `build/scripts/generate_adr_index.py` and owned by `build/scripts/build_all.py`. Serves as the machine-generated index and human/agent navigation hub for the repository's 104 ADR records. Documents subtle implementation choices including strict regex fence checking (`\r?\n---\r?\n`) to avoid silent parse failures from trailing whitespace, string normalization (`strip().lower()`), and why Python was chosen over `yq`.

## Context cost
27806 bytes, approximately 6950 tokens.
