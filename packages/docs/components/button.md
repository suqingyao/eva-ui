---
title: Button
lang: en-US
---

# Button

Buttons allow the user to take actions or make choices.

## Basic usage

Use `type` and `light` to define Button's style.

<demo src="../example/button/basic.vue"></demo>

## Button Props

| Name     | Type                                                                      | Default     | Description                            |
| -------- | ------------------------------------------------------------------------- | ----------- | -------------------------------------- |
| type     | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | Button type.                           |
| size     | `'xs' \| 'sm' \| 'md' \| 'lg'`                                            | `'md'`      | Button size.                           |
| light    | `boolean`                                                                 | `false`     | Determine whether it's a light button. |
| text     | `boolean`                                                                 | `false`     | Determine whether it's a text button.  |
| to       | `string`                                                                  | `undefined` | Determine whether it's a link button.  |
| rounded  | `boolean`                                                                 | `false`     | Determine whether it's a round button. |
| loading  | `boolean`                                                                 | `false`     | Determine whether it's loading.        |
| disabled | `boolean`                                                                 | `false`     | Disable the button.                    |

## Button Slots

| Name    | Parameters | Description                |
| ------- | ---------- | -------------------------- |
| default | `()`       | Customize default content. |
| icon    | `()`       | Customize icon component.  |
