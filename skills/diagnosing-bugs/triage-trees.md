# Common-breakage triage trees

The fast path for ordinary failures. A failure that survives these trees is a hard bug: return
to SKILL.md and build the feedback loop.

## Contents
- Test failure
- Build failure
- Runtime error

## Test failure

```
Test fails after code change:
├── Did you change code the test covers?
│   └── YES → Check if the test or the code is wrong
│       ├── Test is outdated → Update the test
│       └── Code has a bug → Fix the code
├── Did you change unrelated code?
│   └── YES → Likely a side effect → Check shared state, imports, globals
└── Test was already flaky?
    └── Check for timing issues, order dependence, external dependencies
```

## Build failure

```
Build fails:
├── Type error → Read the error, check the types at the cited location
├── Import error → Check the module exists, exports match, paths are correct
├── Config error → Check build config files for syntax/schema issues
├── Dependency error → Check the manifest, reinstall dependencies
└── Environment error → Check runtime version, OS compatibility
```

## Runtime error

```
Runtime error:
├── TypeError: cannot read property of undefined
│   └── Something is null that shouldn't be → trace where the value comes from
├── Network error / CORS
│   └── Check URLs, headers, server CORS config
├── Render error / white screen
│   └── Check error boundary, console, component tree
└── Unexpected behavior, no error
    └── This is a hard bug — build the loop (SKILL.md Phase 1)
```
