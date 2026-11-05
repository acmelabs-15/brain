---
id: RES-069
status: resolved
kind: research
from: user
date: 2026-11-05
outcome: answered
---
# RES-069: Keystone workflow audit and approved repairs

## Question
How should setup-brain, using-brain and ask-user-question fit Brain's full workflow, state, agent and reference chain? Which repairs are implemented under existing approval, which findings need a new decision, and what evidence is still missing?

## Answer
The source audit, approved local repairs and bounded model comparison are complete. The original reviewed implementation covers 77 changed, added or removed source paths; later checker and evaluation work has separate evidence. Earlier interview repairs and workspace-owned status remain intact. Broader state, detour, orchestration and upstream-reference findings remain separate follow-ups.

The latest completed full repository gate passes 1,080 tests, with one existing network skip and no failures. All eight retained comparison pairs pass the 24 fixed criteria in both arms. No reliability advantage is established. The user delegates feedback and approval to the assistant; the assistant approves the current repairs within that scope. This answers the bounded audit question with the limits below, not a claim of a perfect workflow.

Claude now receives current protocol and router paths without consumer root-file edits. That proves the implemented delivery route at its tested process boundary. It does not prove that every model loads the right skill, restores the right effort or handles the next user reply correctly.

### Authority and chronology

- The user's pasted request on 2026-11-05 approves three areas: root CLAUDE with a narrow visible warning exception, coordinated instruction content, and installation-guide defects. It also requests a broad connected audit of setup, routing and question handling.
- The later clarification expands the audit to sequencing, state management, agents and every operative repository reference. An audit finding does not grant permission for a new product policy.
- The user separately approves the targeted security import from Addy commit `78f00a4b2975245ec2979307382a624289f6a722`, its required references and a separate sync pin. The other Addy and Matt pins stay unchanged.
- The user authorizes the bounded comparison and delegates both feedback and approval. The assistant writes and approves all 16 retained feedback entries under that delegation. This is not Peter's manual review and does not approve every architectural recommendation.
- The prior 16 implementation commits through baseline `8e8b25edc1bda67825ae4d861418eac548a7ff24` remain intact. DEC-007, reapproved DEC-013/014, and DEC-024 remain authoritative for their settled scope.
- The other held DEC-012–023 remain unapproved, despite accepted frontmatter in historical copies. This work adopts no new stage/schema or external-spec ownership policy from those records.
- The repairs and documentation follow-up are pushed through `0cd5a706` on `fix/interview-recovery` at Peter's explicit request. PR #28's description is updated. No merge, release or installed-plugin update occurs.

Sources: the user's current request and explicit security-import answer; saved handoff chronology; DEC-007/013/014/024; local evidence `implementation-state.md` and `review-scope.json`, checked 2026-11-05. The implementation-state file contains earlier progress entries; later source, review and check evidence supersedes those entries.

## Findings

### Evidence scope

The baseline source audit is pinned to `8e8b25edc1bda67825ae4d861418eac548a7ff24`. Source-line references below use that baseline unless marked current. Later revisions have separate hashes and review evidence.

The reconciled full-read inventory covers all 137 candidate targets and 215 unique repository paths. It includes all 33 main skill bodies, operative supporting documents, agent definitions, templates, scripts, relative imports and selected fixture files. These are not 215 independent production documents. Candidate edges are classified as actual dependencies, consumer-selected inputs, output patterns, examples or code symbols.

The audit initially covered selected references only. That limitation was corrected after the user's question; the original reports retain their narrower coverage statements. The combined coverage manifest supplies the later reconciliation. Nine pinned remote host-source files were not fully reread. Current official host contract pages were checked, but that is not a full audit of every remote source, website or client.

Evidence names in this record identify the local audit bundle. They are not shipped repository files or repository-relative links. The bundle contains `router-audit.md`, `setup-audit.md`, `question-audit.md`, `main-skill-interactions.md`, `supporting-reference-audit.md`, `setup-reference-findings.md`, their coverage JSON files, and `coverage-summary.json`. The saved handoff locates that bundle without making a private machine path part of this record.

