# brain

brain guides coding agents from an idea to shipped code. This glossary holds the words for\
how brain defines work and records what was decided and found.

## Language

### The lifecycle

**Stage**:\
One part of the lifecycle that takes work from an idea to shipped code: define, plan, build,\
verify, review or ship. The gap between two stages is a stage boundary.\
*Avoid*: phase (for the lifecycle)

### Defining work

**Idea**:\
A body of work being defined: its intent, its destination and its tasks, kept in one file\
whether or not it ever becomes a spec. Its status is define while its tasks are worked through,\
specced once a spec carries it on, done once it ends in a decision or a change with no spec,\
and parked when the user sets it aside.\
*Avoid*: proposal, brief, initiative

**Effort**:\
The idea or spec that a session works on. The active effort is the one that is not finished.\
*Avoid*: project, workstream

**Destination**:\
What reaching the end of an idea's tasks looks like: the spec, decision or change the idea is\
finding its way to.\
*Avoid*: goal, target

**Task index**:\
The list of an idea's or spec's tasks, generated into its idea.md or spec.md. It holds no detail and is never edited by hand.\
*Avoid*: map, ticket list, board

**Task**:\
One unit of work in an idea or spec, kept in its own file, with a state, the tasks it is blocked by, and a link to its result.\
*Avoid*: row, ticket, node, item

**Decide task**:\
A task assigned to the user, which only they can complete: an interview question, a pick between prototypes, a choice between ideas, or a review.\
*Avoid*: decide row, HITL ticket, grilling ticket

**Research task**:\
A task a sub-agent completes by finding facts and citing their sources.\
*Avoid*: research row, fact row, spike

**Do task**:\
A task completed by work that a later decision needs, done by the agent or by the user from a checklist.\
*Avoid*: do row, build step, chore

**Frontier**:\
Every ready task. It is worked out from the task files each time, never written down.\
*Avoid*: next up, ready list

**Fog**:\
Questions known to be coming that cannot yet be stated precisely. Fog sharpens into tasks as\
the frontier moves.\
*Avoid*: backlog, later

### Planning work

**Phase**:\
Not a unit of work in brain. A skill may number its own sections as phases (idea-refine, debugging); those are sections of that skill.\
*Avoid*: phase (for a group of tasks), milestone

**Checkpoint**:\
A decide task where the user verifies and reviews the work so far. The tasks that build on that work are blocked by it.\
*Avoid*: gate, milestone

### Records

**Decision record**:\
A file that records one decision the user made, with its reason and its evidence. Its prefix\
is `DEC`. An architecture decision is a decision record of the architecture kind.\
*Avoid*: ADR (as a separate type), decision log

**Research record**:\
A file that records the findings for one research task or do task, each finding with its\
source. Its prefix is `RES`.\
*Avoid*: notes, findings doc

**Claim**:\
One agent's hold on the next free number for a record, so that no two agents take the same\
number.\
*Avoid*: lock, reservation

### Working in a repo

**Workspace**:\
A repo's folders for ideas, decisions, research and specs, with the naming rules they follow.\
*Avoid*: docs tree, structure

**Layout 1**:\
The files of brain 0.9 and earlier, before the workspace: a root `SPEC.md` or `spec/`, one plan in `tasks/`, and ADRs as `docs/decisions/0001-<slug>.md`. setup-brain's migrate mode moves a repo from layout 1 to the workspace, which `docs/agents/workspace.md` records as `layout: 2`.\
*Avoid*: 0.8 layout, old layout

**Protocol**:\
The rules brain carries into every session on every host: how a session starts, checks its\
skills and servers, briefs sub-agents and ends a task.\
*Avoid*: brain section, rules block
