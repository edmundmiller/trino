---
title: Alter Branch
description: Alter Branch documentation
---
# ALTER BRANCH

## Synopsis

```text
ALTER BRANCH source_branch IN TABLE table_name FAST FORWARD TO target_branch
```

## Description

Fast-forward the current snapshot of one branch to the latest snapshot of
another.

## Examples

Fast-forward the `main` branch to the head of `audit` branch in the `orders`
table:

```sql
ALTER BRANCH main IN TABLE orders FAST FORWARD TO audit
```

## See also

- [create-branch](/docs/create-branch)
- [drop-branch](/docs/drop-branch)
