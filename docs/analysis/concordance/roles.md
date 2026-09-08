# Concordance — Roles

This document establishes the structural and detailed concordance for all **role** concepts across the three source packages: `addy` (Addy Osmani), `matt` (Matt Pocock), and `rjm` (RJ Murillo).

Per METHOD.md §5 and §9, this concordance maps every agent persona, subagent worker, execution coordinator, review panel role, and operational actor into an aligned, rigorous taxonomy.

---

## Structural Overview — Comparative Roles Landscape across the Three Packages

Roles represent the operational, specialized, and adversarial agents, subagents, and personas that execute tasks, enforce invariant boundaries, audit deliverables, and govern progression across the development lifecycle. Across the three source packages, role architectures embody three distinct philosophies:

1. **Addy (`agent-skills`) — Specialized Domain Personas and Operational Ownership:** Addy structures roles as specialized personas tailoring agent tone, domain depth, and verification focus (`code-reviewer`, `senior-code-reviewer`, `security-auditor`, `test-engineer`, `web-performance-auditor`, `fresh-context-reviewer`). Furthermore, Addy introduces operational ownership roles specifically around shipping safety (`rollback-owner`, `launch-sponsor`, `build-cop`), ensuring production deployments have clear human and agent accountability.

2. **Matt (`skills`) — Context-Isolated Subagents and Issue Tracker Lifecycle States:** Matt focuses on dynamic subagent orchestration (`subagent`, `fresh-agent`, `background-agent`, `afk-agent`, `afk-runner`, `exploration-subagent`, `merger-subagent`), designed to protect the primary conversation from context rot. In parallel, Matt formalizes rich issue-tracker lifecycle roles (`assignee`, `ready-for-agent`, `ready-for-human`, `ready-for-afk`, `needs-slicing`, `needs-info`, `ask-matt`) that govern ticket readiness before autonomous pickup.

3. **RJM (`ai-agents`) — Governed Multi-Agent Rosters and Adversarial Panels:** RJM enforces an extensive, formal agent hierarchy with dedicated agent definitions in `.claude/agents/*.md` (`implementer-agent`, `analyst-agent`, `code-reviewer`, `security-agent`, `devops-agent`, `qa-agent`, `milestone-planner-agent`, `task-decomposer-agent`, `code-simplifier-agent`, `type-design-analyzer-agent`, `janitor-agent`, `comment-analyzer-agent`, `retrospective-agent`). Crucially, RJM deploys multi-perspective adversarial review panels (`six-role-panel`, `cynic`, `hostile-expert`, `naive-reader`, `peer-coach`, `contrarian-analyst`, `independent-thinker`, `decision-critic`, `design-authority`, `chair`) that deliberately stress-test assumptions before code is merged or shipped.

### Summary of Roles Concordance by Class

Total concordance rows: **192** mapping **215** concept cards across 10 logical sections.

| Class | Meaning | Count |
|---|---|---|
| `ALIGNED` | Same concept, same name (or trivially equivalent), compatible definition | 0 |
| `SYNONYM` | Same concept, different names across packages | 18 |
| `HOMONYM` | Same name, different concepts | 0 |
| `PARTIAL` | Overlapping but not identical concepts | 0 |
| `UNIQUE` | Present in one package only | 174 |
| `CONFLICT` | Incompatible definitions or sequencing | 0 |

---

## Concordance Rows

## 1. Specification, Analysis & Requirements Roles

### spec-sub-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Spec sub-agent` | `Analyst Agent` |
| **card** | — | [link](../concepts/matt/spec-sub-agent.md) | [link](../concepts/rjm/analyst-agent.md) |
| **kind** | — | undefined | undefined |
| **phase** | — | `matt:review` | `rjm:Spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | clean |

- **class:** SYNONYM
- **difference:** Matt names a specialized `Spec sub-agent` focused on specification review and requirements verification; RJM defines the `Analyst Agent` responsible for research documentation and PRD analysis.
- **sequencing note:** Invoked during specification drafting and review prior to task planning.
- **needs decision:** no
- **decision:** D-519

### analyst

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `analyst` |
| **card** | — | — | [link](../concepts/rjm/analyst.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `analyst` as an explicit requirements and domain exploration role in its multi-agent system. Addy and Matt compose analysis within exploratory dialogue rather than as a standalone agent.
- **sequencing note:** Executes in initial analysis before formal planning.
- **needs decision:** no
- **decision:** —

### spec-generator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `spec-generator` |
| **card** | — | — | [link](../concepts/rjm/spec-generator.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM identifies `spec-generator` as an automated pipeline component producing specifications from requirements. Addy and Matt rely on interactive user-guided skills.
- **sequencing note:** Operates in early spec phase.
- **needs decision:** no
- **decision:** —

### explainer-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `explainer agent` |
| **card** | — | — | [link](../concepts/rjm/explainer-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:coordinator` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `explainer agent` to generate PRDs for escalated issues. Unique to RJM's issue-escalation pipeline.
- **sequencing note:** Triggered on escalation from bug reports to full PRD generation.
- **needs decision:** no
- **decision:** —

