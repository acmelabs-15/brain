---
unit: cc-matt-27
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-27

## Files assigned
- [x] sources/matt/skills/engineering/diagnosing-bugs/SKILL.md
- [x] sources/matt/skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh
- [x] sources/matt/skills/engineering/domain-modeling/ADR-FORMAT.md
- [x] sources/matt/skills/engineering/domain-modeling/CONTEXT-FORMAT.md
- [x] sources/matt/skills/engineering/domain-modeling/SKILL.md
- [x] sources/matt/skills/engineering/grill-with-docs/SKILL.md
- [x] sources/matt/skills/engineering/implement/SKILL.md
- [x] sources/matt/skills/engineering/improve-codebase-architecture/HTML-REPORT.md
- [x] sources/matt/skills/engineering/improve-codebase-architecture/agents/openai.yaml
- [x] sources/matt/skills/productivity/teach/LEARNING-RECORD-FORMAT.md
- [x] docs/analysis/inventory/matt/skills-engineering-diagnosing-bugs-scripts-hitl-loop-template-sh.md
- [x] docs/analysis/inventory/matt/skills-engineering-diagnosing-bugs-skill-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-domain-modeling-adr-format-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-domain-modeling-context-format-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-domain-modeling-skill-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-grill-with-docs-skill-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-implement-skill-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-improve-codebase-architecture-agents-openai-yaml.md
- [x] docs/analysis/inventory/matt/skills-engineering-improve-codebase-architecture-html-report-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-teach-learning-record-format-md.md

## Outputs produced
- docs/analysis/concepts/matt/errored.md (905 bytes)
- docs/analysis/concepts/matt/error-msg.md (897 bytes)
- docs/analysis/concepts/matt/redact.md (1368 bytes)
- docs/analysis/concepts/matt/playwright.md (1220 bytes)
- docs/analysis/concepts/matt/puppeteer.md (1169 bytes)
- docs/analysis/concepts/matt/hitl-bash-script.md (1441 bytes)
- docs/analysis/concepts/matt/non-deterministic-bugs.md (1348 bytes)
- docs/analysis/concepts/matt/red-capable.md (1408 bytes)
- docs/analysis/concepts/matt/falsifiable.md (1209 bytes)
- docs/analysis/concepts/matt/perf-branch.md (1319 bytes)
- docs/analysis/concepts/matt/status.md (1613 bytes)
- docs/analysis/concepts/matt/considered-options.md (1251 bytes)
- docs/analysis/concepts/matt/consequences.md (1239 bytes)
- docs/analysis/concepts/matt/hard-to-reverse.md (1510 bytes)
- docs/analysis/concepts/matt/surprising-without-context.md (1644 bytes)
- docs/analysis/concepts/matt/multiple-contexts.md (1370 bytes)
- docs/analysis/concepts/matt/context-map.md (1121 bytes)
- docs/analysis/concepts/matt/contexts.md (1102 bytes)
- docs/analysis/concepts/matt/domain-model.md (1374 bytes)
- docs/analysis/concepts/matt/adr-s.md (1345 bytes)
- docs/analysis/concepts/matt/typechecking.md (1152 bytes)
- docs/analysis/concepts/matt/test-suite.md (1168 bytes)
- docs/analysis/concepts/matt/architecture-improvements.md (1282 bytes)
- docs/analysis/concepts/matt/os-temp-directory.md (1030 bytes)
- docs/analysis/concepts/matt/tailwind.md (1099 bytes)
- docs/analysis/concepts/matt/mermaid.md (1382 bytes)
- docs/analysis/concepts/matt/mass-diagrams.md (1421 bytes)
- docs/analysis/concepts/matt/cross-sections.md (1408 bytes)
- docs/analysis/concepts/matt/candidate-card.md (1696 bytes)
- docs/analysis/concepts/matt/before-after-diagram.md (1704 bytes)
- docs/analysis/concepts/matt/_units/cc-matt-27.md (this report)

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/errored.md docs/analysis/concepts/matt/error-msg.md docs/analysis/concepts/matt/redact.md docs/analysis/concepts/matt/playwright.md docs/analysis/concepts/matt/puppeteer.md docs/analysis/concepts/matt/hitl-bash-script.md docs/analysis/concepts/matt/non-deterministic-bugs.md docs/analysis/concepts/matt/red-capable.md docs/analysis/concepts/matt/falsifiable.md docs/analysis/concepts/matt/perf-branch.md docs/analysis/concepts/matt/status.md docs/analysis/concepts/matt/considered-options.md docs/analysis/concepts/matt/consequences.md docs/analysis/concepts/matt/hard-to-reverse.md docs/analysis/concepts/matt/surprising-without-context.md docs/analysis/concepts/matt/multiple-contexts.md docs/analysis/concepts/matt/context-map.md docs/analysis/concepts/matt/contexts.md docs/analysis/concepts/matt/domain-model.md docs/analysis/concepts/matt/adr-s.md docs/analysis/concepts/matt/typechecking.md docs/analysis/concepts/matt/test-suite.md docs/analysis/concepts/matt/architecture-improvements.md docs/analysis/concepts/matt/os-temp-directory.md docs/analysis/concepts/matt/tailwind.md docs/analysis/concepts/matt/mermaid.md docs/analysis/concepts/matt/mass-diagrams.md docs/analysis/concepts/matt/cross-sections.md docs/analysis/concepts/matt/candidate-card.md docs/analysis/concepts/matt/before-after-diagram.md (exit 0, 45 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-matt-27 spans four primary thematic areas in Matt's development workflows:
  1. Diagnostic and bug reproduction mechanics (`diagnosing-bugs`, `hitl-loop.template.sh`): Variables capturing error states (`ERRORED`, `ERROR_MSG`), secret redaction practices (`Redact`), automated headless testing harnesses (`Playwright`, `Puppeteer`), human-in-the-loop loops (`HITL bash script`), handling stochastic failures (`Non-deterministic bugs`), test feedback loop quality gates (`red-capable`), hypothesis generation standards (`falsifiable`), and performance regression bisection (`Perf branch`).
  2. Architectural decision recording and domain modeling (`domain-modeling`, `ADR-FORMAT.md`, `CONTEXT-FORMAT.md`, `grill-with-docs`, `LEARNING-RECORD-FORMAT.md`): Metadata lifecycle tracking (`Status`), optional ADR sections for non-obvious choices (`Considered Options`, `Consequences`), thresholds for documenting ADRs (`Hard to reverse`, `Surprising without context`), bounded context boundary management (`Multiple contexts`, `Context Map`, `Contexts`), ubiquitous language formulation (`domain model`), and colloquial references to decision logs (`ADR's`).
  3. Continuous implementation hygiene (`implement`): Rapid compiler and test harness verification loops (`typechecking`, `test suite`).
  4. Visual codebase architecture reporting (`improve-codebase-architecture`, `HTML-REPORT.md`, `openai.yaml`): Refactoring objectives (`architecture improvements`), non-polluting report rendering (`OS temp directory`), CDN libraries (`Tailwind`, `Mermaid`), editorial visual conventions (`mass diagrams`, `cross-sections`), individual refactoring proposals (`Candidate card`), and side-by-side comparison graphics (`Before / After diagram`).
- Variables (`ERRORED`, `ERROR_MSG`) and syntax identifiers from bash templates were assigned `kind: name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 10 source files and 10 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards (39,195 bytes) and 1 unit report.
