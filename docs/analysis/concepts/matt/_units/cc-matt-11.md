---
unit: cc-matt-11
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-11

## Files assigned
- [x] sources/matt/docs/engineering/code-review.md
- [x] sources/matt/docs/engineering/codebase-design.md
- [x] sources/matt/docs/engineering/domain-modeling.md
- [x] sources/matt/docs/engineering/implement.md
- [x] sources/matt/docs/engineering/improve-codebase-architecture.md
- [x] sources/matt/docs/engineering/research.md
- [x] sources/matt/docs/productivity/wait-what.md
- [x] sources/matt/docs/productivity/writing-for-agents.md
- [x] sources/matt-external/code-review.md
- [x] sources/matt-external/codebase-design.md
- [x] sources/matt-external/domain-modeling.md
- [x] sources/matt-external/implement.md
- [x] sources/matt-external/improve-codebase-architecture.md
- [x] sources/matt-external/prototype.md
- [x] sources/matt-external/tdd.md
- [x] sources/matt-external/writing-for-agents.md
- [x] sources/matt/skills/engineering/code-review/SKILL.md
- [x] sources/matt/skills/engineering/codebase-design/DEEPENING.md
- [x] sources/matt/skills/engineering/codebase-design/DESIGN-IT-TWICE.md
- [x] sources/matt/skills/engineering/codebase-design/SKILL.md
- [x] sources/matt/skills/engineering/codebase-design/agents/openai.yaml
- [x] sources/matt/skills/engineering/diagnosing-bugs/agents/openai.yaml
- [x] sources/matt/skills/engineering/domain-modeling/agents/openai.yaml
- [x] sources/matt/skills/engineering/improve-codebase-architecture/HTML-REPORT.md
- [x] sources/matt/skills/engineering/improve-codebase-architecture/SKILL.md
- [x] sources/matt/skills/engineering/research/agents/openai.yaml
- [x] sources/matt/skills/engineering/resolving-merge-conflicts/agents/openai.yaml
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/agents/openai.yaml
- [x] sources/matt/skills/engineering/tdd/SKILL.md
- [x] sources/matt/skills/engineering/tdd/agents/openai.yaml
- [x] sources/matt/skills/engineering/to-spec/agents/openai.yaml
- [x] sources/matt/skills/engineering/to-tickets/agents/openai.yaml
- [x] sources/matt/skills/engineering/triage/agents/openai.yaml
- [x] sources/matt/skills/engineering/wayfinder/agents/openai.yaml
- [x] sources/matt/skills/engineering/wizard/agents/openai.yaml
- [x] sources/matt/skills/in-progress/README.md
- [x] sources/matt/skills/in-progress/claude-handoff/agents/openai.yaml
- [x] sources/matt/skills/in-progress/implement-spec/agents/openai.yaml
- [x] sources/matt/skills/in-progress/loop-me/agents/openai.yaml
- [x] sources/matt/skills/in-progress/retro/agents/openai.yaml
- [x] sources/matt/skills/in-progress/setup-ts-deep-modules/SKILL.md
- [x] sources/matt/skills/in-progress/setup-ts-deep-modules/agents/openai.yaml
- [x] sources/matt/skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs
- [x] sources/matt/skills/in-progress/writing-beats/agents/openai.yaml
- [x] sources/matt/skills/in-progress/writing-fragments/agents/openai.yaml
- [x] sources/matt/skills/in-progress/writing-shape/agents/openai.yaml
- [x] sources/matt/skills/misc/git-guardrails-claude-code/agents/openai.yaml
- [x] sources/matt/skills/misc/migrate-to-shoehorn/agents/openai.yaml
- [x] sources/matt/skills/misc/scaffold-exercises/agents/openai.yaml
- [x] sources/matt/skills/misc/setup-pre-commit/agents/openai.yaml
- [x] sources/matt/skills/productivity/grill-me/agents/openai.yaml
- [x] sources/matt/skills/productivity/grilling/agents/openai.yaml
- [x] sources/matt/skills/productivity/handoff/agents/openai.yaml
- [x] sources/matt/skills/productivity/teach/agents/openai.yaml

