import { useState } from 'react'
export const useRefs = (...refs) => useState(refs.map(ref => ({ current: ref })))[0]
export * from './useKeyBindings'
export * from './useListContext'
export * from './useProject'