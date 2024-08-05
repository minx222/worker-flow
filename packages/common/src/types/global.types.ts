export type Value = string | number | boolean | null | undefined | Value[] | { [key: string]: Value }
export type Json = Record<string, Value>