## Outputs produced
- docs/analysis/concepts/matt/mysterious-name.md — 1742 bytes
- docs/analysis/concepts/matt/duplicated-code.md — 1579 bytes
- docs/analysis/concepts/matt/feature-envy.md — 1548 bytes
- docs/analysis/concepts/matt/data-clumps.md — 1559 bytes
- docs/analysis/concepts/matt/primitive-obsession.md — 1571 bytes
- docs/analysis/concepts/matt/repeated-switches.md — 1640 bytes
- docs/analysis/concepts/matt/shotgun-surgery.md — 1574 bytes
- docs/analysis/concepts/matt/divergent-change.md — 1531 bytes
- docs/analysis/concepts/matt/speculative-generality.md — 1596 bytes
- docs/analysis/concepts/matt/message-chains.md — 1535 bytes
- docs/analysis/concepts/matt/middle-man.md — 1506 bytes
- docs/analysis/concepts/matt/refused-bequest.md — 1525 bytes
- docs/analysis/concepts/matt/confirmation-bias.md — 1433 bytes
- docs/analysis/concepts/matt/three-dot.md — 1505 bytes
- docs/analysis/concepts/matt/build-chain.md — 1193 bytes
- docs/analysis/concepts/matt/codebase-design.md — 3079 bytes
- docs/analysis/concepts/matt/module.md — 2373 bytes
- docs/analysis/concepts/matt/interface.md — 6818 bytes
- docs/analysis/concepts/matt/depth.md — 2356 bytes
- docs/analysis/concepts/matt/adapter.md — 2256 bytes
- docs/analysis/concepts/matt/leverage.md — 2045 bytes
- docs/analysis/concepts/matt/locality.md — 2177 bytes
- docs/analysis/concepts/matt/deep.md — 1338 bytes
- docs/analysis/concepts/matt/shallow.md — 1619 bytes
- docs/analysis/concepts/matt/deletion-test.md — 1952 bytes
- docs/analysis/concepts/matt/deepening-md.md — 1131 bytes
- docs/analysis/concepts/matt/design-it-twice-md.md — 1314 bytes
- docs/analysis/concepts/matt/sub-agents.md — 1670 bytes
- docs/analysis/concepts/matt/setup-ts-deep-modules.md — 1419 bytes
- docs/analysis/concepts/matt/tokens.md — 1879 bytes
- docs/analysis/concepts/matt/_units/cc-matt-11.md — this report

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/<slug>.md — exit 0 (30 PASS, 0 FAIL)
- bun scripts/synthesis/coverage.ts — exit 0 (clean, 0 failures)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Fowler code smells (Mysterious Name, Duplicated Code, Feature Envy, Data Clumps, Primitive Obsession, Repeated Switches, Shotgun Surgery, Divergent Change, Speculative Generality, Message Chains, Middle Man, Refused Bequest) are codified as a fixed smell baseline under the Standards axis in Matt's code-review skill, but represent standard industry refactoring heuristics that feed directly into Phase 3 concordance across packages.
- Interface appears in 21 `openai.yaml` files as a top-level schema key (`interface:`) for OpenAI agent integration, while also functioning as a primary architectural concept defined in `codebase-design` and `SKILL.md`. All occurrences are documented in the card's `Where used` table.
- `codebase-design` provides foundational terminology (module, interface, depth, seam, adapter, leverage, locality, deletion test) that is imported and reused across multiple skills, including `tdd`, `improve-codebase-architecture`, and `setup-ts-deep-modules`.
- `DEEPENING.md` and `DESIGN-IT-TWICE.md` are supporting documentation file names within `skills/engineering/codebase-design/` and are recorded as `kind: name-only` cards.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~140,000 tokens (across 54 files including external HTML snapshots).
Approximate output written: ~14,500 tokens across 30 concept cards and this unit report.