### explainer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `explainer` |
| **card** | — | — | [link](../concepts/rjm/explainer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides an `explainer` role that communicates architecture and intent across system boundaries. Addy and Matt leave explanation to interactive conversation.
- **sequencing note:** Cross-phase communication role.
- **needs decision:** no
- **decision:** —

### roadmap-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `roadmap agent` |
| **card** | — | — | [link](../concepts/rjm/roadmap-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:coordinator` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `roadmap agent` in its coordinator workflow to align tasks to milestones and priorities. Addy and Matt manage roadmaps informally.
- **sequencing note:** Runs during strategic planning before milestone execution.
- **needs decision:** no
- **decision:** —

### roadmap

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `roadmap` |
| **card** | — | — | [link](../concepts/rjm/roadmap.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines the `roadmap` role as a strategic product owner defining WHAT and WHY. Unique to RJM.
- **sequencing note:** Cross-phase strategic governance role.
- **needs decision:** no
- **decision:** —

### ceo-of-the-product

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CEO of the product` |
| **card** | — | — | [link](../concepts/rjm/ceo-of-the-product.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:roadmap` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines the `CEO of the product` role to provide executive vision, scope arbitration, and value steering. Unique to RJM.
- **sequencing note:** Product roadmap definition.
- **needs decision:** no
- **decision:** —

### brutally-honest-strategic-advisor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Brutally Honest Strategic Advisor` |
| **card** | — | — | [link](../concepts/rjm/brutally-honest-strategic-advisor.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM features the `Brutally Honest Strategic Advisor` to cut through blind spots and challenge strategic assumptions. Unique to RJM.
- **sequencing note:** Applied during roadmap and planning review.
- **needs decision:** no
- **decision:** D-520

### high-level-advisor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `high-level-advisor` |
| **card** | — | — | [link](../concepts/rjm/high-level-advisor.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides the `high-level-advisor` role representing executive-level feedback. Unique to RJM.
- **sequencing note:** Consultative role across planning phases.
- **needs decision:** no
- **decision:** —

### strategic-sourcing-advisor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `strategic sourcing advisor` |
| **card** | — | — | [link](../concepts/rjm/strategic-sourcing-advisor.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:Evaluate` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides a `strategic sourcing advisor` for evaluating buy-vs-build decisions. Unique to RJM.
- **sequencing note:** Evaluated during architectural planning.
- **needs decision:** no
- **decision:** —

### deal-intelligence-specialist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Deal Intelligence Specialist` |
| **card** | — | — | [link](../concepts/rjm/deal-intelligence-specialist.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:support` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides a `Deal Intelligence Specialist` for offer analysis and proposal negotiation. Specialized vendor role in RJM.
- **sequencing note:** Vendor evaluation during architectural acquisition.
- **needs decision:** no
- **decision:** —

### strategic

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `strategic` |
| **card** | — | — | [link](../concepts/rjm/strategic.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `strategic` as an overarching architectural and governance perspective. Unique to RJM.
- **sequencing note:** Cross-phase evaluation.
- **needs decision:** no
- **decision:** —

## 2. Planning, Decomposition & Task Management Roles

### planner

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `planner` |
| **card** | — | — | [link](../concepts/rjm/planner.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines an interactive `planner` role and skill for breaking complex epics into structured plans. Addy implements planning as a skill (`planning-and-task-breakdown`) without a distinct named agent persona; Matt uses `to-tickets`.
- **sequencing note:** Executes in Phase 2 (Plan).
- **needs decision:** no
- **decision:** D-521

### planner-skill

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Planner skill` |
| **card** | — | — | [link](../concepts/rjm/planner-skill.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM names the `Planner skill` role as the executor creating execution plans in disk directories. Unique to RJM.
- **sequencing note:** Planning execution.
- **needs decision:** no
- **decision:** —

### milestone-planner

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `milestone-planner` |
| **card** | — | — | [link](../concepts/rjm/milestone-planner.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM establishes the `milestone-planner` to carve epics into phased work packages. Unique to RJM.
- **sequencing note:** Precedes task decomposition in RJM's planning hierarchy.
- **needs decision:** no
- **decision:** —

### milestone-planner-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Milestone Planner Agent` |
| **card** | — | — | [link](../concepts/rjm/milestone-planner-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Milestone Planner Agent` (.claude/agents/milestone-planner.md) as the dedicated subagent implementing milestone breakdown. Unique to RJM.
- **sequencing note:** Subagent invoked by orchestrator during planning.
- **needs decision:** no
- **decision:** —

### task-decomposer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `task-decomposer` |
| **card** | — | — | [link](../concepts/rjm/task-decomposer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `task-decomposer` for breaking work packages into atomic actionable tickets. Addy and Matt handle decomposition inline.
- **sequencing note:** Phase 2 (Plan) work breakdown.
- **needs decision:** no
- **decision:** D-522

### task-decomposer-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Task Decomposer Agent` |
| **card** | — | — | [link](../concepts/rjm/task-decomposer-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Task Decomposer Agent` as the agentic worker producing task definitions. Unique to RJM.
- **sequencing note:** Executes within task decomposition step.
- **needs decision:** no
- **decision:** —

### task-generator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `task-generator` |
| **card** | — | — | [link](../concepts/rjm/task-generator.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `task-generator` as an automated tool transforming plans into issue tracker tasks. Unique to RJM.
- **sequencing note:** Plan-to-execution translation.
- **needs decision:** no
- **decision:** —

### backlog-generator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `backlog-generator` |
| **card** | — | — | [link](../concepts/rjm/backlog-generator.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:Plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `backlog-generator` to initialize issue backlogs from PRD specifications. Unique to RJM.
- **sequencing note:** Plan phase transition.
- **needs decision:** no
- **decision:** —

### issue-feature-review-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Issue Feature Review Agent` |
| **card** | — | — | [link](../concepts/rjm/issue-feature-review-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Issue Feature Review Agent` to audit issue requirements and feasibility before plan commitment. Unique to RJM.
- **sequencing note:** Pre-planning gate.
- **needs decision:** no
- **decision:** —

### assignee

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `assignee` | — |
| **card** | — | [link](../concepts/matt/assignee.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt specifies `assignee` as the entity responsible for task delivery in the local issue tracker (`docs/agents/issue-tracker.md`). Neither Addy nor RJM models issue assignees as explicit concepts.
- **sequencing note:** Assigned at task initialization.
- **needs decision:** no
- **decision:** D-523

### ask-matt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `ask-matt` | — |
| **card** | — | [link](../concepts/matt/ask-matt.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Engineering` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `ask-matt` as an engineering escalation role when an agent encounters ambiguity or requires human authorization. Unique to Matt.
- **sequencing note:** Escalation interrupt during task execution.
- **needs decision:** no
- **decision:** D-524

### ready-for-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `ready-for-agent` | — |
| **card** | — | [link](../concepts/matt/ready-for-agent.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Triage` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `ready-for-agent` as a triage role designating a task completely specified and validated for autonomous agent pickup. Unique to Matt.
- **sequencing note:** State gate between triage and execution.
- **needs decision:** no
- **decision:** D-525

### agent-ready

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `agent-ready` | — |
| **card** | — | [link](../concepts/matt/agent-ready.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Plan` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `agent-ready` as the validation status indicating a spec or plan contains all required context for execution. Unique to Matt.
- **sequencing note:** Planning exit condition.
- **needs decision:** no
- **decision:** D-570

### ready-for-human

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `ready-for-human` | — |
| **card** | — | [link](../concepts/matt/ready-for-human.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Triage` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `ready-for-human` as a triage role marking tickets that require human decision, design choices, or manual credential inputs. Unique to Matt.
- **sequencing note:** Triage routing state.
- **needs decision:** no
- **decision:** D-526

### ready-for-afk

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `ready-for-afk` | — |
| **card** | — | [link](../concepts/matt/ready-for-afk.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Triage` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt specifies `ready-for-afk` for tickets qualified for unattended, background execution by an AFK runner. Unique to Matt.
- **sequencing note:** Execution queue classification.
- **needs decision:** no
- **decision:** D-527

### needs-slicing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `needs-slicing` | — |
| **card** | — | [link](../concepts/matt/needs-slicing.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt designates `needs-slicing` as a state role for tickets that exceed single-session context or task bounds and must be broken down. Unique to Matt.
- **sequencing note:** Decomposition gate in triage.
- **needs decision:** no
- **decision:** D-528

### needs-info

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `needs-info` | — |
| **card** | — | [link](../concepts/matt/needs-info.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Triage` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `needs-info` as a triage role indicating missing requirements or unresolved dependencies. Unique to Matt.
- **sequencing note:** Pre-execution blocking state.
- **needs decision:** no
- **decision:** —

### paused

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `paused` | — |
| **card** | — | [link](../concepts/matt/paused.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `paused` as a state role temporarily suspending execution on an active ticket. Unique to Matt.
- **sequencing note:** Execution lifecycle state.
- **needs decision:** no
- **decision:** —

### deferred

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `deferred` | — |
| **card** | — | [link](../concepts/matt/deferred.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `deferred` as a state role shelving a ticket for future prioritization. Unique to Matt.
- **sequencing note:** Triage backlog management.
- **needs decision:** no
- **decision:** —

### wontfix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `wontfix` | — |
| **card** | — | [link](../concepts/matt/wontfix.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Triage` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `wontfix` as a terminal triage role rejecting a request as out of scope or undesirable. Unique to Matt.
- **sequencing note:** Terminal triage disposition.
- **needs decision:** no
- **decision:** —

### implemented

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `implemented` | — |
| **card** | — | [link](../concepts/matt/implemented.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `implemented` as a state role confirming completion of implementation before closeout. Unique to Matt.
- **sequencing note:** Post-implementation review state.
- **needs decision:** no
- **decision:** —

### bug

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `bug` | — |
| **card** | — | [link](../concepts/matt/bug.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Triage` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt specifies `bug` as a category role classifying defects in the issue tracker. Unique to Matt.
- **sequencing note:** Issue categorization.
- **needs decision:** no
- **decision:** —

### enhancement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `enhancement` | — |
| **card** | — | [link](../concepts/matt/enhancement.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Triage` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt specifies `enhancement` as a category role classifying new features or improvements. Unique to Matt.
- **sequencing note:** Issue categorization.
- **needs decision:** no
- **decision:** —

### tracking

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `tracking` | — |
| **card** | — | [link](../concepts/matt/tracking.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt specifies `tracking` as a category role for umbrella issues monitoring multi-ticket initiatives. Unique to Matt.
- **sequencing note:** Issue categorization.
- **needs decision:** no
- **decision:** —

### category

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `category` | — |
| **card** | — | [link](../concepts/matt/category.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `category` as the taxonomic classification attribute for issues. Unique to Matt.
- **sequencing note:** Triage metadata.
- **needs decision:** no
- **decision:** —

### category-role

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `category role` | — |
| **card** | — | [link](../concepts/matt/category-role.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `category role` as the classification axis grouping related work items in issue tracking. Unique to Matt.
- **sequencing note:** Triage schema.
- **needs decision:** no
- **decision:** —

### state

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `state` | — |
| **card** | — | [link](../concepts/matt/state.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `state` as the execution lifecycle phase of a ticket. Unique to Matt.
- **sequencing note:** Issue status tracking.
- **needs decision:** no
- **decision:** —

### state-role

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `state role` | — |
| **card** | — | [link](../concepts/matt/state-role.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `state role` as the lifecycle progression status assigned to an issue. Unique to Matt.
- **sequencing note:** Triage schema.
- **needs decision:** no
- **decision:** —

## 3. Architecture, System Design & Pattern Discovery Roles

### senior-engineer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `senior-engineer` | — | `Principal+` |
| **card** | [link](../concepts/addy/senior-engineer.md) | — | [link](../concepts/rjm/principal.md) |
| **kind** | undefined | — | undefined |
| **phase** | `addy:cross-phase` | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** SYNONYM
- **difference:** Addy designates `senior-engineer` as an experienced technical persona providing deep system judgment; RJM specifies `Principal+` as the senior technical authority for strategic architectural steering.
- **sequencing note:** Consultative authority during architecture, spec, and review.
- **needs decision:** no
- **decision:** D-529

### architect

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `architect` |
| **card** | — | — | [link](../concepts/rjm/architect.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `architect` as the role responsible for system-level structural integrity and pattern compliance. Addy and Matt handle architecture within general engineering discussions.
- **sequencing note:** Operates across design, planning, and verification.
- **needs decision:** no
- **decision:** D-530

### architect-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `architect agent` |
| **card** | — | — | [link](../concepts/rjm/architect-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `architect agent` as a dedicated subagent evaluating architectural implications and interface boundaries. Unique to RJM.
- **sequencing note:** Subagent in architectural review.
- **needs decision:** no
- **decision:** —

### software-architect

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `software_architect` |
| **card** | — | — | [link](../concepts/rjm/software-architect.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `software_architect` as the formal engineering persona responsible for cross-module boundary contracts. Unique to RJM.
- **sequencing note:** Cross-phase structural authority.
- **needs decision:** no
- **decision:** —

### architect-representative

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Architect Representative` |
| **card** | — | — | [link](../concepts/rjm/architect-representative.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `Architect Representative` for technical feasibility and design alignment in steering committee governance. Unique to RJM.
- **sequencing note:** Governance panel representation.
- **needs decision:** no
- **decision:** —

### design-authority

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Design Authority` |
| **card** | — | — | [link](../concepts/rjm/design-authority.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM establishes `Design Authority` as the final arbitration role on architectural conflicts and invariant enforcement. Unique to RJM.
- **sequencing note:** Final review gate before shipping architectural changes.
- **needs decision:** no
- **decision:** D-531

### design-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DESIGN AGENT` |
| **card** | — | — | [link](../concepts/rjm/design-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `DESIGN AGENT` for interface and subsystem architecture synthesis. Unique to RJM.
- **sequencing note:** Design synthesis.
- **needs decision:** no
- **decision:** —

### design-architecture

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Design/Architecture` |
| **card** | — | — | [link](../concepts/rjm/design-architecture.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:Phase 4: Synthesis Panel` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM identifies `Design/Architecture` as a review panel role evaluating pattern appropriateness and absence of circular dependencies. Unique to RJM.
- **sequencing note:** Phase 4 Synthesis Panel review.
- **needs decision:** no
- **decision:** —

### design-architecture-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Design/Architecture Agent` |
| **card** | — | — | [link](../concepts/rjm/design-architecture-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `Design/Architecture Agent` as the agentic reviewer on the synthesis panel. Unique to RJM.
- **sequencing note:** Synthesis panel member.
- **needs decision:** no
- **decision:** —

### multi-paradigm-design-expert

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `multi_paradigm_design_expert` |
| **card** | — | — | [link](../concepts/rjm/multi-paradigm-design-expert.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `multi_paradigm_design_expert` to evaluate alternative design paradigms (functional, OOP, reactive) during specification. Unique to RJM.
- **sequencing note:** Phase 1 (Spec) design evaluation.
- **needs decision:** no
- **decision:** —

### pattern-discovery-specialist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `pattern_discovery_specialist` |
| **card** | — | — | [link](../concepts/rjm/pattern-discovery-specialist.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `pattern_discovery_specialist` to extract reusable patterns from codebase analysis. Unique to RJM.
- **sequencing note:** Phase 1 (Spec) exploration.
- **needs decision:** no
- **decision:** —

### evolution-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `EVOLUTION AGENT` |
| **card** | — | — | [link](../concepts/rjm/evolution-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `EVOLUTION AGENT` to evaluate whether new additions maintain backwards compatibility and architectural trajectory. Unique to RJM.
- **sequencing note:** Cross-phase system stewardship.
- **needs decision:** no
- **decision:** —

### evolution-timelessness-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evolution/Timelessness Agent` |
| **card** | — | — | [link](../concepts/rjm/evolution-timelessness-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Evolution/Timelessness Agent` to ensure abstractions resist obsolescence and maintain long-term coherence. Unique to RJM.
- **sequencing note:** Governance and architectural review.
- **needs decision:** no
- **decision:** —

## 4. Construction, Implementation & Code Simplification Roles

### implementation-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `implementation agent` | `implementer` |
| **card** | — | [link](../concepts/matt/implementation-agent.md) | [link](../concepts/rjm/implementer.md) |
| **kind** | — | undefined | undefined |
| **phase** | — | `matt:none` | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | clean |

- **class:** SYNONYM
- **difference:** Matt names `implementation agent` as the worker focused on writing code from approved plans; RJM specifies `implementer` as the role that writes production-quality code following established patterns.
- **sequencing note:** Core execution role during Phase 3 (Build).
- **needs decision:** no
- **decision:** D-532

### implementer-subagents

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `implementer subagents` | `implementer agent` |
| **card** | — | [link](../concepts/matt/implementer-subagents.md) | [link](../concepts/rjm/implementer-agent.md) |
| **kind** | — | undefined | undefined |
| **phase** | — | `matt:in-progress` | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | clean |

- **class:** SYNONYM
- **difference:** Matt defines `implementer subagents` as parallel execution units delivering slices of work; RJM defines `implementer agent` (.claude/agents/implementer.md) as the dedicated code authoring agent persona.
- **sequencing note:** Dispatched during implementation phase.
- **needs decision:** no
- **decision:** D-533

### driver

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `driver` | `Developer` |
| **card** | — | [link](../concepts/matt/driver.md) | [link](../concepts/rjm/developer.md) |
| **kind** | — | undefined | undefined |
| **phase** | — | `matt:engineering` | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | clean |

- **class:** SYNONYM
- **difference:** Matt specifies `driver` as the active pairing/coding persona driving the keyboard and tool execution; RJM defines `Developer` as the hands-on engineering contributor role.
- **sequencing note:** Active code construction.
- **needs decision:** no
- **decision:** D-534

### agent-developer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `@agent-developer` |
| **card** | — | — | [link](../concepts/rjm/agent-developer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `@agent-developer` as a specific invocation handle for development subagent execution. Unique to RJM.
- **sequencing note:** Build phase execution handle.
- **needs decision:** no
- **decision:** —

### standards-sub-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Standards sub-agent` | `type-design-analyzer` |
| **card** | — | [link](../concepts/matt/standards-sub-agent.md) | [link](../concepts/rjm/type-design-analyzer.md) |
| **kind** | — | undefined | undefined |
| **phase** | — | `matt:review` | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | clean |

- **class:** SYNONYM
- **difference:** Matt uses `Standards sub-agent` to check adherence to coding rules and style; RJM uses `type-design-analyzer` to enforce type architecture, interface elegance, and type safety constraints.
- **sequencing note:** Post-implementation review and refactoring.
- **needs decision:** no
- **decision:** D-535

### type-design-analyzer-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Type Design Analyzer Agent` |
| **card** | — | — | [link](../concepts/rjm/type-design-analyzer-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Type Design Analyzer Agent` as the agentic worker (.claude/agents/type-design-analyzer.md) dedicated to type system validation. Unique to RJM.
- **sequencing note:** Review subagent.
- **needs decision:** no
- **decision:** —

### code-simplifier

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `code-simplifier` |
| **card** | — | — | [link](../concepts/rjm/code-simplifier.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `code-simplifier` to reduce accidental complexity and remove dead code after implementation. Unique to RJM.
- **sequencing note:** Cleanup step at end of build.
- **needs decision:** no
- **decision:** D-536

### code-simplifier-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Code Simplifier Agent` |
| **card** | — | — | [link](../concepts/rjm/code-simplifier-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Code Simplifier Agent` (.claude/agents/code-simplifier.md) as the dedicated subagent implementing code simplification. Unique to RJM.
- **sequencing note:** Build phase post-processing.
- **needs decision:** no
- **decision:** —

### programming-advisor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `programming-advisor` |
| **card** | — | — | [link](../concepts/rjm/programming-advisor.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `programming-advisor` as a specialized consultative persona for idiomatic language guidance. Unique to RJM.
- **sequencing note:** Consultative role during implementation.
- **needs decision:** no
- **decision:** —

## 5. Testing, Verification & Quality Assurance Roles

### test-engineer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `test-engineer` | — | `Quality Assurance Specialist` |
| **card** | [link](../concepts/addy/test-engineer.md) | — | [link](../concepts/rjm/quality-assurance-specialist.md) |
| **kind** | undefined | — | undefined |
| **phase** | `addy:Verify` | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** SYNONYM
- **difference:** Addy designates `test-engineer` to author unit tests, edge-case harnesses, and integration suites; RJM specifies `Quality Assurance Specialist` as the QA persona ensuring testing rigor and test plan compliance.
- **sequencing note:** Phase 4 (Test / Verify).
- **needs decision:** no
- **decision:** D-537

### qa

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `qa` |
| **card** | — | — | [link](../concepts/rjm/qa.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `qa` as a primary lifecycle discipline and persona spanning test planning and execution. Unique to RJM.
- **sequencing note:** Cross-phase QA oversight.
- **needs decision:** no
- **decision:** —

### qa-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `qa agent` |
| **card** | — | — | [link](../concepts/rjm/qa-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `qa agent` as the automated subagent executing test suites and verifying edge-case outcomes. Unique to RJM.
- **sequencing note:** Subagent running during test phase.
- **needs decision:** no
- **decision:** —

### qa-agents

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `QA agents` |
| **card** | — | — | [link](../concepts/rjm/qa-agents.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM references `QA agents` in plural as the pool of testing workers deployed concurrently. Unique to RJM.
- **sequencing note:** Parallel test execution.
- **needs decision:** no
- **decision:** —

### agent-qa

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `agent-qa` |
| **card** | — | — | [link](../concepts/rjm/agent-qa.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `agent-qa` as the QA role dedicated to validating agent behavioral correctness. Unique to RJM.
- **sequencing note:** Agent evaluation during review.
- **needs decision:** no
- **decision:** —

### test-writer-fixer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `test-writer-fixer` |
| **card** | — | — | [link](../concepts/rjm/test-writer-fixer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `test-writer-fixer` as a targeted role repairing broken assertions and expanding regression coverage. Unique to RJM.
- **sequencing note:** Invoked when test gates fail.
- **needs decision:** no
- **decision:** —

### pr-test-analyzer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `pr-test-analyzer` |
| **card** | — | — | [link](../concepts/rjm/pr-test-analyzer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `pr-test-analyzer` to inspect pull request diffs for test quality, coverage completeness, and assertion strength. Unique to RJM.
- **sequencing note:** Pre-merge verification gate.
- **needs decision:** no
- **decision:** —

### systematic-bug-hunter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Systematic Bug Hunter` |
| **card** | — | — | [link](../concepts/rjm/systematic-bug-hunter.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `Systematic Bug Hunter` as an investigative persona applying hypothesis-driven debugging techniques. Unique to RJM.
- **sequencing note:** Active during defect triage and root-cause analysis.
- **needs decision:** no
- **decision:** D-538

### debug

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `debug` |
| **card** | — | — | [link](../concepts/rjm/debug.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM models `debug` as an operational role dedicated to defect reproduction and diagnosis. Unique to RJM.
- **sequencing note:** Debugging lifecycle.
- **needs decision:** no
- **decision:** —

### debug-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Debug Agent` |
| **card** | — | — | [link](../concepts/rjm/debug-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Debug Agent` (.claude/agents/debugger.md) as the autonomous debugging specialist. Unique to RJM.
- **sequencing note:** Subagent invoked on unexpected failure.
- **needs decision:** no
- **decision:** —

### agent-debugger

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `@agent-debugger` |
| **card** | — | — | [link](../concepts/rjm/agent-debugger.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `@agent-debugger` as the specific task handle for debugging agent invocation. Unique to RJM.
- **sequencing note:** Invocation handle.
- **needs decision:** no
- **decision:** —

### chaos-experiment-designer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Chaos Experiment Designer` |
| **card** | — | — | [link](../concepts/rjm/chaos-experiment-designer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `Chaos Experiment Designer` to construct fault injection and resilience tests. Unique to RJM.
- **sequencing note:** Test phase resilience verification.
- **needs decision:** no
- **decision:** —

### silent-failure-hunter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `silent-failure-hunter` |
| **card** | — | — | [link](../concepts/rjm/silent-failure-hunter.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `silent-failure-hunter` to uncover swallowed exceptions, unhandled rejections, and empty catch blocks. Unique to RJM.
- **sequencing note:** Audit gate before shipping.
- **needs decision:** no
- **decision:** D-539

### silent-failure-hunter-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Silent Failure Hunter Agent` |
| **card** | — | — | [link](../concepts/rjm/silent-failure-hunter-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Silent Failure Hunter Agent` as the dedicated subagent implementing silent failure detection. Unique to RJM.
- **sequencing note:** Subagent for exception audit.
- **needs decision:** no
- **decision:** —

### cursor-bugbot

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Cursor Bugbot` |
| **card** | — | — | [link](../concepts/rjm/cursor-bugbot.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM references `Cursor Bugbot` as an automated third-party review bot in ADR-103. Unique to RJM.
- **sequencing note:** External bot integration.
- **needs decision:** no
- **decision:** —

### screen-reader

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `screen-reader` | — | — |
| **card** | [link](../concepts/addy/screen-reader.md) | — | — |
| **kind** | undefined | — | — |
| **phase** | `addy:none` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines `screen-reader` as an accessibility evaluation persona verifying semantic markup, ARIA roles, and screen reader announcements. Unique to Addy.
- **sequencing note:** Verification phase accessibility audit.
- **needs decision:** no
- **decision:** D-540

## 6. Security, Vulnerability & Governance Roles

### security-auditor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `security-auditor` | — | `Security Specialist` |
| **card** | [link](../concepts/addy/security-auditor.md) | — | [link](../concepts/rjm/security-specialist.md) |
| **kind** | undefined | — | undefined |
| **phase** | `addy:Review` | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** SYNONYM
- **difference:** Addy specifies `security-auditor` for reviewing code against OWASP vulnerabilities and security checklists; RJM specifies `Security Specialist` as the security reviewer conducting threat modeling and vulnerability assessments.
- **sequencing note:** Phase 5 (Review / Audit).
- **needs decision:** no
- **decision:** D-541

### security

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `security` |
| **card** | — | — | [link](../concepts/rjm/security.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `security` as a core architectural domain role responsible for vulnerability assessment and threat modeling across all phases. Unique to RJM.
- **sequencing note:** Cross-phase security oversight.
- **needs decision:** no
- **decision:** —

### security-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security Agent` |
| **card** | — | — | [link](../concepts/rjm/security-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `Security Agent` (.claude/agents/security.md) as the dedicated subagent conducting security inspections. Unique to RJM.
- **sequencing note:** Subagent invoked in review.
- **needs decision:** no
- **decision:** —

### security-representative

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security Representative` |
| **card** | — | — | [link](../concepts/rjm/security-representative.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Security Representative` as the steering committee panelist evaluating security posture and risk tolerance. Unique to RJM.
- **sequencing note:** Governance review.
- **needs decision:** no
- **decision:** —

### supply-chain-risk-scanner

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Supply-chain risk scanner` |
| **card** | — | — | [link](../concepts/rjm/supply-chain-risk-scanner.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `Supply-chain risk scanner` to surface vulnerable, outdated, or malicious third-party dependencies. Unique to RJM.
- **sequencing note:** Test and dependency audit phase.
- **needs decision:** no
- **decision:** D-542

### agent-safety

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `agent-safety` |
| **card** | — | — | [link](../concepts/rjm/agent-safety.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `agent-safety` to audit prompts, tool execution boundaries, and autonomous permission escalation risks. Unique to RJM.
- **sequencing note:** Review phase safety audit.
- **needs decision:** no
- **decision:** D-543

### steering-committee

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Steering Committee` |
| **card** | — | — | [link](../concepts/rjm/steering-committee.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM establishes `Steering Committee` as a multi-stakeholder governance body setting architectural and risk policy. Unique to RJM.
- **sequencing note:** Cross-phase governance.
- **needs decision:** no
- **decision:** D-544

### agent-system-steering-committee

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent System Steering Committee` |
| **card** | — | — | [link](../concepts/rjm/agent-system-steering-committee.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `Agent System Steering Committee` to govern agent roster evolution, tool access limits, and autonomy bounds. Unique to RJM.
- **sequencing note:** System-level evolution governance.
- **needs decision:** no
- **decision:** —

### chair

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Chair` |
| **card** | — | — | [link](../concepts/rjm/chair.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `Chair` as the meeting facilitator and final decision-maker on governance panels. Unique to RJM.
- **sequencing note:** Governance panel lead.
- **needs decision:** no
- **decision:** —

### decision-rigor-review-task

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Decision Rigor Review Task` |
| **card** | — | — | [link](../concepts/rjm/decision-rigor-review-task.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Decision Rigor Review Task` to audit ADR rationale, rejected alternatives, and evidence quality. Unique to RJM.
- **sequencing note:** Architectural review gate.
- **needs decision:** no
- **decision:** —

## 7. Code Review, Multi-Perspective Panel & Adversarial Review Roles

### code-reviewer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `code-reviewer` | `reviewer agent` | `code-reviewer` |
| **card** | [link](../concepts/addy/code-reviewer.md) | [link](../concepts/matt/reviewer-agent.md) | [link](../concepts/rjm/code-reviewer.md) |
| **kind** | undefined | undefined | undefined |
| **phase** | `addy:Review` | `matt:none` | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | clean | clean |

- **class:** SYNONYM
- **difference:** Addy and RJM name `code-reviewer` as the foundational persona reviewing code across correctness, readability, architecture, and safety; Matt names `reviewer agent` as the role auditing PR diffs against repository standards.
- **sequencing note:** Phase 5 (Review) entry role.
- **needs decision:** no
- **decision:** D-545

### senior-code-reviewer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Senior Code Reviewer` | `review agent` | `Senior Analytical Reviewer` |
| **card** | [link](../concepts/addy/senior-code-reviewer.md) | [link](../concepts/matt/review-agent.md) | [link](../concepts/rjm/senior-analytical-reviewer.md) |
| **kind** | undefined | undefined | undefined |
| **phase** | `addy:Review` | `matt:none` | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | clean | clean |

- **class:** SYNONYM
- **difference:** Addy defines `Senior Code Reviewer` as a senior staff engineering persona evaluating deep architectural and performance dimensions; Matt defines `review agent` as the dedicated low-context diff reviewer; RJM defines `Senior Analytical Reviewer` as a senior analytical audit role.
- **sequencing note:** Comprehensive review pass.
- **needs decision:** no
- **decision:** D-546

### fresh-context-reviewer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `fresh-context reviewer` | `fresh agent` | `Naive Reader` |
| **card** | [link](../concepts/addy/fresh-context-reviewer.md) | [link](../concepts/matt/fresh-agent.md) | [link](../concepts/rjm/naive-reader.md) |
| **kind** | undefined | undefined | undefined |
| **phase** | `addy:Build` | `matt:Productivity` | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | clean | clean |

- **class:** SYNONYM
- **difference:** Addy defines `fresh-context reviewer` to evaluate code with zero prior conversation baggage; Matt defines `fresh agent` with uncluttered context; RJM defines `Naive Reader` to audit comprehension from a newcomer perspective without assumed context.
- **sequencing note:** Post-implementation review check to avoid context bias.
- **needs decision:** no
- **decision:** D-547

### agent-quality-reviewer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `@agent-quality-reviewer` |
| **card** | — | — | [link](../concepts/rjm/agent-quality-reviewer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `@agent-quality-reviewer` to audit milestone deliverables against task requirements. Unique to RJM.
- **sequencing note:** Milestone completion gate.
- **needs decision:** no
- **decision:** —

### quality-auditor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `quality-auditor` |
| **card** | — | — | [link](../concepts/rjm/quality-auditor.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `quality-auditor` as a formal role conducting post-build quality inspections. Unique to RJM.
- **sequencing note:** Review phase audit.
- **needs decision:** no
- **decision:** —

### code-quality

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `code-quality` |
| **card** | — | — | [link](../concepts/rjm/code-quality.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `code-quality` as an audit role measuring linting, complexity, and maintainability metrics. Unique to RJM.
- **sequencing note:** Review phase metric check.
- **needs decision:** no
- **decision:** —

### external-reviewer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `External Reviewer` |
| **card** | — | — | [link](../concepts/rjm/external-reviewer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `External Reviewer` to model outside contributor or open-source community feedback. Unique to RJM.
- **sequencing note:** Pre-ship review.
- **needs decision:** no
- **decision:** —

### peer-coach

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Peer/Coach` |
| **card** | — | — | [link](../concepts/rjm/peer-coach.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Peer/Coach` for early, constructive feedback during drafting before wider adversarial panels. Unique to RJM.
- **sequencing note:** Early drafting stage review.
- **needs decision:** no
- **decision:** D-548

### cynic

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Cynic` |
| **card** | — | — | [link](../concepts/rjm/cynic.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM includes `Cynic` as a deliberate adversarial persona questioning utility, adoption, and hidden failure modes. Unique to RJM.
- **sequencing note:** Adversarial panel member in review phase.
- **needs decision:** no
- **decision:** D-549

### hostile-expert

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Hostile Expert` |
| **card** | — | — | [link](../concepts/rjm/hostile-expert.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM features `Hostile Expert` as an aggressive reviewer stress-testing edge cases, race conditions, and architectural boundaries. Unique to RJM.
- **sequencing note:** Adversarial panel member.
- **needs decision:** no
- **decision:** D-550

### contrarian-analyst

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Contrarian Analyst` |
| **card** | — | — | [link](../concepts/rjm/contrarian-analyst.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `Contrarian Analyst` to argue against prevailing consensus and propose alternative paradigms. Unique to RJM.
- **sequencing note:** Design and review challenge.
- **needs decision:** no
- **decision:** D-551

### independent-thinker

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `independent-thinker` |
| **card** | — | — | [link](../concepts/rjm/independent-thinker.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `independent-thinker` to challenge assumptions with evidence-based reasoning without conforming to prior bias. Unique to RJM.
- **sequencing note:** Deliberation and review.
- **needs decision:** no
- **decision:** —

### independent-thinker-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `independent-thinker agent` |
| **card** | — | — | [link](../concepts/rjm/independent-thinker-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `independent-thinker agent` as the agentic worker implementing independent critique. Unique to RJM.
- **sequencing note:** Subagent reviewer.
- **needs decision:** no
- **decision:** —

### critic

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `critic` |
| **card** | — | — | [link](../concepts/rjm/critic.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `critic` as the role tasked with identifying weaknesses, omissions, and unstated risks in plans and implementations. Unique to RJM.
- **sequencing note:** Cross-phase critique.
- **needs decision:** no
- **decision:** D-552

### critic-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `critic agent` |
| **card** | — | — | [link](../concepts/rjm/critic-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `critic agent` as the dedicated subagent implementing critical reviews. Unique to RJM.
- **sequencing note:** Subagent critique.
- **needs decision:** no
- **decision:** —

### decision-critic

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `decision-critic` |
| **card** | — | — | [link](../concepts/rjm/decision-critic.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `decision-critic` to systematically stress-test reasoning in technical decisions. Unique to RJM.
- **sequencing note:** ADR review.
- **needs decision:** no
- **decision:** —

### six-role-panel

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `role-based reviewers` | — | `six-role panel` |
| **card** | [link](../concepts/addy/role-based-reviewers.md) | — | [link](../concepts/rjm/six-role-panel.md) |
| **kind** | undefined | — | undefined |
| **phase** | `addy:Build` | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** SYNONYM
- **difference:** Addy defines `role-based reviewers` composing diverse perspectives; RJM defines the `six-role panel` formalizing six distinct review angles (Peer, Hostile, Naive, Security, DevOps, Architect).
- **sequencing note:** Structured review phase panel execution.
- **needs decision:** no
- **decision:** D-553

### adversarial-reviewer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `adversarial reviewer` |
| **card** | — | — | [link](../concepts/rjm/adversarial-reviewer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `adversarial reviewer` as the umbrella role executing rigorous falsification passes. Unique to RJM.
- **sequencing note:** Pre-ship review.
- **needs decision:** no
- **decision:** D-554

### review-personas

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `review personas` | — | — |
| **card** | [link](../concepts/addy/review-personas.md) | — | — |
| **kind** | undefined | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy establishes `review personas` as multi-perspective simulated reviewers invoked in shipping commands. Unique to Addy.
- **sequencing note:** Pre-ship review phase.
- **needs decision:** no
- **decision:** —

## 8. Release, Deployment, DevOps & Infrastructure Roles

### devops

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `devops` |
| **card** | — | — | [link](../concepts/rjm/devops.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `devops` as the infrastructure and CI/CD discipline persona designing pipelines and deployment automation. Neither Addy nor Matt formalizes DevOps as a standalone persona.
- **sequencing note:** Cross-phase infrastructure stewardship.
- **needs decision:** no
- **decision:** D-555

### devops-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DevOps Agent` |
| **card** | — | — | [link](../concepts/rjm/devops-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `DevOps Agent` (.claude/agents/devops.md) as the autonomous agent handling pipeline configuration and deployment automation. Unique to RJM.
- **sequencing note:** Shipping phase agent.
- **needs decision:** no
- **decision:** —

### devops-specialist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DevOps Specialist` |
| **card** | — | — | [link](../concepts/rjm/devops-specialist.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `DevOps Specialist` for CI/CD pipeline authoring and deployment reliability. Unique to RJM.
- **sequencing note:** Build and ship support.
- **needs decision:** no
- **decision:** —

### devops-representative

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DevOps Representative` |
| **card** | — | — | [link](../concepts/rjm/devops-representative.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `DevOps Representative` as the panel member auditing deployability and infrastructure impact. Unique to RJM.
- **sequencing note:** Review panel member.
- **needs decision:** no
- **decision:** —

### devops-review-task

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DevOps Review Task` |
| **card** | — | — | [link](../concepts/rjm/devops-review-task.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `DevOps Review Task` to inspect deployment scripts and environmental requirements. Unique to RJM.
- **sequencing note:** Shipping gate task.
- **needs decision:** no
- **decision:** —

### project-shipper

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `project-shipper` |
| **card** | — | — | [link](../concepts/rjm/project-shipper.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `project-shipper` as the release orchestration role executing tags, changelogs, and release publication. Unique to RJM.
- **sequencing note:** Final step in Phase 6 (Ship).
- **needs decision:** no
- **decision:** D-556

### dependency-auditor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `dependency-auditor` |
| **card** | — | — | [link](../concepts/rjm/dependency-auditor.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `dependency-auditor` as a dedicated agent auditing package versions, licenses, and security updates prior to release. Unique to RJM.
- **sequencing note:** Ship phase dependency gate.
- **needs decision:** no
- **decision:** D-557

### build-cop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Build Cop` | — | — |
| **card** | [link](../concepts/addy/build-cop.md) | — | — |
| **kind** | undefined | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy specifies `Build Cop` as the operational role monitoring CI health, diagnosing build breaks, and keeping trunk green. Unique to Addy.
- **sequencing note:** Operational CI governance during build and ship.
- **needs decision:** no
- **decision:** D-558

### rollback-owner

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Rollback owner` | — | — |
| **card** | [link](../concepts/addy/rollback-owner.md) | — | — |
| **kind** | undefined | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines `Rollback owner` as the designated individual or agent holding explicit authority and runbooks to execute immediate rollback if post-deploy metrics degrade. Unique to Addy.
- **sequencing note:** Assigned prior to deployment execution in ship phase.
- **needs decision:** no
- **decision:** D-559

### launch-sponsor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `launch sponsor` | — | — |
| **card** | [link](../concepts/addy/launch-sponsor.md) | — | — |
| **kind** | undefined | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines `launch sponsor` as the executive or engineering lead granting final go-live authorization. Unique to Addy.
- **sequencing note:** Pre-launch signoff gate in ship phase.
- **needs decision:** no
- **decision:** D-560

### web-performance-auditor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `web-performance-auditor` | — | — |
| **card** | [link](../concepts/addy/web-performance-auditor.md) | — | — |
| **kind** | undefined | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy establishes `web-performance-auditor` to evaluate bundle sizes, Core Web Vitals, and runtime performance against budgets. Unique to Addy.
- **sequencing note:** Verification and pre-ship performance audit.
- **needs decision:** no
- **decision:** D-561

### reliability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `reliability` |
| **card** | — | — | [link](../concepts/rjm/reliability.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `reliability` as an audit role verifying error budgets, uptime guards, and fault isolation. Unique to RJM.
- **sequencing note:** Review phase reliability check.
- **needs decision:** no
- **decision:** —

### mode-owner

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `mode=owner` |
| **card** | — | — | [link](../concepts/rjm/mode-owner.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `mode=owner` as the repository administrative authorization mode during shipping. Unique to RJM.
- **sequencing note:** Ship phase permission mode.
- **needs decision:** no
- **decision:** —

### mode-contributor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `mode=contributor` |
| **card** | — | — | [link](../concepts/rjm/mode-contributor.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `mode=contributor` as the standard pull-request contributor role requiring fork/PR workflows. Unique to RJM.
- **sequencing note:** Ship phase permission mode.
- **needs decision:** no
- **decision:** —

### verified-github-actor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `verified GitHub actor` |
| **card** | — | — | [link](../concepts/rjm/verified-github-actor.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM enforces `verified GitHub actor` to validate authenticated commit signing and author verification. Unique to RJM.
- **sequencing note:** Pre-ship git identity verification.
- **needs decision:** no
- **decision:** —

### post-merge-bot

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Post-Merge Bot` |
| **card** | — | — | [link](../concepts/rjm/post-merge-bot.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `Post-Merge Bot` for automated post-merge synchronization and artifact tagging. Unique to RJM.
- **sequencing note:** Triggered immediately after merge.
- **needs decision:** no
- **decision:** —

### post-merge-auto-bump-bot

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Post-merge auto-bump bot` |
| **card** | — | — | [link](../concepts/rjm/post-merge-auto-bump-bot.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `Post-merge auto-bump bot` to increment version tags and trigger automated package publishing. Unique to RJM.
- **sequencing note:** Automated post-merge release bump.
- **needs decision:** no
- **decision:** —

### rjmurillo-bot

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `rjmurillo-bot` |
| **card** | — | — | [link](../concepts/rjm/rjmurillo-bot.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `rjmurillo-bot` as its project automation identity for automated commits and PR handling. Unique to RJM.
- **sequencing note:** Automated CI/CD actor.
- **needs decision:** no
- **decision:** —

## 9. Maintenance, Upkeep, Refactoring & Cleanup Roles

### merger-subagent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `merger subagent` | `merge-resolver` |
| **card** | — | [link](../concepts/matt/merger-subagent.md) | [link](../concepts/rjm/merge-resolver.md) |
| **kind** | — | undefined | undefined |
| **phase** | — | `matt:in-progress` | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | clean |

- **class:** SYNONYM
- **difference:** Matt defines `merger subagent` to reconcile divergent branches and resolve git conflicts; RJM defines `merge-resolver` to resolve conflicts by analyzing commit intent and AST structure.
- **sequencing note:** Invoked during branch integration or sync.
- **needs decision:** no
- **decision:** D-562

### merge-conflict-resolution-specialist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Merge Conflict Resolution Specialist` |
| **card** | — | — | [link](../concepts/rjm/merge-conflict-resolution-specialist.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `Merge Conflict Resolution Specialist` as an advanced conflict resolution agent for multi-way rebases. Unique to RJM.
- **sequencing note:** Complex git rebase and merge.
- **needs decision:** no
- **decision:** —

### janitor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `janitor` |
| **card** | — | — | [link](../concepts/rjm/janitor.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM establishes `janitor` as the maintenance role responsible for hygiene tasks: removing dead code, cleaning temporary files, and formatting. Unique to RJM.
- **sequencing note:** Periodic upkeep and repo maintenance.
- **needs decision:** no
- **decision:** D-563

### janitor-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Janitor Agent` |
| **card** | — | — | [link](../concepts/rjm/janitor-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Janitor Agent` (.claude/agents/janitor.md) as the autonomous agent executing cleanup tasks. Unique to RJM.
- **sequencing note:** Automated maintenance execution.
- **needs decision:** no
- **decision:** —

### tech-debt-remediation-specialist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Tech Debt Remediation Specialist` |
| **card** | — | — | [link](../concepts/rjm/tech-debt-remediation-specialist.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Tech Debt Remediation Specialist` for systematic refactoring of obsolete patterns. Unique to RJM.
- **sequencing note:** Dedicated refactoring sprints.
- **needs decision:** no
- **decision:** D-564

### comment-analyzer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `comment-analyzer` |
| **card** | — | — | [link](../concepts/rjm/comment-analyzer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `comment-analyzer` to audit comments against code implementation to eliminate documentation drift. Unique to RJM.
- **sequencing note:** Codebase hygiene review.
- **needs decision:** no
- **decision:** D-565

### comment-analyzer-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Comment Analyzer Agent` |
| **card** | — | — | [link](../concepts/rjm/comment-analyzer-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Comment Analyzer Agent` (.claude/agents/comment-analyzer.md) as the dedicated agent auditing comment accuracy. Unique to RJM.
- **sequencing note:** Subagent for documentation verification.
- **needs decision:** no
- **decision:** —

### pr-comment-responder

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `pr-comment-responder` |
| **card** | — | — | [link](../concepts/rjm/pr-comment-responder.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `pr-comment-responder` to parse and address code review comments automatically. Unique to RJM.
- **sequencing note:** PR review iteration.
- **needs decision:** no
- **decision:** D-566

### retrospective-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `retrospective agent` |
| **card** | — | — | [link](../concepts/rjm/retrospective-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:Ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `retrospective agent` to extract lessons, update skill books, and log process improvements after project shipping. Unique to RJM.
- **sequencing note:** Post-ship retrospective phase.
- **needs decision:** no
- **decision:** D-567

### reflector

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reflector` |
| **card** | — | — | [link](../concepts/rjm/reflector.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `Reflector` as the self-evaluative role auditing agent execution logs for learning. Unique to RJM.
- **sequencing note:** Post-execution review.
- **needs decision:** no
- **decision:** —

### reflective-analyst

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reflective analyst` |
| **card** | — | — | [link](../concepts/rjm/reflective-analyst.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:support` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `Reflective analyst` to summarize organizational and technical insights from completed tasks. Unique to RJM.
- **sequencing note:** Post-task synthesis.
- **needs decision:** no
- **decision:** —

### technical-writer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Technical Writer` |
| **card** | — | — | [link](../concepts/rjm/technical-writer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Technical Writer` as the documentation author maintaining user guides, reference manuals, and API docs. Unique to RJM.
- **sequencing note:** Documentation upkeep.
- **needs decision:** no
- **decision:** D-568

### agent-technical-writer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `@agent-technical-writer` |
| **card** | — | — | [link](../concepts/rjm/agent-technical-writer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `@agent-technical-writer` as the execution handle for generating documentation artifacts. Unique to RJM.
- **sequencing note:** Documentation task delegation.
- **needs decision:** no
- **decision:** —

### dx-engineer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DX engineer` |
| **card** | — | — | [link](../concepts/rjm/dx-engineer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `DX engineer` to optimize developer tooling, CLI ergonomics, and internal workflows. Unique to RJM.
- **sequencing note:** Developer tooling maintenance.
- **needs decision:** no
- **decision:** —

## 10. Agent Personas, Harness Architecture & Execution Models

### explore

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Explore` | `exploration subagent` | `Explore` |
| **card** | [link](../concepts/addy/explore.md) | [link](../concepts/matt/exploration-subagent.md) | [link](../concepts/rjm/explore.md) |
| **kind** | undefined | undefined | undefined |
| **phase** | `addy:cross-phase` | `matt:in-progress` | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | clean | clean |

- **class:** SYNONYM
- **difference:** Addy defines `Explore` as an exploratory persona surveying files without modifying code; Matt defines `exploration subagent` to perform deep codebase queries in isolated context; RJM defines `Explore` for read-only codebase mapping.
- **sequencing note:** Pre-planning and pre-implementation reconnaissance.
- **needs decision:** no
- **decision:** D-569

### explore-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Explore agent` |
| **card** | — | — | [link](../concepts/rjm/explore-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:Exploration` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Explore agent` (.claude/agents/explore.md) as the dedicated autonomous agent executing codebase reconnaissance. Unique to RJM.
- **sequencing note:** Subagent for exploration.
- **needs decision:** no
- **decision:** —

### agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `AI coding agents` | `agent` | `agent` |
| **card** | [link](../concepts/addy/ai-coding-agents.md) | [link](../concepts/matt/agent.md) | [link](../concepts/rjm/agent.md) |
| **kind** | undefined | undefined | undefined |
| **phase** | `addy:cross-phase` | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | clean | clean |

- **class:** SYNONYM
- **difference:** Addy terms the primary executor `AI coding agents`; Matt refers to `agent`; RJM defines `agent` as a specialized AI persona with a defined role executing lifecycle phases.
- **sequencing note:** Core autonomous execution entity across all phases.
- **needs decision:** yes
- **decision:** —

### autonomous-development-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `autonomous development agent` |
| **card** | — | — | [link](../concepts/rjm/autonomous-development-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `autonomous development agent` as a meta-developer persona continuously scanning GitHub issues for high-impact work and driving the continuous development loop. Unique to RJM.
- **sequencing note:** Continuous autonomous issue development driver.
- **needs decision:** no
- **decision:** D-571

### coding-agents

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `coding agents` | — | `Claude Code Agents` |
| **card** | [link](../concepts/addy/coding-agents.md) | — | [link](../concepts/rjm/claude-code-agents.md) |
| **kind** | undefined | — | undefined |
| **phase** | `addy:cross-phase` | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** SYNONYM
- **difference:** Addy uses `coding agents` to denote conversational CLI tools executing development tasks; RJM explicitly defines `Claude Code Agents` as the host harness platform persona.
- **sequencing note:** Harness execution substrate.
- **needs decision:** no
- **decision:** D-572

### general-purpose

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `general-purpose` | — | `executor` |
| **card** | [link](../concepts/addy/general-purpose.md) | — | [link](../concepts/rjm/executor.md) |
| **kind** | undefined | — | undefined |
| **phase** | `addy:cross-phase` | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** SYNONYM
- **difference:** Addy defines `general-purpose` as the fallback, unspecialized agent capable of handling diverse tasks; RJM defines `executor` as the baseline task execution engine running generic operations.
- **sequencing note:** Default fallback execution role.
- **needs decision:** no
- **decision:** D-573

### subagent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `subagent` | — |
| **card** | — | [link](../concepts/matt/subagent.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt formalizes `subagent` as an independently spawned worker with isolated context window to execute bounded subtasks. Unique to Matt's explicit subagent taxonomy.
- **sequencing note:** Context-isolated task delegation.
- **needs decision:** no
- **decision:** D-574

### subagents

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `subagents` | — |
| **card** | — | [link](../concepts/matt/subagents.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt references `subagents` in plural as the concurrent worker pool executing subtasks in parallel. Unique to Matt.
- **sequencing note:** Parallel delegation.
- **needs decision:** no
- **decision:** —

### sub-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `sub-agent` | `copilot-swe-agent` |
| **card** | — | [link](../concepts/matt/sub-agent.md) | [link](../concepts/rjm/copilot-swe-agent.md) |
| **kind** | — | undefined | undefined |
| **phase** | — | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | clean |

- **class:** SYNONYM
- **difference:** Matt uses `sub-agent` (hyphenated) to denote child execution contexts; RJM defines `copilot-swe-agent` as an external child SWE worker spawned to execute bounded tasks.
- **sequencing note:** Child worker execution.
- **needs decision:** no
- **decision:** D-575

### sub-agents

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `sub-agents` | — |
| **card** | — | [link](../concepts/matt/sub-agents.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt uses `sub-agents` (hyphenated plural) for groups of spawned workers. Unique to Matt.
- **sequencing note:** Child worker pool.
- **needs decision:** no
- **decision:** —

### background-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `background agent` | — |
| **card** | — | [link](../concepts/matt/background-agent.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:research` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt introduces `background agent` for asynchronous, non-blocking research and monitoring jobs. Unique to Matt.
- **sequencing note:** Non-blocking background execution.
- **needs decision:** no
- **decision:** D-576

### afk-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `AFK agent` | — |
| **card** | — | [link](../concepts/matt/afk-agent.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `AFK agent` for fully autonomous, unattended task execution while the human developer is away from keyboard. Unique to Matt.
- **sequencing note:** Unattended autonomous batch execution.
- **needs decision:** no
- **decision:** D-577

### afk-runner

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `AFK runner` | — |
| **card** | — | [link](../concepts/matt/afk-runner.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt specifies `AFK runner` as the supervising driver that sequentially loops through the `ready-for-afk` queue. Unique to Matt.
- **sequencing note:** Batch loop supervisor.
- **needs decision:** no
- **decision:** D-578

### coordinator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `coordinator` |
| **card** | — | — | [link](../concepts/rjm/coordinator.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `coordinator` to route work, sequence plans, and aggregate parallel results across child agents. Unique to RJM.
- **sequencing note:** Multi-agent task orchestration.
- **needs decision:** no
- **decision:** D-579

### router

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `router` |
| **card** | — | — | [link](../concepts/rjm/router.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:autoplan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `router` as an automated triage mechanism directing incoming requests to specialized agents or commands. Unique to RJM.
- **sequencing note:** Initial request dispatch.
- **needs decision:** no
- **decision:** D-580

### manager

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Manager` |
| **card** | — | — | [link](../concepts/rjm/manager.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Manager` as an overarching supervisory persona overseeing agent progress and budget limits. Unique to RJM.
- **sequencing note:** Supervisory governance.
- **needs decision:** no
- **decision:** —

### trusted-controller

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `trusted controller` |
| **card** | — | — | [link](../concepts/rjm/trusted-controller.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `trusted controller` as the secure kernel authorizing tool calls and validating subagent parameters. Unique to RJM.
- **sequencing note:** Runtime security kernel.
- **needs decision:** no
- **decision:** D-581

### cloud-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Cloud agent` |
| **card** | — | — | [link](../concepts/rjm/cloud-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `Cloud agent` representing remote cloud execution environments. Unique to RJM.
- **sequencing note:** Remote execution infrastructure.
- **needs decision:** no
- **decision:** —

### github-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `github-agent` |
| **card** | — | — | [link](../concepts/rjm/github-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM identifies `github-agent` as the persona interacting with GitHub APIs and pull requests. Unique to RJM.
- **sequencing note:** GitHub integration actor.
- **needs decision:** no
- **decision:** —

### github-copilot

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GitHub Copilot` |
| **card** | — | — | [link](../concepts/rjm/github-copilot.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM references `GitHub Copilot` as an external assistive coding model. Unique to RJM.
- **sequencing note:** External assistive model.
- **needs decision:** no
- **decision:** —

### agent-personas

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Agent Personas` | — | — |
| **card** | [link](../concepts/addy/agent-personas.md) | — | — |
| **kind** | undefined | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy formalizes `Agent Personas` as structured behavioral configurations tailoring agent tone, expertise, and operational focus. Unique to Addy.
- **sequencing note:** Persona configuration at session initialization.
- **needs decision:** no
- **decision:** D-582

### personas

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Personas` | — | — |
| **card** | [link](../concepts/addy/personas.md) | — | — |
| **kind** | undefined | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy references `Personas` as the conceptual framework for adopting distinct specialized roles. Unique to Addy.
- **sequencing note:** Role adoption framework.
- **needs decision:** no
- **decision:** —

### persona

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Persona` | — | — |
| **card** | [link](../concepts/addy/persona.md) | — | — |
| **kind** | undefined | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines `Persona` as an individual role instance assigned to an agent context. Unique to Addy.
- **sequencing note:** Instance assignment.
- **needs decision:** no
- **decision:** —

### specialized-agent-personas

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Specialized Agent Personas` | — | — |
| **card** | [link](../concepts/addy/specialized-agent-personas.md) | — | — |
| **kind** | undefined | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy provides `Specialized Agent Personas` for domain-specific tasks (e.g. security, performance, accessibility). Unique to Addy.
- **sequencing note:** Domain-specific delegation.
- **needs decision:** no
- **decision:** D-583

### expert

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Expert` |
| **card** | — | — | [link](../concepts/rjm/expert.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Expert` as a generic domain-expert persona injected into evaluation panels. Unique to RJM.
- **sequencing note:** Domain consultation.
- **needs decision:** no
- **decision:** —

### user

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `user` |
| **card** | — | — | [link](../concepts/rjm/user.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM designates `user` as the primary human operator, decision-maker, and ultimate beneficiary of the system. Unique to RJM.
- **sequencing note:** Human-in-the-loop decision-maker across all phases.
- **needs decision:** no
- **decision:** —

### user-representative

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `User Representative` |
| **card** | — | — | [link](../concepts/rjm/user-representative.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `User Representative` as a proxy persona advocating for user experience, ergonomics, and simplicity. Unique to RJM.
- **sequencing note:** UX advocacy during spec and review.
- **needs decision:** no
- **decision:** D-584

### stakeholder

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Stakeholder` |
| **card** | — | — | [link](../concepts/rjm/stakeholder.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `Stakeholder` as any entity with an interest in system outcome, represented in governance and review. Unique to RJM.
- **sequencing note:** Requirements and review signoff.
- **needs decision:** no
- **decision:** —

### consumer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Consumer` |
| **card** | — | — | [link](../concepts/rjm/consumer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Consumer` as the end-user persona interacting with the published software product. Unique to RJM.
- **sequencing note:** End-user perspective in testing.
- **needs decision:** no
- **decision:** —

### audience-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `AUDIENCE AGENT` |
| **card** | — | — | [link](../concepts/rjm/audience-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `AUDIENCE AGENT` to evaluate documentation clarity, onboarding friction, and cognitive load for users. Unique to RJM.
- **sequencing note:** Documentation and interface review.
- **needs decision:** no
- **decision:** D-585

### audience-usability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Audience/Usability` |
| **card** | — | — | [link](../concepts/rjm/audience-usability.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:Phase 4: Synthesis Panel` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM identifies `Audience/Usability` as a panel review role ensuring triggers are natural and steps unambiguous. Unique to RJM.
- **sequencing note:** Synthesis panel review member.
- **needs decision:** no
- **decision:** —

### audience-usability-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Audience/Usability Agent` |
| **card** | — | — | [link](../concepts/rjm/audience-usability-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Audience/Usability Agent` as the agentic worker executing usability audits. Unique to RJM.
- **sequencing note:** Usability inspection.
- **needs decision:** no
- **decision:** —

### reference-customers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `reference customers` |
| **card** | — | — | [link](../concepts/rjm/reference-customers.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM models `reference customers` as ideal user personas validating product-market fit and core value delivery. Unique to RJM.
- **sequencing note:** Product validation.
- **needs decision:** no
- **decision:** —

### non-customers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `non-customers` |
| **card** | — | — | [link](../concepts/rjm/non-customers.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM models `non-customers` to understand barriers to adoption and alternative substitute solutions. Unique to RJM.
- **sequencing note:** Market boundary analysis in spec.
- **needs decision:** no
- **decision:** —

### early-adopters

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Early adopters` |
| **card** | — | — | [link](../concepts/rjm/early-adopters.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Early adopters` as a customer adoption persona tolerant of nascent capabilities but demanding high leverage. Unique to RJM.
- **sequencing note:** Market segmentation analysis.
- **needs decision:** no
- **decision:** —

### early-majority

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `early majority` |
| **card** | — | — | [link](../concepts/rjm/early-majority.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `early majority` as a pragmatic customer persona requiring stability, documentation, and polished ergonomics. Unique to RJM.
- **sequencing note:** Market maturity evaluation.
- **needs decision:** no
- **decision:** —

### visionaries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `visionaries` |
| **card** | — | — | [link](../concepts/rjm/visionaries.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `visionaries` as user personas seeking transformative paradigm shifts. Unique to RJM.
- **sequencing note:** Product vision scoping.
- **needs decision:** no
- **decision:** —

### pragmatists

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `pragmatists` |
| **card** | — | — | [link](../concepts/rjm/pragmatists.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `pragmatists` as user personas requiring evolutionary, low-risk, proven improvements. Unique to RJM.
- **sequencing note:** Risk-averse feature validation.
- **needs decision:** no
- **decision:** —

### lead-getters

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Lead Getters` |
| **card** | — | — | [link](../concepts/rjm/lead-getters.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `Lead Getters` as a business-acquisition persona for customer acquisition workflows. Unique to RJM.
- **sequencing note:** Business workflow support.
- **needs decision:** no
- **decision:** —

### model

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `model` | — |
| **card** | — | [link](../concepts/matt/model.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `model` as the underlying LLM engine executing an agent persona. Unique to Matt.
- **sequencing note:** Harness configuration.
- **needs decision:** no
- **decision:** —

### models

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `models` | — |
| **card** | — | [link](../concepts/matt/models.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt references `models` in plural as the set of accessible foundation models. Unique to Matt.
- **sequencing note:** Multi-model orchestration.
- **needs decision:** no
- **decision:** —

### invoking-skill

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `invoking skill` | — |
| **card** | — | [link](../concepts/matt/invoking-skill.md) | — |
| **kind** | — | undefined | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines `invoking skill` as the operational role of the caller skill delegating tasks to a subagent. Unique to Matt.
- **sequencing note:** Subagent invocation handshake.
- **needs decision:** no
- **decision:** —

### prompt-engineer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `prompt-engineer` |
| **card** | — | — | [link](../concepts/rjm/prompt-engineer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `prompt-engineer` as the persona designing, evaluating, and tuning system prompts and instruction hierarchies. Unique to RJM.
- **sequencing note:** Meta-engineering of agent behaviors.
- **needs decision:** no
- **decision:** D-586

### prompt-optimizer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Prompt Optimizer` |
| **card** | — | — | [link](../concepts/rjm/prompt-optimizer.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `Prompt Optimizer` to compress prompt context and eliminate redundancy while preserving instruction fidelity. Unique to RJM.
- **sequencing note:** Prompt efficiency optimization.
- **needs decision:** no
- **decision:** —

### skillbook

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `skillbook` |
| **card** | — | — | [link](../concepts/rjm/skillbook.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `skillbook` as the collective repository of procedural knowledge, curated by agents. Unique to RJM.
- **sequencing note:** Cross-phase skill knowledge management.
- **needs decision:** no
- **decision:** —

### skillbook-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skillbook Agent` |
| **card** | — | — | [link](../concepts/rjm/skillbook-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Skillbook Agent` (.claude/agents/skillbook.md) as the dedicated subagent updating and curating skill recipes. Unique to RJM.
- **sequencing note:** Post-retrospective skill curation.
- **needs decision:** no
- **decision:** D-587

### script-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Script Agent` |
| **card** | — | — | [link](../concepts/rjm/script-agent.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:Phase 4: Synthesis Panel` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Script Agent` on the synthesis panel to verify that automation scripts follow patterns, self-verify, and document errors. Unique to RJM.
- **sequencing note:** Synthesis panel review member.
- **needs decision:** no
- **decision:** —

### script-automation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Script/Automation` |
| **card** | — | — | [link](../concepts/rjm/script-automation.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:Phase 4: Synthesis Panel` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM specifies `Script/Automation` as the panel review role inspecting executable tool quality. Unique to RJM.
- **sequencing note:** Panel review role.
- **needs decision:** no
- **decision:** —

### support

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `support` |
| **card** | — | — | [link](../concepts/rjm/support.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `support` as a operational role providing user guidance and issue resolution. Unique to RJM.
- **sequencing note:** Operational maintenance.
- **needs decision:** no
- **decision:** —

### negotiation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Negotiation` |
| **card** | — | — | [link](../concepts/rjm/negotiation.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines `Negotiation` as a specialized role navigating commercial agreements and contract terms. Unique to RJM.
- **sequencing note:** Procurement support.
- **needs decision:** no
- **decision:** —

### memory

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `memory` |
| **card** | — | — | [link](../concepts/rjm/memory.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM references `memory` as an architectural role managing cross-session state (flagged out of lifecycle implementation scope per D-001). Unique to RJM.
- **sequencing note:** Cross-session memory management.
- **needs decision:** no
- **decision:** —

### experiment-tracker

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `experiment-tracker` |
| **card** | — | — | [link](../concepts/rjm/experiment-tracker.md) |
| **kind** | — | — | undefined |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM provides `experiment-tracker` to log hypothesis outcomes, benchmark runs, and performance metrics. Unique to RJM.
- **sequencing note:** Experimentation tracking.
- **needs decision:** no
- **decision:** —
