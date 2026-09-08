# Concordance — References & Checklists

This document establishes the structural and detailed concordance for all **reference** and **checklist** concepts across the three source packages: `addy` (Addy Osmani), `matt` (Matt Pocock), and `rjm` (RJ Murillo).

Per METHOD.md §5, §9, and `templates/concordance-row.md` ("Reference documents and checklists loaded by skills"), this concordance maps every architectural reference, specification guide, code smell baseline, testing pattern, security catalog, performance target, review checklist, operational release guardrail, and agent harness specification into an aligned, rigorous taxonomy.

---

## Structural Overview — Comparative References & Checklists Landscape across the Three Packages

Reference documents and checklists provide the explicit external knowledge, domain specifications, verification criteria, and operational heuristics loaded by skills and agents to ensure high-fidelity execution without relying on hallucinated or drift-prone parametric weights. Across the three source repositories, references and checklists embody three distinct architectures:

1. **Addy (`agent-skills`) — Authoritative Reference Catalogs and Comprehensive Domain Checklists:** Addy organizes references into dedicated root directories (`references/definition-of-done.md`, `references/performance-checklist.md`, `references/testing-patterns.md`, `references/security-checklist.md`). Addy establishes rigorous engineering baselines across web performance (Core Web Vitals targets, CrUX, PageSpeed), frontend/backend checklists, accessibility (WCAG 2.1 AA, axe-core, DevTools audits), and dual-harness execution guidelines (Claude Code interop, Gemini CLI, Antigravity).

2. **Matt (`skills`) — Context Protection Heuristics, Smell Baselines, and Issue Tracker Catalogs:** Matt frames references around cognitive economy and anti-drift rules. References emphasize primary source verification, ASD-STE100 Simplified Technical English, Fowler code smell baselines, deep module design, and domain-driven design (DDD). Matt also formalizes issue tracker integration standards (GitHub Issues, Linear, issue-tracker lifecycle schemas) and token context window constraints.

3. **RJM (`ai-agents`) — Formal Architectural Decision Records, Platform Invariants, and Verification Checklists:** RJM enforces an extensive catalog of formal governance documents: architectural decision records (ADRs), complexity tiers, instrument indices, prompt engineering standards, static analysis checklists, style guide compliance, and taste invariants. Checklists in RJM function as non-negotiable inspection routines executed by specialized review and audit agents.

### Summary of References & Checklists Concordance by Class

Total concordance rows: **694** mapping **720** concept cards across 10 logical sections.

| Class | Meaning | Count |
|---|---|---|
| `ALIGNED` | Same concept, same name (or trivially equivalent), compatible definition | 7 |
| `SYNONYM` | Same concept, different names across packages | 17 |
| `HOMONYM` | Same name, different concepts | 0 |
| `PARTIAL` | Overlapping but not identical concepts | 0 |
| `UNIQUE` | Present in one package only | 670 |
| `CONFLICT` | Incompatible definitions or sequencing | 0 |

---

## Concordance Rows

## 1. Architecture, Systems Design & Structural Invariant References

### domain-driven-design

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `DDD` | `Domain-Driven Design` |
| **card** | — | [link](../concepts/matt/ddd.md) | [link](../concepts/rjm/domain-driven-design.md) |
| **kind** | — | reference | reference |
| **phase** | — | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | — | Conceptual models, ubiquitous language glossaries (`CONTEXT.md`), and bounded contexts. | Explicit bounded contexts, ubiquitous language definitions, aggregates, entities, and value objects. |
| **consumes** | — | Business domain requirements, problem domain concepts, and ubiquitous language discussions. | Problem domain requirements, agent boundaries, and system integration contracts. |
| **impl status** | — | clean in methodology reference; documented limitation in docs/engineering/domain-modeling.md:70 regarding diminishing returns of tactical DDD ceremonies | clean |

- **class:** SYNONYM
- **difference:** Matt names DDD as architectural guidance for bounded contexts and ubiquitous language; RJM formalizes Domain-Driven Design references across subsystem boundaries.
- **sequencing note:** Applied during architecture discovery and system decomposition.
- **needs decision:** no
- **decision:** D-588

### architectural-decision-records

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `architectural decision records` | `ADR-002` |
| **card** | — | [link](../concepts/matt/architectural-decision-records.md) | [link](../concepts/rjm/adr-002.md) |
| **kind** | — | reference | reference |
| **phase** | — | `matt:matt:productivity` | `rjm:none` |
| **produces** | — | none | Baseline agent model assignment policy balancing capability against API cost. |
| **consumes** | — | none | none |
| **impl status** | — | defects: doc-drift, other (teach/SKILL.md omits link to GLOSSARY-FORMAT.md; lacks initial knowledge assessment step) | defects: internal-contradiction, doc-drift (ADR-039 unconsummated supersession claims) |

- **class:** SYNONYM
- **difference:** Matt references Architectural Decision Records as immutable design history; RJM indexes specific numbered ADR documents (e.g. ADR-002) governing architecture invariants.
- **sequencing note:** Recorded during architectural review; referenced throughout build and test.
- **needs decision:** no
- **decision:** D-589

