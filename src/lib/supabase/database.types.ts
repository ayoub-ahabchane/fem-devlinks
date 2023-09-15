export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      userlinks: {
        Row: {
          created_at: string
          id: string
          platform_name: string
          url: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          platform_name: string
          url: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          platform_name?: string
          url?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "userlinks_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      userprofile: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          links: Json[] | null
          username: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          first_name: string
          id: string
          last_name: string
          links?: Json[] | null
          username: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          links?: Json[] | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "userprofile_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_unique_username: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_user_details: {
        Args: {
          user_id_in: string
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
