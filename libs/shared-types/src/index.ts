// User types
export interface User {
  id: string;
  email: string;
  username: string;
  role: 'player' | 'dm' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDto {
  email: string;
  username: string;
  password: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

// Campaign types
export interface Campaign {
  id: string;
  name: string;
  description: string;
  dmId: string;
  status: 'active' | 'paused' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCampaignDto {
  name: string;
  description?: string;
}

// Character types
export interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  userId: string;
  campaignId: string;
  stats: CharacterStats;
  inventory: InventoryItem[];
  avatarUrl?: string;
}

export interface CharacterStats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hp: number;
  maxHp: number;
  ac: number;
}

export interface InventoryItem {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  weight?: number;
}