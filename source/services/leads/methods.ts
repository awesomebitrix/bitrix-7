import { ListParams, Method } from './../../method.types'
import { GetPayload, ListPayload } from './../../payload.types'
import { Lead } from './entities'

export interface LeadsMethods {
  readonly [Method.CREATE_LEAD]: {
    readonly type: Lead
    readonly payload: GetPayload<number>
    readonly params: {
      readonly fields: Partial<Lead>
      readonly params?: {
        readonly REGISTER_SONET_EVENT: 'Y' | 'N'
      }
    }
  }
  readonly [Method.GET_LEAD]: {
    readonly type: Lead
    readonly payload: GetPayload<Lead>
    readonly params: {
      readonly id: string
    }
  }
  readonly [Method.LIST_LEADS]: {
    readonly type: Lead
    readonly payload: ListPayload<Lead>
    readonly params: ListParams
  }
  readonly [Method.UPDATE_LEAD]: {
    readonly type: Lead
    readonly payload: GetPayload<boolean>
    readonly params: {
      readonly id: string
      readonly fields: Record<string, any>
      readonly params?: {
        readonly REGISTER_SONET_EVENT: 'Y' | 'N'
      }
    }
  }
}