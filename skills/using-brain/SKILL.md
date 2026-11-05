---
name: using-brain
description: "Routes the current request and restores Brain work at session start, resume, clear or compaction. Use at those boundaries, before choosing a workflow for a new task, when continuing an idea or spec, or when the correct skill is unclear. Reuses current workspace evidence and settled decisions; keeps direct answers and bounded repairs separate from defining new work."
---

# Using brain

Restore the context needed for the current request, then give the work to its owning skill. This router owns that choice. The workspace owns state reporting and effort selection; each workflow owns its recovery and completion.

## Start

Run this entry once at a session boundary. When the router is already active, continue the unfinished step. A new user message steers the current task unless it explicitly replaces it.

1. **Establish the request.** Preserve the user's explicit task, named effort, handoff, conditions and pending question. A computed report describes saved work; it does not override a newer instruction or supply approval.
2. **Load the exchange rules.** Load ask-user-question through the host's supported skill mechanism. When the host offers no such mechanism, read its SKILL.md in full. Use the same rule for every skill this router selects. Read the matching host reference before asking a question. A user-only skill remains the user's command.
3. **Identify the workspace.** With no project repository, use the selected workflow's conversation mode; repository setup, numbered files and the CLI do not apply. In a repository, resolve the installed Brain path from the session-start text or setup-brain's host instructions. `brain <cmd>` means Bun running that installation's `scripts/brain.ts` from the project.
4. **Restore session state.** Read `docs/agents/workspace.md` in full and follow **Session state** once. If the file or its **Session state** section is missing, read the installed `skills/setup-brain/workspace.md` template. Keep any existing workspace settings. Let setup-brain handle a missing or older workspace through its inspected setup or migration path when the selected work needs it. A direct factual answer can proceed from its sources without creating workspace files. Preserve required setup approvals. The workspace returns its report and selection here; it does not restart this router.
5. **Read the project rules.** Read existing `docs/agents/capabilities.md` and `docs/agents/domain.md` in full. Follow domain.md to the relevant glossary when it exists. A glossary is created lazily; its absence alone is not incomplete setup. Missing guidance goes to setup-brain when the selected work needs it; a direct answer from sufficient sources can proceed. Run the declared toolchain checks. Check `git status` and the branch. Keep work you did not start. Reuse unchanged evidence already read in this session.
6. **Route the next supported action.** Use the discovery rules below. For continued work, read its current records and enter the owning workflow's recovery procedure before selecting a row or repeating an effect. A failed prerequisite stops only work that needs it; report the failure and continue independent authorized work.

Start is complete when the current request is clear, the needed project context is restored or its exact blocker is known, and the next action has an owner. Continue that action; loading the router alone does not complete the user's task.

## Skill Discovery

An explicit skill request uses that skill within its supported scope. Otherwise choose the first applicable situation, then add only the skills needed by that action:

```
Current request
    ├── A fact answered by reading? → Read the owning source and answer directly
    ├── Missing or older workspace? → setup-brain
    ├── Resume an idea? → interview-me (Resume before choosing a row)
    ├── Resume an approved spec task? → incremental-implementation
    ├── A behavior is broken? → debugging-and-error-recovery
    ├── A mechanical edit or approved task? → incremental-implementation (when it spans files)
    ├── Missing intent or a binding requirement? → interview-me
    ├── An idea needs alternatives? → idea-refine
    ├── A design question needs runnable evidence? → prototype
    ├── A significant new change has clear intent? → spec-driven-development
    ├── A spec needs tasks? → planning-and-task-breakdown
    ├── A project needs its quality bar agreed? → constraint-driven-development
    ├── Code needs review? → code-review-and-quality
    ├── Working code needs simplification? → code-simplification
    ├── A release is authorized? → shipping-and-launch
    └── A user decision remains? → ask-user-question
```

For a direct information request, read the source and answer. Do not create an idea, spec or implementation plan solely to answer it. A narrow change still loads its applicable technical guidance and verifies its behavior; its small size does not excuse skipping those duties.

For continued work, honor an explicitly named effort before branch-based selection. A request to continue with several eligible efforts and no selection needs one question through ask-user-question. A status question during active work reports that work and preserves its next action and pending question.

For a bounded repair, use debugging-and-error-recovery to establish the failing behavior, then test-driven-development for the change. Use incremental-implementation for multiple files or slices. Reuse an existing approved spec or task. A new significant change without a spec goes through spec-driven-development; an unresolved requirement goes through interview-me first.

### Skills needed by the action

| Action | Load when applicable |
|---|---|
| Write behavior or tests | test-driven-development |
| Change browser UI | frontend-ui-engineering; browser-testing-with-devtools |
| Change an API or module boundary | api-and-interface-design; codebase-design for the seam |
| Use a framework or library | source-driven-development and the project's declared library skills |
| Change security-sensitive behavior | security-and-hardening; doubt-driven-development for material uncertainty |
| Investigate performance | performance-optimization |
| Change Git history or integrate work | git-workflow-and-versioning and the [commit contract](../../references/brain/commit-contract.md) |
| Change a pipeline | ci-cd-and-automation |
| Migrate or retire behavior | deprecation-and-migration |
| Write human guidance | documentation-and-adrs |
| Write agent instructions | writing-for-agents; the maintainer's required skill-authoring workflow |
| Add production visibility | observability-and-instrumentation |
| Sharpen a term or record a decision | domain-modeling |
| Repair context or a confusing reply | context-engineering or wait-what, respectively |

