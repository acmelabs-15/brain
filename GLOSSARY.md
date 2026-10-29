# brain

brain guides coding agents from an idea to shipped code. This glossary holds the words for
how brain defines work and records what was decided and found.

## Language

### Defining work

**Idea**:
A body of work being defined: its intent, its destination and its map, kept in one file
whether or not it ever becomes a spec.
_Avoid_: proposal, brief, initiative

**Effort**:
The idea or spec that a session works on. The active effort is the one that is not finished.
_Avoid_: project, workstream

**Destination**:
What reaching the end of an idea's map looks like: the spec, decision or change the idea is
finding its way to.
_Avoid_: goal, target

**Map**:
An idea's design tree, written down as an index of rows. Each resolved row points to the
record that resolved it; the map itself holds no detail.
_Avoid_: design tree (for the written form), ticket list, board

**Row**:
One question in a map, or one task in a plan, with a status, the rows that block it, and a
link to its result.
_Avoid_: ticket, node, item

**Decide row**:
A row the user resolves: an interview question, a pick between prototypes, or a choice
between ideas.
_Avoid_: HITL ticket, grilling ticket

**Research row**:
A row a sub-agent resolves by finding facts and citing their sources.
_Avoid_: fact row, spike

**Do row**:
A row resolved by work that a later decision needs, done by the agent or by the user from a
checklist. Its type in the map is `task`.
_Avoid_: build step, chore

**Frontier**:
Every open row whose blocking rows are all resolved. It is worked out from the map each
time, never written down.
_Avoid_: next up, ready list

**Fog**:
Questions known to be coming that cannot yet be stated precisely. Fog sharpens into rows as
the frontier moves.
_Avoid_: backlog, later

### Records

**Decision record**:
A file that records one decision the user made, with its reason and its evidence. Its prefix
is `DEC`. An architecture decision is a decision record of the architecture kind.
_Avoid_: ADR (as a separate type), decision log

**Research record**:
A file that records the findings for one research row or do row, each finding with its
source. Its prefix is `RES`.
_Avoid_: notes, findings doc

**Claim**:
One agent's hold on the next free number for a record, so that no two agents take the same
number.
_Avoid_: lock, reservation

### Working in a repo

**Workspace**:
A repo's folders for ideas, decisions, research and specs, with the naming rules they follow.
_Avoid_: docs tree, structure

**Protocol**:
The rules brain carries into every session on every host: how a session starts, checks its
skills and servers, briefs sub-agents and ends a task.
_Avoid_: brain section, rules block