### Approved repairs now implemented

| Area | Current result | Owning source and evidence |
|---|---|---|
| Maintainer instructions | Root CLAUDE imports maintainer AGENTS. Consumer protocol no longer renders into maintainer AGENTS. Ownership, declared Bun range and affected-surface checks are explicit. | Current `AGENTS.md`, `CLAUDE.md`, `docs/maintainers/changes.md`, `scripts/plain-talk/render.ts`. |
| Claude validator | The real strict report stays visible. Only the exact approved root-file content warning is accepted. Changed diagnostics, extra strict warnings/errors, malformed reports and incomplete checks fail. | Current `scripts/validate.ts`, its tests, `host-validation-final.log`. |
| Consumer startup | Every SessionStart source gets current absolute protocol/router paths and computed state. Resume/fork no longer assumes a current protocol in its old transcript. Consumer roots remain unchanged. | Current `scripts/hooks/session-start.ts`, process tests and `protocol/PROTOCOL.md`. |
| Startup output safety | The context budget uses UTF-8 bytes. A long report is visibly cut; oversized mandatory paths produce an explicit failure. The CLI path is data, not an executable interpolated shell snippet. | Current hook tests include multibyte text, oversized paths and shell metacharacters. |
| Routing and recovery | One Start entry restores context and returns from workspace reporting without recursion. Explicit user scope and a newer handoff take precedence. Ideas enter interview Resume before choosing a row. Direct answers need no setup writes. | Current using-brain and both workspace documents; local `router-build-result.md`. |
| Setup boundaries | Ordinary setup does not write another host's configuration because its home folder exists. Codex needs an explicit scope. Required input validation and dry preflight precede writes; future or malformed layout headers are refused. | Current setup writer/config parser and regression tests; local `setup-reference-findings.md`. |
| Capability refresh | Comparison uses the correct table and fields. Toolchain identity includes command and source, so independent pins/ranges remain separate. Existing server proof commands are preserved. | Current `scripts/setup/capabilities.ts:312-350`; resolved correctness finding. |
| Question exchange | Shared selection guidance handles option limits, unsupported multi-select, exact selected sets and text fallback. Discovery does not invent recommended facts. Caller-owned state can live in records or the conversation. | Current ask-user-question and `references/selection.md`; setup branch references. |
| Approval reuse | Router, spec assumptions, spec seam selection, TDD and planning reuse supported current approvals. New or changed binding choices still wait. All three plan-review dimensions and completed-spec approval remain required. | Current spec Stage 1 steps 2/3, TDD seam section and planning Step 6; local `consistency-result.md` and correctness review. |
| Completion pointers | Spec-driven names interview Finish rather than a confidence stop. Handoff remains user-invoked. Task-result wording uses the shared commit contract. | Current spec/TDD/planning skills and `references/brain/commit-contract.md`. |
| Build evidence | Both build commands read every result, diff and task-specific verification before serialized integration. Verified slice history and later state-record commits have distinct roles. | Current build commands, incremental implementation and commit contract. |
| Host instruction size | Setup migration/cleanup and review criteria have required references. The lifecycle check enforces the supported body limit. The approved security import supplies its complete required reference chain. | Current setup/review bodies, `scripts/lifecycle/check-refs.ts`, security mapping in `upstream.json`. |
| Install guidance | Guides describe current computed status, correct selectors/scopes, required restarts, per-repo setup and Bun prerequisites. Codex block cleanup preserves unrelated text. Antigravity CLI update is no longer presented as plugin refresh. | Current four install guides and `docs/install/prerequisites.md`. |
| Discovery evaluation | Plain discovery is valid; the rubric rejects invented audience facts and multiple questions. Researched-choice recommendation coverage remains. The bounded comparison passes its fixed criteria in both arms. | Current graders/tests and retained comparison evidence. |
| Workspace checker | Non-migrated specs report missing required files. A still-proposed DEC cannot resolve a current map row. Migrated no-plan exceptions and valid accepted/superseded history remain intact. | Current `scripts/workspace/check.ts`; 85 checker tests and 361 workspace tests pass; checker review is clean. |

