import { useContext } from 'react'
import { CyclesContext, CyclesContextType } from '../contexts/CyclesContext'

export function useCycles(): CyclesContextType {
  return useContext(CyclesContext)
}