Follow the selected skill's required dependencies and completion checks. Consult the project capability file before guessing a tool or library convention. A catalog entry proves availability only; a required server needs a real read-only response.

### Decisions

Ask-user-question owns question preparation, recommendations, reply interpretation and repair. Reuse settled requirements and explicit delegation. Inspect discoverable facts first. Ask only about an unresolved user decision or missing permission, with the evidence, consequence and recommendation inside that one question. Small reversible choices within the agreed behavior remain the agent's; state the reason and continue.

### The interview and durable state

Interview-me owns its map, frontier, fog, continuous writes, recovery and Finish checks. Read its **Resume** procedure before continuing an existing idea. Save partial answers and each record's next action before a pause. Reconcile saved answers and results before choosing the next frontier row.

Use the folders in the loaded workspace settings. Create numbered files only through `brain new-doc`. The main session writes map and plan rows; research workers write their own records. In conversation mode, the map lives in the conversation and uses that mode's rules instead of file operations.

### The prototype detour

A prototype row asks for runnable evidence before a design decision. Load prototype; return its evidence to the owning map. The user's choice goes in a DEC file that links the prototype's branch. For another directory or harness, offer the user's handoff command when needed. Invoke the user-only handoff skill only when the user requests it.

## Stage Boundaries

The files carry the work, not the window. Preserve decisions, partial answers, research progress, verification evidence, changed files and outstanding approvals continuously. At a completed row or task, read [Stage boundaries](../../references/brain/stage-boundaries.md) before choosing how to continue across contexts. Use the host's actual context information; a fixed token estimate does not prove that the next task will fit.

## Lifecycle Sequence

1. Define: confirmed intent in an idea and its DEC/RES records, then a spec when needed.
2. Plan: approved rows and task blocks in the spec folder.
3. Build: verified changes under the [commit contract](../../references/brain/commit-contract.md), with results linked from the plan.
4. Verify: observed behavior and checks that distinguish success from failure.
5. Review: one ranked list of findings and one verdict.
6. Ship: the separately authorized release, with monitoring and rollback.

A task uses the stages its scope needs. Spec-driven-development's Stages 0 and 1 cover define; Stages 2 and 3 cover plan; Stage 4 covers build. Their owning skills carry the procedure.

### Commands and skills

| Stage | Skill | Claude Code command | Gemini CLI command |
|---|---|---|---|
| Define | interview-me, spec-driven-development | `spec` | `/spec` |
| Plan | planning-and-task-breakdown | `plan` | `/planning` |
| Build | incremental-implementation, test-driven-development | `build` | `/build` |
| Verify | debugging-and-error-recovery | `test` | `/test` |
| Review | code-review-and-quality | `review` | `/review` |
| Ship | shipping-and-launch | `ship` | `/ship` |

Claude commands use the `/brain:` prefix. Other hosts use their supported skill invocation mechanism. Follow the host's installation guide for discovery and invocation; a universal Skill tool is not assumed.

Status is a workspace procedure, not a skill. Claude's `/brain:status`, Gemini's `/status`, and a status request in chat follow **Session state** in `docs/agents/workspace.md`. The `brain status` CLI supplies its read-only report.

## Quick Reference

| Stage | Skill | One-Line Summary |
|---|---|---|
| Setup | setup-brain | Inspect and prepare workspace guidance; migrate only within approval |
| Define | interview-me | Define intent, recover saved answers and maintain the whole map |
| Define | idea-refine | Explore alternatives for an unresolved idea |
| Define | prototype | Build throwaway evidence for a design question |
| Define | spec-driven-development | Write a spec from clear intent |
| Define | constraint-driven-development | Agree the project's quality bar |
| Plan | planning-and-task-breakdown | Order verifiable tasks from a spec |
| Build | incremental-implementation | Deliver verified slices |
| Build | source-driven-development | Read authoritative sources for technical decisions |
| Build | doubt-driven-development | Challenge material assumptions with independent review |
| Build | context-engineering | Restore and manage relevant context |
| Build | codebase-design | Consult deep-module and test-seam vocabulary |
| Build | frontend-ui-engineering | Build accessible, responsive interfaces |
| Build | api-and-interface-design | Define stable interfaces and contracts |
| Verify | test-driven-development | Prove the failing behavior, then the fix |
| Verify | browser-testing-with-devtools | Observe real browser behavior |
| Verify | debugging-and-error-recovery | Establish and resolve the cause of a failure |
| Review | code-review-and-quality | Review five axes and return one verdict |
| Review | code-simplification | Improve clarity without changing behavior |
| Review | security-and-hardening | Inspect and strengthen security boundaries |
| Review | performance-optimization | Measure and resolve performance problems |
| Ship | git-workflow-and-versioning | Keep changes scoped and history reviewable |
| Ship | ci-cd-and-automation | Automate build and deployment checks |
| Ship | deprecation-and-migration | Move consumers safely between supported behaviors |
| Ship | documentation-and-adrs | Maintain human guidance and decision context |
| Ship | observability-and-instrumentation | Make production behavior diagnosable |
| Ship | shipping-and-launch | Verify and perform an authorized release |
| Any | ask-user-question | Resolve one remaining user decision at a time |
| Any | handoff | User-only portable transfer to another session |
| Any | domain-modeling | Maintain domain words and decision records |
| Any | wait-what | Repair an explanation the user did not follow |
| Any | writing-for-agents | Design clear agent instructions and pointers |