The targeted security mapping imports three content files and its license from the separately approved pin. All imported bytes remain owned by their pinned source. This is not an approval to update unrelated vendored skills or their pins. Source: current `upstream.json`, `upstream.lock.json`, security review and vendor check.

The capability identity and spec seam-reuse corrections were found during correctness review and are fixed in the current source. Their focused regressions and source rereview pass. Earlier review results that still listed them as open are superseded.

### Current workflow ownership

| Interface | Owner | State and completion boundary |
|---|---|---|
| Host event to session | Host adapter and protocol | Supplies current sources and state. Delivery is not proof of model execution. |
| Request to workflow | using-brain | Preserves current scope, loads applicable dependencies and chooses the owner. It creates no second task-state file. |
| Report and effort selection | Workspace Session state | Reads rows and records, reports problems and returns to its caller. Continued work enters the selected workflow's recovery procedure. |
| User exchange | ask-user-question | Investigates facts, asks one unresolved choice, preserves the whole answer and returns it to the caller. It does not approve the caller's whole plan. |
| Interview | interview-me | Main session alone writes the map. Answers, partial state and DEC/RES records persist continuously. Resume reconciles evidence before another question or repeated effect. |
| Research worker | Interview research brief and researcher | One worker owns one RES. Answered/partial/blocked, next action and retry condition remain explicit. Parent checks the current row before applying a late result. |
| Ideate/prototype detour | Detour skill plus parent interview/spec | Returns evidence and a supported decision. Continuous partial-state and conversation-mode handoffs remain incomplete interfaces below. |
| Specification and planning | Spec-driven and planning | Spec sources and plan rows/blocks record the work. Current approval reuse is fixed; representation of a spec awaiting a plan remains open. |
| Build worker and integration | Incremental implementation, build command, commit contract | Worker returns verified changes and evidence. Main session integrates serially and alone closes plan rows. Final review orchestration remains a separate open interface. |
| Review | Code-review-and-quality | Five axes produce one ranked verdict. Scope and capacity handling still need the broader correction below. A verdict is not merge permission. |
| Ship and long monitoring | Shipping workflow and current user authority | Release, monitoring and rollback require their stated evidence and authority. Their durable workspace handoff needs clearer ownership. |

### Additional findings and their disposition

