---
package: rjm
path: .claude/skills/spec-generator/references/spec-prior-art-schema.md
type: reference
bytes: 38288
unit: inv-rjm-172
in_scope_via: .claude/commands/spec.md
aliases: []
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/spec-generator/references/spec-prior-art-schema.md

## Purpose — required, verbatim
> "The gate emits a Markdown block embedded into the PRD as its first section, named `## Prior Art / Constraints`." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:5
(no explicit purpose statement)

## Design intent — required
Externalizes and centralizes the detailed specification schemas, contracts, halt rules, and workflow steps for the `/spec` lifecycle command (extracted per Issue #3632 and Issue #2050). It establishes the machine-readable output format for the Step 0.5 Memory-First Gate (`PriorArtBlock` with `step0_5-halt` blocks, secret redaction, and `STEP-0.5-METRICS.md` logging), while also defining the canonical Step 1 through Step 9 specification execution steps (domain-driven ontology elicitation, requirements interview, Cynefin/engineering complexity classification, provenance/buy-vs-build decision gates, CVA analysis, EARS artifact generation, ADR reviews, co-change checklists, and critic drift verification).

## Phase — required
rjm:spec

## Inputs — required
- Direct prior art from memory (ADRs, episodes, chestertons-fence recommendations), connected context from `exploring-knowledge-graph`, and coverage notes (.claude/skills/spec-generator/references/spec-prior-art-schema.md:10-25)
- Spec proposals evaluated against halt criteria H6-H11 (ADR constraint removals, protocol bypasses, deletions >100 LOC, complex refactorings, shared infrastructure modifications, blast-radius entity counts) (.claude/skills/spec-generator/references/spec-prior-art-schema.md:32-42)
- Step 0 first principles problem clarification outputs: demand Q1, status quo Q2, specificity Q3, wedge Q4, observation Q5, future-fit Q6 (.claude/skills/spec-generator/references/spec-prior-art-schema.md:130)
- Operating model 5-layer interviews for Tier 5 specs (.claude/skills/spec-generator/references/spec-prior-art-schema.md:132)
- Domain-driven design ontology elicitation answers O1 through O7 (.claude/skills/spec-generator/references/spec-prior-art-schema.md:140-148)
- Structured PRD generated from requirements interview (.claude/skills/spec-generator/references/spec-prior-art-schema.md:155)
- Engineering complexity tiers (.claude/skills/analyze/references/engineering-complexity-tiers.md) and Cynefin problem-domain classifications (.claude/skills/spec-generator/references/spec-prior-art-schema.md:156, 164)
- Component provenance and dependency evaluations (.claude/skills/spec-generator/references/spec-prior-art-schema.md:188-189)
- Buy-vs-build gate evaluations (.claude/skills/spec-generator/references/spec-prior-art-schema.md:192)
- Commonality-variability analysis summaries (.claude/skills/spec-generator/references/spec-prior-art-schema.md:193)
- Multi-site contract change opt-in response (`multi_site_opt_in` boolean) (.claude/skills/spec-generator/references/spec-prior-art-schema.md:199-202)

## Outputs — required
- `## Prior Art / Constraints` Markdown block embedded into the PRD (.claude/skills/spec-generator/references/spec-prior-art-schema.md:8)
- Fenced code block `step0_5-halt` containing machine-readable halt details (`trigger`, `check`, `evidence`, `test_failed`, `deferral`) (.claude/skills/spec-generator/references/spec-prior-art-schema.md:52-58)
- Supplemental knowledge graph traversal block `### Supplemental (Phase N)` appended to PriorArtBlock (.claude/skills/spec-generator/references/spec-prior-art-schema.md:94, 106)
- Tally line appended to `.agents/sessions/STEP-0.5-METRICS.md` via `scripts/metrics_writer.py` and rotated files `.agents/sessions/STEP-0.5-METRICS-YYYYMMDD.md` (.claude/skills/spec-generator/references/spec-prior-art-schema.md:110, 126)
- Domain ontology fragment `.agents/specs/ontology/<feature-slug>.md` (.claude/skills/spec-generator/references/spec-prior-art-schema.md:150)
- 2D `tier x domain` classification block in PRD frontmatter (.claude/skills/spec-generator/references/spec-prior-art-schema.md:168)
- Component ownership block in PRD (`<component>: provenance <UPSTREAM|LOCAL|VENDOR|UNKNOWN>; owner <name-or-team-or-none>`) (.claude/skills/spec-generator/references/spec-prior-art-schema.md:188)
- Buy-vs-build decision section in PRD (.claude/skills/spec-generator/references/spec-prior-art-schema.md:192)
- Formal 3-tier spec artifacts: `.agents/specs/requirements/REQ-NNN-{slug}.md`, `.agents/specs/design/DESIGN-NNN-{slug}.md`, and `.agents/specs/tasks/TASK-NNN-{slug}.md` (.claude/skills/spec-generator/references/spec-prior-art-schema.md:205-207)
- Architectural Decision Record `ADR-NNN-{slug}.md` (.claude/skills/spec-generator/references/spec-prior-art-schema.md:236)
- `## Co-change checklist` section in `REQ-NNN-{slug}.md` (.claude/skills/spec-generator/references/spec-prior-art-schema.md:254, 266)
- Binary drift check verdicts (9a Demand Reality drift, 9b Desperate Specificity drift, 9c Narrowest Wedge drift, 9d Prior Art / Constraints elicitation, 9e Operating-model drift) (.claude/skills/spec-generator/references/spec-prior-art-schema.md:301-314)

## Invokes — required
- script scripts/redact_secrets.py — .claude/skills/spec-generator/references/spec-prior-art-schema.md:84
- script scripts/metrics_writer.py — .claude/skills/spec-generator/references/spec-prior-art-schema.md:110
- skill work-operating-model — .claude/skills/spec-generator/references/spec-prior-art-schema.md:132
- skill requirements-interview — .claude/skills/spec-generator/references/spec-prior-art-schema.md:155
- agent analyst — .claude/skills/spec-generator/references/spec-prior-art-schema.md:156
- reference .claude/skills/analyze/references/engineering-complexity-tiers.md — .claude/skills/spec-generator/references/spec-prior-art-schema.md:156
- skill cynefin-classifier — .claude/skills/spec-generator/references/spec-prior-art-schema.md:164
- skill analysis-provenance — .claude/skills/spec-generator/references/spec-prior-art-schema.md:188
- skill programming-advisor — .claude/skills/spec-generator/references/spec-prior-art-schema.md:189
- skill buy-vs-build-framework — .claude/skills/spec-generator/references/spec-prior-art-schema.md:192
- skill cva-analysis — .claude/skills/spec-generator/references/spec-prior-art-schema.md:193
- skill spec-generator — .claude/skills/spec-generator/references/spec-prior-art-schema.md:204
- script validate_spec_frontmatter.py — .claude/skills/spec-generator/references/spec-prior-art-schema.md:208
- skill threat-modeling — .claude/skills/spec-generator/references/spec-prior-art-schema.md:212
- skill slo-designer — .claude/skills/spec-generator/references/spec-prior-art-schema.md:223
- skill adr-generator — .claude/skills/spec-generator/references/spec-prior-art-schema.md:236
- skill adr-review — .claude/skills/spec-generator/references/spec-prior-art-schema.md:237
- skill doc-accuracy — .claude/skills/spec-generator/references/spec-prior-art-schema.md:292
- skill golden-principles — .claude/skills/spec-generator/references/spec-prior-art-schema.md:293
- skill decision-critic — .claude/skills/spec-generator/references/spec-prior-art-schema.md:296
- agent critic — .claude/skills/spec-generator/references/spec-prior-art-schema.md:297
- skill pre-mortem — .claude/skills/spec-generator/references/spec-prior-art-schema.md:297

## Invoked by — required
- command .claude/commands/spec.md — .claude/commands/spec.md:131, 133

## Concepts named — required, verbatim
- `PriorArtBlock` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:1 — defined here
- `Prior Art / Constraints` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:5 — defined here
- `Direct prior art from memory` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:10 — defined here
- `ADR` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:12 — used here
- `chestertons-fence` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:14 — used here
- `Connected context from exploring-knowledge-graph` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:16 — defined here
- `Coverage notes` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:22 — defined here
- `Step 0.5 halt criteria` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:30 — defined here
- `Step 0.5 halt block format` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:45 — defined here
- `step0_5-halt` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:47, 52 — defined here
- `Redaction pre-emit` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:81 — defined here
- `Step 0.5 supplemental traversal hook` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:92 — defined here
- `Supplemental (Phase N)` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:94 — defined here
- `Step 0.5 metrics tally` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:108 — defined here
- `Archival policy` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:126 — defined here
- `Tier 5 operating-model elicitation` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:132 — defined here
- `Step 1 Ontology elicitation` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:134 — defined here
- `domain-driven design` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:134 — used here
- `software-engineering-library` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:138 — used here
- `O1 Entities` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:142 — defined here
- `O2 Ubiquitous language` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:143 — defined here
- `O3 Relationships` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:144 — defined here
- `O4 Aggregate boundaries` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:145 — defined here
- `O5 Decision rules` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:146 — defined here
- `O6 Bounded-context boundaries` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:147 — defined here
- `O7 Open ontology questions` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:148 — defined here
- `OntologyFragment` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:150 — defined here
- `adversarial requirements interview` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:155 — used here
- `Classify complexity tier` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:156 — used here
- `analyst` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:156 — used here
- `CVA` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:158 — used here
- `Step 3 problem-domain classification` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:162 — defined here
- `Cynefin` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:162 — used here
- `Step 4 provenance and dependency gates` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:184 — defined here
- `Ownership first` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:188 — defined here
- `Dependency scrutiny` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:189 — defined here
- `Buy-vs-build gate` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:192 — defined here
- `CVA analysis` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:193 — used here
- `spec-generator` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:204 — used here
- `EARS` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:205 — used here
- `threat-modeling` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:210 — used here
- `OWASP Four-Question Framework` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:212 — used here
- `STRIDE` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:212 — used here
- `Observability section` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:221 — defined here
- `slo-designer` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:221 — used here
- `SLIs` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:225 — used here
- `SLOs` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:226 — used here
- `Error budgets` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:227 — used here
- `Tier 4-5 ADR generation and review` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:232 — defined here
- `Co-change checklist` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:241 — defined here
- `Analyst review` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:290 — defined here
- `doc-accuracy` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:292 — used here
- `golden-principles` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:293 — used here
- `decision-critic` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:296 — used here
- `critic` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:297 — used here
- `pre-mortem` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:297 — used here
- `binary drift checks` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:299 — defined here
- `Demand Reality drift` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:301 — defined here
- `Desperate Specificity drift` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:304 — defined here
- `Narrowest Wedge drift` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:307 — defined here
- `Prior Art / Constraints elicitation` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:310 — defined here

## Structure
- `#### Step 0.5 PriorArtBlock output schema` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:1
- `#### Step 0.5 halt criteria` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:30
- `#### Step 0.5 halt block format` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:45
- `#### Step 0.5 supplemental traversal hook (cross-step)` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:92
- `#### Step 0.5 metrics tally` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:108
- `#### Step 1 Ontology elicitation (domain-driven design)` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:134
- `#### Step 3 problem-domain classification (Cynefin)` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:162
- `#### Step 4 provenance and dependency gates` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:184
- `#### Step 6 Security section (threat-modeling)` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:210
- `#### Step 6 Observability section (slo-designer)` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:221
- `#### Step 6 Tier 4-5 ADR generation and review (BLOCKING)` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:232
- `#### Co-change checklist (REQ-012-04, REQ-012-05)` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:241

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/spec-generator/references/spec-prior-art-schema.md:270-272 · Co-change checklist worked example cites non-existent workflow and action paths (.github/actions/pr-quality-gate/action.yml and .github/workflows/pr-quality-gate.yml).
- doc-drift · .claude/skills/spec-generator/references/spec-prior-art-schema.md:3 · Header comment states the content was extracted from spec-generator/SKILL.md, but test assertions (test_spec_ontology.py, test_spec_step0_5.py) and git issue #3632 establish it was extracted from .claude/commands/spec.md.
- doc-drift · .claude/skills/spec-generator/references/spec-prior-art-schema.md:130-315 · Reference file contains the entire /spec command execution pipeline (steps 1 through 9) despite being titled spec-prior-art-schema.md and located under the spec-generator skill.

## Observations
- Functions as the canonical specification pipeline and schema reference for the /spec lifecycle workflow in rjm, shared across Claude Code and Copilot CLI harnesses.
- Encodes the Step 0.5 Memory-First Gate machine-readable contract, including strict halt block formats (info-string `step0_5-halt`) and mandatory pre-emit secret redaction via `scripts/redact_secrets.py` to prevent credentials from entering git history.
- Enforces hardened metrics tally writing with `O_NOFOLLOW` and `flock` in `scripts/metrics_writer.py` to prevent TOCTOU and link-following vulnerabilities.
- Integrates domain-driven design ontology elicitation (O1-O7) into Step 1 to produce a persistent `OntologyFragment` enforcing ubiquitous language across requirements, design, tasks, and CI completeness checks.
- Couples engineering complexity tiers (Tier 1-5) with Cynefin problem-domain classification (Clear, Complicated, Complex, Chaotic).

## Context cost
38288 bytes, approximately 9500 tokens.
