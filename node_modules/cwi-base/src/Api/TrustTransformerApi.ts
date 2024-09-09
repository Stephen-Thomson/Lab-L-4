export interface CertifierDetails {
  name: string
  icon: string
  note: string
  publicKey: string
  trust: number
}

export interface Result {
  subject: string;
  certifier: string;
}

export interface Settings {
  trustThreshold: number
}

export interface TrustEvaluatorParams {
  settings: Settings
  certifiers: CertifierDetails[]
  results: Result[]
}

export interface IdentityGroupMember {
  certifier: CertifierDetails
  subject: string
}

export interface IdentityGroup {
  totalTrust: number
  members: IdentityGroupMember[]
}