| ID / priority | Finding and evidence | Recommended action and boundary |
|---|---|---|
| K1 / P1, fixed | At baseline, a non-migrated spec missing required files passes check and shows no red item. | Implemented and reviewed: each missing fixed file is reported, including a missing spec when other files exist. The migrated no-plan exception remains. No new stage policy is introduced. |
| K2 / P1, fixed | At baseline, a resolved row linked to a proposed DEC passes check and appears completed. | Implemented and reviewed: still-proposed DEC links fail current resolution validation. Accepted decisions, legitimate superseded history and migrated-history semantics remain valid. No record is silently edited. |
| K3 / P2, user decision | Real new-doc SPEC creates all three files, but its empty plan is not active. Spec-driven marks the originating idea specced before a durable pending spec/plan approval state exists. | Choose how an unplanned or unapproved spec remains resumable. Reuse existing records if possible. No new stage/status/schema from held DEC-018 is adopted. |
| K4 / P2, user decision | Spec-driven allows an external tool to own spec storage, but planning/build/status require Brain spec folders and rows. | Choose the supported adapter or referenced-input contract. Do not silently remove external-tool support or create duplicate specification authority. |
| K5 / P2 | Ideate/prototype detours do not explicitly pass mode or return partial answers during a long exchange. The interview remains the map owner, while a detour returns only after its final result. Conversation-mode replacements are not passed as explicitly as research's replacements. | Define a small parent/detour interface: row, mode, scope, settled answers, state destination, pending exchange and return evidence. Keep the parent as sole map writer. No new detour schema is adopted here. |
| K6 / P2 | Idea-refine prescribes 3–5 sharpening questions and a multi-select set of 5–8 variations. Its examples exceed host controls and turn an open software preference into a confirmed constraint. | Delegate mechanics to the question owner. Preserve all viable options, qualifiers and unresolved facts. Correct the Brain-owned examples alongside the detour contract. |
| K7 / P2, orchestration decision | Spec says tasks run one at a time; incremental asks for the frontier in parallel. A build worker must complete a five-agent review, but the review says five at once without a capacity fallback or clear parent/worker owner. | Decide one review-orchestration owner and preserve independent axes within actual host capacity. Reconcile commands, worker briefs and result contracts before changing the workflow. |
| K8 / P2 | Review searches commit issue references before an explicit user spec path. Its sample three-dot diff differs from its default current working-tree/index scope. | Honor explicit requested scope first. Give exact-base, merge-base and working-change commands separately. Ask only about a remaining material scope choice. |
| K9 / P2 | Setup refuses future layouts, but shared readConfig accepts any positive layout integer. New-doc can bypass the setup-only guard. | Decide whether every writer must refuse unsupported layouts, then place that policy in the shared boundary. This is source-confirmed; a separate writer runtime probe has not run. |
| K10 / P2 | Optional root-cleanup matching drops ordering/scope words and uses lexical similarity. Following delegated router text fixes coverage, not semantic equivalence. | Keep exact semantic review and explicit selected removals. A lexical match alone cannot authorize deleting a distinct rule. Wider matching changes remain separate. |
| K11 / P2 | Ordinary setup preflight reduces late failures but is not an atomic transaction. I/O failure can still leave partial writes. Migration's scoped rollback is a different guarantee. | State the limit. Define recovery or atomicity only with a concrete failure model and tests; do not infer it from idempotent reruns. |
| K12 / P2 | Planning approval recovery, review verdict storage, performance ledgers and long ship monitoring lack a uniform workspace return contract. | Specify their existing state destination, approval source, evidence baseline, partial work and next supported action. Reuse DEC/RES/task-result locations; do not add another status note by default. |

K1–K3 have executable local probes in `keystone-probes.json`. These are baseline results; the K1/K2 repairs follow them:

| Probe | Observed result |
|---|---|
| Non-migrated spec missing plan/todo | Check exits 0; status reports no active work and no red item. |
| Migrated spec missing plan/todo | Check exits 0. The existing migration fixture deliberately preserves this exception. |
| Resolved row linked to proposed DEC | Check exits 0; status lists the row as completed and reports no user wait. |
| Fresh spec from new-doc | All three files exist; check exits 0; status reports no active work. |

Sources for K1–K3: `scripts/workspace/check.ts` fixed-file/row validation, `scripts/workspace/effort.ts` effort discovery, `scripts/workspace/schema.ts` DEC fields, and baseline `skills/spec-driven-development/SKILL.md:167-169`. Checked 2026-11-05. These probes show CLI behavior; they do not show what a model does after seeing it.

K1 and K2 each have a CLI regression that fails before the fix and passes after it. Status now exposes the validation findings. All 85 checker tests and 361 workspace tests pass, and the review finds no remaining issue. Source: local `state-validation-result.md`, its test log and the main session's integrated checker review, checked 2026-11-05.

Sources for K4–K8: baseline spec skill lines 171/216; planning lines 177-190; incremental lines 221-224/275; review lines 162-177/201; idea-refine lines 74/198-212; its examples lines 29-31/66-68; interview Conversation and RESEARCH mode rules. The full main-skill and supporting-reference reports preserve the detailed source chain. Checked 2026-11-05. Their instruction conflicts and missing interfaces are static findings unless a runtime result is named above.

Sources for K9–K12: shared config/new-doc implementation, setup writer/overlap implementation, current review limits, and the main-skill ownership map. Checked 2026-11-05. The setup patch does not claim a whole-repository migration backup or semantic conversion of every old prose record.

### Upstream-owned findings and authority conflicts

