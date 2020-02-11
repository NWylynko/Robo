export interface client {
  id: string;
  identity: identity;
}

export interface identity {
  type: string;
  name: string;
  version: string;
}