### decision-guide

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Decision Guide` | — | — |
| **card** | [link](../concepts/addy/decision-guide.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Clear selection of test level and size (Unit/small, Integration/medium, or E2E/large). | — | — |
| **consumes** | Architectural properties of the component or code logic under test. | — | — |
| **impl status** | defects: cross-file-contradiction, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### codebase-design

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `codebase-design` | — |
| **card** | — | [link](../concepts/matt/codebase-design.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Strict architectural vocabulary and design evaluation principles. | — |
| **consumes** | — | Module code, proposed interfaces, or deepening candidates. | — |
| **impl status** | — | defects: script-bug (runaway agent loop / token burn when model invokes DESIGN-IT-TWICE without driver controls, issue | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### deep-module-vocabulary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `deep-module vocabulary` | — |
| **card** | — | [link](../concepts/matt/deep-module-vocabulary.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Shared architectural lexicon and principles for designing deep modules with minimal interfaces. | — |
| **consumes** | — | Architectural boundary designs and module interface definitions. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### complexity-tiers-reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Complexity tiers reference` |
| **card** | — | — | [link](../concepts/rjm/complexity-tiers-reference.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Engineering complexity tier classification criteria (Tier 1-5) used to calibrate review depth. |
| **consumes** | — | — | Candidate paths in Claude Code project layout (`.claude/skills/analyze/references/engineering-complexity-tiers.md`) or vendored plugin root (`skills/analyze/references/engineering-complexity-tiers.md`). |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### adr-026

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR-026` |
| **card** | — | — | [link](../concepts/rjm/adr-026.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architectural decisions establishing PR automation concurrency safety, run cancellation rules, and dedicated bot credential isolation. |
| **consumes** | — | — | GitHub Actions concurrency limitations and CI bot token rate limits. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### conways-law

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `conways-law` |
| **card** | — | — | [link](../concepts/rjm/conways-law.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architectural decisions aligned with organizational communication patterns and team boundaries. |
| **consumes** | — | — | Organizational structure, communication paths, and service boundaries. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### patterns-and-oversight

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Patterns and Oversight` |
| **card** | — | — | [link](../concepts/rjm/patterns-and-oversight.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Evaluation of pattern appropriateness (preventing over- or under-engineering) and oversight cadence. |
| **consumes** | — | — | Active implementation tasks and proposed software patterns. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### claude-flow-s-consensus-and-decision-making-wiki-8-4

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `claude-flow's Consensus and Decision Making (wiki 8.4)` |
| **card** | — | — | [link](../concepts/rjm/claude-flow-s-consensus-and-decision-making-wiki-8-4.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: orphan, script-bug |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### pattern-compliance

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pattern Compliance` |
| **card** | — | — | [link](../concepts/rjm/pattern-compliance.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:Phase 4: Synthesis Panel` |
| **produces** | — | — | Verification of standard pattern implementation (Result dataclass, argparse CLI, exit codes). |
| **consumes** | — | — | Python scripts packaged in skill `scripts/` directory. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Phase 4: Synthesis Panel phase workflows.
- **needs decision:** no
- **decision:** —

### adr-080

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR-080` |
| **card** | — | — | [link](../concepts/rjm/adr-080.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Governance policy mandating that skills omit model pins or provide explicit cost-saving rationales for cheaper rolling aliases. |
| **consumes** | — | — | Model benchmark results, sidecar evidence manifests, and pricing tier configurations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### principles

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Principles` |
| **card** | — | — | [link](../concepts/rjm/principles.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | High-signal code comments stripped of redundant paraphrasing and outdated assertions. |
| **consumes** | — | — | Proposed source comments, function signatures, and docstrings. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### strategic-architecture-principles

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Strategic Architecture Principles` |
| **card** | — | — | [link](../concepts/rjm/strategic-architecture-principles.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Evaluated architectural designs that avoid over-engineering, honor historical constraints, and focus investment on core capabilities. |
| **consumes** | — | — | Architectural proposals, feature removal plans, and legacy system evaluations. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### architectural-principles

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Architectural Principles` |
| **card** | — | — | [link](../concepts/rjm/architectural-principles.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architectural evaluations grounded in non-negotiable software design qualities. |
| **consumes** | — | — | System proposals, design reviews, module boundaries, and implementation plans. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### agent-architecture-patterns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Architecture Patterns` |
| **card** | — | — | [link](../concepts/rjm/agent-architecture-patterns.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Architectural constraints for agent reliability, skill context budgets, and structured prompt standards. |
| **consumes** | — | — | Multi-agent system architecture specifications and agent prompt designs. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### patterns-of-enterprise-application-architecture

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Patterns of Enterprise Application Architecture` |
| **card** | — | — | [link](../concepts/rjm/patterns-of-enterprise-application-architecture.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architectural standards for data persistence, transactional boundaries, and service orchestration in agent systems. |
| **consumes** | — | — | Classical enterprise architecture literature and proven design patterns for business applications. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### agent-selection-matrix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Selection Matrix` |
| **card** | — | — | [link](../concepts/rjm/agent-selection-matrix.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Prescribed triad assignments (Primary, Secondary, Validator) for orchestrating work. |
| **consumes** | — | — | Categorized task types (e.g. formal specification, new feature, bug fix, refactor, security review). |
| **impl status** | — | — | defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files) |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### ecadr-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ecADR Checklist` |
| **card** | — | — | [link](../concepts/rjm/ecadr-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Completed five-item markdown verification checklist attesting to decision completeness and rigor. |
| **consumes** | — | — | Finalized ADR draft, evidence artifacts, evaluation tables, stakeholder consensus or dissent records, and implementation schedules. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### technical-debt-quadrant

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Technical Debt Quadrant` |
| **card** | — | — | [link](../concepts/rjm/technical-debt-quadrant.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Categorized technical debt classifications (deliberate/inadvertent, reckless/prudent) to guide refactoring investments. |
| **consumes** | — | — | Debt assessment findings, engineering timeline pressures, system quality metrics. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### expected-patterns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Expected Patterns` |
| **card** | — | — | [link](../concepts/rjm/expected-patterns.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | False-positive suppression and exemptions for benign, standard architectural patterns. |
| **consumes** | — | — | Pull request diffs, code constructs, and workflow definitions. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, doc-drift (.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:104); clean in .claude/skills/review/references/devops.md and references/qa.md |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### design-pattern-adherence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Design Pattern Adherence` |
| **card** | — | — | [link](../concepts/rjm/design-pattern-adherence.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Evaluation of SOLID/DRY/KISS compliance and identification of architectural anti-patterns. |
| **consumes** | — | — | Code changes, abstraction designs, and dependency injection implementations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### when-to-write-an-adr

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `When to Write an ADR` |
| **card** | — | — | [link](../concepts/rjm/when-to-write-an-adr.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Determination whether formal architectural documentation is warranted. |
| **consumes** | — | — | Proposed architectural decisions and their systemic impact. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### detecting-manipulation-patterns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Detecting Manipulation Patterns` |
| **card** | — | — | [link](../concepts/rjm/detecting-manipulation-patterns.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:support` |
| **produces** | — | — | Actionable identification of manipulative tactics (artificial urgency, phantom authority, anchoring, nibbling) and tactical counters. |
| **consumes** | — | — | Counterpart negotiation rhetoric, timing tactics, and framing signals. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during support phase workflows.
- **needs decision:** no
- **decision:** —

### legacy-modernization-patterns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Legacy Modernization Patterns` |
| **card** | — | — | [link](../concepts/rjm/legacy-modernization-patterns.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Migration blueprints and ADRs that avoid atomic breaking changes and enable incremental modernization. |
| **consumes** | — | — | Legacy system architectures, schema modification requirements, and system migration goals. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### chaos-engineering-principles

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Chaos Engineering Principles` |
| **card** | — | — | [link](../concepts/rjm/chaos-engineering-principles.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured experiment designs, blast-radius containment strategies, and resilience verification protocols. |
| **consumes** | — | — | System architecture models, observability telemetry, and failure mode hypotheses. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### coupling-cohesion

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Coupling & Cohesion` |
| **card** | — | — | [link](../concepts/rjm/coupling-cohesion.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Evaluation of coupling minimalism, component cohesion, and implicit contract risks. |
| **consumes** | — | — | Inter-component dependencies, public API surfaces, and component responsibilities. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### skill-gate-matrix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Gate Matrix` |
| **card** | — | — | [link](../concepts/rjm/skill-gate-matrix.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Status matrix detailing which skills implement Evidence, Verification, Review, and Documentation gates. |
| **consumes** | — | — | Gate requirements across repository skills. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### conway-s-law

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Conway's Law` |
| **card** | — | — | [link](../concepts/rjm/conway-s-law.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architectural boundary evaluations and recommendations for organizational-architectural alignment. |
| **consumes** | — | — | Architectural component boundaries, service split proposals, and organizational communication structures. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### principles-of-simplicity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Principles of Simplicity` |
| **card** | — | — | [link](../concepts/rjm/principles-of-simplicity.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Four concrete simplicity rules that eliminate speculative complexity and unnecessary moving parts. |
| **consumes** | — | — | Candidate architectures, proposed abstractions, class and method designs. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### tier-summary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Tier Summary` |
| **card** | — | — | [link](../concepts/rjm/tier-summary.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Baseline tier categorization across experience, focus, and autonomy dimensions. |
| **consumes** | — | — | Task scope and domain boundaries. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### adr-088

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR-088` |
| **card** | — | — | [link](../concepts/rjm/adr-088.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Reorganization of static engineering rules into the progressive-disclosure software-engineering-library skill, guarded by an automated activation gate. |
| **consumes** | — | — | Book reference extraction audits, skill activation telemetry, rule coverage metrics. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### meta-prompting-principles

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `meta-prompting principles` |
| **card** | — | — | [link](../concepts/rjm/meta-prompting-principles.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:Phase 2: Specification` |
| **produces** | — | — | High-fidelity, structured prompting patterns that separate analysis context from execution rules. |
| **consumes** | — | — | Prompt design theories and agent instruction architectures. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Phase 2: Specification phase workflows.
- **needs decision:** no
- **decision:** —

### step-2-decision-classification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `step_2_decision_classification` |
| **card** | — | — | [link](../concepts/rjm/step-2-decision-classification.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Decision classification table mapping choices to backing tiers (`user-specified`, `doc-derived`, `default-derived`, `assumption`) with source citations. |
| **consumes** | — | — | Architectural choices and implementation approaches proposed for the plan. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### quick-classification-matrix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quick Classification Matrix` |
| **card** | — | — | [link](../concepts/rjm/quick-classification-matrix.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Immediate classification coordinates across task type, complexity tier, and baseline risk level. |
| **consumes** | — | — | File path patterns (such as `lefthook.yml`, `**/Auth/**`), prompt keywords, and task characteristics. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### key-principles

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Key Principles` |
| **card** | — | — | [link](../concepts/rjm/key-principles.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Guiding design constraints that prioritize compile-time safety, pragmatism, and maintainability. |
| **consumes** | — | — | Type definitions under review and proposed structural modifications. |
| **impl status** | — | — | defects: other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### allocation-free-patterns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Allocation-Free Patterns` |
| **card** | — | — | [link](../concepts/rjm/allocation-free-patterns.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architectural patterns and idioms that eliminate heap allocation overhead without sacrificing testability or maintainability. |
| **consumes** | — | — | Performance-critical source code, hot-path routines, and memory consumption requirements in .NET systems. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### anti-obsolescence-pattern-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Anti-Obsolescence Pattern Check` |
| **card** | — | — | [link](../concepts/rjm/anti-obsolescence-pattern-check.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Verification checklist covering principles, rationales, coupling, degradation, versioning, and ecosystem fit. |
| **consumes** | — | — | Draft skill specification, design decisions, and architectural choices. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### decision-frameworks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Decision Frameworks` |
| **card** | — | — | [link](../concepts/rjm/decision-frameworks.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Selection of an appropriate decision model to structure problem investigation and hypothesis evaluation. |
| **consumes** | — | — | Investigation problem structure, complexity indicators, and domain context. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### coplien-multi-paradigm-design

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Coplien Multi-Paradigm Design` |
| **card** | — | — | [link](../concepts/rjm/coplien-multi-paradigm-design.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Theoretical framework and heuristics guiding multi-paradigm abstraction discovery. |
| **consumes** | — | — | Software engineering literature, multi-paradigm design theory, commonality/variability analysis principles. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### adr-014

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR-014` |
| **card** | — | — | [link](../concepts/rjm/adr-014.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Distributed handoff specification and session log schema contract. |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### adr-071

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR-071` |
| **card** | — | — | [link](../concepts/rjm/adr-071.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Formal specification of hook runtime contracts, fail-open/fail-closed behaviors, and execution timeouts. |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### adr-061

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR-061` |
| **card** | — | — | [link](../concepts/rjm/adr-061.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Architectural analysis of hook matcher shim delegation, recorded debate log, and withdrawal rationale adopting Alternative B. |
| **consumes** | — | — | Tool-use hook definitions, matcher generation specifications, PR drift reports. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### engineering-complexity-tiers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Engineering Complexity Tiers` |
| **card** | — | — | [link](../concepts/rjm/engineering-complexity-tiers.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Complexity tier ratings (Tier 1-5), review rigor requirements, quality gate criteria. |
| **consumes** | — | — | Architectural proposals, component dependencies, feature scope definitions. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### agent-design-principles

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Design Principles` |
| **card** | — | — | [link](../concepts/rjm/agent-design-principles.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Conforming agent designs exhibiting sharp specialization, measurable success metrics, and standardized interfaces. |
| **consumes** | — | — | Agent prompt proposals, role descriptions, and capability boundary specifications. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### cva-matrix-building-examples-net-focus

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CVA Matrix Building Examples (.NET Focus)` |
| **card** | — | — | [link](../concepts/rjm/cva-matrix-building-examples-net-focus.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Comprehensive worked CVA matrices, pattern selections, concrete C |
| **consumes** | — | — | Domain use cases (payment processing, ASP.NET middleware pipelines, DI lifetime scopes, YAGNI boundaries). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### cva-matrix-pattern-mapping-guide

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CVA Matrix Pattern Mapping Guide` |
| **card** | — | — | [link](../concepts/rjm/cva-matrix-pattern-mapping-guide.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Emergent pattern selections (Strategy, Abstract Factory, Template Method, Combination patterns), code templates, and validation criteria. |
| **consumes** | — | — | Completed CVA matrices with identified commonalities (rows) and variabilities (columns). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### agent-capability-matrix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Capability Matrix` |
| **card** | — | — | [link](../concepts/rjm/agent-capability-matrix.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Target agent role selections matching the capabilities required for the subtask. |
| **consumes** | — | — | Triage classification, task complexity analysis, and identified problem domains. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### critical-error-patterns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Critical Error Patterns` |
| **card** | — | — | [link](../concepts/rjm/critical-error-patterns.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | High-priority diagnostic items flagged for immediate remediation. |
| **consumes** | — | — | Execution logs exhibiting task abortion, broken builds, test failures, or hard blockers. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### core-principles

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Core Principles` |
| **card** | — | — | [link](../concepts/rjm/core-principles.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | auditing-standards |
| **consumes** | — | — | silent-failure-hunter-agent |
| **impl status** | — | — | defects: other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### adr-097

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR-097` |
| **card** | — | — | [link](../concepts/rjm/adr-097.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Architectural policy mandating zero registered tool-use hooks in shipped plugins. |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### gof-pattern-selection-from-cva-results

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GoF Pattern Selection from CVA Results` |
| **card** | — | — | [link](../concepts/rjm/gof-pattern-selection-from-cva-results.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Decision table mapping matrix findings to GoF patterns (Strategy, Abstract Factory, Bridge, Adapter, Facade, Factory Method). |
| **consumes** | — | — | Completed CVA matrix detailing commonalities (rows) and variabilities (columns). |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### adr-104

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR-104` |
| **card** | — | — | [link](../concepts/rjm/adr-104.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Architectural policy governing execution timeouts and mandatory empirical measurement backing. |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

## 2. Specification, Requirements, Sizing & Acceptance Criteria Checklists

### acceptance-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `acceptance criteria` | `acceptance criteria` | `Acceptance Criteria` |
| **card** | [link](../concepts/addy/acceptance-criteria.md) | [link](../concepts/matt/acceptance-criteria.md) | [link](../concepts/rjm/acceptance-criteria.md) |
| **kind** | checklist | checklist | checklist |
| **phase** | `addy:cross-phase` | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | Task-specific success conditions that determine if the right functionality was built. | A checklist of observable behaviors and conditions that prove a ticket or feature is complete. | Verifiable condition statements and markdown task-list checkboxes (`- [ ]`) establishing explicit definitions of done. |
| **consumes** | Feature requirements, specifications, and scope boundaries. | The behavioral requirements and test seams specified in tickets and specs. | Problem statements, user stories, architecture requirements, and defect remediation goals. |
| **impl status** | defects: doc-drift, orphan (external/planning-and-task-breakdown.md drifts in anatomy structure and is unreferenced) | clean | clean |

- **class:** ALIGNED
- **difference:** All three packages formalize acceptance criteria checklists that define observable conditions of satisfaction before code is marked done.
- **sequencing note:** Consulted during specification drafting and validated during implementation verification.
- **needs decision:** no
- **decision:** —

### complete-acceptance-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Definition of Done` | `Complete acceptance criteria` | — |
| **card** | [link](../concepts/addy/definition-of-done.md) | [link](../concepts/matt/complete-acceptance-criteria.md) | — |
| **kind** | checklist | checklist | — |
| **phase** | `addy:cross-phase` | `matt:cross-phase` | — |
| **produces** | Verified completion status across Correctness, Quality, Integration, Documentation, and Ship-readiness. | An independently verifiable acceptance criteria list within an agent brief. | — |
| **consumes** | Task implementation, candidate code modifications, automated test execution, and documentation. | User requirements, system behavior specifications, and reproduced bug conditions. | — |
| **impl status** | defects: cross-file-contradiction, internal-contradiction, doc-drift | defects: doc-drift | — |

- **class:** SYNONYM
- **difference:** Matt specifies complete acceptance criteria checklists to ensure ticket scope is bounded, whereas Addy encapsulates this in the broader Definition of Done.
- **sequencing note:** Applied prior to implementation kickoff and re-checked at pull request creation.
- **needs decision:** no
- **decision:** D-590

### task-sizing-and-effort

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Task Sizing Guidelines` | `effort` | — |
| **card** | [link](../concepts/addy/task-sizing-guidelines.md) | [link](../concepts/matt/effort.md) | — |
| **kind** | reference | reference | — |
| **phase** | `addy:addy:Plan` | `matt:cross-phase` | — |
| **produces** | Right-sized tasks categorized as XS (1 file), S (1-2 files), or M (3-5 files), triggering further breakdown for tasks estimated at L (5-8 files) or XL (8+ files). | none | — |
| **consumes** | Proposed task descriptions, estimated file impact counts, anticipated session durations. | none | — |
| **impl status** | clean | clean | — |

- **class:** SYNONYM
- **difference:** Addy provides task sizing guidelines (S/M/L bounds); Matt references effort metrics to constrain scope per task.
- **sequencing note:** Applied during task decomposition and planning.
- **needs decision:** no
- **decision:** D-591

### small

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Small` | — | — |
| **card** | [link](../concepts/addy/small.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Deterministic, millisecond-fast test cases operating within a single process. | — | — |
| **consumes** | Pure logic, mathematical algorithms, and in-memory data transformations. | — | — |
| **impl status** | defects: cross-file-contradiction, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### script-requirements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Script Requirements` | — | — |
| **card** | [link](../concepts/addy/script-requirements.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Standardized bash scripts with ` | — | — |
| **consumes** | Helper scripts under `skills/<name>/scripts/`. | — | — |
| **impl status** | defects: [doc-drift, internal-contradiction] in docs/skill-anatomy.md | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### large

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Large` | — | — |
| **card** | [link](../concepts/addy/large.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | High-confidence end-to-end and performance verification spanning multiple processes and machines. | — | — |
| **consumes** | Multi-system configurations, external network services, databases, and browser environments. | — | — |
| **impl status** | defects: cross-file-contradiction, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### citation-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Citation rules` | — | — |
| **card** | [link](../concepts/addy/citation-rules.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Verifiable citations in code comments and conversational rationale. | — | — |
| **consumes** | Official documentation URLs, anchor links, and quoted excerpts. | — | — |
| **impl status** | defects: orphan, missing-path, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### pr-checks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `PR Checks` | — | — |
| **card** | [link](../concepts/addy/pr-checks.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Ship` | — | — |
| **produces** | Automated merge gates enforcing peer review approval, passing CI status checks, and linear history. | — | — |
| **consumes** | GitHub repository branch protection settings and pull request status checks. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Ship phase workflows.
- **needs decision:** no
- **decision:** —

### skill-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Skill Rules` | — | — |
| **card** | [link](../concepts/addy/skill-rules.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Ordered execution of relevant skills, starting with specifications when requirements are non-trivial. | — | — |
| **consumes** | Skill library, task requirements, execution flow. | — | — |
| **impl status** | defects: cross-file-contradiction, internal-contradiction, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### vertical-slice-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `vertical-slice-rules` | — |
| **card** | — | [link](../concepts/matt/vertical-slice-rules.md) | — |
| **kind** | — | checklist | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Strictly bounded vertical slice tickets meeting verticality, verifiability, context window sizing, and prefactoring requirements. | — |
| **consumes** | — | Proposed feature specifications and draft ticket breakdown. | — |
| **impl status** | — | defects: missing-path (skills/engineering/to-tickets/SKILL.md:11 missing setup command) | — |

- **class:** UNIQUE
- **difference:** Unique checklist in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### open-question

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Open question` |
| **card** | — | — | [link](../concepts/rjm/open-question.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Enumerated critical questions requiring empirical resolution before finalizing architectural recommendations. |
| **consumes** | — | — | Unresolved information gaps, ambiguous answers, and missing telemetry records. |
| **impl status** | — | — | defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2) |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### zimmermann-7-question-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Zimmermann 7-question checklist` |
| **card** | — | — | [link](../concepts/rjm/zimmermann-7-question-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Structured critique evaluations covering decision drivers, options, consequences, and compliance. |
| **consumes** | — | — | Draft Architecture Decision Records. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### priority-classification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Priority Classification` |
| **card** | — | — | [link](../concepts/rjm/priority-classification.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A prioritized findings table classifying items into P0/P1/P2 tiers and assigning categories (Critical, Success, NearMiss, Efficiency, Gap). |
| **consumes** | — | — | Diagnostic findings and empirical evidence extracted from session analysis. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### completion-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Completion Criteria` |
| **card** | — | — | [link](../concepts/rjm/completion-criteria.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A verified boolean determination of whether environment configuration meets all required conditions. |
| **consumes** | — | — | Setup execution output, plugin status reports, and active MCP configuration queries. |
| **impl status** | — | — | defects: doc-drift (.claude/commands/context-hub-setup.md:120) |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### pattern-selection-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pattern Selection Criteria` |
| **card** | — | — | [link](../concepts/rjm/pattern-selection-criteria.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Evaluated pattern selection matrix comparing Strategy, Abstract Factory, Template Method, and Combination patterns. |
| **consumes** | — | — | CVA matrix metrics, operation independence assessments, and system extensibility requirements. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### ddia-rule

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DDIA rule` |
| **card** | — | — | [link](../concepts/rjm/ddia-rule.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Schema design guidelines mandating additive optional fields and backward/forward compatibility. |
| **consumes** | — | — | Data-intensive application principles from Martin Kleppmann's DDIA book. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### o5-decision-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `O5 Decision rules` |
| **card** | — | — | [link](../concepts/rjm/o5-decision-rules.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | A catalog of domain invariants and enforcing entities that trace directly into design decision rules and CI completeness checks. |
| **consumes** | — | — | Domain business requirements and aggregate roots from O4. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### acceptance-criteria-checkboxes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `acceptance-criteria checkboxes` |
| **card** | — | — | [link](../concepts/rjm/acceptance-criteria-checkboxes.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Parsed `Criterion` objects evaluated for checked status and unified diff keyword evidence. |
| **consumes** | — | — | Markdown task-list checkboxes (`- [ ]` / `- [x]`) located under an acceptance criteria heading in a PR or issue body. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### synthesis-requirements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Synthesis Requirements` |
| **card** | — | — | [link](../concepts/rjm/synthesis-requirements.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Comprehensive synthesis encompassing principles, frameworks, applications, failure modes, and panel consensus. |
| **consumes** | — | — | Researched quotes, frameworks, and candidate specifications. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### session-end-requirements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Session End Requirements` |
| **card** | — | — | [link](../concepts/rjm/session-end-requirements.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Retrospective documentation, updated per-issue handoff under `.agents/sessions/handoffs/`, and clean git commits. |
| **consumes** | — | — | Completed deliverables, unresolved issues, lessons learned, and modified repository files. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### acceptance-criteria-coverage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Acceptance Criteria Coverage` |
| **card** | — | — | [link](../concepts/rjm/acceptance-criteria-coverage.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Categorized coverage status (satisfied, partially satisfied, or not satisfied) for each declared acceptance criterion. |
| **consumes** | — | — | Linked spec acceptance criteria and pull request diff changesets. |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### adr-requirements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `adr-requirements` |
| **card** | — | — | [link](../concepts/rjm/adr-requirements.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Standardized schema definition and mandatory checklist ensuring complete ADR documentation before decision finalization. |
| **consumes** | — | — | Final sourcing decision verdict, strategic context, evaluated options, top 3 decision drivers, consequence analysis, and reassessment triggers. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### exit-criteria-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Exit Criteria Rules` |
| **card** | — | — | [link](../concepts/rjm/exit-criteria-rules.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Rigorously filtered exit criteria conforming to observability, testability, and explicit scope bounding. |
| **consumes** | — | — | Proposed milestone acceptance conditions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### grounding-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Grounding Rules` |
| **card** | — | — | [link](../concepts/rjm/grounding-rules.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Falsifiable, evidence-grounded review findings free of training data cutoff hallucinations. |
| **consumes** | — | — | Pull request diff and awareness of LLM training data cutoffs. |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### functional-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Functional Criteria` |
| **card** | — | — | [link](../concepts/rjm/functional-criteria.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:ship` |
| **produces** | — | — | Pass/fail determination on the functional readiness of the CodeQL deployment. |
| **consumes** | — | — | Test results from rollout validators, config checkers, and local scan script executions. |
| **impl status** | — | — | defects: always-failing-gate, missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during ship phase workflows.
- **needs decision:** no
- **decision:** —

### skill-retirement-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Retirement Criteria` |
| **card** | — | — | [link](../concepts/rjm/skill-retirement-criteria.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Deprecation and decommissioning decision for obsolete skills. |
| **consumes** | — | — | Skill usage metrics, success rate logs, maintenance incident reports, and alternative solutions. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### quality-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quality Criteria` |
| **card** | — | — | [link](../concepts/rjm/quality-criteria.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:ship` |
| **produces** | — | — | Audit verification confirming documentation aligns with current two-tier architecture and Python implementations. |
| **consumes** | — | — | Repository documentation files and architectural records (ADR-041, ADR-042). |
| **impl status** | — | — | defects: always-failing-gate, missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during ship phase workflows.
- **needs decision:** no
- **decision:** —

### fallback-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Fallback Rules` |
| **card** | — | — | [link](../concepts/rjm/fallback-rules.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:research` |
| **produces** | — | — | Alternate search query formulations or graceful degradation strategies. |
| **consumes** | — | — | Network errors, empty search results, and tool permission denials during research. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during research phase workflows.
- **needs decision:** no
- **decision:** —

### migration-plan-requirements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Migration Plan Requirements` |
| **card** | — | — | [link](../concepts/rjm/migration-plan-requirements.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Completed checklist verifying capability mapping, documentation updates, user notifications, routing changes, and interview protocols. |
| **consumes** | — | — | Approved consolidation ADR identifying retired and surviving agents. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### synchronization-requirement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Synchronization Requirement` |
| **card** | — | — | [link](../concepts/rjm/synchronization-requirement.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Verified simultaneous updates across `templates/agents/*.shared.md` and `src/claude/*.md`. |
| **consumes** | — | — | Changes to shared governance policies, validation checklists, or protocol sections. |
| **impl status** | — | — | defects: internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### mcp-tool-selection-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `MCP Tool Selection Criteria` |
| **card** | — | — | [link](../concepts/rjm/mcp-tool-selection-criteria.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architectural decision whether to adopt an MCP server or utilize native CLI tooling. |
| **consumes** | — | — | Proposed tool capabilities, pre-training coverage assessments, and interface overhead metrics. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### architecturally-significant-requirements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Architecturally Significant Requirements` |
| **card** | — | — | [link](../concepts/rjm/architecturally-significant-requirements.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:Architect` |
| **produces** | — | — | Architectural decisions addressing critical quality attributes and system trade-offs. |
| **consumes** | — | — | Business objectives, non-functional requirements, and quality attribute goals. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Architect phase workflows.
- **needs decision:** no
- **decision:** —

### adoption-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Adoption Criteria` |
| **card** | — | — | [link](../concepts/rjm/adoption-criteria.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:ship` |
| **produces** | — | — | Verification that repository maintainers understand how to run, inspect, and maintain CodeQL tooling. |
| **consumes** | — | — | Rollout PR documentation links and maintainer operational verification. |
| **impl status** | — | — | defects: always-failing-gate, missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during ship phase workflows.
- **needs decision:** no
- **decision:** —

### pass-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pass criteria` |
| **card** | — | — | [link](../concepts/rjm/pass-criteria.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Comprehensive gate passing determination or halt trigger assignment (H1 through H5). |
| **consumes** | — | — | Complete responses to all six Step 0 problem framing questions. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### code-quality-rule

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `code-quality rule` |
| **card** | — | — | [link](../concepts/rjm/code-quality-rule.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standard code edits, idiomatic refactorings, and routine pull request contributions. |
| **consumes** | — | — | Well-tested source files, existing automated test suites, and routine feature modification requests. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### unattended-execution-requirements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Unattended Execution Requirements` |
| **card** | — | — | [link](../concepts/rjm/unattended-execution-requirements.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Enforced invocation transcripts of orchestrator, critic, and QA agents, plus audit trail documentation for "won't fix" decisions. |
| **consumes** | — | — | Autonomous task triggers, staged session logs, code changes, and pull request draft artifacts. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### frontmatter-requirements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Frontmatter Requirements` |
| **card** | — | — | [link](../concepts/rjm/frontmatter-requirements.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Validation verdicts ensuring only approved metadata properties (name, description, license, allowed-tools, model) are present. |
| **consumes** | — | — | Skill YAML frontmatter blocks in SKILL.md. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### meta-rules-for-agent-design

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Meta-Rules for Agent Design` |
| **card** | — | — | [link](../concepts/rjm/meta-rules-for-agent-design.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Instruction validation against negative design constraints (e.g. banning vague directives). |
| **consumes** | — | — | Agent instruction drafts and persona definitions. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### voice-rule

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `voice rule` |
| **card** | — | — | [link](../concepts/rjm/voice-rule.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Dynamic banned word list and tone constraints loaded during Layer 1 lexical linting. |
| **consumes** | — | — | Repository voice guidelines (e.g. `.claude/rules/voice.md`). |
| **impl status** | — | — | defects: script-bug, doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### entry-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Entry Criteria` |
| **card** | — | — | [link](../concepts/rjm/entry-criteria.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Decision table mapping request scenarios to invocation priority (P0/P1/P2) and routing confidence (High/Med/Low). |
| **consumes** | — | — | User request scenarios, invocation patterns, capability boundaries. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### feature-scope

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Feature Scope` |
| **card** | — | — | [link](../concepts/rjm/feature-scope.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Scope assessments identifying over-scoping, under-scoping, and scope creep indicators. |
| **consumes** | — | — | Pull request diffs, feature specifications, and PR descriptions. |
| **impl status** | — | — | defects: internal-contradiction (.claude/skills/review/references/roadmap.md:205) |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### p1-deferral-requirements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `P1 Deferral Requirements` |
| **card** | — | — | [link](../concepts/rjm/p1-deferral-requirements.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Documented deferral justification in the debate log, labeled GitHub backlog issue, cross-references to parent ADR, and keyword-rich issue title. |
| **consumes** | — | — | P1 review findings that cannot be resolved immediately during current ADR revision rounds. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### kill-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `kill criteria` |
| **card** | — | — | [link](../concepts/rjm/kill-criteria.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Objective triggers to prune, loosen, or cancel features, epics, or process gates. |
| **consumes** | — | — | Telemetry events, false-positive metrics, bypass counts, and epic observation signals. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

## 3. Code Quality, Style Guidelines, Smell Baselines & Linting Standards

### red-flags-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Red Flags` | — | `Red Flags` |
| **card** | [link](../concepts/addy/red-flags.md) | — | [link](../concepts/rjm/red-flags.md) |
| **kind** | checklist | — | checklist |
| **phase** | `addy:cross-phase` | — | `rjm:rjm:spec` |
| **produces** | Checklist of warning signs and anti-patterns that trigger self-correction or review intervention. | — | Targeted warning alerts and counterarguments challenging naive development assumptions. |
| **consumes** | Observable agent actions, command choices, git diffs, and verification steps. | — | Developer claims, scoping statements, and assumptions made during feature planning. |
| **impl status** | clean | — | clean |

- **class:** ALIGNED
- **difference:** Addy and RJM both catalog red flags that signal architectural decay, premature optimization, or unverified assumptions requiring an immediate halt.
- **sequencing note:** Monitored across all phases; triggers stop-the-line review when encountered.
- **needs decision:** no
- **decision:** —

### quality-evaluation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `quality` | — | `Quality` |
| **card** | [link](../concepts/addy/quality.md) | — | [link](../concepts/rjm/quality.md) |
| **kind** | checklist | — | checklist |
| **phase** | `addy:cross-phase` | — | `rjm:rjm:spec` |
| **produces** | Evaluation against readability, non-duplication, dead code removal, and scope discipline standards. | — | Validation confirmation that architectural decisions explain rationale and anti-patterns derive from analysis. |
| **consumes** | Implemented code, refactored logic, and variable naming. | — | Draft skill specifications produced during Phase 2. |
| **impl status** | clean | — | clean |

- **class:** ALIGNED
- **difference:** Addy and RJM both define explicit quality reference baselines against which code artifacts and agent outputs are evaluated.
- **sequencing note:** Applied continuously across implementation, code review, and release stages.
- **needs decision:** no
- **decision:** —

### code-smell-baseline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Fowler code smells` | `Anti-Patterns to Avoid` |
| **card** | — | [link](../concepts/matt/fowler-code-smells.md) | [link](../concepts/rjm/anti-patterns-to-avoid.md) |
| **kind** | — | reference | checklist |
| **phase** | — | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | — | Labelled heuristic findings with suggested remediation moves ("what it is -> how to fix"). | Identification and corrective fixes for flawed reliability targets and metric proliferation. |
| **consumes** | — | Code diffs produced during implementation, repository coding standards, and commit hunks. | Proposed SLO targets, candidate SLI lists, and dependency availability limits. |
| **impl status** | — | defects: doc-drift, other, cross-file-contradiction | defects: orphan |

- **class:** SYNONYM
- **difference:** Matt cites Martin Fowler code smells as an architectural reference; RJM provides an anti-patterns catalog to identify structural degeneration.
- **sequencing note:** Evaluated during refactoring passes and peer reviews.
- **needs decision:** no
- **decision:** D-592

### fowler-smell-guidelines

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `smell baseline` | — |
| **card** | — | [link](../concepts/matt/smell-baseline.md) | — |
| **kind** | — | checklist | — |
| **phase** | — | `matt:matt:code-review` | — |
| **produces** | — | Labelled heuristic findings ("possible Feature Envy") paired with concrete refactoring moves. | — |
| **consumes** | — | The diff between HEAD and the fixed point when repository-specific standards are silent or incomplete. | — |
| **impl status** | — | defects: doc-drift (evaluations produce non-deterministic findings across repeated runs with no convergence guarantee) | — |

- **class:** SYNONYM
- **difference:** Matt references Fowler smell baselines to distinguish healthy code from structural debt during task breakdown.
- **sequencing note:** Referenced during planning and code review.
- **needs decision:** no
- **decision:** D-593

### static-analysis-standards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `inline standards` | — | `Static Analysis Checklist` |
| **card** | [link](../concepts/addy/inline-standards.md) | — | [link](../concepts/rjm/static-analysis-checklist.md) |
| **kind** | reference | — | checklist |
| **phase** | `addy:addy:Ship` | — | `rjm:cross-phase` |
| **produces** | In-code comments explaining architectural reasons, non-obvious constraints, and known pitfalls rather than mechanical syntax. | — | Pre-Analysis, Core Analysis, and Post-Analysis checklists alongside categorized vulnerability findings with concrete remediations. |
| **consumes** | Complex, non-obvious code paths, known gotchas, subtle edge cases, workaround rationales. | — | Source code files across multiple languages (Shell, Python, Java, .NET, Node.js, PHP, React, Vue, Angular) and pull request diffs. |
| **impl status** | clean | — | clean |

- **class:** SYNONYM
- **difference:** Addy provides inline coding standards; RJM enforces a static analysis checklist for automated linter, type, and style verification.
- **sequencing note:** Executed during code implementation and pre-commit checks.
- **needs decision:** no
- **decision:** D-594

### never-do

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Never Do` | — | — |
| **card** | [link](../concepts/addy/never-do.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Rejection or elimination of committed secrets, sensitive data logging, client-side auth tokens, `eval`/`innerHTML` usage, and exposed stack traces. | — | — |
| **consumes** | Code changes, logging calls, error responses, client-side storage invocations. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### always-do

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Always Do` | — | — |
| **card** | [link](../concepts/addy/always-do.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Mandatory input validation, parameterized queries, output encoding, HTTPS enforcement, password hashing, security headers, secure cookies, and dependency audits. | — | — |
| **consumes** | External input boundaries, database queries, session handling, cookie definitions, dependency lockfiles. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### fowler-smell-baseline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Fowler smell baseline` | — |
| **card** | — | [link](../concepts/matt/fowler-smell-baseline.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:review` | — |
| **produces** | — | Standardized code smell diagnoses and catalog-anchored refactoring recommendations | — |
| **consumes** | — | Source code diffs, candidate refactorings, or code review targets | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### style-guide-compliance

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Style Guide Compliance` |
| **card** | — | — | [link](../concepts/rjm/style-guide-compliance.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Concise, active voice, non-hedging communication adhering to standardized status tags. |
| **consumes** | — | — | Agent-generated textual outputs, review findings, and communications. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### code-quality-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Code Quality Assessment` |
| **card** | — | — | [link](../concepts/rjm/code-quality-assessment.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Assessment of readability, pattern consistency, and implementation simplicity. |
| **consumes** | — | — | Pull request code changes and local module contexts. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### code-quality-standards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Code Quality Standards` |
| **card** | — | — | [link](../concepts/rjm/code-quality-standards.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Compliant source code adhering to complexity, length, nesting, and coverage thresholds. |
| **consumes** | — | — | Implementation source code diffs and test suites. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### common-anti-patterns-to-flag

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Common Anti-patterns to Flag` |
| **card** | — | — | [link](../concepts/rjm/common-anti-patterns-to-flag.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Flagged review concerns highlighting anemic models, mutable internals, missing validation, or leaking invariants. |
| **consumes** | — | — | Candidate type definitions, object models, and PR diffs. |
| **impl status** | — | — | defects: other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### adr-anti-patterns-to-avoid

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR Anti-Patterns to Avoid` |
| **card** | — | — | [link](../concepts/rjm/adr-anti-patterns-to-avoid.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Critique findings and required ADR revisions when anti-patterns like fake alternatives, vague justifications, or missing consequences are discovered. |
| **consumes** | — | — | Draft ADR content, considered alternatives, justifications, and consequence sections. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### adr-quality-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR Quality Checklist` |
| **card** | — | — | [link](../concepts/rjm/adr-quality-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Validation findings covering structural completeness, content quality, conditional sections, and governance rules. |
| **consumes** | — | — | Draft ADR document generated in Phase G3. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### quality-assurance-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quality Assurance Checklist` |
| **card** | — | — | [link](../concepts/rjm/quality-assurance-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A verified, quality-checked interview document ready for orchestrator integration. |
| **consumes** | — | — | Draft agent interview responses and cross-agent validation findings. |
| **impl status** | — | — | defects: missing-path, doc-drift (from .agents/governance/agent-interview-protocol.md:182 missing archive path and line 188 unmaintained Capabilities Matrix) |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### conventional-commit-title

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Conventional Commit Title` |
| **card** | — | — | [link](../concepts/rjm/conventional-commit-title.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:ship` |
| **produces** | — | — | Validation pass/fail verdict ensuring semantic commit title syntax compliance before PR creation. |
| **consumes** | — | — | Candidate pull request title string provided by the user. |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during ship phase workflows.
- **needs decision:** no
- **decision:** —

### logging-quality

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Logging Quality` |
| **card** | — | — | [link](../concepts/rjm/logging-quality.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Audit feedback and diagnostic quality evaluations on logging severity, contextual IDs, and secrets prevention. |
| **consumes** | — | — | Error handling code blocks, logging statements, exception catch blocks. |
| **impl status** | — | — | defects: other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### clean-code

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Clean Code` |
| **card** | — | — | [link](../concepts/rjm/clean-code.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### anti-patterns-to-catch

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Anti-Patterns to Catch` |
| **card** | — | — | [link](../concepts/rjm/anti-patterns-to-catch.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Adversarial critique findings flagging vague milestones, unverified dependencies, single points of failure, or unmeasured metrics. |
| **consumes** | — | — | Draft plan proposals, timeline estimates, dependency lists, reliability assertions, and rollback strategies. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### patterns-that-reduce-quality-scores

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Patterns That Reduce Quality Scores` |
| **card** | — | — | [link](../concepts/rjm/patterns-that-reduce-quality-scores.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Specific quality score penalties and remediation recommendations across non-redundancy and encapsulation axes. |
| **consumes** | — | — | Source code under code quality review exhibiting unoptimized memory allocations or type conversions. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### quality-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quality Verification` |
| **card** | — | — | [link](../concepts/rjm/quality-verification.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Documented assessment answering open diagnostic questions to validate behavior before final presentation. |
| **consumes** | — | — | Significant prompt modifications and their declared intended behavioral effects. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### evidence-quality-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `evidence_quality_check` |
| **card** | — | — | [link](../concepts/rjm/evidence-quality-check.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Verified findings confirmed with exact file:line references, quoted code, clear impact, and actionable recommendations, or downgraded unverified findings. |
| **consumes** | — | — | Candidate critical and high severity findings produced during earlier analysis passes. |
| **impl status** | — | — | defects: exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### naming-conventions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Naming Conventions` |
| **card** | — | — | [link](../concepts/rjm/naming-conventions.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Uniform identifier casing (snake_case, kebab-case, PascalCase, UPPER_CASE), predictable file routes, and self-documenting codebases. |
| **consumes** | — | — | File names, directory paths, function signatures, variables, parameters, and constants under development. |
| **impl status** | — | — | defects: missing-path, doc-drift, other, orphan |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### shell-script-quality

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Shell Script Quality` |
| **card** | — | — | [link](../concepts/rjm/shell-script-quality.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | DevOps review findings, recommendations, and quality verdicts targeting script portability, error propagation, and sanitization gaps. |
| **consumes** | — | — | Standalone shell scripts (`*.sh`, `*.ps1`) modified in pull requests and execution target environment requirements. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### comment-hygiene-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `comment_hygiene_verification` |
| **card** | — | — | [link](../concepts/rjm/comment-hygiene-verification.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Sanitized code comments phrased in the timeless present, free of temporal references ("added", "replaces", "fixed"). |
| **consumes** | — | — | Draft code snippets and inline comments in implementation plans. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### final-quality-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `final_quality_check` |
| **card** | — | — | [link](../concepts/rjm/final-quality-check.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Quality gate confirmation ensuring critical/high issues have citations, recommendations are actionable, and no earlier findings were dropped. |
| **consumes** | — | — | Draft final synthesis report and prioritized recommendations. |
| **impl status** | — | — | defects: exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### red-flags-in-an-interview

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Red Flags in an Interview` |
| **card** | — | — | [link](../concepts/rjm/red-flags-in-an-interview.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Risk flags identifying remembered assumptions, uncalibrated domain shifts, or misplaced ownership. |
| **consumes** | — | — | User responses, interview dialogue dynamics, and cited rationales during decision branch exploration. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### skill-quality-standards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Quality Standards` |
| **card** | — | — | [link](../concepts/rjm/skill-quality-standards.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Verified skills meeting character bounds, trigger requirements, and modularity rules. |
| **consumes** | — | — | Candidate skill definitions, instructions, and frontmatter declarations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### clean-architecture

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Clean Architecture` |
| **card** | — | — | [link](../concepts/rjm/clean-architecture.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Enforced inward dependency direction, decoupled business rules, and isolated interface adapters. |
| **consumes** | — | — | Software design specifications, layer definitions, and dependency structures. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### quality-checks-during-generation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quality Checks During Generation` |
| **card** | — | — | [link](../concepts/rjm/quality-checks-during-generation.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Verified artifact sections meeting format, length, and structural requirements. |
| **consumes** | — | — | In-flight generated skill artifacts (frontmatter, name, description, triggers, phases). |
| **impl status** | — | — | defects: orphan, internal-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### quality-gate-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quality Gate Checklist` |
| **card** | — | — | [link](../concepts/rjm/quality-gate-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:test` |
| **produces** | — | — | Completed verification checklist items with file:line citations for any violations. |
| **consumes** | — | — | Target source code files, static metrics. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during test phase workflows.
- **needs decision:** no
- **decision:** —

### quality-signals

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quality signals` |
| **card** | — | — | [link](../concepts/rjm/quality-signals.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Evaluation scores measuring absence of filler and preference for concrete data over adjectives. |
| **consumes** | — | — | Agent response text and style guide rules. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### quality-scoring-guidance

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quality Scoring Guidance` |
| **card** | — | — | [link](../concepts/rjm/quality-scoring-guidance.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Calibrated 1-10 benchmark ratings across cohesion, coupling, encapsulation, testability, and non-redundancy. |
| **consumes** | — | — | Identified performance patterns and anti-patterns extracted from .NET source files. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

## 4. Testing Patterns, Test Assertions & Anti-Pattern References

### testing-patterns-and-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Testing Patterns Reference (JavaScript/TypeScript)` | — | `verification steps` |
| **card** | [link](../concepts/addy/testing-patterns-reference-javascript-typescript.md) | — | [link](../concepts/rjm/verification-steps.md) |
| **kind** | reference | — | checklist |
| **phase** | `addy:cross-phase` | — | `rjm:rjm:test` |
| **produces** | Idiomatic code examples for Arrange-Act-Assert, boundary mocking, component testing, API testing, and Playwright E2E flows. | — | Documented, reproducible validation sequences and execution evidence confirming that an implementation satisfies its stated criteria. |
| **consumes** | Universal testing principles from the test-driven-development skill. | — | Executable test suites, test runners, system requirements, verification commands. |
| **impl status** | clean | — | clean |

- **class:** SYNONYM
- **difference:** Addy provides a detailed testing patterns reference for JS/TS suites; RJM specifies explicit verification steps and reproduction scripts.
- **sequencing note:** Referenced during test design and executed during test runner validation.
- **needs decision:** no
- **decision:** D-595

### test-anti-patterns-to-avoid

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Test Anti-Patterns to Avoid` | — | — |
| **card** | [link](../concepts/addy/test-anti-patterns-to-avoid.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Concrete fixes replacing fragile test practices with robust state-based, isolated, deterministic tests. | — | — |
| **consumes** | Test code, test suite execution patterns, mock usage, snapshot files. | — | — |
| **impl status** | defects: cross-file-contradiction, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### common-assertions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Common Assertions` | — | — |
| **card** | [link](../concepts/addy/common-assertions.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Test` | — | — |
| **produces** | Precise, idiomatic assertion statements evaluating equality, truthiness, numeric ranges, string patterns, array membership, exceptions, and async resolution. | — | — |
| **consumes** | Computed test outcomes, expected return values, exceptions, and resolved promises. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Test phase workflows.
- **needs decision:** no
- **decision:** —

### test-review-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Test Review Checklist` |
| **card** | — | — | [link](../concepts/rjm/test-review-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:test` |
| **produces** | — | — | Audited test verdicts and review sign-offs. |
| **consumes** | — | — | Authored test files, mock configurations, assertion logic. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during test phase workflows.
- **needs decision:** no
- **decision:** —

### test-rigor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Test rigor` |
| **card** | — | — | [link](../concepts/rjm/test-rigor.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Comprehensive test suites covering happy paths, error-emitting branches, conditional logic, and edge cases. |
| **consumes** | — | — | Newly authored or modified functions and methods. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### testing-rigor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `TESTING-RIGOR` |
| **card** | — | — | [link](../concepts/rjm/testing-rigor.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:test` |
| **produces** | — | — | Mandatory testing evidence including positive, negative, edge, error branch, and CLI contract coverage. |
| **consumes** | — | — | Proposed code modifications, new function implementations, and refactored routines. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during test phase workflows.
- **needs decision:** no
- **decision:** —

### testing-standards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Testing Standards` |
| **card** | — | — | [link](../concepts/rjm/testing-standards.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Automated test suites guaranteeing isolated and repeatable script validation. |
| **consumes** | — | — | Script implementations and verification test cases. |
| **impl status** | — | — | defects: missing-path, doc-drift, orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### testing-skills

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Testing Skills` |
| **card** | — | — | [link](../concepts/rjm/testing-skills.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured observations in `.serena/memories/testing-observations.md`. |
| **consumes** | — | — | Test writing feedback, test execution results, mocking decisions, and assertion preferences. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### analyze-quality-testing-impact

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Analyze Quality & Testing Impact` |
| **card** | — | — | [link](../concepts/rjm/analyze-quality-testing-impact.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Impact analysis deliverable saved to `.agents/planning/impact-analysis-qa-[feature].md`. |
| **consumes** | — | — | Milestone-planner request for feature impact analysis during the planning phase. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### tested

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `TESTED` |
| **card** | — | — | [link](../concepts/rjm/tested.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | An evidence classification certifying that a specific scorecard rating is grounded in observed runtime behavior. |
| **consumes** | — | — | Direct execution logs, console output captures, and terminal observations of running commands. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### test-commands

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Test Commands` |
| **card** | — | — | [link](../concepts/rjm/test-commands.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:test` |
| **produces** | — | — | Correct CLI execution commands for invoking test suites and generating coverage data. |
| **consumes** | — | — | Project language environment (PowerShell, Python, TypeScript/JavaScript, Rust, Go). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during test phase workflows.
- **needs decision:** no
- **decision:** —

### testability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Testability` |
| **card** | — | — | [link](../concepts/rjm/testability.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Testability scores, identified seam deficiencies, and isolated verification tests. |
| **consumes** | — | — | Source code, dependency structures, and acceptance criteria. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

## 5. Security Standards, Threat Catalogs & Vulnerability Checklists

### owasp-top-10

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `OWASP Top 10` | — | `OWASP Top 10` |
| **card** | [link](../concepts/addy/owasp-top-10.md) | — | [link](../concepts/rjm/owasp-top-10.md) |
| **kind** | reference | — | reference |
| **phase** | `addy:addy:Review` | — | `rjm:cross-phase` |
| **produces** | Defensive coding patterns and mitigations preventing injection, broken auth, SSRF, and security misconfigurations. | — | Vulnerability assessments, mitigation recommendations, compliance findings. |
| **consumes** | Web application source code, query construction logic, authentication flows, and configuration. | — | System architectures, PR changes, API interfaces, authentication/authorization flows. |
| **impl status** | clean | — | clean |

- **class:** ALIGNED
- **difference:** Addy and RJM both maintain references to the standard OWASP Top 10 web application security risks and remediation guidelines.
- **sequencing note:** Used during security audits and pre-merge pull request reviews.
- **needs decision:** no
- **decision:** —

### security-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Security Checklist` | — | `Security Checklist` |
| **card** | [link](../concepts/addy/security-checklist.md) | — | [link](../concepts/rjm/security-checklist.md) |
| **kind** | checklist | — | checklist |
| **phase** | `addy:cross-phase` | — | `rjm:rjm:review` |
| **produces** | Actionable verification status across threat modeling, headers, auth, validation, dependencies, and LLM safety. | — | Structured verification results checking input validation, output encoding, auth, crypto, error handling, logging, secrets, and dependency CVEs. |
| **consumes** | Web application source code, API routes, authentication logic, dependencies, and configuration. | — | Source code diffs, package manifests, and dependency manifests. |
| **impl status** | clean | — | clean |

- **class:** ALIGNED
- **difference:** Addy and RJM both prescribe dedicated security checklists covering threat modeling, credential protection, and defense-in-depth verification.
- **sequencing note:** Evaluated during architecture review, code review, and pre-deployment inspection.
- **needs decision:** no
- **decision:** —

### secret-and-credential-handling

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `secrets.*` | `Secret Detection` |
| **card** | — | [link](../concepts/matt/secrets.md) | [link](../concepts/rjm/secret-detection.md) |
| **kind** | — | reference | checklist |
| **phase** | — | `matt:matt:Upkeep` | `rjm:rjm:review` |
| **produces** | — | The list of required secret values that the wizard script must prompt the user for and provision. | Security review findings identifying exposed API keys, credentials, or tokens. |
| **consumes** | — | Workflow definition files located under `.github/workflows/`. | Pull request diffs, committed files, and repository changesets. |
| **impl status** | — | clean | defects: internal-contradiction |

- **class:** SYNONYM
- **difference:** Matt documents secrets configuration and environment injection; RJM provides automated secret detection checklists to prevent credential leaks.
- **sequencing note:** Enforced prior to git commit and repository push.
- **needs decision:** no
- **decision:** D-596

### data-protection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Data Protection` | — | — |
| **card** | [link](../concepts/addy/data-protection.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Audit findings and compliance assessments regarding sensitive data protection and regulatory privacy standards. | — | — |
| **consumes** | Application source code, configuration files, logging implementations, database schema definitions, and backup configurations. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### authentication

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Authentication` | — | — |
| **card** | [link](../concepts/addy/authentication.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Verified user identity assertions, secure session cookies, and rate-limited authentication flows. | — | — |
| **consumes** | User credentials, authentication endpoints, session stores, and token generation facilities. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### insecure-design

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Insecure Design` | — | — |
| **card** | [link](../concepts/addy/insecure-design.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Architectural threat models, trust boundary definitions, and abuse-case test specifications. | — | — |
| **consumes** | Feature specifications, system architecture designs, and trust boundary definitions. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### owasp-top-10-quick-reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `OWASP Top 10 Quick Reference` | — | — |
| **card** | [link](../concepts/addy/owasp-top-10-quick-reference.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Concise mappings from major vulnerability categories to specific engineering controls. | — | — |
| **consumes** | Web application source code, API contracts, and architecture definitions. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### cryptographic-failures

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Cryptographic Failures` | — | — |
| **card** | [link](../concepts/addy/cryptographic-failures.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Strong cryptographic safeguards including HTTPS encryption, robust hashing, and secret isolation. | — | — |
| **consumes** | Sensitive user data, plaintext passwords, transmission protocols, and encryption keys. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### authorization

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Authorization` | — | — |
| **card** | [link](../concepts/addy/authorization.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Access enforcement decisions preventing unauthorized viewing, modification, or escalation of privileges. | — | — |
| **consumes** | Authenticated user contexts, request parameters, resource records, and assigned roles or permissions. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### owasp-top-ten

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `OWASP top ten` | — | — |
| **card** | [link](../concepts/addy/owasp-top-ten.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Audit findings and vulnerability mitigations mapped against standard security risk categories. | — | — |
| **consumes** | Application source code, authentication logic, input handlers, and dependency trees. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### authentication-authorization

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Authentication & Authorization` | — | — |
| **card** | [link](../concepts/addy/authentication-authorization.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Security evaluation of credential storage, token lifecycles, and endpoint permission enforcement. | — | — |
| **consumes** | Authentication endpoints, session management configs, and access-control checks. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### owasp-top-10-for-llms-quick-reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `OWASP Top 10 for LLMs Quick Reference` | — | — |
| **card** | [link](../concepts/addy/owasp-top-10-for-llms-quick-reference.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Evaluated risk categories (LLM01–LLM10) mapped to specific engineering preventions. | — | — |
| **consumes** | Generative AI features, autonomous agent tool pipelines, and prompt/retrieval workflows. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### ai-llm-security

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `AI / LLM Security` | — | — |
| **card** | [link](../concepts/addy/ai-llm-security.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Safeguards ensuring model outputs are untrusted, permissions are enforced in code, and execution loops are capped. | — | — |
| **consumes** | Generative AI architecture, system prompts, retrieval contexts, and agent tool execution hooks. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### security-review-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Security Review Checklist` | — | — |
| **card** | [link](../concepts/addy/security-review-checklist.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | A completed verification record confirming compliance across authentication, authorization, input validation, and data privacy domains. | — | — |
| **consumes** | Application implementation, authentication logic, authorization checks, database queries, sensitive data handling. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### llm01-prompt-injection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `LLM01: Prompt Injection` | — | — |
| **card** | [link](../concepts/addy/llm01-prompt-injection.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Threat model awareness guiding defensive prompt design and input sanitization. | — | — |
| **consumes** | Untrusted external web pages and user-provided inputs. | — | — |
| **impl status** | defects: orphan, missing-path, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### vulnerable-components

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Vulnerable Components` | — | — |
| **card** | [link](../concepts/addy/vulnerable-components.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Regular dependency vulnerability audit reports and reachability triage assessments. | — | — |
| **consumes** | Direct and transitive project dependencies, lockfiles, and vulnerability advisory databases. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### auth-failures

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Auth Failures` | — | — |
| **card** | [link](../concepts/addy/auth-failures.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Protected authentication endpoints with rate limits, secure session cookies, and strong password hashing. | — | — |
| **consumes** | User authentication endpoints, credential stores, session cookies, and login attempts. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### owasp-top-10-for-llm-applications

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `OWASP Top 10 for LLM Applications` | — | — |
| **card** | [link](../concepts/addy/owasp-top-10-for-llm-applications.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Standardized vulnerability classifications (LLM01–LLM10) in audit reports and hardening guides. | — | — |
| **consumes** | Vulnerabilities discovered in LLM integrations, prompt architectures, and tool invocation workflows. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### security-headers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Security Headers` | — | — |
| **card** | [link](../concepts/addy/security-headers.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | HTTP response headers instructing client browsers to enforce defensive security constraints. | — | — |
| **consumes** | Web application server, proxy, or middleware response pipeline configuration. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### highest-risk-surfaces

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Highest-Risk Surfaces` |
| **card** | — | — | [link](../concepts/rjm/highest-risk-surfaces.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Automatic block or conditional review requirements for high-risk modifications. |
| **consumes** | — | — | Code diffs affecting workflows, secrets, or agent input boundaries. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### cisa-kev

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CISA KEV` |
| **card** | — | — | [link](../concepts/rjm/cisa-kev.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Binary classification of vulnerabilities as known-exploited, triggering immediate release blockage. |
| **consumes** | — | — | Vulnerability CVE identifiers identified during dependency scanning. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### dependency-security

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Dependency Security` |
| **card** | — | — | [link](../concepts/rjm/dependency-security.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Third-party dependency inventories, vulnerability assessments, and dependency risk ratings. |
| **consumes** | — | — | Package configuration files, lockfiles, dependency manifests, vulnerability databases. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### secrets-and-credentials

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Secrets and Credentials` |
| **card** | — | — | [link](../concepts/rjm/secrets-and-credentials.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | secure-credential-handling |
| **consumes** | — | — | secrets-configuration |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### owasp-agentic-top-10

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `OWASP Agentic Top 10` |
| **card** | — | — | [link](../concepts/rjm/owasp-agentic-top-10.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Agentic risk classifications, vulnerability findings, and containment recommendations mapped to ASI01–ASI10 categories. |
| **consumes** | — | — | System architectures, agent permission specifications, plugin hook configurations, and threat models. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### cwe-699-categories-and-high-priority-cwes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CWE-699 Categories and High-Priority CWEs` |
| **card** | — | — | [link](../concepts/rjm/cwe-699-categories-and-high-priority-cwes.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Categorized vulnerability findings mapped to CWE identifiers and severity ratings. |
| **consumes** | — | — | Code changes, inputs, auth mechanisms, and resource handlers under review. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### skill-authoring-guide

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Authoring Guide` |
| **card** | — | — | [link](../concepts/rjm/skill-authoring-guide.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Conformant skill packages containing `SKILL.md`, references, and scripts. |
| **consumes** | — | — | Skill requirements and platform architectural guidelines. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### risk-dimension

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `risk-dimension` |
| **card** | — | — | [link](../concepts/rjm/risk-dimension.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Weighted risk evaluation scores (1-10 scale) contributing 30% of the composite decision matrix score. |
| **consumes** | — | — | Vendor financial viability assessments, internal delivery feasibility evaluations, compliance obligations, and switching cost projections. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### cwe

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CWE` |
| **card** | — | — | [link](../concepts/rjm/cwe.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized weakness taxonomy identifiers attached to security review findings and automated scan reports. |
| **consumes** | — | — | Source code, security scanner outputs, pull request diffs, security review comments. |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### high-priority-cwe-catalog

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `High-Priority CWE Catalog` |
| **card** | — | — | [link](../concepts/rjm/high-priority-cwe-catalog.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Standardized CWE identifiers and categorization (Injection, Authentication, Authorization, Cryptography, Input Validation, Resource Management). |
| **consumes** | — | — | Suspected software weaknesses identified during code review. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### token-security

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Token Security` |
| **card** | — | — | [link](../concepts/rjm/token-security.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Scoped credentials, masked secret output (`::add-mask::`), and explicit permission specifications. |
| **consumes** | — | — | GitHub tokens, PAT credentials, workflow secrets, and execution environments. |
| **impl status** | — | — | defects: cross-file-contradiction, internal-contradiction (.agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:56, 94) |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### cwe-798

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CWE-798` |
| **card** | — | — | [link](../concepts/rjm/cwe-798.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: orphan, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### vulnerability-scanning-owasp-top-10

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Vulnerability Scanning (OWASP Top 10)` |
| **card** | — | — | [link](../concepts/rjm/vulnerability-scanning-owasp-top-10.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Findings identifying OWASP Top 10 security vulnerabilities and mapped CWE classifications. |
| **consumes** | — | — | Pull request code changes, input handling routines, authentication logic, and deserialization paths. |
| **impl status** | — | — | defects: internal-contradiction (.claude/skills/review/references/security.md:233) |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### threat-surface

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Threat Surface` |
| **card** | — | — | [link](../concepts/rjm/threat-surface.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Attack surface assessment and recommendations for dedicated threat-modeling passes. |
| **consumes** | — | — | External integration points, network endpoints, and agent input channels. |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### cwe-patterns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CWE patterns` |
| **card** | — | — | [link](../concepts/rjm/cwe-patterns.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Security vulnerability findings categorized by standardized CWE weakness identifiers. |
| **consumes** | — | — | Code changes, architectural specifications, and threat models. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### risk-management

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Risk Management` |
| **card** | — | — | [link](../concepts/rjm/risk-management.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Risk scores, phasing recommendations, and mitigation sequencing decisions. |
| **consumes** | — | — | Remediation plans, vulnerability reports, and deployment staging sequences. |
| **impl status** | — | — | defects: cross-file-contradiction (.agents/archive/planning/PR-60/003-pr-60-plan-critique.md:95) |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### environment-secrets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Environment & Secrets` |
| **card** | — | — | [link](../concepts/rjm/environment-secrets.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | DevOps review findings uncovering subtle pipeline credential exposures, such as environment dumps uploaded as artifacts or matrix variables leaking secrets into job names. |
| **consumes** | — | — | Workflow files, environment variable declarations, multi-stage deployment configurations (dev/staging/prod), and build matrix setups. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### cwe-22

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CWE-22` |
| **card** | — | — | [link](../concepts/rjm/cwe-22.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Validated, canonicalized filesystem paths strictly contained within intended base directories. |
| **consumes** | — | — | File paths, user input strings, and repository path references requiring resolution. |
| **impl status** | — | — | defects: cross-file-contradiction, doc-drift, exit-code-mismatch, internal-contradiction, missing-path, orphan, other, script-bug |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### cwe-77

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CWE-77` |
| **card** | — | — | [link](../concepts/rjm/cwe-77.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: orphan, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### fair-risk-quantification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `FAIR Risk Quantification` |
| **card** | — | — | [link](../concepts/rjm/fair-risk-quantification.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Probabilistic quantitative estimates of operational and cyber risk. |
| **consumes** | — | — | Threat frequency, vulnerability characteristics, and loss magnitude factors. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### infrastructure-security

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Infrastructure Security` |
| **card** | — | — | [link](../concepts/rjm/infrastructure-security.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Security review findings identifying untrusted input injection, unescaped shell variables, or overly permissive settings. |
| **consumes** | — | — | Pull request changes touching CI workflows (`.github/workflows/*`), shell scripts (`*.sh`, `*.ps1`), or configuration files. |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### risk-levels

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Risk Levels` |
| **card** | — | — | [link](../concepts/rjm/risk-levels.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized risk tier categorization determining mandatory review and mitigation actions. |
| **consumes** | — | — | Identified security threats, modified file paths, or architectural vulnerability assessments. |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### tool-and-permission-surface

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Tool and Permission Surface` |
| **card** | — | — | [link](../concepts/rjm/tool-and-permission-surface.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Evaluation of whether tool permissions are scoped to the minimum required and findings on unauthorized capabilities. |
| **consumes** | — | — | Agent tool configuration, permission manifests, and PR diffs. |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### owasp-risk-rating-methodology

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `OWASP Risk Rating Methodology` |
| **card** | — | — | [link](../concepts/rjm/owasp-risk-rating-methodology.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Standardized risk severity ratings based on likelihood and impact dimensions. |
| **consumes** | — | — | Threat descriptions and technical vulnerability factors. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### owasp-top-10-2021

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `OWASP Top 10:2021` |
| **card** | — | — | [link](../concepts/rjm/owasp-top-10-2021.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Categorized threat models, vulnerability findings mapped to A01-A10 categories, and mitigation strategies. |
| **consumes** | — | — | Architecture diagrams, source code changesets, API endpoints, and authentication mechanisms. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### security-controls-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security Controls Assessment` |
| **card** | — | — | [link](../concepts/rjm/security-controls-assessment.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Implementation status checklist and gap notes across Authentication, Authorization, Data Protection, and Logging/Monitoring pillars. |
| **consumes** | — | — | Authentication specifications, authorization policies, encryption configurations, logging infrastructure. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### owasp

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `OWASP` |
| **card** | — | — | [link](../concepts/rjm/owasp.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Standardized vulnerability categorizations and security review findings. |
| **consumes** | — | — | Code changes, endpoint definitions, and application threat vectors. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### risk-coverage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Risk coverage` |
| **card** | — | — | [link](../concepts/rjm/risk-coverage.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Risk coverage rating and verification that high-priority risks have actionable mitigations. |
| **consumes** | — | — | Risk analyses, technical dependencies, and failure mode enumerations. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### vulnerability-pattern-reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Vulnerability Pattern Reference` |
| **card** | — | — | [link](../concepts/rjm/vulnerability-pattern-reference.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Comprehensive reference guide containing vulnerability detection patterns, impact analysis, CVSS scores, and language-specific remediation code. |
| **consumes** | — | — | Security analysis knowledge base and Common Weakness Enumeration definitions (CWE-22, CWE-78). |
| **impl status** | — | — | defects: orphan, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### cwe-78

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CWE-78` |
| **card** | — | — | [link](../concepts/rjm/cwe-78.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Sanitized argument vectors, parameter lists, and security audit verifications confirming safe command execution. |
| **consumes** | — | — | Command strings, subprocess execution blocks, shell arguments, and script invocation templates. |
| **impl status** | — | — | defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path, orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

## 6. Web Performance, Core Web Vitals, SLOs & Runtime Budgets

### performance-checklists-and-instruments

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Performance Checklist` | — | `Instrument Index` |
| **card** | [link](../concepts/addy/performance-checklist.md) | — | [link](../concepts/rjm/instrument-index.md) |
| **kind** | checklist | — | reference |
| **phase** | `addy:cross-phase` | — | `rjm:cross-phase` |
| **produces** | Audit checklist covering Core Web Vitals, TTFB, frontend assets, database indexing, caching strategies, and anti-patterns | — | A structured reference table matching diagnostic questions to concrete execution commands. |
| **consumes** | Web application source code, assets, database queries, and deployment configuration | — | Diagnostic scripts, validation commands, and measurement tools across the repository. |
| **impl status** | clean | — | defects: unfailable-gate, other |

- **class:** SYNONYM
- **difference:** Addy provides a performance checklist for web vitals and backend latency; RJM maintains an instrument index tracking performance metrics.
- **sequencing note:** Validated during benchmarking and release readiness review.
- **needs decision:** no
- **decision:** D-597

### lcp

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `LCP` | — | — |
| **card** | [link](../concepts/addy/lcp.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | A measured render timing metric indicating when the primary visual content finishes loading. | — | — |
| **consumes** | Browser performance traces, lab Lighthouse audits, or Field Real User Monitoring (RUM). | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### core-web-vitals-targets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Core Web Vitals Targets` | — | — |
| **card** | [link](../concepts/addy/core-web-vitals-targets.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Evaluation criteria classifying page performance into Good, Needs Work, or Poor tiers | — | — |
| **consumes** | Synthetic audit metrics (Lighthouse) and RUM field telemetry (web-vitals, CrUX) | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### network

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Network` | — | — |
| **card** | [link](../concepts/addy/network.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Audit findings regarding transfer efficiency, cache utilization, and API request waterfalls. | — | — |
| **consumes** | Cache-Control headers, HTTP server protocols, API request structures, and transfer encoding configurations. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### crux

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `CrUX` | — | — |
| **card** | [link](../concepts/addy/crux.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Field data distributions reflecting 75th percentile Core Web Vitals experienced by real end users. | — | — |
| **consumes** | Real-user telemetry queried via PageSpeed Insights or the CrUX API using `$CRUX_API_KEY` or `$GOOGLE_API_KEY`. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### crux-api

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `CrUX API` | — | — |
| **card** | [link](../concepts/addy/crux-api.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Verify` | — | — |
| **produces** | Aggregated 28-day p75 real user metric distributions for Core Web Vitals (LCP, INP, CLS) | — | — |
| **consumes** | Target web origin or page URL, CRUX_API_KEY or GOOGLE_API_KEY environment credentials | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Verify phase workflows.
- **needs decision:** no
- **decision:** —

### rendering-javascript

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Rendering / JavaScript` | — | — |
| **card** | [link](../concepts/addy/rendering-javascript.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Findings identifying main-thread blocking, unnecessary component re-renders, and compositor misses. | — | — |
| **consumes** | Component render logic, DOM manipulation code, animation CSS/JS, and UI event listeners. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### lighthouse

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Lighthouse` | — | — |
| **card** | [link](../concepts/addy/lighthouse.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | JSON performance report detailing Core Web Vitals, performance opportunities, and diagnostic audits. | — | — |
| **consumes** | Target web application URL or running local server preview. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### loading

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Loading` | — | — |
| **card** | [link](../concepts/addy/loading.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Audit findings on resource delivery, critical path bottlenecks, and loading latency. | — | — |
| **consumes** | HTML head tags, server response configurations, font declarations, and bundle size profiles. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### pagespeed-insights

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `PageSpeed Insights` | — | — |
| **card** | [link](../concepts/addy/pagespeed-insights.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Verify` | — | — |
| **produces** | Structured JSON response containing synthetic Lighthouse audits and field user experience distributions | — | — |
| **consumes** | Public webpage URL, optional Google API credentials | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Verify phase workflows.
- **needs decision:** no
- **decision:** —

### core-web-vitals

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Core Web Vitals` | — | — |
| **card** | [link](../concepts/addy/core-web-vitals.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Performance evaluations and metric compliance statuses against Good, Needs Improvement, and Poor thresholds | — | — |
| **consumes** | Real user monitoring data, synthetic lab benchmarks (Lighthouse, CrUX, DevTools traces) | — | — |
| **impl status** | clean across in-scope skills (skills/performance-optimization/SKILL.md, agents/web-performance-auditor.md, commands/ship.toml); external documentation pages exhibit doc-drift and orphan status (external/performance-optimization.md, external/code-review-and-quality.md, external/security-and-hardening.md) | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### sla

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SLA` |
| **card** | — | — | [link](../concepts/rjm/sla.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Formal customer contracts specifying uptime commitments and remediation consequences. |
| **consumes** | — | — | Internal Service Level Objectives (SLOs) and legal/business customer commitments. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### slo-sli-sla-reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SLO / SLI / SLA Reference` |
| **card** | — | — | [link](../concepts/rjm/slo-sli-sla-reference.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:chaos-experiment` |
| **produces** | — | — | Authoritative guidance on SRE metrics, error budget formulas, calculation mechanics, and chaos experiment gates. |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during chaos-experiment phase workflows.
- **needs decision:** no
- **decision:** —

### slo-target-guidelines

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SLO Target Guidelines` |
| **card** | — | — | [link](../concepts/rjm/slo-target-guidelines.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Standard baseline availability percentages, latency thresholds, and error rates. |
| **consumes** | — | — | Service classification (e.g. Consumer Web, Internal API, B2B Critical, Batch Jobs, Real-time). |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### slow-responses-and-deadlines

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Slow Responses and Deadlines` |
| **card** | — | — | [link](../concepts/rjm/slow-responses-and-deadlines.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Findings identifying missing deadline propagation, resource leaks on expired work, or slow success anti-patterns. |
| **consumes** | — | — | Request context objects, deadline configurations, and downstream call hierarchies. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### performance-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Performance Criteria` |
| **card** | — | — | [link](../concepts/rjm/performance-criteria.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:ship` |
| **produces** | — | — | Quantitative evaluation of scan performance against operational ceilings. |
| **consumes** | — | — | Timing benchmarks from CI/CD runs, local full scans, quick scans, and cache operations. |
| **impl status** | — | — | defects: always-failing-gate, missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during ship phase workflows.
- **needs decision:** no
- **decision:** —

### commit-budget

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Commit Budget` |
| **card** | — | — | [link](../concepts/rjm/commit-budget.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | commit-allocation-plan |
| **consumes** | — | — | task-breakdown |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### error-budget-table

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Error Budget Table` |
| **card** | — | — | [link](../concepts/rjm/error-budget-table.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Exact error budget percentages and allowable downtime durations across monthly and weekly periods. |
| **consumes** | — | — | SLO target percentages from 99% to 99.999%. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### slo-design-patterns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SLO Design Patterns` |
| **card** | — | — | [link](../concepts/rjm/slo-design-patterns.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized SLIs, Prometheus queries, baseline targets, and multi-window burn rate alert rules. |
| **consumes** | — | — | Service classifications, operational requirements, and telemetry metrics. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### performance-cost

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Performance & Cost` |
| **card** | — | — | [link](../concepts/rjm/performance-cost.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Evaluations and optimization recommendations to minimize CI pipeline runtime and eliminate redundant runner compute expenses. |
| **consumes** | — | — | Pipeline dependency definitions, build step ordering, runner hardware specifications, and caching configurations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

## 7. Accessibility, Web Standards, UI Design Systems & Domain Checklists

### design-system-specifications

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `design systems` | `Tailwind` | — |
| **card** | [link](../concepts/addy/design-systems.md) | [link](../concepts/matt/tailwind.md) | — |
| **kind** | reference | reference | — |
| **phase** | `addy:addy:Build` | `matt:none` | — |
| **produces** | Consistent UI tokens, standard component primitives, and unified visual styling. | Styled, responsive HTML layout for architecture review reports. | — |
| **consumes** | Design tokens, brand palettes, typography scales, spacing rules, and reusable UI components. | HTML markup requiring visual formatting. | — |
| **impl status** | defects: doc-drift, orphan | clean | — |

- **class:** SYNONYM
- **difference:** Addy defines design system adherence standards; Matt references Tailwind CSS utility conventions for component styling.
- **sequencing note:** Referenced during UI development and visual QA.
- **needs decision:** no
- **decision:** D-598

### visual

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Visual` | — | — |
| **card** | [link](../concepts/addy/visual.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Visual styling that meets contrast minimums (4.5:1 normal, 3:1 large), scales to 200%, and does not flash | — | — |
| **consumes** | Color palettes, design tokens, typography styles, animation effects | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### forms

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Forms` | — | — |
| **card** | [link](../concepts/addy/forms.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Accessible forms with visible associated labels, multi-modal error indicators, error summaries, and autocomplete | — | — |
| **consumes** | Form fields, input controls, error validation logic, submission handlers | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### frontend-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Frontend Checklist` | — | — |
| **card** | [link](../concepts/addy/frontend-checklist.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Systematic verification across client-side asset delivery and runtime execution | — | — |
| **consumes** | Frontend code, UI bundles, styles, font assets, and DOM rendering logic | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### chrome-devtools-mcp

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Chrome DevTools MCP` | — | — |
| **card** | [link](../concepts/addy/chrome-devtools-mcp.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Verify` | — | — |
| **produces** | Agent-accessible browser automation and inspection tools (DOM inspection, console logs, network capture, screenshots) | — | — |
| **consumes** | Configured Model Context Protocol server, Chromium browser instance, live web application URL | — | — |
| **impl status** | defects: doc-drift, orphan (external/browser-testing-with-devtools.md exhibits doc-drift and orphan status; core CLI usage is clean) | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Verify phase workflows.
- **needs decision:** no
- **decision:** —

### content

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Content` | — | — |
| **card** | [link](../concepts/addy/content.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Accessible page shells with declared language, descriptive titles, distinguishable links, and 44x44px touch targets | — | — |
| **consumes** | Document metadata, page templates, interactive links, touch elements | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### axe-core

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `axe-core` | — | — |
| **card** | [link](../concepts/addy/axe-core.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Accessibility audit results detailing WCAG violations by severity level. | — | — |
| **consumes** | Rendered HTML markup, DOM components, or running web application preview URLs. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### breakpoints

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `breakpoints` | — | — |
| **card** | [link](../concepts/addy/breakpoints.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Cross-device viewport test verifications. | — | — |
| **consumes** | Responsive CSS media queries, responsive UI layouts. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### browser-runtime-compatibility

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Browser/runtime compatibility` | — | — |
| **card** | [link](../concepts/addy/browser-runtime-compatibility.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Compatibility matrices and runtime feature support data. | — | — |
| **consumes** | Target browser baselines and runtime engine versions from project requirements. | — | — |
| **impl status** | defects: orphan, missing-path, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### accessibility

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `accessibility` | — | — |
| **card** | [link](../concepts/addy/accessibility.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Accessible web interfaces navigable via keyboard and screen readers. | — | — |
| **consumes** | UI requirements, semantic HTML elements, WCAG 2.1 AA checklist. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### accessibility-verification-with-devtools

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Accessibility Verification with DevTools` | — | — |
| **card** | [link](../concepts/addy/accessibility-verification-with-devtools.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Verify` | — | — |
| **produces** | Accessibility verification results confirming accessible names, heading hierarchy, logical focus sequence, 4.5:1 contrast, and ARIA live regions. | — | — |
| **consumes** | Live browser page DOM, accessibility tree, computed CSS styles, and keyboard tab flow. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Verify phase workflows.
- **needs decision:** no
- **decision:** —

### semantic-elements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `semantic elements` | — | — |
| **card** | [link](../concepts/addy/semantic-elements.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Native HTML elements (such as button, nav, main, dialog) providing built-in keyboard behavior and accessibility semantics. | — | — |
| **consumes** | Interface design requirements and content structures needing representation in markup. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### backend-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Backend Checklist` | — | — |
| **card** | [link](../concepts/addy/backend-checklist.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Remediation items for server latency, database bottlenecks, and throughput limits | — | — |
| **consumes** | Server-side code, database schemas, query execution plans, connection pool configs, and API handlers | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### design-system-adherence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Design System Adherence` | — | — |
| **card** | [link](../concepts/addy/design-system-adherence.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | UIs that strictly adhere to project tokens without arbitrary or hardcoded aesthetic values. | — | — |
| **consumes** | Design tokens, color palettes, typography scale, spacing scales, border radii standards. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### wcag-compliant

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `WCAG compliant` | — | — |
| **card** | [link](../concepts/addy/wcag-compliant.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Accessibility adherence conforming to Web Content Accessibility Guidelines (WCAG 2.1 AA) standards. | — | — |
| **consumes** | Web interface designs, component markup, color schemes, and interaction models. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### design-system

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `design system` | — | — |
| **card** | [link](../concepts/addy/design-system.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Consistent, accessible visual interfaces adhering to established brand standards. | — | — |
| **consumes** | Design tokens, typography hierarchy, spacing scale, component libraries. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### aria-roles

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `ARIA roles` | — | — |
| **card** | [link](../concepts/addy/aria-roles.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Accurate assistive technology announcements and accessible accessibility tree representations. | — | — |
| **consumes** | Custom UI components that lack built-in semantic meaning in standard HTML elements. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### wcag-2-1-aa

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `WCAG 2.1 AA` | — | — |
| **card** | [link](../concepts/addy/wcag-2-1-aa.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Accessible, compliant web interfaces satisfying perceivable, operable, understandable, and robust criteria. | — | — |
| **consumes** | UI component markup, styles, interactions, focus states, and color palettes. | — | — |
| **impl status** | defects: missing-path | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### accessibility-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `accessibility checklist` | — | — |
| **card** | [link](../concepts/addy/accessibility-checklist.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Ship` | — | — |
| **produces** | Accessibility audit verification findings across keyboard navigation, screen readers, forms, and contrast | — | — |
| **consumes** | UI components, frontend markup, interactive widgets, and style definitions | — | — |
| **impl status** | defects: missing-path (references/accessibility-checklist.md:127-128 documents running npx axe-core and npx pa11y directly as CLI commands, but axe-core is an API engine whose CLI package is @axe-core/cli) | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Ship phase workflows.
- **needs decision:** no
- **decision:** —

### chrome-devtools-mcp-cli

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Chrome DevTools MCP CLI` | — | — |
| **card** | [link](../concepts/addy/chrome-devtools-mcp-cli.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Verify` | — | — |
| **produces** | Lighthouse JSON audit report files and structured CLI tool output | — | — |
| **consumes** | Node.js runtime, npx toolchain, target web URL | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Verify phase workflows.
- **needs decision:** no
- **decision:** —

### taste-invariants

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `taste invariants` |
| **card** | — | — | [link](../concepts/rjm/taste-invariants.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:build` |
| **produces** | — | — | Validation verdicts confirming codebase compliance with repository design aesthetics and structural limits. |
| **consumes** | — | — | Source files across python, yaml, powershell, and markdown in the repository. |
| **impl status** | — | — | defects: other, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during build phase workflows.
- **needs decision:** no
- **decision:** —

### adversarial-coverage-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Adversarial Coverage Checklist` |
| **card** | — | — | [link](../concepts/rjm/adversarial-coverage-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Audit findings exposing edge cases, error paths, and side effects omitted by author tests. |
| **consumes** | — | — | Code diffs, modified functions, and accompanying unit/integration tests. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### platform-differences

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Platform Differences` |
| **card** | — | — | [link](../concepts/rjm/platform-differences.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Cross-platform feature matrix guiding template generation and degraded-mode behaviors. |
| **consumes** | — | — | Runtime platform specifications, tool availability, and invocation capabilities. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### wcag

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `WCAG` |
| **card** | — | — | [link](../concepts/rjm/wcag.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Compliance verification against Web Content Accessibility Guidelines. |
| **consumes** | — | — | User interface elements, color schemes, and visual designs. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### evaluation-axes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evaluation Axes` |
| **card** | — | — | [link](../concepts/rjm/evaluation-axes.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Calibrated multi-dimensional critique highlighting missing requirements, unmitigated risks, or ordering flaws. |
| **consumes** | — | — | Draft plan artifacts (`.claude/commands/plan.md`) or draft specification documents (`.claude/commands/spec.md`). |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### platform-capability-matrix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Platform Capability Matrix` |
| **card** | — | — | [link](../concepts/rjm/platform-capability-matrix.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Tabular capability mappings guiding agent design and prompt differentiation. |
| **consumes** | — | — | Feature specifications and empirical constraints of supported AI agent platforms. |
| **impl status** | — | — | defects: internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### content-quality

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Content Quality` |
| **card** | — | — | [link](../concepts/rjm/content-quality.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Verification of analytical rigor, trade-off honesty, and actionable implementation guidance. |
| **consumes** | — | — | Prose content and arguments in the draft ADR. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### review-axes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Review Axes` |
| **card** | — | — | [link](../concepts/rjm/review-axes.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Six 1-5 axis scores (Completeness, Alignment, Feasibility, Risk coverage, Testability, Traceability) and aggregate rating. |
| **consumes** | — | — | Implementation plans, task lists, and specifications. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### formal-methods

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Formal Methods` |
| **card** | — | — | [link](../concepts/rjm/formal-methods.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:Spec` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Spec phase workflows.
- **needs decision:** no
- **decision:** —

## 8. Code Review, Self-Inspection, Peer Critique & Verification Catalogs

### code-review-standards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Review Checklist` | — | `Quick Self-Review` |
| **card** | [link](../concepts/addy/review-checklist.md) | — | [link](../concepts/rjm/quick-self-review.md) |
| **kind** | checklist | — | checklist |
| **phase** | `addy:addy:Review` | — | `rjm:cross-phase` |
| **produces** | A completed review template document recording findings across Context, Correctness, Readability, Architecture, Security, Performance, and Verification, concluding with a formal Approve or Request changes verdict. | — | Self-review audit assessment confirming compliance with architectural, consistency, and domain boundary standards. |
| **consumes** | Completed implementation diffs, specifications, automated test outputs, and build verification artifacts. | — | Pull request code diffs, architectural layer boundaries, data persistence paths, domain model modifications. |
| **impl status** | clean | — | defects: doc-drift |

- **class:** SYNONYM
- **difference:** Addy prescribes a comprehensive review checklist for auditors; RJM provides a quick self-review checklist for implementers prior to handoff.
- **sequencing note:** Applied at code completion before requesting peer or automated review.
- **needs decision:** no
- **decision:** D-599

### review-framework

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Review Framework` | — | — |
| **card** | [link](../concepts/addy/review-framework.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Structured assessment across correctness, readability, edge cases, maintainability, and test adequacy. | — | — |
| **consumes** | Proposed code diffs, requirements, and test artifacts. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### review-scope

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Review Scope` | — | — |
| **card** | [link](../concepts/addy/review-scope.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Systematic security evaluation covering input handling, authentication, sensitive data, dependencies, and business logic. | — | — |
| **consumes** | Code changes, endpoints, data access patterns, and dependencies. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### review-speed-norms

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `review speed norms` | — | — |
| **card** | [link](../concepts/addy/review-speed-norms.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Timely review feedback (targeting response within hours, maximum one business day) that keeps delivery velocity high. | — | — |
| **consumes** | Pull request submissions, notification triggers, reviewer availability. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### business-impact

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Business Impact` |
| **card** | — | — | [link](../concepts/rjm/business-impact.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Business impact ratings, growth enablement evaluations, and opportunity cost analyses. |
| **consumes** | — | — | Product roadmaps, business objectives, feature proposals, and change diffs. |
| **impl status** | — | — | defects: internal-contradiction (.claude/skills/review/references/roadmap.md:205) |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### depth

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Depth` |
| **card** | — | — | [link](../concepts/rjm/depth.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Integer score from 1 to 5 measuring depth of understanding. |
| **consumes** | — | — | Model responses and problem prompts. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### grading-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Grading Criteria` |
| **card** | — | — | [link](../concepts/rjm/grading-criteria.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:test` |
| **produces** | — | — | Standardized letter grade classifications (A, B, C, D, F) indicating coverage and quality gap severity. |
| **consumes** | — | — | Numerical scores aggregated from domain layer checks. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during test phase workflows.
- **needs decision:** no
- **decision:** —

### evaluation-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evaluation Criteria` |
| **card** | — | — | [link](../concepts/rjm/evaluation-criteria.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Scored assessments, review verdicts, and structured trade-off evaluations. |
| **consumes** | — | — | Plans, proposals, feature requests, or pull request remediation documentation. |
| **impl status** | — | — | defects: cross-file-contradiction (.agents/archive/planning/PR-60/003-pr-60-plan-critique.md:95); clean in .claude/agents/issue-feature-review.md and templates/agents/issue-feature-review.shared.md |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### post-implementation-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Post-Implementation Review` |
| **card** | — | — | [link](../concepts/rjm/post-implementation-review.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Code health audit, technical debt accumulation measurement, architecture diagram updates, and recorded lessons learned. |
| **consumes** | — | — | Completed pull requests, implemented codebase diffs, and updated system architecture diagrams. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### plan-analysis-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Plan/Analysis Review` |
| **card** | — | — | [link](../concepts/rjm/plan-analysis-review.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Validation of design principles adherence and blocking of SOLID, DRY, or separation of concerns violations. |
| **consumes** | — | — | Draft implementation plans, technical specifications, and proposed integration approaches. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### rule-audit-parser-forensics

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Rule Audit Parser Forensics` |
| **card** | — | — | [link](../concepts/rjm/rule-audit-parser-forensics.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Forensic analysis of parsing defects, edge cases, and parser design rules. |
| **consumes** | — | — | Evaluation run transcripts, raw model outputs, recovered judge payloads. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### the-audited-failure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `The Audited Failure` |
| **card** | — | — | [link](../concepts/rjm/the-audited-failure.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Empirical evidence demonstrating unauthorized self-programming in production agent memory. |
| **consumes** | — | — | Session audit records from unsupervised agent operations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### architecture-review-process

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Architecture Review Process` |
| **card** | — | — | [link](../concepts/rjm/architecture-review-process.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Checklist verdicts and review findings assessing risk, technical debt, pattern alignment, and code structural cohesion. |
| **consumes** | — | — | Feature proposals, implementation plans, code pull requests, and new directory structures. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### adr-review-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR Review Checklist` |
| **card** | — | — | [link](../concepts/rjm/adr-review-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured architectural review findings evaluating completeness, objectivity, and actionable implementation planning. |
| **consumes** | — | — | Submitted ADR proposal, background context, candidate options, and technical requirements. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### rule-audit-measurement-discipline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Rule Audit Measurement Discipline` |
| **card** | — | — | [link](../concepts/rjm/rule-audit-measurement-discipline.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Reliable verification metrics, audit trails, and empirical evaluation reports without false reassurance. |
| **consumes** | — | — | Benchmark artifacts, evaluation failure payloads, negative controls, and diff verification tools. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### outcome-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Outcome Review` |
| **card** | — | — | [link](../concepts/rjm/outcome-review.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Empirical validation verdicts (confirmed / refuted) feeding updated confidence scores back into future planning cycles. |
| **consumes** | — | — | Shipped epics, measured metrics on the target review date, and original epic hypotheses. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### evaluation-rubric

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evaluation rubric` |
| **card** | — | — | [link](../concepts/rjm/evaluation-rubric.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Numerical quality scores (0-25 per dimension, 0-100% total) and targeted feedback. |
| **consumes** | — | — | Candidate artifacts across specification or implementation phases. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### re-evaluation-triggers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Re-evaluation Triggers` |
| **card** | — | — | [link](../concepts/rjm/re-evaluation-triggers.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Explicit, testable criteria indicating when a decision must be formally revisited. |
| **consumes** | — | — | Architectural assumptions, operational risks, and dissent conditions. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### code-review-skills

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Code Review Skills` |
| **card** | — | — | [link](../concepts/rjm/code-review-skills.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured observations in `.serena/memories/code-review-observations.md`. |
| **consumes** | — | — | Code review comments, style corrections, false positive flags, and triage feedback. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### canonical-review-axis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `canonical review-axis` |
| **card** | — | — | [link](../concepts/rjm/canonical-review-axis.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Reference instructions in `.claude/skills/review/references/{role}.md`. |
| **consumes** | — | — | Continuous integration prompt templates in `.github/prompts/pr-quality-gate-{role}.md`. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### reviewer-pledge

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reviewer Pledge` |
| **card** | — | — | [link](../concepts/rjm/reviewer-pledge.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Behavioral alignment and professional review discipline across reviewing personas. |
| **consumes** | — | — | Review guidelines and agent reviewer prompt instructions. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### pre-planning-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-Planning Review` |
| **card** | — | — | [link](../concepts/rjm/pre-planning-review.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architectural risk assessment, technical debt implications, and pattern alignment verification. |
| **consumes** | — | — | Initial feature proposals, issue descriptions, and existing module boundaries. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### zimmermann-review-questions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Zimmermann review questions` |
| **card** | — | — | [link](../concepts/rjm/zimmermann-review-questions.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Systematic answers to seven structural criteria evaluating relevance, options, criteria, conflicts, solution fit, objectivity, and actionability. |
| **consumes** | — | — | Draft ADR content and candidate architectural options. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### 14-good-review-practices

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `14 Good Review Practices` |
| **card** | — | — | [link](../concepts/rjm/14-good-review-practices.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Actionable, evidence-based review feedback with prioritized comments. |
| **consumes** | — | — | Review comments, critiques, and reviewer evaluations across ADR debate rounds. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

## 9. Operational Safety, Deployment, Release & Governance Checklists

### observability-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Observability Checklist` | — | — |
| **card** | [link](../concepts/addy/observability-checklist.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Ship` | — | — |
| **produces** | Production-grade telemetry specifications and verified pre-launch instrumentation | — | — |
| **consumes** | Production feature code, system boundaries, dependencies, and on-call operational questions | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Ship phase workflows.
- **needs decision:** no
- **decision:** —

### third-party-integrations

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Third-Party Integrations` | — | — |
| **card** | [link](../concepts/addy/third-party-integrations.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Security findings regarding external boundary trust assumptions and third-party service vulnerabilities. | — | — |
| **consumes** | External API clients, webhook receiver handlers, CDN script tags, OAuth implementation logic, and server-side HTTP request handlers. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### pre-flight-checks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `pre-flight checks` | — | — |
| **card** | [link](../concepts/addy/pre-flight-checks.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Documented capability gap justification and verified absence of duplicate PRs. | — | — |
| **consumes** | Catalog of existing skills, open pull request listings, and candidate skill concept. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### merge-conflict

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `merge conflict` | — | — |
| **card** | [link](../concepts/addy/merge-conflict.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Ship` | — | — |
| **produces** | Resolved file contents with conflict markers removed, leaving the code compilable and verified. | — | — |
| **consumes** | Conflicting edits between a feature branch and target branch that git cannot automatically merge. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Ship phase workflows.
- **needs decision:** no
- **decision:** —

### production

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `"production"` | — | — |
| **card** | [link](../concepts/addy/production.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Ship` | — | — |
| **produces** | Live customer experiences, operational metrics, real-world traffic, and system logs. | — | — |
| **consumes** | Tested and reviewed release artifacts, deployment configurations, and infrastructure resources. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Ship phase workflows.
- **needs decision:** no
- **decision:** —

### post-launch-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Post-Launch Verification` | — | — |
| **card** | [link](../concepts/addy/post-launch-verification.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Ship` | — | — |
| **produces** | Documented verification results confirming health endpoint status (HTTP 200), clean error dashboards, stable latency, manual user flow execution, log flow, and rollback readiness. | — | — |
| **consumes** | Completed production deployment, live service endpoints, monitoring dashboards, manual testing flows. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Ship phase workflows.
- **needs decision:** no
- **decision:** —

### pre-launch-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `pre-launch checklist` | — | — |
| **card** | [link](../concepts/addy/pre-launch-checklist.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Ship` | — | — |
| **produces** | Item-by-item verification audit identifying passing criteria, acknowledged risks, and blockers. | — | — |
| **consumes** | Release candidate status, CI test results, monitoring configuration, and rollback documentation. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Ship phase workflows.
- **needs decision:** no
- **decision:** —

### pre-pr-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Pre-PR checklist` | — | — |
| **card** | [link](../concepts/addy/pre-pr-checklist.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Comprehensive contribution readiness clearance across Tier 1, Tier 2, command parity, hook tests, and eval coverage. | — | — |
| **consumes** | Local repository modifications, validator script outputs, and contribution proposals. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### pre-commit-hygiene

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Pre-Commit Hygiene` | — | — |
| **card** | [link](../concepts/addy/pre-commit-hygiene.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Ship` | — | — |
| **produces** | Verified and sanitized commits free from secrets, syntax/lint errors, and test regressions. | — | — |
| **consumes** | Staged code modifications inspected via `git diff --staged`. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Ship phase workflows.
- **needs decision:** no
- **decision:** —

### pre-launch-checklists

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `"Pre-launch checklists"` | — | — |
| **card** | [link](../concepts/addy/pre-launch-checklists.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Ship` | — | — |
| **produces** | Validated operational readiness checklist confirming all deployment criteria are satisfied. | — | — |
| **consumes** | Release candidate code, verification results, documentation, and monitoring readiness. | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Ship phase workflows.
- **needs decision:** no
- **decision:** —

### rollout-decision-thresholds

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Rollout Decision Thresholds` | — | — |
| **card** | [link](../concepts/addy/rollout-decision-thresholds.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Ship` | — | — |
| **produces** | Deterministic operational decisions: Advance (green), Hold and investigate (yellow), or Roll back (red). | — | — |
| **consumes** | Live application performance metrics, error rates, client JavaScript error counts, business conversion metrics. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Ship phase workflows.
- **needs decision:** no
- **decision:** —

### third-party-license-attribution

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Third-Party License Attribution` |
| **card** | — | — | [link](../concepts/rjm/third-party-license-attribution.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:ship` |
| **produces** | — | — | Validated inbound license compatibility assessments and updated `THIRD-PARTY-NOTICES.TXT` notices. |
| **consumes** | — | — | Third-party source components, runtime dependencies declared in shipped plugin paths, and upstream license files. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during ship phase workflows.
- **needs decision:** no
- **decision:** —

### o3-relationships

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `O3 Relationships` |
| **card** | — | — | [link](../concepts/rjm/o3-relationships.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Explicit one-line relationship declarations (ownership, reference-by-identity, composition, derivation) in the OntologyFragment. |
| **consumes** | — | — | Entities defined in O1 and canonical names from O2. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### exit-code-standards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Exit Code Standards` |
| **card** | — | — | [link](../concepts/rjm/exit-code-standards.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Deterministic exit codes (0 for success, 1 for scan failure, 2 for config error, 3 for external tool failure) that allow calling harnesses to interpret outcomes. |
| **consumes** | — | — | Process exit points across all repository automation and validator scripts. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### rollout-steps

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Rollout Steps` |
| **card** | — | — | [link](../concepts/rjm/rollout-steps.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:ship` |
| **produces** | — | — | Executed deployment validation, config verification, and local test scan results. |
| **consumes** | — | — | Passed Pre-Rollout prerequisites and automated rollout validator script (`test_codeql_rollout.py`). |
| **impl status** | — | — | defects: always-failing-gate, missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during ship phase workflows.
- **needs decision:** no
- **decision:** —

### documentation-milestone-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `documentation_milestone_verification` |
| **card** | — | — | [link](../concepts/rjm/documentation-milestone-verification.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Verified documentation milestone scheduling index updates and architectural documentation. |
| **consumes** | — | — | Draft milestone lists, `CLAUDE.md` tabular index conventions, and plan Invisible Knowledge sections. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### rollback-procedure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Rollback Procedure` |
| **card** | — | — | [link](../concepts/rjm/rollback-procedure.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Restored previous system state, user notifications, and root-cause analysis. |
| **consumes** | — | — | Incident alerts, consolidation failures, or chaos experiment abort triggers. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### merge-readiness-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Merge Readiness Assessment` |
| **card** | — | — | [link](../concepts/rjm/merge-readiness-assessment.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | A binary readiness verdict (READY / NOT READY) accompanied by a prioritized remediation task list. |
| **consumes** | — | — | Multi-agent review verdicts, test execution results, security audit reports, and remediation task statuses. |
| **impl status** | — | — | defects: cross-file-contradiction, internal-contradiction (.agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:56, 94) |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### observability-three-pillars

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Observability: Three Pillars` |
| **card** | — | — | [link](../concepts/rjm/observability-three-pillars.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Comprehensive diagnostic capability connecting high-level metrics to detailed traces and discrete log events. |
| **consumes** | — | — | Telemetry data streams, debugging hypotheses, production incident signals. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### post-rollout

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Post-Rollout` |
| **card** | — | — | [link](../concepts/rjm/post-rollout.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:ship` |
| **produces** | — | — | Telemetry validation, performance confirmation, and developer feedback records. |
| **consumes** | — | — | Deployed CodeQL integration running on live pull requests and production branches. |
| **impl status** | — | — | defects: always-failing-gate, missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during ship phase workflows.
- **needs decision:** no
- **decision:** —

### assessing-observability-during-analysis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Assessing Observability During Analysis` |
| **card** | — | — | [link](../concepts/rjm/assessing-observability-during-analysis.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Catalog of observability gaps rated by severity (High, Medium, Low) with actionable remediation targets. |
| **consumes** | — | — | Target codebase source code, configuration files, error handlers, and telemetry instrumentation. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### milestone-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `milestone_verification` |
| **card** | — | — | [link](../concepts/rjm/milestone-verification.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Verified, independently testable milestone definitions containing real codebase anchors and pass/fail criteria. |
| **consumes** | — | — | Draft milestone definitions, file paths, behavior descriptions, acceptance criteria, and verbatim diff context anchors. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### exit-codes-and-stderr

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Exit codes and stderr` |
| **card** | — | — | [link](../concepts/rjm/exit-codes-and-stderr.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Deterministic harness behaviors (pass, warn, deny, fail open, or inject context) based on exit codes. |
| **consumes** | — | — | Process exit codes, stdout JSON, and stderr output streams from hook commands. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### release-it-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `release-it.md` |
| **card** | — | — | [link](../concepts/rjm/release-it-md.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: exit-code-mismatch, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### github-merge-queue

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GitHub merge queue` |
| **card** | — | — | [link](../concepts/rjm/github-merge-queue.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Serialized branch staging and automated merge order management. |
| **consumes** | — | — | GitHub platform merge queue configuration and branch protection rules. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### ecadr-definition-of-done

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ecADR Definition of Done` |
| **card** | — | — | [link](../concepts/rjm/ecadr-definition-of-done.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Verification verdict confirming that an ADR satisfies completion and quality standards. |
| **consumes** | — | — | Candidate ADR structure, vocabulary precision, option evaluations, and decision rationale. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### pre-pr-readiness-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-PR Readiness Validation` |
| **card** | — | — | [link](../concepts/rjm/pre-pr-readiness-validation.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:ship` |
| **produces** | — | — | PR readiness validation results confirming whether the branch is eligible for submission. |
| **consumes** | — | — | Pull request branch state, local test execution logs, diff contents, and linters. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during ship phase workflows.
- **needs decision:** no
- **decision:** —

### pre-merge-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-Merge Checklist` |
| **card** | — | — | [link](../concepts/rjm/pre-merge-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Verified merge readiness confirmation ensuring no validation steps were bypassed during autonomous execution. |
| **consumes** | — | — | Per-issue handoffs, session logs, orchestrator coordination, critic validation, QA verification, review comment replies, security reviews, and test suite execution. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### survivorship-and-evidence-bias

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Survivorship and Evidence Bias` |
| **card** | — | — | [link](../concepts/rjm/survivorship-and-evidence-bias.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Review findings identifying self-selected evidence samples, missing base rates, or ignored failure cases. |
| **consumes** | — | — | Citations of external success stories, precedent architectures, or adoption cases used to justify technical decisions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### exit-code-conventions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Exit Code Conventions` |
| **card** | — | — | [link](../concepts/rjm/exit-code-conventions.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:Phase 3: Generation` |
| **produces** | — | — | Deterministic integer process exit codes (0, 1, 2, 3, 4, 10, 11, 20, 21, 30). |
| **consumes** | — | — | Execution outcomes, exception types, and validation results. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Phase 3: Generation phase workflows.
- **needs decision:** no
- **decision:** —

### pre-rollout

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-Rollout` |
| **card** | — | — | [link](../concepts/rjm/pre-rollout.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:ship` |
| **produces** | — | — | Verification sign-off on implementation completeness, passing unit tests, and documentation review. |
| **consumes** | — | — | CodeQL scripts, workflows, configuration files, unit tests, and documentation. |
| **impl status** | — | — | defects: always-failing-gate, missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during ship phase workflows.
- **needs decision:** no
- **decision:** —

### pre-merge-checks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-Merge Checks` |
| **card** | — | — | [link](../concepts/rjm/pre-merge-checks.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Verification sign-off for merging workflow modifications. |
| **consumes** | — | — | CI execution results and timing metrics on ARM64 runners. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### rebase-vs-merge

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Rebase vs Merge` |
| **card** | — | — | [link](../concepts/rjm/rebase-vs-merge.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architectural selection of rebase (for linear PR review) or merge (for shared branch integration). |
| **consumes** | — | — | Branch collaboration context and integration objectives. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### observability-pillars

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Observability Pillars` |
| **card** | — | — | [link](../concepts/rjm/observability-pillars.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Structured debugging methodology utilizing telemetry signals across logs, metrics, and distributed traces. |
| **consumes** | — | — | System telemetry, investigation questions, and debugging objectives. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### pre-pr-ci-validation-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-PR CI Validation Checklist` |
| **card** | — | — | [link](../concepts/rjm/pre-pr-ci-validation-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:verify` |
| **produces** | — | — | Verification checklist confirmation and readiness signal for creating a pull request. |
| **consumes** | — | — | Local working tree modifications, build/test toolchain, CI environment simulation. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during verify phase workflows.
- **needs decision:** no
- **decision:** —

## 10. Agent Harness Engineering, Context Windows, Tooling & External Documentation

### primary-sources-documentation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Official documentation` | `primary source` | `Primary source` |
| **card** | [link](../concepts/addy/official-documentation.md) | [link](../concepts/matt/primary-source.md) | [link](../concepts/rjm/primary-source.md) |
| **kind** | reference | reference | reference |
| **phase** | `addy:addy:Build` | `matt:cross-phase` | `rjm:none` |
| **produces** | Authoritative API signatures, usage examples, deprecation warnings, and version guidance. | High-fidelity ground-truth context and evidence that prevents speculative hallucination or summary degradation. | Authoritative raw data, package registry responses, original research papers, or direct statements. |
| **consumes** | The specific framework or library feature being implemented. | Raw conversation history, unflattened transcripts, throwaway prototype branches, official third-party documentation. | An external factual assertion, version behavior claim, or quantitative metric. |
| **impl status** | defects: orphan, missing-path, doc-drift | clean | defects: missing-path |

- **class:** SYNONYM
- **difference:** Addy requires verifying against official documentation; Matt and RJM mandate citing primary sources rather than LLM parametric assumptions.
- **sequencing note:** Enforced during research, specification discovery, and technology selection.
- **needs decision:** no
- **decision:** D-600

### github-integration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `GitHub` | `github` |
| **card** | — | [link](../concepts/matt/github.md) | [link](../concepts/rjm/github.md) |
| **kind** | — | reference | reference |
| **phase** | — | `matt:matt:engineering` | `rjm:rjm:ship` |
| **produces** | — | Configured `docs/agents/issue-tracker.md` routing issues and pull requests to GitHub. | PR review comments, GitHub issues, and remote repository metadata. |
| **consumes** | — | GitHub git remotes, GitHub repository issues, and local `gh` CLI authentication. | Analysis findings, PR metadata, and URL interception events. |
| **impl status** | — | defects: doc-drift, orphan | clean |

- **class:** ALIGNED
- **difference:** Matt and RJM both cite GitHub platform conventions, issues, and repository workflows as reference integration points.
- **sequencing note:** Referenced during task planning, pull request dispatch, and branch management.
- **needs decision:** no
- **decision:** —

### checklist-meta-standard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `checklist` | `Checklist` |
| **card** | — | [link](../concepts/matt/checklist.md) | [link](../concepts/rjm/checklist.md) |
| **kind** | — | checklist | checklist |
| **phase** | — | `matt:matt:engineering` | `rjm:cross-phase` |
| **produces** | — | Explicit verification that all required cleanup or quality actions have been executed. | A checklist verification report with pass/fail item statuses. |
| **consumes** | — | Completed engineering tasks, regression tests, and workspace changes. | Audit criteria, compliance guidelines, or verification rules. |
| **impl status** | — | clean | clean |

- **class:** ALIGNED
- **difference:** Matt and RJM both formalize the checklist construct itself as an invariant verification artifact guaranteeing complete inspection coverage.
- **sequencing note:** Embedded across all verification workflows.
- **needs decision:** no
- **decision:** —

### harness-engineering

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Claude Code interop` | `harnesses` | `Harness Engineering` |
| **card** | [link](../concepts/addy/claude-code-interop.md) | [link](../concepts/matt/harnesses.md) | [link](../concepts/rjm/harness-engineering.md) |
| **kind** | reference | reference | reference |
| **phase** | `addy:cross-phase` | `matt:cross-phase` | `rjm:rjm:build` |
| **produces** | Compatibility with Claude Code subagent discovery and teammate spawning. | Runtime execution context and tool availability for skills. | none |
| **consumes** | Persona definitions in the plugin's `agents/` directory. | Host agent execution environments and platform tool definitions. | none |
| **impl status** | clean | defects: other (harness lock-in on Agent tool for DESIGN-IT-TWICE in codebase-design:72), missing-path (cross-skill invocation failure across harnesses in grilling:73) | defects: doc-drift |

- **class:** SYNONYM
- **difference:** Addy references Claude Code interop conventions; Matt references agent harnesses; RJM formalizes comprehensive harness engineering and environment design.
- **sequencing note:** Established during environment setup and agent configuration.
- **needs decision:** no
- **decision:** D-601

### context-window-management

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `context window` | `spawn tax` |
| **card** | — | [link](../concepts/matt/context-window.md) | [link](../concepts/rjm/spawn-tax.md) |
| **kind** | — | reference | reference |
| **phase** | — | `matt:cross-phase` | `rjm:none` |
| **produces** | — | Ephemeral working memory for the language model during an active agent session. | none |
| **consumes** | — | Session tokens, conversation turns, file contents, and tool execution outputs. | none |
| **impl status** | — | clean | defects: doc-drift, missing-path |

- **class:** SYNONYM
- **difference:** Matt references context window limits and working memory; RJM formalizes the spawn tax associated with spawning fresh subagents.
- **sequencing note:** Guides agent decomposition decisions and subagent lifetime management.
- **needs decision:** no
- **decision:** D-602

### api-interface-standards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `OpenAPI / Swagger` | `first-party APIs` | — |
| **card** | [link](../concepts/addy/openapi-swagger.md) | [link](../concepts/matt/first-party-apis.md) | — |
| **kind** | reference | reference | — |
| **phase** | `addy:addy:Ship` | `matt:matt:research` | — |
| **produces** | Standardized OpenAPI / Swagger YAML or JSON schema specifications. | Verified behavioral claims and technical evidence cited in research notes. | — |
| **consumes** | REST endpoint paths, HTTP methods, request bodies, query parameters, and response schemas. | Official service or platform documentation, endpoints, and interface contracts. | — |
| **impl status** | clean | defects: script-bug, other | — |

- **class:** SYNONYM
- **difference:** Addy references OpenAPI/Swagger schemas; Matt emphasizes relying on first-party APIs over third-party wrapper abstractions.
- **sequencing note:** Consulted during interface contract design.
- **needs decision:** no
- **decision:** D-603

### issue-tracker-references

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `issue trackers` | `Generic field governance` |
| **card** | — | [link](../concepts/matt/issue-trackers.md) | [link](../concepts/rjm/generic-field-governance.md) |
| **kind** | — | reference | checklist |
| **phase** | — | `matt:matt:engineering` | `rjm:cross-phase` |
| **produces** | — | Configured issue tracking backend for downstream skills to read and write work items. | Strict governance audits ensuring cross-harness exclusion fields document rationale, residual risks, unaffected harness behaviors, and cleanup obligations. |
| **consumes** | — | Repository remote URLs, tracker CLI tools, and issue tracking configurations. | Dispatch group definitions, architectural decisions, issue tracking metadata, and harness exclusion proposals. |
| **impl status** | — | clean | defects: missing-path, doc-drift |

- **class:** SYNONYM
- **difference:** Matt documents issue tracker integration patterns; RJM specifies generic field governance for work item ticket schemas.
- **sequencing note:** Consulted during backlog grooming and ticket state progression.
- **needs decision:** no
- **decision:** D-604

### inline-documentation-standards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `inline documentation standards` | — | — |
| **card** | [link](../concepts/addy/inline-documentation-standards.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Ship` | — | — |
| **produces** | Standardized inline docstrings, comments explaining 'why' rather than 'what', and type annotations. | — | — |
| **consumes** | Source code, architectural decisions, complex logic, and non-obvious constraints. | — | — |
| **impl status** | defects: doc-drift, orphan | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Ship phase workflows.
- **needs decision:** no
- **decision:** —

### measurement-commands

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Measurement Commands` | — | — |
| **card** | [link](../concepts/addy/measurement-commands.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Concrete command lines for Lighthouse auditing, bundle inspection, and real-user metric logging | — | — |
| **consumes** | Running web application, production build artifacts (stats.json), user interaction events | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### quick-reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Quick Reference` | — | — |
| **card** | [link](../concepts/addy/quick-reference.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Fast lookup index mapping development phases and needs to specific skills. | — | — |
| **consumes** | Full 24-skill catalog and phase taxonomies. | — | — |
| **impl status** | defects: cross-file-contradiction, internal-contradiction, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### claude-code

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Claude Code` | — | — |
| **card** | [link](../concepts/addy/claude-code.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:none` | — | — |
| **produces** | Agent execution environment. | — | — |
| **consumes** | Skills and hooks. | — | — |
| **impl status** | defects: script-bug, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### official-blog-changelog

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Official blog / changelog` | — | — |
| **card** | [link](../concepts/addy/official-blog-changelog.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Context on recent architectural changes, deprecation announcements, and migration guidance. | — | — |
| **consumes** | Knowledge of recent releases, version increments, or migration requirements. | — | — |
| **impl status** | defects: orphan, missing-path, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### cursor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Cursor` | — | — |
| **card** | [link](../concepts/addy/cursor.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:none` | — | — |
| **produces** | none | — | — |
| **consumes** | none | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### antigravity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Antigravity` | — | — |
| **card** | [link](../concepts/addy/antigravity.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:none` | — | — |
| **produces** | none | — | — |
| **consumes** | none | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### codex-cli

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Codex CLI` | — | — |
| **card** | [link](../concepts/addy/codex-cli.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Adversarial review findings from an alternative model family | — | — |
| **consumes** | Prompt containing ARTIFACT and CONTRACT piped via stdin in doubt-driven-development | — | — |
| **impl status** | defects: script-bug, doc-drift (hooks/session-start.sh has defect breaking legacy test; skills/doubt-driven-development/SKILL.md is clean) | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### sunk-cost

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `sunk cost` | — | — |
| **card** | [link](../concepts/addy/sunk-cost.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:none` | — | — |
| **produces** | none | — | — |
| **consumes** | none | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### ai-llm-features

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `AI / LLM Features` | — | — |
| **card** | [link](../concepts/addy/ai-llm-features.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Targeted vulnerability assessments identifying AI-specific risks mapped to the OWASP Top 10 for LLMs. | — | — |
| **consumes** | LLM prompt construction code, model response handlers, tool/function calling schemas, and context window assembly logic. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### web-standards-references

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Web standards references` | — | — |
| **card** | [link](../concepts/addy/web-standards-references.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Vendor-neutral standards specifications and baseline platform documentation. | — | — |
| **consumes** | Platform-level API requirements, browser features, and markup specifications. | — | — |
| **impl status** | defects: orphan, missing-path, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### core-operating-behaviors

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Core Operating Behaviors` | — | — |
| **card** | [link](../concepts/addy/core-operating-behaviors.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Disciplined agent behavior adhering to explicit assumptions, confusion management, pushback, simplicity, scope control, and verification. | — | — |
| **consumes** | Agent instructions, user requests, execution context, ambiguities. | — | — |
| **impl status** | defects: cross-file-contradiction, internal-contradiction, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### references

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `References` | — | — |
| **card** | [link](../concepts/addy/references.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Comprehensive evaluation checklists pulled into agent context on demand. | — | — |
| **consumes** | Established engineering standards across security, performance, accessibility, definition of done, and observability. | — | — |
| **impl status** | defects: other | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### codex

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Codex` | — | — |
| **card** | [link](../concepts/addy/codex.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:none` | — | — |
| **produces** | none | — | — |
| **consumes** | none | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### custom-instructions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Custom Instructions` | — | — |
| **card** | [link](../concepts/addy/custom-instructions.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Persistent user-level instructions injected across all repositories in the IDE. | — | — |
| **consumes** | User-level development preferences and global skill summaries. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### javascript-execution-constraints

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `JavaScript Execution Constraints` | — | — |
| **card** | [link](../concepts/addy/javascript-execution-constraints.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Verify` | — | — |
| **produces** | Enforced read-only state inspections without external network exfiltration, credential access, or unauthorized DOM mutations. | — | — |
| **consumes** | Agent evaluation requests within browser page contexts. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Verify phase workflows.
- **needs decision:** no
- **decision:** —

### dora-research

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `DORA research` | — | — |
| **card** | [link](../concepts/addy/dora-research.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Ship` | — | — |
| **produces** | Empirical backing for engineering workflow standards. | — | — |
| **consumes** | none | — | — |
| **impl status** | defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation) | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Ship phase workflows.
- **needs decision:** no
- **decision:** —

### failure-modes-to-avoid

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Failure Modes to Avoid` | — | — |
| **card** | [link](../concepts/addy/failure-modes-to-avoid.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Checklist of ten anti-patterns used for self-auditing and avoiding deceptive productivity traps. | — | — |
| **consumes** | Agent execution logs, user feedback, reasoning chains, code diffs. | — | — |
| **impl status** | defects: cross-file-contradiction, internal-contradiction, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### graphql

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `GraphQL` | — | — |
| **card** | [link](../concepts/addy/graphql.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Type-safe queryable API endpoints. | — | — |
| **consumes** | Schema definitions and resolver architectures. | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### logging-failures

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Logging Failures` | — | — |
| **card** | [link](../concepts/addy/logging-failures.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Auditable security event records with automated redaction of passwords, tokens, and PII. | — | — |
| **consumes** | Security event streams, application errors, and logging frameworks. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### gemini-cli

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Gemini CLI` | — | — |
| **card** | [link](../concepts/addy/gemini-cli.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Cross-model adversarial review findings from the Gemini model. | — | — |
| **consumes** | Adversarial review prompt piped through stdin with read-only planning flags. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### simplification-opportunities

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `simplification opportunities` | — | — |
| **card** | [link](../concepts/addy/simplification-opportunities.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Identified refactoring opportunities matched to specific simplification patterns. | — | — |
| **consumes** | Target codebase or recently modified scope under review. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### screen-readers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Screen Readers` | — | — |
| **card** | [link](../concepts/addy/screen-readers.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Accessible DOM tree with descriptive text alternatives, programmatic form labels, and heading structure | — | — |
| **consumes** | UI component markup, image assets, form inputs, dynamic content regions | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### data-integrity-failures

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Data Integrity Failures` | — | — |
| **card** | [link](../concepts/addy/data-integrity-failures.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Cryptographically signed artifacts, verified package checksums, and trusted update mechanisms. | — | — |
| **consumes** | Software dependencies, update channels, CI/CD deployment pipelines, and serialized data. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### infrastructure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Infrastructure` | — | — |
| **card** | [link](../concepts/addy/infrastructure.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Infrastructure-level vulnerability findings and actionable hardening recommendations for deployment configurations. | — | — |
| **consumes** | HTTP server configuration, response headers, CORS policies, dependency manifests, and error handling middleware. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### input-handling

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Input Handling` | — | — |
| **card** | [link](../concepts/addy/input-handling.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Review` | — | — |
| **produces** | Validation assessments against SQL/NoSQL/OS injection, path traversal, and cross-site scripting. | — | — |
| **consumes** | User input entry points, request parameters, and database query code. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Review phase workflows.
- **needs decision:** no
- **decision:** —

### instrumentation-guidelines

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Instrumentation Guidelines` | — | — |
| **card** | [link](../concepts/addy/instrumentation-guidelines.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:addy:Verify` | — | — |
| **produces** | Targeted temporary logging during defect localization, and cleaned code stripped of debug noise prior to commit. | — | — |
| **consumes** | Diagnostic investigation needing visibility into internal state, intermittent failures, or multi-component interactions. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique checklist in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Verify phase workflows.
- **needs decision:** no
- **decision:** —

### rest

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `REST` | — | — |
| **card** | [link](../concepts/addy/rest.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:addy:Build` | — | — |
| **produces** | Resource-oriented HTTP interfaces. | — | — |
| **consumes** | HTTP protocol and resource model. | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique reference in addy (Addy Osmani agent-skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Build phase workflows.
- **needs decision:** no
- **decision:** —

### github-issues

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `GitHub Issues` | — |
| **card** | — | [link](../concepts/matt/github-issues.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Remote issue management, label synchronization, and comments tracked via GitHub. | — |
| **consumes** | — | A GitHub repository with issue tracking enabled and authenticated `gh` CLI access. | — |
| **impl status** | — | defects: script-bug, orphan (setup does not create labels in tracker per | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `reference` | — |
| **card** | — | [link](../concepts/matt/reference.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | On-demand reference documents consulted during execution rather than step-by-step scripts. | — |
| **consumes** | — | Extracted rules, definitions, API contracts, cheat sheets, or testing conventions. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### primary-sources

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `primary sources` | — |
| **card** | — | [link](../concepts/matt/primary-sources.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:research` | — |
| **produces** | — | Verified facts and cited assertions with direct links to owning sources | — |
| **consumes** | — | Documentation URLs, official specifications, source code repositories, and API references | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during research phase workflows.
- **needs decision:** no
- **decision:** —

### label-vocabulary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `label vocabulary` | — |
| **card** | — | [link](../concepts/matt/label-vocabulary.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:Upkeep` | — |
| **produces** | — | Configured issue tracker labels and mapping rules stored in `docs/agents/triage-labels.md`. | — |
| **consumes** | — | Repository issue tracker setup configuration. | — |
| **impl status** | — | defects: missing-path | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Upkeep phase workflows.
- **needs decision:** no
- **decision:** —

### mcp

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `MCP` | — |
| **card** | — | [link](../concepts/matt/mcp.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Standardized tool execution and external context access for agents without hardcoding API clients into skills. | — |
| **consumes** | — | MCP server specifications, endpoint configurations, and host harness protocol support. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### agents-invocation-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `.agents/invocation.md` | — |
| **card** | — | [link](../concepts/matt/agents-invocation-md.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A canonical repository standard dictating user-invoked vs model-invoked configuration and Skill tool calling syntax. | — |
| **consumes** | — | Skill definitions, harness execution models (Claude Code, Codex), and calling requirements. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### community

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `community` | — |
| **card** | — | [link](../concepts/matt/community.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:Productivity` | — |
| **produces** | — | High-reputation forums, subreddits, classes, or local interest groups. | — |
| **consumes** | — | User topic and willingness to participate in external practitioner groups. | — |
| **impl status** | — | defects: doc-drift, other | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Productivity phase workflows.
- **needs decision:** no
- **decision:** —

### knowledge

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Knowledge` | — |
| **card** | — | [link](../concepts/matt/knowledge.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:productivity` | — |
| **produces** | — | Factual explanations and reference materials presented in introductory lessons. | — |
| **consumes** | — | High-trust primary literature, technical documentation, and authoritative textbooks. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during productivity phase workflows.
- **needs decision:** no
- **decision:** —

### smart-zone

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `smart zone` | — |
| **card** | — | [link](../concepts/matt/smart-zone.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Context transition decisions (triggering /compact or session transitions before reasoning degrades) | — |
| **consumes** | — | Model context usage metrics and token count tracking | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### puppeteer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Puppeteer` | — |
| **card** | — | [link](../concepts/matt/puppeteer.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:none` | — |
| **produces** | — | An automated browser script driving UI interactions and checking DOM or network outputs. | — |
| **consumes** | — | Browser-based UI application and user interaction reproduction steps. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### wisdom

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Wisdom` | — |
| **card** | — | [link](../concepts/matt/wisdom.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:productivity` | — |
| **produces** | — | Nuanced heuristic judgment and pointers to relevant practitioner forums. | — |
| **consumes** | — | Interaction with real-world practitioner communities, peer review, and lived context. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during productivity phase workflows.
- **needs decision:** no
- **decision:** —

### parametric-knowledge

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `parametric knowledge` | — |
| **card** | — | [link](../concepts/matt/parametric-knowledge.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:productivity` | — |
| **produces** | — | A strict mandate to fetch external, vetted primary sources before attempting to teach. | — |
| **consumes** | — | The statistical pre-training weights of the large language model. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during productivity phase workflows.
- **needs decision:** no
- **decision:** —

### skill-mechanics

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Skill mechanics` | — |
| **card** | — | [link](../concepts/matt/skill-mechanics.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Skill-specific frontmatter attributes (`description`, `disable-model-invocation`), invocation architecture, and router organization. | — |
| **consumes** | — | Draft skill document, proposed YAML frontmatter, and authoring guidelines from `SKILL.md`. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### playwright

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Playwright` | — |
| **card** | — | [link](../concepts/matt/playwright.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:none` | — |
| **produces** | — | An automated browser script asserting on DOM state, console logs, or network traffic. | — |
| **consumes** | — | Browser-based UI application and user interaction reproduction steps. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### token

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `token` | — |
| **card** | — | [link](../concepts/matt/token.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | none | — |
| **consumes** | — | none | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### working-memory

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `working memory` | — |
| **card** | — | [link](../concepts/matt/working-memory.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:productivity` | — |
| **produces** | — | Durable external files (learning records) that free active memory space. | — |
| **consumes** | — | Agent context window and operational attention during interaction. | — |
| **impl status** | — | defects: orphan, doc-drift, missing-path | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during productivity phase workflows.
- **needs decision:** no
- **decision:** —

### writing-for-agents

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `writing-for-agents` | — |
| **card** | — | [link](../concepts/matt/writing-for-agents.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Concise, high-leverage agent instructions stripped of no-op explanations and optimized for context efficiency. | — |
| **consumes** | — | Candidate documentation, skills, specifications, or prompts intended for agent consumption. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### readline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Readline` | — |
| **card** | — | [link](../concepts/matt/readline.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:Upkeep` | — |
| **produces** | — | Line-editing behavior, cursor navigation, and history management in CLI applications. | — |
| **consumes** | — | Terminal keystrokes and line-editing commands. | — |
| **impl status** | — | defects: script-bug (Arrow keys in an ask prompt insert escape codes instead of moving cursor due to lack of Readline integration) | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Upkeep phase workflows.
- **needs decision:** no
- **decision:** —

### vars

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `vars.*` | — |
| **card** | — | [link](../concepts/matt/vars.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:Upkeep` | — |
| **produces** | — | The inventory of non-sensitive configuration parameters needed by CI. | — |
| **consumes** | — | GitHub Actions workflow files under `.github/workflows/`. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Upkeep phase workflows.
- **needs decision:** no
- **decision:** —

### context-windows

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `context windows` | — |
| **card** | — | [link](../concepts/matt/context-windows.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:The Main Flow` | — |
| **produces** | — | Ephemeral reasoning space for language model execution during an interactive session. | — |
| **consumes** | — | Active conversation turns, tool interaction logs, and codebase context. | — |
| **impl status** | — | defects: orphan, doc-drift | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during The Main Flow phase workflows.
- **needs decision:** no
- **decision:** —

### agent-skills-standard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Agent-Skills-standard` | — |
| **card** | — | [link](../concepts/matt/agent-skills-standard.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Interoperable skill definitions consumable across diverse coding agent platforms. | — |
| **consumes** | — | The `SKILL.md` format, YAML frontmatter, and agent tool execution semantics. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### harness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `harness` | — |
| **card** | — | [link](../concepts/matt/harness.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | The execution runtime, context manager, and user interaction shell for AI coding agents. | — |
| **consumes** | — | Skills, configuration templates, shell commands, LLM APIs. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### vibe-coded

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `vibe-coded` | — |
| **card** | — | [link](../concepts/matt/vibe-coded.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | none | — |
| **consumes** | — | none | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### source-code

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `source code` | — |
| **card** | — | [link](../concepts/matt/source-code.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:Explore` | — |
| **produces** | — | Directly verified implementation details and code references cited in research findings. | — |
| **consumes** | — | A technical question or undocumented behavior requiring ground-truth verification. | — |
| **impl status** | — | defects: other | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Explore phase workflows.
- **needs decision:** no
- **decision:** —

### issue-tracker

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `issue tracker` | — |
| **card** | — | [link](../concepts/matt/issue-tracker.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Issues, specifications, tickets, and triage status updates recorded in the tracking system. | — |
| **consumes** | — | Repository configuration at `docs/agents/issue-tracker.md` (CLI tooling like `gh`, `glab`, or `.scratch/` local markdown files). | — |
| **impl status** | — | defects: missing-path, other (missing command files cited in instructions; labels not created programmatically in remote trackers). | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### cognitive-load

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `cognitive load` | — |
| **card** | — | [link](../concepts/matt/cognitive-load.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:Productivity` | — |
| **produces** | — | Architectural constraints guiding documentation clarity, naming brevity, and disclosure depth. | — |
| **consumes** | — | Catalog size, skill complexity, and documentation volume. | — |
| **impl status** | — | defects: orphan, doc-drift | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Productivity phase workflows.
- **needs decision:** no
- **decision:** —

### fixed-point

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `fixed point` | — |
| **card** | — | [link](../concepts/matt/fixed-point.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:code-review` | — |
| **produces** | — | A validated base reference used to compute `git diff <fixed-point>...HEAD`. | — |
| **consumes** | — | A valid git revision reference (commit SHA, branch name, tag, or merge base expression). | — |
| **impl status** | — | defects: doc-drift (git diff evaluates only committed changes from merge base, ignoring unstaged and staged changes in working tree) | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during code-review phase workflows.
- **needs decision:** no
- **decision:** —

### official-docs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `official docs` | — |
| **card** | — | [link](../concepts/matt/official-docs.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:Explore` | — |
| **produces** | — | Authoritative, verified factual claims cited directly in research findings. | — |
| **consumes** | — | A technical question or API topic requiring factual investigation. | — |
| **impl status** | — | defects: other | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Explore phase workflows.
- **needs decision:** no
- **decision:** —

### failure-mode-vocabulary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `failure-mode vocabulary` | — |
| **card** | — | [link](../concepts/matt/failure-mode-vocabulary.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:productivity` | — |
| **produces** | — | Named failure modes directing targeted prompt repairs. | — |
| **consumes** | — | Observed agent misbehavior or prompt execution defects. | — |
| **impl status** | — | defects: orphan, doc-drift | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during productivity phase workflows.
- **needs decision:** no
- **decision:** —

### linear

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Linear` | — |
| **card** | — | [link](../concepts/matt/linear.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Project issue management, status synchronization, and team backlog organization. | — |
| **consumes** | — | A Linear workspace and configured CLI or API access integration. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### ai-coding-dictionary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `AI Coding Dictionary` | — |
| **card** | — | [link](../concepts/matt/ai-coding-dictionary.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Standardized definitions and canonical links for terms used across documentation and skills. | — |
| **consumes** | — | Domain concepts and patterns encountered across AI agent workflows. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### asd-ste100-simplified-technical-english

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `ASD-STE100 Simplified Technical English` | — |
| **card** | — | [link](../concepts/matt/asd-ste100-simplified-technical-english.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:Productivity` | — |
| **produces** | — | Clear, unambiguous technical prose constrained to standard simplified grammar and vocabulary. | — |
| **consumes** | — | An over-complicated or jargon-laden agent response. | — |
| **impl status** | — | defects: missing-path | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Productivity phase workflows.
- **needs decision:** no
- **decision:** —

### mermaid

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Mermaid` | — |
| **card** | — | [link](../concepts/matt/mermaid.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:none` | — |
| **produces** | — | Browser-rendered vector diagrams illustrating dependency and call-flow structures. | — |
| **consumes** | — | Textual diagram syntax (`flowchart`, `graph`, `sequenceDiagram`, `classDef`). | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### gh

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `gh` | — |
| **card** | — | [link](../concepts/matt/gh.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Programmatic manipulation of issues, pull requests, labels, secrets, and variables. | — |
| **consumes** | — | Authenticated GitHub user session and repository remote context. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### wsl

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `WSL` | — |
| **card** | — | [link](../concepts/matt/wsl.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:engineering` | — |
| **produces** | — | Correct cross-environment URL opening into the host Windows browser from within Linux. | — |
| **consumes** | — | Windows Subsystem for Linux shell execution environment. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during engineering phase workflows.
- **needs decision:** no
- **decision:** —

### simplified-technical-english

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Simplified Technical English` | — |
| **card** | — | [link](../concepts/matt/simplified-technical-english.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Concise, clear, and unambiguous technical prose adhering to controlled vocabulary rules. | — |
| **consumes** | — | Verbose, confusing, or jargon-heavy model output. | — |
| **impl status** | — | defects: missing-path, doc-drift (in CHANGELOG.md) | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### skills-sh

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `skills.sh` | — |
| **card** | — | [link](../concepts/matt/skills-sh.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Locally copied, user-editable skill directories within target consumer repositories. | — |
| **consumes** | — | The public GitHub repository and its individual skill directories. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### standalone-reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `standalone reference` | — |
| **card** | — | [link](../concepts/matt/standalone-reference.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `matt:matt:productivity` | — |
| **produces** | — | Universal authoring principles and structural standards applied across skills and repository documentation. | — |
| **consumes** | — | Agent-read documents across all phases. | — |
| **impl status** | — | defects: orphan, doc-drift | — |

- **class:** UNIQUE
- **difference:** Unique reference in matt (Matt Pocock skills). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during productivity phase workflows.
- **needs decision:** no
- **decision:** —

### canonical-axis-prompts

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `canonical axis prompts` |
| **card** | — | — | [link](../concepts/rjm/canonical-axis-prompts.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Standardized system instructions, analysis focus areas, and output schemas for review subagents. |
| **consumes** | — | — | Markdown prompt reference files co-located in `references/*.md` within the review skill directory. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### innovation-accounting

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Innovation Accounting` |
| **card** | — | — | [link](../concepts/rjm/innovation-accounting.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Quantitative pivot-or-persevere decision triggers based on empirical loop performance. |
| **consumes** | — | — | Baseline cohort data, learning milestone definitions, and iterative improvement targets. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### prompting-inversion

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Prompting Inversion` |
| **card** | — | — | [link](../concepts/rjm/prompting-inversion.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Empirical justification for rjm's constrain-down prompt architecture. |
| **consumes** | — | — | Benchmark evaluation data on constrained prompting across model tiers. |
| **impl status** | — | — | defects: other |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### toyota-lean-operations

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Toyota / Lean Operations` |
| **card** | — | — | [link](../concepts/rjm/toyota-lean-operations.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Binary stop-the-line operational triggers distinguished from passive informational dashboards. |
| **consumes** | — | — | Operational pipeline signals, defect indicators, and production flow metrics. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### low

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Low` |
| **card** | — | — | [link](../concepts/rjm/low.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Non-blocking tracking findings or discretionary improvement suggestions. |
| **consumes** | — | — | Minor findings, cosmetic issues, informational notes, or low-risk dependency additions. |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path, script-bug, unimplemented-feature |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### 100m-leads

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `$100M Leads` |
| **card** | — | — | [link](../concepts/rjm/100m-leads.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Core Four channel selection, daily/weekly action quotas, lead magnet design, and scored checklist evaluation. |
| **consumes** | — | — | Defined product, known pricing structure, and target avatar definition. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### canonical-set

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `canonical set` |
| **card** | — | — | [link](../concepts/rjm/canonical-set.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Discovered baseline set of review axes enrolled for Stage-1 gate and Stage-2 evaluation. |
| **consumes** | — | — | Prompt definitions co-located under `references/*.md` in the review skill directory. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### common-weakness-enumeration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Common Weakness Enumeration` |
| **card** | — | — | [link](../concepts/rjm/common-weakness-enumeration.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Formal weakness category classifications across security checklists. |
| **consumes** | — | — | Source code, security audit artifacts, vulnerability reports. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### repository-discussions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Repository discussions` |
| **card** | — | — | [link](../concepts/rjm/repository-discussions.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Discussion categories, discussion threads, and threaded community replies. |
| **consumes** | — | — | GitHub repository GraphQL endpoint and discussion query inputs. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### implementation-process

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Implementation Process` |
| **card** | — | — | [link](../concepts/rjm/implementation-process.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Verified code diffs, passing test suites, and structured commit histories. |
| **consumes** | — | — | Task decomposition specifications, issue tickets, and architectural designs. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### context7

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Context7` |
| **card** | — | — | [link](../concepts/rjm/context7.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Up-to-date framework documentation and syntax references injected into agent context. |
| **consumes** | — | — | Queries regarding framework APIs, software libraries, and external documentation. |
| **impl status** | — | — | defects: doc-drift, missing-path (.claude/commands/context-hub-setup.md:120, .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:2) |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### monetizing-innovation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Monetizing Innovation` |
| **card** | — | — | [link](../concepts/rjm/monetizing-innovation.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Pricing models, packaging tiers, revenue metrics, and monetization roadmaps. |
| **consumes** | — | — | Product feature set, customer segment definitions, and willingness-to-pay research. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### output-length-bounds

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Output Length Bounds` |
| **card** | — | — | [link](../concepts/rjm/output-length-bounds.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Concise, high-density reports conforming to strict limits (max 7 findings, max 5 summary bullets, max 7 plan steps, top 3 hypotheses). |
| **consumes** | — | — | Draft analytical deliverables, investigation findings, summaries, and plan steps. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### training-knowledge

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Training knowledge` |
| **card** | — | — | [link](../concepts/rjm/training-knowledge.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Level 4 initial hypotheses, heuristic proposals, and tentative starting points requiring empirical verification. |
| **consumes** | — | — | LLM internal weights, parametric memory, and pre-training associations. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### architectural-alignment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Architectural Alignment` |
| **card** | — | — | [link](../concepts/rjm/architectural-alignment.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Deferral of structural architectural findings to the architect axis while reviewing expression readability. |
| **consumes** | — | — | Architectural patterns and design decisions visible in a PR diff. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### conditional-sections

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Conditional Sections` |
| **card** | — | — | [link](../concepts/rjm/conditional-sections.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Context-specific document sections included only when relevant criteria are triggered. |
| **consumes** | — | — | Document templates, ADR proposals, and context triggers (e.g. system changes, agent ADRs). |
| **impl status** | — | — | defects: missing-path, internal-contradiction, doc-drift (.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:104); clean in .claude/skills/adr-generator/references/quality-checklist.md |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### o1-entities

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `O1 Entities` |
| **card** | — | — | [link](../concepts/rjm/o1-entities.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | A list of named domain entities (stable identity) and value objects (defined by attributes) for the OntologyFragment. |
| **consumes** | — | — | Problem domain description and conceptual model. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### unified-software-engineering

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `unified-software-engineering` |
| **card** | — | — | [link](../concepts/rjm/unified-software-engineering.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Baseline engineering constraints, design standards, and architectural conventions. |
| **consumes** | — | — | Code file editing tasks and repository implementation workflows. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### the-lean-startup

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `The Lean Startup` |
| **card** | — | — | [link](../concepts/rjm/the-lean-startup.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Validated learning, minimum viable products (MVPs), and pivot-or-persevere decisions. |
| **consumes** | — | — | Core product hypotheses, metric definitions, and experiment designs. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### role-adherence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Role adherence` |
| **card** | — | — | [link](../concepts/rjm/role-adherence.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Numeric evaluation scores measuring adherence to the agent definition. |
| **consumes** | — | — | Agent execution traces, response outputs, and agent persona definitions. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### nbgv

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `NBGV` |
| **card** | — | — | [link](../concepts/rjm/nbgv.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### lcom

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `LCOM` |
| **card** | — | — | [link](../concepts/rjm/lcom.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Object-oriented class cohesion metric quantifying lack of cohesion among methods. |
| **consumes** | — | — | Class method definitions, instance variable access graphs, and symbol AST nodes. |
| **impl status** | — | — | defects: doc-drift, missing-path, always-failing-gate |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### vendor-lock-in

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Vendor Lock-In` |
| **card** | — | — | [link](../concepts/rjm/vendor-lock-in.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Risk assessments, mitigation plans, exit strategies, and open-standard fallback mechanisms. |
| **consumes** | — | — | Proposed third-party platforms, external services, closed ecosystems, and proprietary formats. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### required-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Required Checklist` |
| **card** | — | — | [link](../concepts/rjm/required-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:build` |
| **produces** | — | — | Verified completion status across design goals, patterns, qualities, principles, unit tests, performance, and conventional commits. |
| **consumes** | — | — | Completed code, test execution results, commit history. |
| **impl status** | — | — | defects: internal-contradiction, cross-file-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during build phase workflows.
- **needs decision:** no
- **decision:** —

### structural-completeness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Structural Completeness` |
| **card** | — | — | [link](../concepts/rjm/structural-completeness.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Verification that all required structural sections and metadata fields are present and valid. |
| **consumes** | — | — | Draft ADR file and detected repository template specification. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### investigation-protocol-table

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Investigation Protocol table` |
| **card** | — | — | [link](../concepts/rjm/investigation-protocol-table.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Mandatory search requirements and halt conditions for high-impact repository modifications. |
| **consumes** | — | — | Proposed change types (such as removing an ADR constraint, bypassing a protocol, or deleting more than 100 lines). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### when-not-to-dry

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `When NOT to DRY` |
| **card** | — | — | [link](../concepts/rjm/when-not-to-dry.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Decisions to preserve deliberate duplication, delayed abstraction milestones, and decoupled module architectures. |
| **consumes** | — | — | Candidate deduplication refactorings, superficially similar code fragments, and early abstraction proposals. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### investigation-methodology

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Investigation Methodology` |
| **card** | — | — | [link](../concepts/rjm/investigation-methodology.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | A standardized investigation report comprising problem framing, hypotheses, evidence, findings, root cause, recommendations, and open questions. |
| **consumes** | — | — | Problem statements, incident reports, research prompts, or exploratory feature requests. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### task-classification-guide

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Task Classification Guide` |
| **card** | — | — | [link](../concepts/rjm/task-classification-guide.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Systematic task classifications and recommended agent sequences tailored to task requirements. |
| **consumes** | — | — | User prompts, task descriptions, repository issues, stack traces, and code diffs. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### reusable-holdout

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `reusable holdout` |
| **card** | — | — | [link](../concepts/rjm/reusable-holdout.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Theoretical framework informing consultation budgeting and information leakage constraints. |
| **consumes** | — | — | Academic literature on adaptive data analysis (Dwork et al., 2015). |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### completeness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Completeness` |
| **card** | — | — | [link](../concepts/rjm/completeness.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Evaluation scores and feedback identifying missing requirements, uncovered cases, or incomplete sections. |
| **consumes** | — | — | Specifications, plans, requirement lists, test suites, and data pipelines. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### canonical-hedge-phrase-list

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Canonical hedge phrase list` |
| **card** | — | — | [link](../concepts/rjm/canonical-hedge-phrase-list.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Trigger H1 halt if any case-insensitive word-boundary match for a prohibited phrase is detected. |
| **consumes** | — | — | Author answer text across all six Step 0 problem framing questions. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### working-with-legacy-code

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Working with Legacy Code` |
| **card** | — | — | [link](../concepts/rjm/working-with-legacy-code.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Characterization test strategies, sprout/wrap method patterns, sensing seams, and strangler application guidance. |
| **consumes** | — | — | Uncovered codebases, tightly coupled legacy components, and refactoring tasks. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### validation-steps

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Validation Steps` |
| **card** | — | — | [link](../concepts/rjm/validation-steps.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Operational confirmation of ARM compatibility, absence of regressions, and billing cost reduction. |
| **consumes** | — | — | Migrated GitHub Actions workflows and initial execution runs. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### planning-context-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `planning_context_verification` |
| **card** | — | — | [link](../concepts/rjm/planning-context-verification.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Verified Planning Context section in the plan, ensuring downstream review agents receive unambiguous rationales and code anchors. |
| **consumes** | — | — | Architectural decisions, micro-decisions, rejected alternatives, and known risk behavioral claims. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### desperate-specificity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Desperate Specificity` |
| **card** | — | — | [link](../concepts/rjm/desperate-specificity.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Uniquely identified blocked user or system and specific blocker. |
| **consumes** | — | — | Entity identification and blockage description. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### gate-placement-guidelines

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Gate Placement Guidelines` |
| **card** | — | — | [link](../concepts/rjm/gate-placement-guidelines.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Gate architecture plan identifying required checkpoints and justified exemptions. |
| **consumes** | — | — | Workflow risk profile, operation reversibility, step count, and execution latency constraints. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### google-sre-best-practices

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Google SRE best practices` |
| **card** | — | — | [link](../concepts/rjm/google-sre-best-practices.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Quantitative SLIs, error budgets, and multi-window burn rate alert thresholds. |
| **consumes** | — | — | System architecture and critical user journey telemetry. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### asi01

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ASI01` |
| **card** | — | — | [link](../concepts/rjm/asi01.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### installation-utility-agents

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Installation & Utility Agents` |
| **card** | — | — | [link](../concepts/rjm/installation-utility-agents.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Installed agent definitions, synchronized MCP configs, and validated session protocols. |
| **consumes** | — | — | Agent catalog manifests, MCP configurations, and platform runtime environments. |
| **impl status** | — | — | defects: missing-path, doc-drift, orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### designing-data-intensive-applications

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Designing Data-Intensive Applications` |
| **card** | — | — | [link](../concepts/rjm/designing-data-intensive-applications.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Conceptual patterns and architectural vocabulary for distributed data systems. |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### six-forcing-questions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `six forcing questions` |
| **card** | — | — | [link](../concepts/rjm/six-forcing-questions.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Explicit answers confirming a blocked user, documented status quo, measurable impact, and concrete observation. |
| **consumes** | — | — | Proposed problem statement or candidate feature description. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### inferred

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `INFERRED` |
| **card** | — | — | [link](../concepts/rjm/inferred.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | An evidence classification signaling that a score was assessed without runtime execution or live behavioral observation. |
| **consumes** | — | — | Static source code files, repository READMEs, package manifests, and fetched documentation pages. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### guardrails

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Guardrails` |
| **card** | — | — | [link](../concepts/rjm/guardrails.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Enforced engineering constraints ensuring commit atomicity, memory lookup prior to modification, and real-environment integration validation. |
| **consumes** | — | — | Code changes, PR preparation tasks, and system modification requests. |
| **impl status** | — | — | defects: orphan (scripts/new_validated_pr.py:1); clean in .claude/commands/build.md |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### crossing-the-chasm

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Crossing the Chasm` |
| **card** | — | — | [link](../concepts/rjm/crossing-the-chasm.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Beachhead market strategy, whole product architecture, and dominant peer references. |
| **consumes** | — | — | Early visionary customer adoption, product-market fit signal, and technology adoption lifecycle segmentation. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### hyrum-s-law

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Hyrum's Law` |
| **card** | — | — | [link](../concepts/rjm/hyrum-s-law.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Risk assessments warning against altering observable system behaviors without deprecation cycles. |
| **consumes** | — | — | Public and internal interface definitions, observable runtime behaviors, and consumer usage patterns. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### practical-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Practical Checklist` |
| **card** | — | — | [link](../concepts/rjm/practical-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Confirmation readiness verdict indicating whether the decision can be marked `CONFIRMED`. |
| **consumes** | — | — | Design decision under consideration, recommended answer, and supporting verification evidence. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### question-framework

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Question Framework` |
| **card** | — | — | [link](../concepts/rjm/question-framework.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Structured answers covering Service Context, User Journeys, Current State, Infrastructure, and Targets. |
| **consumes** | — | — | Unstructured user or service requirements. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### verdict-library

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Verdict library` |
| **card** | — | — | [link](../concepts/rjm/verdict-library.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Shared utility routines for regex-based verdict extraction, multi-axis verdict merging, display emoji mapping, and failure classification sets. |
| **consumes** | — | — | Candidate paths in Claude Code project layout (`.claude/lib/ai_review_common/verdict.py`) or vendored plugin root (`lib/ai_review_common/verdict.py`). |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### honesty-contract

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Honesty contract` |
| **card** | — | — | [link](../concepts/rjm/honesty-contract.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:research` |
| **produces** | — | — | Rigorous epistemic classifications (`PROPOSED`, `UNVERIFIED`, `ACCEPTED`) for all architectural claims. |
| **consumes** | — | — | Current repository working tree state and verified commit history. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during research phase workflows.
- **needs decision:** no
- **decision:** —

### functionality-preservation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Functionality Preservation` |
| **card** | — | — | [link](../concepts/rjm/functionality-preservation.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:build` |
| **produces** | — | — | Invariance validation verifying inputs/outputs, errors, public API, side effects, and concurrency. |
| **consumes** | — | — | Proposed code simplification refactorings. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during build phase workflows.
- **needs decision:** no
- **decision:** —

### danger-signs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Danger Signs` |
| **card** | — | — | [link](../concepts/rjm/danger-signs.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Validation warnings flagging sparse matrices (>30% empty cells), ambiguous cross-matrix rows, or invariant rows that should be constants. |
| **consumes** | — | — | Draft multidimensional CVA matrices and cross-cutting analysis tables. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### codeql

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CodeQL` |
| **card** | — | — | [link](../concepts/rjm/codeql.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Compiled query databases, SARIF security reports, and GitHub Security tab vulnerability alerts. |
| **consumes** | — | — | Repository source code (Python, GitHub Actions workflows), CLI binaries, and query pack configurations. |
| **impl status** | — | — | defects: always-failing-gate, doc-drift, exit-code-mismatch, internal-contradiction, missing-path, orphan, script-bug |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### governance-frameworks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Governance Frameworks` |
| **card** | — | — | [link](../concepts/rjm/governance-frameworks.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Institutional architecture standards, automated enforcement gates, and org-wide review frameworks. |
| **consumes** | — | — | Architecture guidelines, compliance requirements, cross-team standards. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### step-0-hedge-phrase-blocklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Step 0 Hedge-Phrase Blocklist` |
| **card** | — | — | [link](../concepts/rjm/step-0-hedge-phrase-blocklist.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Deterministic word-boundary phrase matching and pass/fail gate verdicts preventing speculative proposals from proceeding. |
| **consumes** | — | — | Author responses to the six mandatory questions in `/spec` Step 0 First Principles Gate. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### orphaned-reqs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Orphaned REQs` |
| **card** | — | — | [link](../concepts/rjm/orphaned-reqs.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Non-blocking warning count of orphaned requirements requiring design spec creation. |
| **consumes** | — | — | Requirements artifacts lacking associated design specifications. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### artifact-management

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Artifact Management` |
| **card** | — | — | [link](../concepts/rjm/artifact-management.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Review assessments and defect findings addressing artifact retention, storage consumption, naming collisions, and credential leakage risks. |
| **consumes** | — | — | Pipeline workflow definitions executing artifact upload (`actions/upload-artifact`) and download (`actions/download-artifact`) actions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### strategic-dimension

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `strategic-dimension` |
| **card** | — | — | [link](../concepts/rjm/strategic-dimension.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Evaluated criteria scores (1-10 scale) contributing 40% of the overall weighted decision matrix score. |
| **consumes** | — | — | Company strategy documentation, market positioning goals, competitive differentiation requirements, and reversibility factors. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### autonomous-execution-guardrails

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `autonomous-execution guardrails` |
| **card** | — | — | [link](../concepts/rjm/autonomous-execution-guardrails.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Enforced pre-merge checklist validation and rejection of unanalyzed "won't fix" dismissals. |
| **consumes** | — | — | Agent execution context, review comments, session logs, and PR changes. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### claude-code-tools

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Claude Code Tools` |
| **card** | — | — | [link](../concepts/rjm/claude-code-tools.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Specification of authorized tool primitives (Read, Grep, Glob, TodoWrite, Bash, Serena MCP) available to the agent. |
| **consumes** | — | — | Claude Code execution environment and agent configuration. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### complexity-guidelines

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Complexity Guidelines` |
| **card** | — | — | [link](../concepts/rjm/complexity-guidelines.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Standardized complexity ratings: XS (single function), S (single file), M (multiple files), L (multiple components), XL (cross-cutting). |
| **consumes** | — | — | Scope assessments, module boundary impact, and file change counts for candidate tasks. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### problem-domain-cross-reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Problem Domain Cross-Reference` |
| **card** | — | — | [link](../concepts/rjm/problem-domain-cross-reference.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Domain-specific mental model and pattern selections calibrated by complexity tier. |
| **consumes** | — | — | Problem domain requirements (Decision-Making, Legacy Systems, Reliability, Design). |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### gaussian

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Gaussian` |
| **card** | — | — | [link](../concepts/rjm/gaussian.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Comparative contrast exposing where normal distribution assumptions fail in engineering systems. |
| **consumes** | — | — | Statistical data sets, variance assumptions, and risk metrics (e.g., standard deviation, Sharpe ratios). |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### session-initialization-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Session Initialization Protocol` |
| **card** | — | — | [link](../concepts/rjm/session-initialization-protocol.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Initialized agent environment with activated project instructions, loaded memories, and retrieved handoff context. |
| **consumes** | — | — | Conversation history indicators, Serena MCP tools, and per-issue handoff documents under `.agents/sessions/handoffs/`. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### github-mcp-server-toolsets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GitHub MCP Server toolsets` |
| **card** | — | — | [link](../concepts/rjm/github-mcp-server-toolsets.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Conceptual design model for internal tool grouping in `toolsets.yaml`. |
| **consumes** | — | — | External GitHub MCP Server architectural specifications. |
| **impl status** | — | — | defects: doc-drift, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### breaking-changes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Breaking Changes` |
| **card** | — | — | [link](../concepts/rjm/breaking-changes.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Architectural findings classifying breaking changes and documenting migration path requirements. |
| **consumes** | — | — | Pull request diff touching public APIs, exported interfaces, or shared contracts. |
| **impl status** | — | — | defects: doc-drift, missing-path, other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### business-strategy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `business-strategy` |
| **card** | — | — | [link](../concepts/rjm/business-strategy.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Directed routing to a single self-contained reference distillation with a scored checklist. |
| **consumes** | — | — | Concrete numeric symptoms describing business friction across customer discovery, pricing, sales, or growth. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### move-safe-caveat

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Move-safe caveat` |
| **card** | — | — | [link](../concepts/rjm/move-safe-caveat.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Repaired launcher shebangs via scripts/maintenance/repair_worktree_venv.py or uv sync reinstall. |
| **consumes** | — | — | A moved or relocated Git worktree containing Python virtual environment launchers. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### o7-open-ontology-questions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `O7 Open ontology questions` |
| **card** | — | — | [link](../concepts/rjm/o7-open-ontology-questions.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | A list of open conceptual questions in the OntologyFragment preventing speculative abstractions. |
| **consumes** | — | — | Ambiguities, contradictions, or missing consensus discovered during ontology elicitation. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### invisible-knowledge-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `invisible_knowledge_verification` |
| **card** | — | — | [link](../concepts/rjm/invisible-knowledge-verification.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Verified Invisible Knowledge section in the plan that provides foundational material for project README documentation. |
| **consumes** | — | — | Component interaction models, data flow pipelines, module organization rationales, system invariants, and architectural tradeoffs. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### 15-axis-set

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `15-axis set` |
| **card** | — | — | [link](../concepts/rjm/15-axis-set.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Complete multi-dimensional findings table comprising 15 rows with per-axis verdicts and structured findings. |
| **consumes** | — | — | Stage-1 spec-compliance prompt, 11 Stage-2 canonical reference prompts, and 3 local skill script paths. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### user-value

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `User Value` |
| **card** | — | — | [link](../concepts/rjm/user-value.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Evaluations of user problem fit, evidence of user demand, and proportionality assessments. |
| **consumes** | — | — | PR descriptions, linked user issues, customer feedback, and product requirements. |
| **impl status** | — | — | defects: internal-contradiction (.claude/skills/review/references/roadmap.md:205) |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### official-standard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Official Standard` |
| **card** | — | — | [link](../concepts/rjm/official-standard.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Baseline frontmatter schema requirements for portable agent skills. |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession) |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### meeting-cadence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Meeting Cadence` |
| **card** | — | — | [link](../concepts/rjm/meeting-cadence.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Scheduled governance sessions and timed review rhythms. |
| **consumes** | — | — | Review agendas, pending proposals, and urgent escalation requests. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### semver-2-0-0

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SemVer 2.0.0` |
| **card** | — | — | [link](../concepts/rjm/semver-2-0-0.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Version string formatting rules (`MAJOR.MINOR.PATCH`) for plugin manifests. |
| **consumes** | — | — | Semantic Versioning 2.0.0 specification. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### hedge-phrase-list

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Hedge Phrase List` |
| **card** | — | — | [link](../concepts/rjm/hedge-phrase-list.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Word-boundary match detections or validation pass. |
| **consumes** | — | — | Proposer answers to Step 0 questions. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### metrics-pillar-2

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Metrics (Pillar 2)` |
| **card** | — | — | [link](../concepts/rjm/metrics-pillar-2.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Review findings evaluating metric signal adequacy, error alert trigger counters, and label cardinality bounds. |
| **consumes** | — | — | Metric instrumentation, counter increment points, timing histograms, and metric label declarations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### appropriateness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Appropriateness` |
| **card** | — | — | [link](../concepts/rjm/appropriateness.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Evaluation scores assessing whether agent behavior fits the complexity tier of the task. |
| **consumes** | — | — | Agent response strategy and Cynefin complexity classification of prompt scenarios. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### auto-resolution-script

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Auto-Resolution Script` |
| **card** | — | — | [link](../concepts/rjm/auto-resolution-script.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Bulk automated resolution of safe file patterns across conflicted PR branches. |
| **consumes** | — | — | PR number, branch name, and target branch arguments. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### confusion

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Confusion` |
| **card** | — | — | [link](../concepts/rjm/confusion.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Targeted inquiries, information-gathering tasks, and problem decomposition to determine the true domain. |
| **consumes** | — | — | Ambiguous problem statements, conflicting indicators, or insufficient contextual facts. |
| **impl status** | — | — | defects: doc-drift, unimplemented-feature |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### 100m-offers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `100M Offers` |
| **card** | — | — | [link](../concepts/rjm/100m-offers.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Grand Slam Offer structure, premium pricing strategy, Value Equation optimization, and risk-reversal guarantees. |
| **consumes** | — | — | Product/service capabilities, customer market profile, and customer obstacle list. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### when-to-refresh

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `When to Refresh` |
| **card** | — | — | [link](../concepts/rjm/when-to-refresh.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Targeted refresh updates across sidecars, probe evidence, ADRs, runtime tests, generated mirrors, and memory. |
| **consumes** | — | — | CLI version bump events, broken URL reports, and identified vendor contract deprecations. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### retrospective-frameworks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Retrospective Frameworks` |
| **card** | — | — | [link](../concepts/rjm/retrospective-frameworks.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:retrospective` |
| **produces** | — | — | Operational rubrics, diagnostic templates, and classification activities for retrospective execution. |
| **consumes** | — | — | Session logs, tool execution records, and retrospective trigger prompts. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during retrospective phase workflows.
- **needs decision:** no
- **decision:** —

### how-to-add-a-new-flag

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `How to Add a New Flag` |
| **card** | — | — | [link](../concepts/rjm/how-to-add-a-new-flag.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Compliant, scoped, and tested flag implementations with documented failure modes and catalog provenance. |
| **consumes** | — | — | Proposed configuration flags, environment variables, or escape hatches. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### stop-conditions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Stop Conditions` |
| **card** | — | — | [link](../concepts/rjm/stop-conditions.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:research` |
| **produces** | — | — | Decision to halt further tool execution and finalize output artifacts. |
| **consumes** | — | — | Execution metrics including token consumption, search iteration counts, and goal achievement status. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during research phase workflows.
- **needs decision:** no
- **decision:** —

### installation-artifacts

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Installation Artifacts` |
| **card** | — | — | [link](../concepts/rjm/installation-artifacts.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Validation audit ensuring referenced installation files exist and target appropriate user or contributor audiences. |
| **consumes** | — | — | PRD specifications and proposed installation/distribution artifact paths. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### analyze-code-impact

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Analyze Code Impact` |
| **card** | — | — | [link](../concepts/rjm/analyze-code-impact.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | An impact analysis checklist mapping files requiring changes, existing patterns, tests to add, and risks. |
| **consumes** | — | — | A proposed task or feature request and the existing codebase repository. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### documentation-skills

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Documentation Skills` |
| **card** | — | — | [link](../concepts/rjm/documentation-skills.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured observations in `.serena/memories/documentation-observations.md`. |
| **consumes** | — | — | Documentation drafts, style guide feedback, diagrams, and section structuring reviews. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### cve

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CVE` |
| **card** | — | — | [link](../concepts/rjm/cve.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Canonical Common Vulnerabilities and Exposures identifiers (e.g. CVE-YYYY-NNNNN) indexing security issues. |
| **consumes** | — | — | Identified publicly disclosed vulnerabilities or upstream dependency advisories. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### hidden-failures

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Hidden Failures` |
| **card** | — | — | [link](../concepts/rjm/hidden-failures.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Detection and flagging of error suppression anti-patterns that prevent system failures from surfacing. |
| **consumes** | — | — | Catch-and-continue blocks, null-coalescing expressions, retry exhaustion logic, and disabled tests. |
| **impl status** | — | — | defects: other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### analysis-priority

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Analysis Priority` |
| **card** | — | — | [link](../concepts/rjm/analysis-priority.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | A prioritized sequence of debt investigations: 1. Unused code, 2. Complexity, 3. Duplicate patterns, 4. Conditional logic, 5. Dependencies. |
| **consumes** | — | — | Candidate tech debt targets across the codebase. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### cvss-calculator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CVSS Calculator` |
| **card** | — | — | [link](../concepts/rjm/cvss-calculator.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Standardized Common Vulnerability Scoring System (CVSS v3.1) numerical scores. |
| **consumes** | — | — | Vulnerability characteristics across attack vector, complexity, privileges, scope, and impact metrics. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### skillopt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SkillOpt` |
| **card** | — | — | [link](../concepts/rjm/skillopt.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Optimization discipline and acceptance rules requiring candidate artifacts to strictly beat incumbents on unseen tasks. |
| **consumes** | — | — | Scored rollouts of candidate artifact variants against held-out task splits. |
| **impl status** | — | — | clean (citing inventory card `ADR-087` records defects: missing-path, doc-drift, internal-contradiction; `_optimizer_core.py` is clean) |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### script-output-standards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Script Output Standards` |
| **card** | — | — | [link](../concepts/rjm/script-output-standards.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:Phase 3: Generation` |
| **produces** | — | — | Standard exit codes (0, 1, 2, 10), JSON stdout, and stderr log streams. |
| **consumes** | — | — | Script execution outcomes and data payloads. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Phase 3: Generation phase workflows.
- **needs decision:** no
- **decision:** —

### critic-conditions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `critic conditions` |
| **card** | — | — | [link](../concepts/rjm/critic-conditions.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | A checklist of required remediation items (C1: test verification, C2: PowerShell scope clarification, C3: regex hardening, C4: rollback plan) that must be satisfied before plan approval and implementation. |
| **consumes** | — | — | Plan critique findings from the critic agent (`003-pr-60-plan-critique.md`). |
| **impl status** | — | — | defects: missing-path, internal-contradiction, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### broken-references

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Broken References` |
| **card** | — | — | [link](../concepts/rjm/broken-references.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Blocking error classification requiring immediate remediation by spec-generator or milestone-planner. |
| **consumes** | — | — | Specification files containing references to missing or invalid spec IDs. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### code-simplification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Code Simplification` |
| **card** | — | — | [link](../concepts/rjm/code-simplification.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Simplified code prioritizing readable straight-line logic over premature abstraction layers. |
| **consumes** | — | — | Draft method designs and proposed code abstractions. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### brandolini-s-law

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Brandolini's Law` |
| **card** | — | — | [link](../concepts/rjm/brandolini-s-law.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Review policy placing the burden of proof on the claim producer rather than the reviewer. |
| **consumes** | — | — | Unverified claims, technical assertions, and architectural proposals. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### re-running-a-probe

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Re-running a probe` |
| **card** | — | — | [link](../concepts/rjm/re-running-a-probe.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Versioned runtime observations, captured stdin/environment logs, and updated empirical evidence sidecars. |
| **consumes** | — | — | Isolated environment prefix, target CLI binary version, deliberately wrong negative control, and documented recipe. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### bullseye-channel-selection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Bullseye Channel Selection` |
| **card** | — | — | [link](../concepts/rjm/bullseye-channel-selection.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Rigorous 19-channel ranking, parallel experiment outcomes, and single-channel concentration. |
| **consumes** | — | — | A marketable product, baseline unit economics, and target audience definitions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### memory-skill

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Memory Skill` |
| **card** | — | — | [link](../concepts/rjm/memory-skill.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Recalled observation memories and relevant constraints from sidecar files. |
| **consumes** | — | — | Query strings and memory recall requests. |
| **impl status** | — | — | out-of-scope |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### resume-verification-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `resume-verification checklist` |
| **card** | — | — | [link](../concepts/rjm/resume-verification-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:session-start` |
| **produces** | — | — | Executed command logs and verified test outputs establishing a clean working state before new edits. |
| **consumes** | — | — | Verification commands and claimed states specified in a per-issue handoff document. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during session-start phase workflows.
- **needs decision:** no
- **decision:** —

### symlink-traversal

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Symlink traversal` |
| **card** | — | — | [link](../concepts/rjm/symlink-traversal.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Validation failure (PermissionError) and blocking of file access. |
| **consumes** | — | — | Untrusted filesystem links or path parameters targeting directories outside the repo root. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### yagni-examples

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `YAGNI Examples` |
| **card** | — | — | [link](../concepts/rjm/yagni-examples.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architectural decisions to write concrete code without interfaces, coupled with ADRs documenting reassessment triggers. |
| **consumes** | — | — | Requirements and use case matrices showing single-column (no variability) or all-variability edge cases. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### dependencies

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Dependencies` |
| **card** | — | — | [link](../concepts/rjm/dependencies.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Dependency graphs, upstream/downstream mappings with criticality ratings, and prerequisite checklists. |
| **consumes** | — | — | Organizational context, team interviews, task plans, and epic roadmaps. |
| **impl status** | — | — | defects: cross-file-contradiction (.agents/archive/planning/PR-60/003-pr-60-plan-critique.md:95); doc-drift (templates/agents/roadmap.shared.md:94); clean in .claude/skills/work-operating-model/SKILL.md, references/entry-contract.md, and references/layer-questions.md |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### session-log-mechanics

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Session Log Mechanics` |
| **card** | — | — | [link](../concepts/rjm/session-log-mechanics.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Guaranteed git reachability for session log commits, preventing broken pre-commit hooks and lengthy CI test failures. |
| **consumes** | — | — | Pre-existing legacy session log files (`.agents/sessions/*.json`), git branch history. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### development-guide

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Development Guide` |
| **card** | — | — | [link](../concepts/rjm/development-guide.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Developer instructions for maintaining and extending the analyze skill's script-driven workflow. |
| **consumes** | — | — | analyze skill architecture specifications, state machine requirements. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### version-resolution-order

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `version-resolution order` |
| **card** | — | — | [link](../concepts/rjm/version-resolution-order.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Deterministic version resolution for installed plugins across fallback tiers. |
| **consumes** | — | — | Claude Code plugin marketplace specification and documentation. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### invest

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `INVEST` |
| **card** | — | — | [link](../concepts/rjm/invest.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Pass/fail validation verdict per story, rejecting stories failing any criterion. |
| **consumes** | — | — | Draft user stories within PRDs or requirement specifications. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### partial

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PARTIAL` |
| **card** | — | — | [link](../concepts/rjm/partial.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | An intermediate evidence classification label in dx-review or a non-clearing WARN evaluation state in review gates. |
| **consumes** | — | — | Partial execution traces, truncated diff payloads, static code artifacts, and agent evaluation signals. |
| **impl status** | — | — | defects: orphan, missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### start-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `START Checklist` |
| **card** | — | — | [link](../concepts/rjm/start-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Completed five-point markdown checklist confirming entry readiness for architectural decision authoring. |
| **consumes** | — | — | Identified stakeholders, timing justification, candidate options, requirements documentation, and selected ADR template. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### config-catalog

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Config Catalog` |
| **card** | — | — | [link](../concepts/rjm/config-catalog.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A centralized reference catalog mapping configuration axes, flags, markers, and escape hatches to their enforcement points and abuse stories. |
| **consumes** | — | — | Repository configuration definitions, environment variable declarations, and escape hatch designs. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### strategic-validation-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Strategic Validation Checklist` |
| **card** | — | — | [link](../concepts/rjm/strategic-validation-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Evaluations across Chesterton's Fence, Path Dependence, Core vs Context, and Second-System Effect lenses. |
| **consumes** | — | — | ADR drafts, historical context, reversibility analyses, and core/context capability classifications. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### a-philosophy-of-software-design

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `A Philosophy of Software Design` |
| **card** | — | — | [link](../concepts/rjm/a-philosophy-of-software-design.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### documentation-completeness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Documentation Completeness` |
| **card** | — | — | [link](../concepts/rjm/documentation-completeness.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Findings on missing comments, inadequate PR explanations, or out-of-date documentation. |
| **consumes** | — | — | PR description, inline code comments, and documentation files. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### failure-canon

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `failure canon` |
| **card** | — | — | [link](../concepts/rjm/failure-canon.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Curated anti-patterns in `FAILURE-MODES.md`, Serena memory rules, and architectural gates. |
| **consumes** | — | — | Retrospectives, incident writeups, PR post-mortems, and debugging traces. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### signal-without-noise

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Signal Without Noise` |
| **card** | — | — | [link](../concepts/rjm/signal-without-noise.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Evaluations on telemetry signal-to-noise ratio, actionability assessments, and findings flagging excessive or unhelpful logging volume. |
| **consumes** | — | — | Emitted telemetry volume, logging granularity, and payload logging statements on high-frequency execution paths. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### the-bicameral-bet

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `The Bicameral Bet` |
| **card** | — | — | [link](../concepts/rjm/the-bicameral-bet.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### when-complexity-is-justified

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `When Complexity Is Justified` |
| **card** | — | — | [link](../concepts/rjm/when-complexity-is-justified.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Validation verdicts permitting complexity only when required by regulations, scale limits, or measurable ROI. |
| **consumes** | — | — | Complex technical proposals, performance metrics, regulatory constraints, scale benchmarks. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### extensibility-scalability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Extensibility & Scalability` |
| **card** | — | — | [link](../concepts/rjm/extensibility-scalability.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Assessment of extension point adequacy, performance bottleneck risks, and engineering sizing. |
| **consumes** | — | — | Proposed architectural abstractions, extension points, and resource access patterns. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### peaa

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PEAA` |
| **card** | — | — | [link](../concepts/rjm/peaa.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Established pattern terminology for transactional boundaries, repositories, and persistence mappings. |
| **consumes** | — | — | Enterprise software architecture concepts and pattern classifications. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### bounded-queues-and-buffers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Bounded Queues and Buffers` |
| **card** | — | — | [link](../concepts/rjm/bounded-queues-and-buffers.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Findings identifying unbounded in-memory data structures and unhandled queue overflow scenarios. |
| **consumes** | — | — | Asynchronous queues, worker pools, in-memory buffers, and producer-consumer channels. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### important

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `IMPORTANT` |
| **card** | — | — | [link](../concepts/rjm/important.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Categorization of review findings as non-blocking but significant issues requiring acknowledgement or fix. |
| **consumes** | — | — | Review axis findings evaluated with a WARN verdict. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### api-design-skills

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `API Design Skills` |
| **card** | — | — | [link](../concepts/rjm/api-design-skills.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured observations in `.serena/memories/api-design-observations.md`. |
| **consumes** | — | — | API design specifications, review feedback on endpoint structures, and contract revisions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### common-violations-to-detect

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Common Violations to Detect` |
| **card** | — | — | [link](../concepts/rjm/common-violations-to-detect.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Flagged code smell findings (Feature Envy, Getter Chains). |
| **consumes** | — | — | Source code AST or method implementations exhibiting object interactions. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### constraints

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Constraints` |
| **card** | — | — | [link](../concepts/rjm/constraints.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Enforceable negative constraints preventing out-of-scope behaviors and unauthorized modifications. |
| **consumes** | — | — | Agent role definitions, project boundaries, and security rules. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### status-quo

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Status Quo` |
| **card** | — | — | [link](../concepts/rjm/status-quo.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Documented baseline workaround workflow. |
| **consumes** | — | — | Existing process or workaround description. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### the-four-steps-to-the-epiphany

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `The Four Steps to the Epiphany` |
| **card** | — | — | [link](../concepts/rjm/the-four-steps-to-the-epiphany.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Customer Discovery and Customer Validation milestones establishing product-market fit. |
| **consumes** | — | — | Customer interview findings, early value hypotheses, and repeatable buyer evidence. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### known-instrument-gotchas

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Known instrument gotchas` |
| **card** | — | — | [link](../concepts/rjm/known-instrument-gotchas.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Catalogued failure modes, workaround configurations, and interpretation constraints for evaluation metrics. |
| **consumes** | — | — | Evaluation execution logs, anomalous judge scoring patterns, and benchmark regression reports. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### piv-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PIV Checklist` |
| **card** | — | — | [link](../concepts/rjm/piv-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Item-by-item verification pass/fail status across planned controls, vulnerabilities, validation, error handling, secrets, dependencies, and test coverage. |
| **consumes** | — | — | Implemented code changes and planned security controls. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### kiss-in-practice

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `KISS in Practice` |
| **card** | — | — | [link](../concepts/rjm/kiss-in-practice.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Comparative guidance contrasting practical, simple approaches with over-engineered alternatives. |
| **consumes** | — | — | Design decisions across architecture, data access, error handling, and configuration. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### phase-map

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase Map` |
| **card** | — | — | [link](../concepts/rjm/phase-map.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Mapping between user-facing phases and underlying script dispatch logic. |
| **consumes** | — | — | Step index and total steps count in analyze workflow. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### spec-reference-best-practices

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Spec Reference Best Practices` |
| **card** | — | — | [link](../concepts/rjm/spec-reference-best-practices.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Standardized PR descriptions and commit messages linking implementation code to upstream specifications. |
| **consumes** | — | — | GitHub issue links, requirement identifiers (`REQ-*`), planning documents, and design specs. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### post-consolidation-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Post-Consolidation Checklist` |
| **card** | — | — | [link](../concepts/rjm/post-consolidation-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Verification record confirming clean completion across functionality, documentation, metrics, and cleanup. |
| **consumes** | — | — | Completed agent consolidation execution and telemetry data. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### lindy-effect

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Lindy Effect` |
| **card** | — | — | [link](../concepts/rjm/lindy-effect.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Strategic technology selection and legacy retention decisions based on proven longevity. |
| **consumes** | — | — | Technology stack evaluations, longevity assessments, legacy system life-expectancy projections. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### circuit-breakers-and-bulkheads

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Circuit Breakers and Bulkheads` |
| **card** | — | — | [link](../concepts/rjm/circuit-breakers-and-bulkheads.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Review findings on missing fail-fast trip mechanisms and unisolated critical/non-critical execution flows. |
| **consumes** | — | — | Integration point architectures, worker pool allocations, and dependency call sites. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### scenario-adequacy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Scenario Adequacy` |
| **card** | — | — | [link](../concepts/rjm/scenario-adequacy.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Validated scenario test suites meeting minimum test coverage criteria. |
| **consumes** | — | — | Prompt capability specifications, edge-case definitions, and negative test requirements. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### mental-models-galls-law

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `mental-models-galls-law` |
| **card** | — | — | [link](../concepts/rjm/mental-models-galls-law.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Validation that the plan develops from a simple working system into complexity rather than designing complex systems from scratch. |
| **consumes** | — | — | Proposed milestone breakdown and architectural scope. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### negotiation-theory

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Negotiation Theory` |
| **card** | — | — | [link](../concepts/rjm/negotiation-theory.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:support` |
| **produces** | — | — | Theoretical foundation for offer analysis, zone mapping, and counter-proposal generation. |
| **consumes** | — | — | Retrieved strategic memories from Serena. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during support phase workflows.
- **needs decision:** no
- **decision:** —

### copilot-plugin-runtime-fields

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Copilot Plugin Runtime Fields` |
| **card** | — | — | [link](../concepts/rjm/copilot-plugin-runtime-fields.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Resolved absolute file paths for plugin scripts, shared libraries, and configuration files. |
| **consumes** | — | — | Host process execution environment, process working directory (`cwd`), and exported plugin environment variables. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### accuracy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Accuracy` |
| **card** | — | — | [link](../concepts/rjm/accuracy.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Integer score from 1 to 5 measuring factual and conceptual accuracy. |
| **consumes** | — | — | Model responses, prompt questions, and expected concept benchmarks. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### refresh-procedure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Refresh procedure` |
| **card** | — | — | [link](../concepts/rjm/refresh-procedure.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Synchronized updates across documentation, probe evidence, ADRs, tests, mirrors, and memories. |
| **consumes** | — | — | Updated vendor docs, release changelogs, targeted local probes, and existing sidecar records. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### branch-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Branch Checklist` |
| **card** | — | — | [link](../concepts/rjm/branch-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Recorded decisions and confirmed recommendations across all eight branches. |
| **consumes** | — | — | Design tree and problem scope. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### upstream-indicators

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Upstream Indicators` |
| **card** | — | — | [link](../concepts/rjm/upstream-indicators.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Empirical detection rules for identifying upstream third-party code. |
| **consumes** | — | — | Filesystem paths, manifest dependencies, lockfile entries, CDN URLs, and git submodules. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### custom-composite-actions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Custom Composite Actions` |
| **card** | — | — | [link](../concepts/rjm/custom-composite-actions.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Review findings on structural correctness, missing schema properties, input validation gaps, and reusability opportunities. |
| **consumes** | — | — | Composite action YAML definitions (`action.yml`) in `.github/actions/` and workflow consumer contracts. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### skill-creation-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Creation Checklist` |
| **card** | — | — | [link](../concepts/rjm/skill-creation-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Verification checklist confirmation gating whether skill development may proceed. |
| **consumes** | — | — | Candidate skill proposal, incident history, and workflow specification. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### helm-chart

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Helm chart` |
| **card** | — | — | [link](../concepts/rjm/helm-chart.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### working-effectively-with-legacy-code

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Working Effectively with Legacy Code` |
| **card** | — | — | [link](../concepts/rjm/working-effectively-with-legacy-code.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Seam identification techniques, characterization testing patterns, and safe refactoring strategies. |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### evidence-labels

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evidence Labels` |
| **card** | — | — | [link](../concepts/rjm/evidence-labels.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Standardized categorization of audit evidence quality across all scorecard dimension rows. |
| **consumes** | — | — | Audit interaction logs, execution traces, static file reads, and web fetch responses. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### scored-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `scored checklist` |
| **card** | — | — | [link](../concepts/rjm/scored-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Numerical compliance score and clear pass/fail verdict against an explicit threshold. |
| **consumes** | — | — | Observable operational outputs, meeting recordings, copy drafts, or experiment data. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### status-definitions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Status Definitions` |
| **card** | — | — | [link](../concepts/rjm/status-definitions.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Machine-parseable status and blocking flag in design review YAML frontmatter. |
| **consumes** | — | — | Design review evaluations, issue summaries, and architecture recommendations. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### exact-native-events

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Exact native events` |
| **card** | — | — | [link](../concepts/rjm/exact-native-events.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Enumerated list of valid native hook event names and compatibility aliases. |
| **consumes** | — | — | Agent lifecycle triggers and host execution states. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### untrusted-search-path

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Untrusted Search Path` |
| **card** | — | — | [link](../concepts/rjm/untrusted-search-path.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### agent-and-hook-event-coverage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent and Hook Event Coverage` |
| **card** | — | — | [link](../concepts/rjm/agent-and-hook-event-coverage.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Review findings evaluating whether agent steps emit necessary telemetry to diagnose slow tool calls, stalled conversation turns, or unhandled errors. |
| **consumes** | — | — | Agent execution logic, plugin hooks, tool dispatch invocations, and JSONL telemetry event streams. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### a-mem

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `A-MEM` |
| **card** | — | — | [link](../concepts/rjm/a-mem.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### compliance-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Compliance Checklist` |
| **card** | — | — | [link](../concepts/rjm/compliance-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Verified adherence to phase gate governance or third-party license requirements. |
| **consumes** | — | — | Skill specifications or release candidate build artifacts. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### data-intensive-applications

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Data-Intensive Applications` |
| **card** | — | — | [link](../concepts/rjm/data-intensive-applications.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architectural standards for data ownership, persistence models, schema evolution, and messaging guarantees. |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### semver

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Semver` |
| **card** | — | — | [link](../concepts/rjm/semver.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Versioned npm package releases. |
| **consumes** | — | — | Package metadata, release changesets. |
| **impl status** | — | — | defects: unfailable-gate, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### committee-composition

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Committee Composition` |
| **card** | — | — | [link](../concepts/rjm/committee-composition.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Staffed committee roster capable of establishing quorum and voting on agent proposals. |
| **consumes** | — | — | Role specifications for Chair, Architect, Security, DevOps, and User representatives. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### debt-removal-tasks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Debt Removal Tasks` |
| **card** | — | — | [link](../concepts/rjm/debt-removal-tasks.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Categorized remediation actions across code elimination, simplification, dependency hygiene, test optimization, and documentation cleanup. |
| **consumes** | — | — | Identified debt categories spanning code, complexity, dependencies, tests, and documentation. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### when-suggesting-improvements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `When Suggesting Improvements` |
| **card** | — | — | [link](../concepts/rjm/when-suggesting-improvements.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Calibrated, actionable feedback that avoids unnecessary complexity, breaking changes, or disproportionate performance penalties. |
| **consumes** | — | — | Draft improvement proposals, refactoring ideas, and code review recommendations. |
| **impl status** | — | — | defects: other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### burn-rate-reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Burn Rate Reference` |
| **card** | — | — | [link](../concepts/rjm/burn-rate-reference.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized burn rate thresholds (1x to 72x) and multi-window alert triggers (page, ticket, backlog). |
| **consumes** | — | — | Current error consumption rate and measurement window duration. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### hidden-costs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Hidden Costs` |
| **card** | — | — | [link](../concepts/rjm/hidden-costs.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Enumerated list of non-obvious lifecycle liabilities (security audits, compliance audits, on-call support burden, opportunity cost, technical debt). |
| **consumes** | — | — | Candidate solution architectures and operational delivery models. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### alignment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Alignment` |
| **card** | — | — | [link](../concepts/rjm/alignment.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Evaluation score (1-5) and findings flagging adjacent work or gold-plating. |
| **consumes** | — | — | Project goals, charter objectives, and proposed plan tasks. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### manual-integration-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Manual Integration Checklist` |
| **card** | — | — | [link](../concepts/rjm/manual-integration-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | ADR Protocol Integration section and corresponding update to `SESSION-PROTOCOL.md`. |
| **consumes** | — | — | Newly authored or revised ADR with MUST/SHOULD requirements. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### hook-registration-surfaces

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Hook Registration Surfaces` |
| **card** | — | — | [link](../concepts/rjm/hook-registration-surfaces.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Clear architectural separation between Git hook managers (Lefthook) and Claude/Copilot agent runtime hooks. |
| **consumes** | — | — | Hook definitions and consumer runtime configurations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### qa-report-length-bounds

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `QA Report Length Bounds` |
| **card** | — | — | [link](../concepts/rjm/qa-report-length-bounds.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:test` |
| **produces** | — | — | Concise report constrained to 30-50 lines (APPROVED) or 50-80 lines (BLOCKED). |
| **consumes** | — | — | Generated draft of Pre-PR Validation Report. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during test phase workflows.
- **needs decision:** no
- **decision:** —

### script-agent-scoring

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Script Agent Scoring` |
| **card** | — | — | [link](../concepts/rjm/script-agent-scoring.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:Phase 4: Synthesis Panel` |
| **produces** | — | — | Numerical score and tier categorization: 8-10 (production-ready), 6-7 (functional with gaps), <6 (revision required). |
| **consumes** | — | — | Script Agent review findings across compliance, self-verification, error handling, and autonomy. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Phase 4: Synthesis Panel phase workflows.
- **needs decision:** no
- **decision:** —

### made-to-stick

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Made to Stick` |
| **card** | — | — | [link](../concepts/rjm/made-to-stick.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Refined message incorporating Simple, Unexpected, Concrete, Credible, Emotional, Stories (SUCCESs) traits. |
| **consumes** | — | — | Clear baseline message, narrative proposition, or communication draft. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### iterate-vs-redesign

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Iterate vs Redesign` |
| **card** | — | — | [link](../concepts/rjm/iterate-vs-redesign.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Triage decision between localized iterative updates or full skill redesign. |
| **consumes** | — | — | Assessment of skill failures and scope of required modifications. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### design-pit-of-success

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `design-pit-of-success` |
| **card** | — | — | [link](../concepts/rjm/design-pit-of-success.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Milestone and interface designs structured so the path of least resistance naturally yields correct software. |
| **consumes** | — | — | Candidate architectural designs and milestone breakdown proposals. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### domain-knowledge

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Domain Knowledge` |
| **card** | — | — | [link](../concepts/rjm/domain-knowledge.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:support` |
| **produces** | — | — | Domain-specific legal, contractual, or compensation benchmarks. |
| **consumes** | — | — | Domain context files and memory queries. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during support phase workflows.
- **needs decision:** no
- **decision:** —

### powershell-coding-standards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PowerShell Coding Standards` |
| **card** | — | — | [link](../concepts/rjm/powershell-coding-standards.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Consistent and compliant script implementations adhering to repository coding standards. |
| **consumes** | — | — | Script implementation tasks and repository automation requirements. |
| **impl status** | — | — | defects: missing-path, doc-drift, orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### script-integration-framework

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Script Integration Framework` |
| **card** | — | — | [link](../concepts/rjm/script-integration-framework.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architectural guidelines, integration patterns, and template structures for embedding Python scripts into skills. |
| **consumes** | — | — | Skill requirements requiring deterministic execution, verification, state caching, or low degrees of freedom. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### clear

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Clear` |
| **card** | — | — | [link](../concepts/rjm/clear.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized solutions, direct procedural execution, or automated responses without extraneous questions. |
| **consumes** | — | — | Problems characterized by self-evident cause-and-effect relationships and established best practices. |
| **impl status** | — | — | defects: doc-drift, missing-path, unimplemented-feature |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### falsifiability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Falsifiability` |
| **card** | — | — | [link](../concepts/rjm/falsifiability.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Explicit failure conditions, measurable indicators, or findings rejecting unfalsifiable assertions. |
| **consumes** | — | — | Asserted benefits, claims, or expected outcomes in architectural proposals and decisions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### applying-during-analysis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Applying During Analysis` |
| **card** | — | — | [link](../concepts/rjm/applying-during-analysis.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Ordered structural assessment assessing testability, cohesion, coupling, redundancy, and encapsulation. |
| **consumes** | — | — | Legacy codebase modules, test suites, and component architectures. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### demand-reality

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Demand Reality` |
| **card** | — | — | [link](../concepts/rjm/demand-reality.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | List of verified requesters or gate halt on aspirational demand. |
| **consumes** | — | — | Proposer's statement of requester demand. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### how-to-think-for-yourself

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `How to Think for Yourself` |
| **card** | — | — | [link](../concepts/rjm/how-to-think-for-yourself.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Cognitive guardrails against conventional wisdom, conformity pressure, and unexamined consensus. |
| **consumes** | — | — | External philosophical and critical thinking methodology (Paul Graham, 2020). |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### operating-moves

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Operating Moves` |
| **card** | — | — | [link](../concepts/rjm/operating-moves.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Prescriptive tactical rules (buffers, verification spikes, delegation) directly applicable to agent workflows. |
| **consumes** | — | — | Abstract mental model principles and concrete operational decision contexts. |
| **impl status** | — | — | clean (.claude/skills/requirements-interview/references/mental-models-circle-of-competence.md); defects: missing-path (.claude/skills/decision-critic/references/mental-models-fat-tails.md) |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### prompt-and-instruction-integrity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Prompt and Instruction Integrity` |
| **card** | — | — | [link](../concepts/rjm/prompt-and-instruction-integrity.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Verification of instruction consistency, confirmation gates, and absence of prompt-injection vectors. |
| **consumes** | — | — | Agent system prompts, instructions, templates, and persona definitions. |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### source-priority

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Source priority` |
| **card** | — | — | [link](../concepts/rjm/source-priority.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Ranked precedence determining authoritative evidentiary weight for disputed or evolving runtime behaviors. |
| **consumes** | — | — | Vendor reference pages, vendor commits, changelog entries, empirical local probes, and secondary indexes. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### storybrand-messaging

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `StoryBrand Messaging` |
| **card** | — | — | [link](../concepts/rjm/storybrand-messaging.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Structured 7-part brand narrative, customer-centric website copy, and a concise marketing one-liner. |
| **consumes** | — | — | Product capabilities, target audience persona, and core market positioning. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### key-books

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Key Books` |
| **card** | — | — | [link](../concepts/rjm/key-books.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Curated bibliography grounding legacy code analysis in established engineering texts. |
| **consumes** | — | — | Software engineering literature and foundational methodologies. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### parallel-execution-readiness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Parallel Execution Readiness` |
| **card** | — | — | [link](../concepts/rjm/parallel-execution-readiness.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A verified prerequisites readiness assessment authorizing or blocking parallel agent dispatch. |
| **consumes** | — | — | Candidate tasks proposed for concurrent execution, repository worktree status, and API budget metrics. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### github-actions-best-practices

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GitHub Actions Best Practices` |
| **card** | — | — | [link](../concepts/rjm/github-actions-best-practices.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | DevOps review verdicts, remediation findings, and hardened workflow definitions conforming to repository pipeline standards. |
| **consumes** | — | — | GitHub Actions workflow configurations (`.github/workflows/*.yml`), composite action definitions, and CI/CD pipeline specifications. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### technical-debt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Technical Debt` |
| **card** | — | — | [link](../concepts/rjm/technical-debt.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Architectural findings and evaluations tracking technical debt balance and sustainability. |
| **consumes** | — | — | Pull request diff and commit changes showing newly introduced shortcuts, workarounds, or deferred work. |
| **impl status** | — | — | defects: doc-drift, missing-path, other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### four-steps-to-the-epiphany

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Four Steps to the Epiphany` |
| **card** | — | — | [link](../concepts/rjm/four-steps-to-the-epiphany.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Validated business models, customer discovery insights, hand-sold customer validation, and scalable company creation. |
| **consumes** | — | — | Founding vision, business model hypotheses, and customer interview feedback. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### cap-theorem

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CAP Theorem` |
| **card** | — | — | [link](../concepts/rjm/cap-theorem.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Architectural decisions explicitly balancing consistency, availability, and partition tolerance. |
| **consumes** | — | — | Distributed system requirements, network partition characteristics, and consistency constraints. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### analyze-devops-impact

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Analyze DevOps Impact` |
| **card** | — | — | [link](../concepts/rjm/analyze-devops-impact.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Impact analysis deliverable saved to `.agents/planning/impact-analysis-devops-[feature].md`. |
| **consumes** | — | — | Impact analysis request from milestone-planner during planning phase. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### code-qualities

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Code Qualities` |
| **card** | — | — | [link](../concepts/rjm/code-qualities.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Quality assessments across cohesion, coupling, non-redundancy, encapsulation, and testability. |
| **consumes** | — | — | Source code artifacts, PR diffs, refactoring proposals. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### debugging-guidelines

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Debugging Guidelines` |
| **card** | — | — | [link](../concepts/rjm/debugging-guidelines.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Execution discipline guiding agent behavior during bug diagnosis and repair. |
| **consumes** | — | — | Application defect context, codebase architecture, and debugging phase state. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### github-copilot-cli-contract

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GitHub Copilot CLI Contract` |
| **card** | — | — | [link](../concepts/rjm/github-copilot-cli-contract.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Verified hook registration configurations, event payload parsers, and adapter implementations. |
| **consumes** | — | — | Official GitHub Copilot CLI documentation, release notes, and empirical runtime probe results. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### project-deal

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Project Deal` |
| **card** | — | — | [link](../concepts/rjm/project-deal.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:support` |
| **produces** | — | — | Load-bearing governance principle that model capability gaps are invisible without explicit mathematical quantification. |
| **consumes** | — | — | Empirical agent negotiation study data from Anthropic (Dec 2025). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during support phase workflows.
- **needs decision:** no
- **decision:** —

### skill-reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Reference` |
| **card** | — | — | [link](../concepts/rjm/skill-reference.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Comprehensive skill catalog mapping development tasks to appropriate specialized skills and invocation methods. |
| **consumes** | — | — | Available workflow skills, capability summaries, and cross-platform invocation patterns. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### gap-severity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Gap Severity` |
| **card** | — | — | [link](../concepts/rjm/gap-severity.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:test` |
| **produces** | — | — | Triaged gap classifications prioritized by operational urgency. |
| **consumes** | — | — | Identified omissions, missing artifacts, or defects in domain architectural layers. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during test phase workflows.
- **needs decision:** no
- **decision:** —

### retries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Retries` |
| **card** | — | — | [link](../concepts/rjm/retries.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Findings flagging unbounded retries, missing backoff/jitter, missing idempotency keys, or inappropriate 4xx retry logic. |
| **consumes** | — | — | Retry loops, remote invocation handlers, and mutating API calls. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### traceability-metrics

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Traceability Metrics` |
| **card** | — | — | [link](../concepts/rjm/traceability-metrics.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Traceability Health report capturing metric counts, blocking errors, and non-blocking warnings. |
| **consumes** | — | — | Specification artifacts (requirements, designs, tasks) and traceability graph script outputs. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### five-forces

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Five Forces` |
| **card** | — | — | [link](../concepts/rjm/five-forces.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Structural industry attractiveness assessment and competitive positioning recommendations. |
| **consumes** | — | — | Industry structure data, competitor profiles, supplier dynamics, buyer leverage, and substitution threats. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### rfc-3986

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `RFC 3986` |
| **card** | — | — | [link](../concepts/rjm/rfc-3986.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Authoritative ABNF syntax specifications for URI schemes and network-path references distinguishing external links from local relative paths. |
| **consumes** | — | — | URI strings and link destinations parsed from tracked markdown documents. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### o2-ubiquitous-language

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `O2 Ubiquitous language` |
| **card** | — | — | [link](../concepts/rjm/o2-ubiquitous-language.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | A canonical terminology map with deprecated synonyms to enforce consistent naming across requirements, designs, and code. |
| **consumes** | — | — | Entities identified in prompt O1 and team vocabulary. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### reach

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reach` |
| **card** | — | — | [link](../concepts/rjm/reach.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:roadmap` |
| **produces** | — | — | Quantitative numerical input measuring the scope of users affected per quarter for RICE calculation. |
| **consumes** | — | — | Product analytics, user traffic estimates, and quarterly active user projections. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during roadmap phase workflows.
- **needs decision:** no
- **decision:** —

### pr-template-compliance

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PR Template Compliance` |
| **card** | — | — | [link](../concepts/rjm/pr-template-compliance.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:ship` |
| **produces** | — | — | Compliance validation report confirming presence and population of required template sections (Summary, Changes, Type of Change). |
| **consumes** | — | — | Pull request description markdown body, repository pull request template schema. |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during ship phase workflows.
- **needs decision:** no
- **decision:** —

### non-negotiables

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `non-negotiables` |
| **card** | — | — | [link](../concepts/rjm/non-negotiables.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Pass/fail verification against core repository invariants. |
| **consumes** | — | — | PR diffs, architectural proposals, and commit series. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### pragmatic-programmer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pragmatic Programmer` |
| **card** | — | — | [link](../concepts/rjm/pragmatic-programmer.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### logs-pillar-1

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Logs (Pillar 1)` |
| **card** | — | — | [link](../concepts/rjm/logs-pillar-1.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Review findings evaluating structured log format, correlation tracing compatibility, log level appropriateness, and credential exclusion. |
| **consumes** | — | — | Logging statements, logger configurations, and emitted log events within new or modified code paths. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### complexity-definitions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Complexity Definitions` |
| **card** | — | — | [link](../concepts/rjm/complexity-definitions.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Standardized complexity enum classification (`XS`, `S`, `M`, `L`, `XL`) for `TASK-NNN` frontmatter. |
| **consumes** | — | — | Task scope, estimated hours, story points, and architectural risk assessments. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### obviously-awesome

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Obviously Awesome` |
| **card** | — | — | [link](../concepts/rjm/obviously-awesome.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Clear product positioning statements, market category definition, and value messaging frameworks. |
| **consumes** | — | — | Competitive alternatives, unique attributes, value drivers, and target customer segmentation. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### timeouts-on-outbound-calls

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Timeouts on Outbound Calls` |
| **card** | — | — | [link](../concepts/rjm/timeouts-on-outbound-calls.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Review findings identifying missing, unbounded, or inconsistent connect and read timeouts. |
| **consumes** | — | — | Pull request diffs, network requests, subprocess executions, and external API call sites. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### frontmatter-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Frontmatter Checklist` |
| **card** | — | — | [link](../concepts/rjm/frontmatter-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Validation confirmation and pre-commit compliance pass for newly authored Claude Code skills. |
| **consumes** | — | — | Authored skill definitions in `SKILL.md`, YAML frontmatter configurations, model-pin rationale documentation, and validation scripts. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### behavioral-frameworks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Behavioral Frameworks` |
| **card** | — | — | [link](../concepts/rjm/behavioral-frameworks.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:support` |
| **produces** | — | — | Tactical behavioral decoding of counter-party communications, tone, and information asymmetry. |
| **consumes** | — | — | Retrieved behavioral memory assets from Serena. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during support phase workflows.
- **needs decision:** no
- **decision:** —

### skillforge-configuration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SkillForge Configuration` |
| **card** | — | — | [link](../concepts/rjm/skillforge-configuration.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | YAML configuration schema governing autonomous depth, questioning rounds, panel sizes, and score limits. |
| **consumes** | — | — | Skill execution policies, model allocations, and quality gate threshold parameters. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### cynefin

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Cynefin` |
| **card** | — | — | [link](../concepts/rjm/cynefin.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Domain classification (Clear, Complicated, Complex, Chaotic) calibrating planning depth, agent routing, and validation gates. |
| **consumes** | — | — | User request text, problem statements, uncertainty signals, environmental constraints. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### detection-checklist-for-analysis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Detection Checklist for Analysis` |
| **card** | — | — | [link](../concepts/rjm/detection-checklist-for-analysis.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Specific acceptance or flagging determinations during architectural code smell analysis. |
| **consumes** | — | — | Candidate code snippets across validation, state change, calculation, and formatting. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### severity-classification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Severity Classification` |
| **card** | — | — | [link](../concepts/rjm/severity-classification.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Classified findings grouped into standardized tiers (Critical, High, Medium, Low) with explicit remediation expectations. |
| **consumes** | — | — | Vulnerability findings, threat assessment results, and code review observations. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### self-assessment-triggers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Self-Assessment Triggers` |
| **card** | — | — | [link](../concepts/rjm/self-assessment-triggers.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:implement` |
| **produces** | — | — | Formal handoff note indicating security review requirement and specific trigger categories. |
| **consumes** | — | — | Touched code files, architectural paths, and modified functional components. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during implement phase workflows.
- **needs decision:** no
- **decision:** —

### github-templates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GitHub Templates` |
| **card** | — | — | [link](../concepts/rjm/github-templates.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Evaluations and improvement recommendations ensuring templates provide clear contributor guidance and capture required triage context without becoming overwhelming. |
| **consumes** | — | — | Pull request templates (`.github/PULL_REQUEST_TEMPLATE.md`) and issue templates under `.github/ISSUE_TEMPLATE/`. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### skillsbench

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SkillsBench` |
| **card** | — | — | [link](../concepts/rjm/skillsbench.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Empirical macro pass-rate deltas, skill shape performance benchmarks, and modularity thresholds. |
| **consumes** | — | — | Agent execution logs, model benchmark configurations, and skill repository evaluation tasks. |
| **impl status** | — | — | defects: doc-drift, other, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### step-1-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `step_1_checklist` |
| **card** | — | — | [link](../concepts/rjm/step-1-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Documented context analysis, explicit in-scope and out-of-scope boundaries, candidate approach options with pros/cons, discovered constraints, and testable acceptance criteria. |
| **consumes** | — | — | Problem statement, plan file path, and codebase context. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### gof-wisdom

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GoF Wisdom` |
| **card** | — | — | [link](../concepts/rjm/gof-wisdom.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Decoupled component architectures favoring interfaces and delegation over rigid inheritance. |
| **consumes** | — | — | Object designs, class relationships, and inheritance hierarchies. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### agent-system-steering-committee-charter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent System Steering Committee Charter` |
| **card** | — | — | [link](../concepts/rjm/agent-system-steering-committee-charter.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Formalized operational framework governing agent lifecycle, proposals, and consolidation. |
| **consumes** | — | — | Multi-agent system evolution needs and repository governance objectives. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### analysis-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Analysis Checklist` |
| **card** | — | — | [link](../concepts/rjm/analysis-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Prioritized security findings with remediation steps, documentation, and threat model updates. |
| **consumes** | — | — | Codebase files, trust boundaries, dependency lists, and data flow mappings. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### high

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `High` |
| **card** | — | — | [link](../concepts/rjm/high.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | An elevated finding prioritization requiring documented mitigation, escalation, or remediation before release. |
| **consumes** | — | — | Identified security vulnerabilities, code defects, misleading documentation, or high-risk dependencies. |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path, other, script-bug, unimplemented-feature |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### diagnostic-priority-order

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Diagnostic Priority Order` |
| **card** | — | — | [link](../concepts/rjm/diagnostic-priority-order.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A prioritized sequence of findings starting with Critical Error Patterns and ending with Traceability Health. |
| **consumes** | — | — | Diagnostic findings and execution events extracted from session logs. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### language-server-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Language Server Protocol` |
| **card** | — | — | [link](../concepts/rjm/language-server-protocol.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### user-feedback

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `User Feedback` |
| **card** | — | — | [link](../concepts/rjm/user-feedback.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Audit recommendations assessing whether end users receive actionable next steps without being exposed to unhelpful technical jargon. |
| **consumes** | — | — | User-facing error messages, alerts, dialogs, and error response payloads. |
| **impl status** | — | — | defects: other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### path-traversal

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Path Traversal` |
| **card** | — | — | [link](../concepts/rjm/path-traversal.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Security scanning classifications and defensive path validation implementations. |
| **consumes** | — | — | External path inputs, archive entries, or dynamic filesystem parameters. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### observation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Observation` |
| **card** | — | — | [link](../concepts/rjm/observation.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Grounded production evidence citation proving the problem exists. |
| **consumes** | — | — | Production metrics, logs, error reports, or tickets. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### gherkin

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Gherkin` |
| **card** | — | — | [link](../concepts/rjm/gherkin.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:Spec` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Spec phase workflows.
- **needs decision:** no
- **decision:** —

### graphql-api

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GraphQL API` |
| **card** | — | — | [link](../concepts/rjm/graphql-api.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Precision-structured JSON responses and state modifications on GitHub resources. |
| **consumes** | — | — | GraphQL queries and mutation documents via `gh api graphql`. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### clarity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Clarity` |
| **card** | — | — | [link](../concepts/rjm/clarity.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Assessment scores evaluating readability and absence of ambiguity. |
| **consumes** | — | — | Artifact prose, specification text, and documentation. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### critical

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Critical` |
| **card** | — | — | [link](../concepts/rjm/critical.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A blocking severity verdict preventing pull request merge, deployment, or documentation approval. |
| **consumes** | — | — | Defect reports, static analysis violations, silent failure findings, or review comments. |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path, other, script-bug |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### vendor-indicators

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Vendor Indicators` |
| **card** | — | — | [link](../concepts/rjm/vendor-indicators.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:analyze` |
| **produces** | — | — | Classification signals identifying third-party or vendored code assets. |
| **consumes** | — | — | Repository directory hierarchy, file path conventions, and source file headers. |
| **impl status** | — | — | defects: doc-drift, missing-path, unfailable-gate |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during analyze phase workflows.
- **needs decision:** no
- **decision:** —

### issue-2967

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `issue #2967` |
| **card** | — | — | [link](../concepts/rjm/issue-2967.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### disorder

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Disorder` |
| **card** | — | — | [link](../concepts/rjm/disorder.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Information gathering initiatives to break the state of disorder. |
| **consumes** | — | — | Unclassified problems lacking clear domain signatures. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### valid-chains

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Valid Chains` |
| **card** | — | — | [link](../concepts/rjm/valid-chains.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Count and percentage of complete specification traces with a target of 100% of designs. |
| **consumes** | — | — | Traceability links across requirement, design specification, and task files. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### time-horizon-mismatch

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Time Horizon Mismatch` |
| **card** | — | — | [link](../concepts/rjm/time-horizon-mismatch.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Compounded risk assessments demonstrating increased cumulative failure likelihood over multi-year horizons. |
| **consumes** | — | — | System operational lifetimes and single-period probability estimates. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### orphaned-designs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Orphaned Designs` |
| **card** | — | — | [link](../concepts/rjm/orphaned-designs.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Non-blocking warning count of orphaned designs requiring milestone and task decomposition. |
| **consumes** | — | — | Design specifications lacking decomposed task implementation files. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### violation-signs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Violation Signs` |
| **card** | — | — | [link](../concepts/rjm/violation-signs.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Diagnostic findings identifying specific SOLID design defects in classes and modules. |
| **consumes** | — | — | Codebase AST, class names, method signatures, dependency graphs. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### modularity-guidelines

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Modularity Guidelines` |
| **card** | — | — | [link](../concepts/rjm/modularity-guidelines.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Modularity targets (<=300 lines ideal, <=10 h2 sections, modularity score >=80) and refactoring targets. |
| **consumes** | — | — | Skill structure, line counts, section headers, and file breakdown. |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### influence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Influence` |
| **card** | — | — | [link](../concepts/rjm/influence.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Strategically structured communication leveraging an honest persuasion trigger aligned with the relationship state. |
| **consumes** | — | — | A specific business ask, designated recipient, relationship context, and verifiable proof assets. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### technical-investment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Technical Investment` |
| **card** | — | — | [link](../concepts/rjm/technical-investment.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Assessments of architectural leverage, reusable component value, and ROI on technical effort. |
| **consumes** | — | — | Architectural changes, technical designs, implementation effort estimates, and PR diffs. |
| **impl status** | — | — | defects: internal-contradiction (.claude/skills/review/references/roadmap.md:205) |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### migration-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Migration Checklist` |
| **card** | — | — | [link](../concepts/rjm/migration-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Systematically converted scripts, workflows, and updated test suites matching new architecture standards. |
| **consumes** | — | — | Target migration specifications, legacy script/workflow implementations, and test suites. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### root-cause-categories

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Root Cause Categories` |
| **card** | — | — | [link](../concepts/rjm/root-cause-categories.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:retrospective` |
| **produces** | — | — | Standardized classification across six domains: Cross-Cutting Concerns, Fail-Safe Design, Test-Implementation Drift, Premature Validation, Context Loss, and Skill Gap. |
| **consumes** | — | — | Five Whys causal chains and identified failure points. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during retrospective phase workflows.
- **needs decision:** no
- **decision:** —

### kiss-vs-yagni

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `KISS vs YAGNI` |
| **card** | — | — | [link](../concepts/rjm/kiss-vs-yagni.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Clear conceptual boundary separating implementation simplicity (how you build it) from scope constraints (what you build). |
| **consumes** | — | — | Architectural requirements and implementation scope specifications. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### untraced-tasks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Untraced Tasks` |
| **card** | — | — | [link](../concepts/rjm/untraced-tasks.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Blocking error classification requiring immediate remediation to link tasks to their governing design specifications. |
| **consumes** | — | — | Task specification artifacts lacking design references in their metadata. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### final-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `final_checklist` |
| **card** | — | — | [link](../concepts/rjm/final-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:execution` |
| **produces** | — | — | Execution readiness verdict confirming that code, review, documentation, and verification obligations are complete. |
| **consumes** | — | — | TodoWrite task status, quality review results, documentation delegation status, and self-consistency check records. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during execution phase workflows.
- **needs decision:** no
- **decision:** —

### model-context-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Model Context Protocol` |
| **card** | — | — | [link](../concepts/rjm/model-context-protocol.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized JSON-RPC protocol messages connecting agent hosts with external tool servers. |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### governance-standard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Governance Standard` |
| **card** | — | — | [link](../concepts/rjm/governance-standard.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A verified compliance assessment confirming adherence to description rules, body conciseness, progressive disclosure, token efficiency, and prohibited file restrictions. |
| **consumes** | — | — | Skill markdown files, frontmatter schemas, and auxiliary repository files. |
| **impl status** | — | — | defects: orphan, internal-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### co-change-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Co-change checklist` |
| **card** | — | — | [link](../concepts/rjm/co-change-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | ` |
| **consumes** | — | — | Shared token modification scope identified via opt-in user response or heuristics in PRD and Step 0 Q4. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### solid-maps-to-code-qualities

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SOLID Maps to Code Qualities` |
| **card** | — | — | [link](../concepts/rjm/solid-maps-to-code-qualities.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured correlation mapping each design principle to cohesion, encapsulation, low coupling, and testability. |
| **consumes** | — | — | SOLID design principles and foundational maintainability quality definitions. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### lean-startup

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Lean Startup` |
| **card** | — | — | [link](../concepts/rjm/lean-startup.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Minimum viable products, validated learning, actionable metrics, and pivot-or-persevere decisions. |
| **consumes** | — | — | Riskiest venture assumptions, value hypotheses, and customer behavior metrics. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### project-boards-v2

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Project boards v2` |
| **card** | — | — | [link](../concepts/rjm/project-boards-v2.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Project boards, items, fields, and workflow views. |
| **consumes** | — | — | GitHub GraphQL API credentials and Projects v2 schema queries. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### complicated

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Complicated` |
| **card** | — | — | [link](../concepts/rjm/complicated.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured analytical assessments, trade-off comparisons, and expert recommendations. |
| **consumes** | — | — | Problems characterized by known unknowns and discoverable cause-and-effect relationships. |
| **impl status** | — | — | defects: doc-drift, missing-path, unimplemented-feature |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### the-bitter-lesson-of-building-with-llms

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `The Bitter Lesson of Building with LLMs` |
| **card** | — | — | [link](../concepts/rjm/the-bitter-lesson-of-building-with-llms.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Strategic guidance directing engineers to reduce prompt scaffolding, simplify retrieval, avoid hardcoded domain rules, and build step-change-ready architectures. |
| **consumes** | — | — | System design proposals, prompt chains, multi-agent architectures, and build-vs-buy evaluations. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### documentation-communication

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Documentation & Communication` |
| **card** | — | — | [link](../concepts/rjm/documentation-communication.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Recommendations on public communication requirements, migration guidance, and release note highlights. |
| **consumes** | — | — | User documentation, release notes, changelogs, migration guides, and API documentation. |
| **impl status** | — | — | defects: internal-contradiction (.claude/skills/review/references/roadmap.md:205) |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### integration-checks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Integration Checks` |
| **card** | — | — | [link](../concepts/rjm/integration-checks.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Validation report confirming holistic coherence and absence of conflicting directives across sections. |
| **consumes** | — | — | Assembled optimized prompt combining all section-by-section modifications. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### base-rate-neglect

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Base Rate Neglect` |
| **card** | — | — | [link](../concepts/rjm/base-rate-neglect.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Baseline statistical checks comparing specific claims against historical industry or organization base rates. |
| **consumes** | — | — | Specific project success claims, anecdotal case studies, and optimism-biased timeline estimates. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### configuration-contract

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Configuration contract` |
| **card** | — | — | [link](../concepts/rjm/configuration-contract.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Authoritative mapping of hook configuration files across repository, user, plugin, and policy levels. |
| **consumes** | — | — | Platform hook definitions, JSON schemas, environment variables, and settings files. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### actionability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Actionability` |
| **card** | — | — | [link](../concepts/rjm/actionability.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Scores evaluating whether outputs can be implemented immediately without asking follow-up questions. |
| **consumes** | — | — | Plans, specifications, task definitions, and agent outputs. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### directory-layout

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Directory Layout` |
| **card** | — | — | [link](../concepts/rjm/directory-layout.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized file paths and module locations across the repository. |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### sarif

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SARIF` |
| **card** | — | — | [link](../concepts/rjm/sarif.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured JSON files conforming to the SARIF specification detailing vulnerability paths and locations. |
| **consumes** | — | — | CodeQL query execution results and compiler diagnostic logs. |
| **impl status** | — | — | defects: always-failing-gate, doc-drift, internal-contradiction, missing-path, orphan, script-bug |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### philosophy-of-software-design

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `philosophy-of-software-design` |
| **card** | — | — | [link](../concepts/rjm/philosophy-of-software-design.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Evaluation scores and activation verification data for John Ousterhout's *A Philosophy of Software Design* reference. |
| **consumes** | — | — | Software engineering scenarios assessing complexity, modularity, and interface design principles. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### agent-goal-hijack

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Goal Hijack` |
| **card** | — | — | [link](../concepts/rjm/agent-goal-hijack.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Sanitization defenses and threat detection flags preventing prompt-injection attacks from overriding agent instructions. |
| **consumes** | — | — | Untrusted external content, fetched CVE/advisory descriptions, user inputs, and agent prompt templates. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### session-start-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `session-start checklist` |
| **card** | — | — | [link](../concepts/rjm/session-start-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Verified session setup and readiness confirmation allowing or blocking further agent execution. |
| **consumes** | — | — | Repository working tree state, git branches, environment configuration, prior session memory logs. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### serena-memory-system

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Serena memory system` |
| **card** | — | — | [link](../concepts/rjm/serena-memory-system.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Persistent memory files, domain indices, and keyword-indexed skill retrieval. |
| **consumes** | — | — | Learned skills, patterns, session context, and markdown memory files. |
| **impl status** | — | — | out-of-scope |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### runtime-contract-exemplar

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Runtime-contract exemplar` |
| **card** | — | — | [link](../concepts/rjm/runtime-contract-exemplar.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Canonical test pattern combining real bash subprocess execution, foreign working directories, and negative controls. |
| **consumes** | — | — | Hook generator scripts, plugin root variable definitions, and subprocess execution harnesses. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### rfc-2119

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `RFC 2119` |
| **card** | — | — | [link](../concepts/rjm/rfc-2119.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Normative requirement statements categorized by obligation level (MUST, SHOULD, MAY). |
| **consumes** | — | — | Architectural decisions, governance policies, and requirement specifications. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### calibration-questions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Calibration Questions` |
| **card** | — | — | [link](../concepts/rjm/calibration-questions.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Assessment of decision location relative to competence boundary (inside, edge, outside). |
| **consumes** | — | — | Recommended design decision answers and their underlying evidence sources. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### domain-to-index-mapping

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Domain-to-Index Mapping` |
| **card** | — | — | [link](../concepts/rjm/domain-to-index-mapping.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Target index file paths in `.serena/memories/` for indexing new skills. |
| **consumes** | — | — | Candidate skill domain classifications (Architecture, Planning, Implementation, PR review, etc.). |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### canonical-spec-schema-enums

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `canonical spec schema enums` |
| **card** | — | — | [link](../concepts/rjm/canonical-spec-schema-enums.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Validation results confirming that status, priority, category, and complexity fields strictly adhere to authorized values. |
| **consumes** | — | — | Specification YAML frontmatter mappings extracted from `REQ-NNN`, `DESIGN-NNN`, and `TASK-NNN` documents. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### abstract-dimension-catalog

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ABSTRACT DIMENSION CATALOG` |
| **card** | — | — | [link](../concepts/rjm/abstract-dimension-catalog.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:Code Quality` |
| **produces** | — | — | Selected dimensions for targeted exploration agents. |
| **consumes** | — | — | Codebase survey findings and repository information sources. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction, orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during Code Quality phase workflows.
- **needs decision:** no
- **decision:** —

### claude-code-delta

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Claude Code Delta` |
| **card** | — | — | [link](../concepts/rjm/claude-code-delta.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architectural understanding of cross-harness differences in environment variables, cwd resolution, and event models. |
| **consumes** | — | — | Claude Code and Copilot CLI hook specifications and empirical comparison matrices. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### chaotic

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Chaotic` |
| **card** | — | — | [link](../concepts/rjm/chaotic.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Immediate stabilization actions, triage interventions, and novel practices to restore basic control. |
| **consumes** | — | — | High-turbulence crises, black swan events, or critical outages with no perceivable cause-and-effect. |
| **impl status** | — | — | defects: doc-drift, missing-path, unimplemented-feature |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### command-construction

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Command Construction` |
| **card** | — | — | [link](../concepts/rjm/command-construction.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Findings and recommendations on shell command parameterization and argument separation. |
| **consumes** | — | — | Shell invocation scripts, lifecycle hooks, and string interpolation patterns. |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### opentelemetry

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `OpenTelemetry` |
| **card** | — | — | [link](../concepts/rjm/opentelemetry.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Unified vendor-neutral telemetry pipelines and standardized semantic attributes. |
| **consumes** | — | — | Application telemetry signals, legacy metrics/traces/logs configurations. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### feasibility

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Feasibility` |
| **card** | — | — | [link](../concepts/rjm/feasibility.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Numerical scores (1-5 or 1-10) and identified red flags regarding optimistic estimates, handwaved complexity, and ignored prerequisites. |
| **consumes** | — | — | Plans, task schedules, resource allocations, and dependency graphs. |
| **impl status** | — | — | defects: cross-file-contradiction (.agents/archive/planning/PR-60/003-pr-60-plan-critique.md:95); missing-path (.claude/agents/critic.md:115); clean in templates/agents/critic.shared.md |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### gstack-autoplan

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `gstack /autoplan` |
| **card** | — | — | [link](../concepts/rjm/gstack-autoplan.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:autoplan` |
| **produces** | — | — | Conceptual design foundation for lazy catalog routing and zero-configuration dispatch. |
| **consumes** | — | — | Upstream pattern design for skill routing. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during autoplan phase workflows.
- **needs decision:** no
- **decision:** —

### traces-pillar-3

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Traces (Pillar 3)` |
| **card** | — | — | [link](../concepts/rjm/traces-pillar-3.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Evaluations on trace context propagation across process boundaries, span attribute completeness, and log-to-trace linkage. |
| **consumes** | — | — | Distributed tracing contexts, span definitions, metadata attributes, and cross-service propagation headers. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### traction

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Traction` |
| **card** | — | — | [link](../concepts/rjm/traction.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Prioritized growth channel tests, channel experiments, and primary acquisition channel selection. |
| **consumes** | — | — | Established product-market fit, customer conversion metrics, and 19 acquisition channel options. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### commonmark

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CommonMark` |
| **card** | — | — | [link](../concepts/rjm/commonmark.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized token streams, parsed abstract syntax trees, and unambiguous block and inline segmentations. |
| **consumes** | — | — | Markdown source files, pull request bodies, documentation, and skill routing tables. |
| **impl status** | — | — | defects: script-bug, doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### graceful-degradation-and-health

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Graceful Degradation and Health` |
| **card** | — | — | [link](../concepts/rjm/graceful-degradation-and-health.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Findings on silent default masking, misleading health check signals, or brittle all-or-nothing responses. |
| **consumes** | — | — | Fallback routines, optional data enrichment dependencies, and health check endpoints. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### bmad-method

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `BMAD Method` |
| **card** | — | — | [link](../concepts/rjm/bmad-method.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### ci-cd-configuration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CI/CD Configuration` |
| **card** | — | — | [link](../concepts/rjm/ci-cd-configuration.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | DevOps review findings assessing pipeline behavior risks, weakened deterministic gates, or improper trigger configurations. |
| **consumes** | — | — | Pull request diff modifying GitHub Actions workflows, job steps, or CI configurations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### zettelkasten-method

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Zettelkasten Method` |
| **card** | — | — | [link](../concepts/rjm/zettelkasten-method.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### monitoring-plan

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Monitoring Plan` |
| **card** | — | — | [link](../concepts/rjm/monitoring-plan.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Weekly quality review determinations and go/no-go rollback decisions. |
| **consumes** | — | — | Baseline error rates, historical quality references, and initial invocation metrics. |
| **impl status** | — | — | defects: unfailable-gate |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during none phase workflows.
- **needs decision:** no
- **decision:** —

### pull-request-guidelines

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pull Request Guidelines` |
| **card** | — | — | [link](../concepts/rjm/pull-request-guidelines.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:ship` |
| **produces** | — | — | Standardized pull requests satisfying spec reference traceability, template regeneration, and conventional commit message formats. |
| **consumes** | — | — | Completed code changes, validated templates, passing test suites, and associated planning specifications. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during ship phase workflows.
- **needs decision:** no
- **decision:** —

### issue-severity-definitions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Issue Severity Definitions` |
| **card** | — | — | [link](../concepts/rjm/issue-severity-definitions.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Severity categorizations determining whether changes are required (Critical: automatic rejection, Major: >=2 causes rejection, Minor: non-blocking). |
| **consumes** | — | — | Identified defects, quality gaps, or guideline violations from panel evaluations. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### tool-output-from-this-session

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Tool output from this session` |
| **card** | — | — | [link](../concepts/rjm/tool-output-from-this-session.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Level 1 empirical evidence citations reproducible from identical session inputs. |
| **consumes** | — | — | Direct outputs from tool executions, test runners, linters, scripts, and API invocations. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### strategic-drift-detection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Strategic Drift Detection` |
| **card** | — | — | [link](../concepts/rjm/strategic-drift-detection.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | A quarterly governance audit identifying divergence, shadow backlog, and unreviewed failing projects. |
| **consumes** | — | — | Committed roadmap deliverables, actual delivered features, outcome reviews, capacity allocations, and kill criteria dates. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### agentic-capability-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agentic Capability Checklist` |
| **card** | — | — | [link](../concepts/rjm/agentic-capability-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Verification sign-off confirming autonomous execution, self-verification, error recovery, state persistence, structured output, docs, exit codes, and graceful degradation. |
| **consumes** | — | — | Script designs, implementations, and invocation patterns. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### specificity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Specificity` |
| **card** | — | — | [link](../concepts/rjm/specificity.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Integer score from 1 to 5 measuring precision of language and examples. |
| **consumes** | — | — | Model responses and problem prompts. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### settled-battles-list

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Settled Battles List` |
| **card** | — | — | [link](../concepts/rjm/settled-battles-list.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Decisive verdicts (REJECTED, BANNED, SETTLED EMPIRICALLY) backed by historical citations. |
| **consumes** | — | — | Proposed changes to testing methodology, runtime contracts, merge rules, or escape hatches. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### req-003

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `REQ-003` |
| **card** | — | — | [link](../concepts/rjm/req-003.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Platform configuration schemas and standardized artifact generator specifications. |
| **consumes** | — | — | Multi-provider artifact requirements and platform configuration specifications. |
| **impl status** | — | — | defects: orphan, other, doc-drift, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### capacity-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `capacity-assessment` |
| **card** | — | — | [link](../concepts/rjm/capacity-assessment.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Documented capacity assessment covering team capability, availability, long-term maintenance readiness, and strategic skill growth. |
| **consumes** | — | — | Engineering team roster, current skill proficiencies, sprint allocations, and existing maintenance load. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### 8-standardized-questions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `8 Standardized Questions` |
| **card** | — | — | [link](../concepts/rjm/8-standardized-questions.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized answers across Core Specialty, Specific Tasks, Limitations, Agent Pairings, Input Expectations, Output Format, When to Use, and When NOT to Use. |
| **consumes** | — | — | Agent persona prompt and isolated agent execution context. |
| **impl status** | — | — | defects: missing-path, doc-drift (from .agents/governance/agent-interview-protocol.md:182 missing archive path and line 188 unmaintained Capabilities Matrix) |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### mitigation-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Mitigation Checklist` |
| **card** | — | — | [link](../concepts/rjm/mitigation-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Verified mitigation designs satisfying layer count, mechanism diversity, failure independence, and cost placement. |
| **consumes** | — | — | Threat model mitigations proposed for Critical and High severity threats. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### correctness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Correctness` |
| **card** | — | — | [link](../concepts/rjm/correctness.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Verification assessments and numerical scores measuring accuracy and absence of errors. |
| **consumes** | — | — | Generated artifacts, data pipeline outputs, and factual assertions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### major-incidents-table

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Major Incidents Table` |
| **card** | — | — | [link](../concepts/rjm/major-incidents-table.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Direct navigation pointers to relevant retrospective analyses, failure modes, and binding gates. |
| **consumes** | — | — | Inquiries concerning hooks, generators, drift, review iteration, escape hatches, or silent defaults. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### refactoring-targets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Refactoring Targets` |
| **card** | — | — | [link](../concepts/rjm/refactoring-targets.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Modularized skill components partitioned across references/, scripts/, templates/, and focused sub-skills. |
| **consumes** | — | — | Skills exceeding line count (>300 ideal, >500 max) or section (>10 h2) thresholds. |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### assumptions-and-claims

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Assumptions and Claims` |
| **card** | — | — | [link](../concepts/rjm/assumptions-and-claims.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:review` |
| **produces** | — | — | Review findings identifying unstated load-bearing assumptions or unevidenced benefit claims. |
| **consumes** | — | — | Pull request descriptions, design documents, or Architecture Decision Records asserting benefits or making factual claims. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during review phase workflows.
- **needs decision:** no
- **decision:** —

### medium

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Medium` |
| **card** | — | — | [link](../concepts/rjm/medium.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Prioritized remediation recommendations that should be addressed in the current development cycle. |
| **consumes** | — | — | Findings with moderate impact such as weak diagnostics, limited data exposure, or minor doc inconsistencies. |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path, other, script-bug, unimplemented-feature |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### cyber-kill-chain

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Cyber Kill Chain` |
| **card** | — | — | [link](../concepts/rjm/cyber-kill-chain.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Multi-stage attack progression models informing defense-in-depth mitigation roadmaps. |
| **consumes** | — | — | Attacker reconnaissance, weaponization, delivery, exploitation, installation, command-and-control, and actions-on-objectives phases. |
| **impl status** | — | — | defects: exit-code-mismatch, missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### building-a-storybrand

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Building a StoryBrand` |
| **card** | — | — | [link](../concepts/rjm/building-a-storybrand.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | StoryBrand BrandScript (hero, problem, guide, plan, call to action, success, failure) and website copy. |
| **consumes** | — | — | Target customer profile, core customer problem, and solution features. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### operational-dimension

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `operational-dimension` |
| **card** | — | — | [link](../concepts/rjm/operational-dimension.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Operational feasibility scores (1-10 scale) contributing 30% of the overall weighted decision matrix score. |
| **consumes** | — | — | Implementation timelines, team skill proficiencies, system architecture integration points, and maintenance estimates. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### verification-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Verification Checklist` |
| **card** | — | — | [link](../concepts/rjm/verification-checklist.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Systematic binary gate confirmation that all necessary prerequisites, quality bounds, and safety controls are met. |
| **consumes** | — | — | Draft artifacts, completed analysis documents, or pre-execution operational states. |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch, missing-path, script-bug, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### agent-harness-reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Harness Reference` |
| **card** | — | — | [link](../concepts/rjm/agent-harness-reference.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized runtime hook contracts, verified lifecycle event policies, and platform-specific generated configurations. |
| **consumes** | — | — | Pinned official vendor contracts, commit-pinned source sidecars, and versioned runtime probe evidence. |
| **impl status** | — | — | defects: doc-drift, missing-path, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### future-fit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Future-fit` |
| **card** | — | — | [link](../concepts/rjm/future-fit.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Evaluation of architectural longevity and liability risk under scale. |
| **consumes** | — | — | Proposed feature architecture, 10x scale projection. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### interview-cadence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Interview Cadence` |
| **card** | — | — | [link](../concepts/rjm/interview-cadence.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Scheduled review triggers and re-interview tasks. |
| **consumes** | — | — | Agent lifecycle status events (creation, major version bump, capability addition, routing failure). |
| **impl status** | — | — | defects: missing-path, doc-drift (from .agents/governance/agent-interview-protocol.md:182 missing archive path and line 188 unmaintained Capabilities Matrix) |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### narrowest-wedge

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Narrowest Wedge` |
| **card** | — | — | [link](../concepts/rjm/narrowest-wedge.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Scope definition for minimal unblocking deliverable and hours estimate. |
| **consumes** | — | — | Blocked state from Q3, scope estimate. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### founder-playbook

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `founder-playbook` |
| **card** | — | — | [link](../concepts/rjm/founder-playbook.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Architectural template for distilling theoretical business literature into actionable agent skills. |
| **consumes** | — | — | Upstream design patterns from the getagentseal/founder-playbook repository. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### obvious

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Obvious` |
| **card** | — | — | [link](../concepts/rjm/obvious.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Direct application of standardized best practices. |
| **consumes** | — | — | Known problems with predictable, repeatable outcomes. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### blue-ocean-strategy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Blue Ocean Strategy` |
| **card** | — | — | [link](../concepts/rjm/blue-ocean-strategy.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Strategy canvas, Four Actions matrix (eliminate, reduce, raise, create), and a divergent value curve breaking standard price-quality tradeoffs. |
| **consumes** | — | — | Industry competitive criteria, competitor value curves, and discovery interviews with non-customers. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### timelessness-scoring-rubric

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Timelessness Scoring Rubric` |
| **card** | — | — | [link](../concepts/rjm/timelessness-scoring-rubric.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A numerical tier classification (1-2 Ephemeral, 3-4 Short-Lived, 5-6 Moderate, 7-8 Solid, 9-10 Timeless) and approval recommendation. |
| **consumes** | — | — | Candidate skill implementation details and dependency profiles. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### okrs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `OKRs` |
| **card** | — | — | [link](../concepts/rjm/okrs.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Hard accountability boundaries separating committed (100% or fail) from aspirational (70% success) key results. |
| **consumes** | — | — | Organizational objectives and quantifiable outcome targets. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### rest-api

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `REST API` |
| **card** | — | — | [link](../concepts/rjm/rest-api.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | JSON resource payloads for repositories, issues, PRs, and webhooks. |
| **consumes** | — | — | HTTP client requests or GitHub CLI API calls (`gh api`). |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### reconciliation-actions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reconciliation Actions` |
| **card** | — | — | [link](../concepts/rjm/reconciliation-actions.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:plan` |
| **produces** | — | — | Selected reconciliation decision with required documentation in the task breakdown deliverable. |
| **consumes** | — | — | An estimate divergence greater than 10% identified during the reconciliation process. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during plan phase workflows.
- **needs decision:** no
- **decision:** —

### local-indicators

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Local Indicators` |
| **card** | — | — | [link](../concepts/rjm/local-indicators.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:rjm:cross-phase` |
| **produces** | — | — | Empirical detection rules confirming first-party project ownership of source files. |
| **consumes** | — | — | Project source directories, git log history, unit test directories, and internal import statements. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### evolution

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evolution` |
| **card** | — | — | [link](../concepts/rjm/evolution.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:spec` |
| **produces** | — | — | Validation confirmation that timelessness scores meet thresholds and multi-horizon temporal projections are complete. |
| **consumes** | — | — | Evolution analysis sections of draft skill specifications. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during spec phase workflows.
- **needs decision:** no
- **decision:** —

### confirmation-bias

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Confirmation Bias` |
| **card** | — | — | [link](../concepts/rjm/confirmation-bias.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Critical awareness and verification questions designed to seek disconfirming data. |
| **consumes** | — | — | Proposer's rationale, selective evidence portfolios, and favorable case studies. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### fat-tails

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Fat Tails` |
| **card** | — | — | [link](../concepts/rjm/fat-tails.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Tail-risk audits, buffer sizing recommendations, and warnings against Gaussian risk metrics. |
| **consumes** | — | — | Risk assessments, capacity plans, reliability models, and security threat evaluations. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### memory-or-files-read-this-session

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Memory or files read this session` |
| **card** | — | — | [link](../concepts/rjm/memory-or-files-read-this-session.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Level 2 circumstantial evidence grounding claims in observed repository state. |
| **consumes** | — | — | File contents, search outputs, directory listings, and project memory retrieved via read tools during the session. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique reference in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during cross-phase phase workflows.
- **needs decision:** no
- **decision:** —

### verification-on-resume

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Verification on Resume` |
| **card** | — | — | [link](../concepts/rjm/verification-on-resume.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:rjm:session-start` |
| **produces** | — | — | Executed command evidence validating working tree cleanliness and test passage. |
| **consumes** | — | — | Recorded verification commands in the incoming handoff document. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique checklist in rjm (RJ Murillo ai-agents). Defines specialized reference standards or checklists without a direct counterpart in the other packages.
- **sequencing note:** Referenced during session-start phase workflows.
- **needs decision:** no
- **decision:** —