| ID / priority | Evidence | Disposition |
|---|---|---|
| U1 / P1 | The vendored floor-guard reference discards untracked diffs because it treats Git exit 1 as failure. An invented unfinished file returns clean. It also prints matched source text; a fixture echoes a synthetic secret marker. | Runtime-confirmed reference defects. Fix upstream or choose an explicitly approved ownership/import route. Do not claim this reference provides verified enforcement now. |
| U2 / P2 | Vendored orchestration guidance describes user/slash-command orchestration, read-only Explore research and AGENTS intent mapping as “this repo.” Brain uses router-driven work and writable research records. | Scope the reached patterns to Brain's actual owners. Upstream examples do not replace Brain's workflow or single map writer. |
| U3 / P2 | Testing examples mock local utilities despite the reference's boundary rule and Brain's TDD rule. A skipped-test example permits deletion without the constraint workflow's context. | Propose an upstream example correction. This does not authorize deleting or weakening project tests. |
| U4 / P2, policy alignment | Constraint, doubt, browser and context guidance can reintroduce fixed question counts/defaults, repeated authorization or root-file requirements. Several claims about nested agents and tool interfaces are host-specific. | Preserve substantive safety and existing authority. Correct Brain-owned callers or send changes to the owning upstream. Do not locally edit vendored bytes or infer an unrequested platform migration. |
| U5 / P2, optional-cache guidance | The optional cache guide promises unchanged freshness. Its post hook obtains validators through a separate HEAD request after receiving the fetched body. A change between those requests can pair an old body with a new validator; a later 304 can then reuse that old body. Cache entries also use a URL-only key for prompt-shaped output, are repository-owned and unsigned, and curl follows redirects. | Treat these as static interoperability and trust limitations of optional, unwired source. Do not present them as an active installed vulnerability or a demonstrated attack. No cache port, hook activation or pin update is adopted. |

U1 sources: baseline `skills/constraint-driven-development/references/floor-guard.md:12,29-41,54,90,97`; local `floor-reference-probe/results.json`. The probe uses invented data and no real credential. U2 sources: baseline `references/orchestration-patterns.md:5,80-113,298,326`. U3 sources: baseline `references/testing-patterns.md:100-112` and its boundary/anti-pattern tables. U4 sources: baseline constraint lines 57-91/140, doubt lines 42-49/116-160/205, and browser/context main bodies. Checked 2026-11-05.

U5 sources: `hooks/SDD-CACHE.md`, `hooks/sdd-cache-pre.sh` and `hooks/sdd-cache-post.sh`, fully read by the root auditor and recorded in `root-reference-coverage.json`, checked 2026-11-05. No network-hook execution or attack probe ran. Historical issue status is not used as current evidence.

The research brief's pointer to agent-brief is already limited to useful durable-context, behavior, completion and scope principles. Tracker wording in that supporting source alone does not make tracker tickets part of Brain. Likewise, Definition of Done has distinct task, feature and release application scopes; it does not require every release check for a small task.

### Verification and remaining limits

- The final post-harness repository gate reports **1,080 pass, one existing network skip, zero failures** across 64 test files. Typecheck, lint, format, version, render, lifecycle, workspace and sync checks complete, with **53 vendored files matching the lock**. The following documentation-only save removes a trailing blank line and records this result; it changes no evaluated behavior. Source: `final-check.log`, checked 2026-11-05.
- Correctness, security, architecture, readability and performance reviews have no remaining findings in the reviewed 77-path implementation after the two correctness repairs. The evaluation harness and later model results are outside that review snapshot. Source: the five local review reports, checked 2026-11-05.
- Claude's real strict reports say **accepted with one approved warning** under Brain's wrapper policy. This is not an unmodified strict pass. Separate nonblocking directory/install advice remains visible. Source: `host-validation-final.log`, checked 2026-11-05.
- Antigravity validation succeeds with four non-truncation warnings: AGENTS delivery, GEMINI delivery, commands and missing marketplace version. No skill-body truncation warning remains. A passing validator does not prove full runtime loading. End-to-end plugin refresh remains unverified. Source: `host-validation-final.log` and the current Antigravity installation guide, checked 2026-11-05.
- The authorized bounded model comparison is complete. It does not establish every native client, dialog-rendering path, delayed reply, cancellation or concurrent worker-return scenario. Further external execution requires its own applicable scope; no standing permission is inferred. Source: retained comparison results and current user delegation, checked 2026-11-05.

### Bounded model comparison and delegated review

| Measure | Result |
|---|---|
| Retained comparison | Eight baseline/revised pairs; 16 sessions |
| Fixed criteria | 24/24 baseline and 24/24 revised |
| Actual model reported by traces | Claude Opus 5.5 |
| Reported cost, all 20 sessions | $7.4586142, including both excluded pairs |
| Reported cost, retained sessions | $5.6922206 |
| Reservation accounting | $30 reserved against the $32 cap; no run blocked by budget |
| Feedback | All 16 retained entries written and approved by the assistant under the user's explicit delegation |

The pilot pair and initial setup pair are excluded because the harness denied valid read-only access or catalog data. Those harness restrictions prevented a fair skill comparison. The retakes replace only those invalid pairs; other valid results remain. Excluded runs and their costs stay in the evidence. This is not permission to discard a valid unfavorable result.

Passing the fixed criteria in both arms establishes no measured reliability advantage. The traces also reveal concerns outside those criteria:

| Follow-up | Observation | Bound and next use |
|---|---|---|
| E1 / P2 | Several resumes omit the required user-visible five-line status. This occurs in both arms; case 7 shows it in the candidate alone. | Preserve as an observed reporting gap. Add visible-report evidence to a future bounded evaluation rather than equating internal state reads with a report shown to the user. |
| E2 / P2 | Some explanations make unsupported trade-off claims. | Attribute those claims to the model output; they are not verified facts. Evaluate evidence for recommendations and qualifications separately from selecting the right workflow. |

Sources: retained run traces, fixed-criteria grading, reservation/cost records and the 16-entry feedback file in the final local report bundle, checked 2026-11-05. The official skill-creator HTML review and this record accompany that feedback. The feedback is assistant review under delegation, not Peter's manual review.

The latest source inspection confirms that capability Toolchain identity uses both command and source, and spec Stage 1 step 3 reuses scoped seam approval. Future source changes require their evidence baseline to be checked again; the recorded gate result is not a permanent guarantee.

## Follow-ups

The remaining work is captured in [IDEA-004: Resolve the remaining keystone workflow findings](../ideas/IDEA-004-keystone-workflow-follow-ups.md). It gives K3–K12, U1–U5 and E1/E2 separate open rows, with this record as their evidence. Creating that map does not implement its findings.

The main session should keep these distinct:

1. **Completed narrow correctness work:** K1/K2 are implemented and reviewed. Preserve their migration and accepted-history exceptions in later changes.
2. **User representation choices:** pending spec/plan/approval state and external-spec ownership. Ask about a new detour record representation or review owner only when supported alternatives change the agreed workflow. Resolve discoverable implementation details first, then ask one remaining choice at a time.
3. **Upstream work:** floor-guard correctness/redaction and contradictory vendored examples. Any upstream send, PR or new import needs the appropriate explicit scope.
4. **Separate verification follow-ups:** E1 user-visible status and E2 unsupported trade-off claims, plus untested native host surfaces. Keep static, process, scripted-event and native-dialog evidence separate. The current bounded comparison is complete.
5. **Scope boundary:** the no-root-edit requirement covers installing and starting Brain. Whether a separately requested constraints-writing task may edit project root guidance is not silently decided here.

No new numbered idea, spec, decision or plan is created by this synthesis. This RES records findings and current authority, not implementation approval for its follow-ups.

## Next action
None for the bounded source audit, approved repairs and completed comparison. Its findings, approvals, evidence and limits are recorded. The main session completes the final post-harness check and packages this record, feedback and the official HTML review for delivery.

K3–K12, U1–U5 and E1/E2 remain separate follow-ups. Their presence does not reopen this completed bounded audit or imply approval to implement them. No blanket architecture, push, merge, release, installation or further model-run authority follows from the delegated approval.
