export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3"
  }
  public: {
    Tables: {
      bugs: {
        Row: {
          created_at: string
          description: string
          id: number
          is_blocking: boolean
          status: number
          submitter: string | null
          title: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: number
          is_blocking?: boolean
          status?: number
          submitter?: string | null
          title: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          is_blocking?: boolean
          status?: number
          submitter?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "bugs_status_fkey"
            columns: ["status"]
            isOneToOne: false
            referencedRelation: "bugs__status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bugs_submitter_fkey"
            columns: ["submitter"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bugs_submitter_fkey"
            columns: ["submitter"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "bugs_submitter_fkey"
            columns: ["submitter"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bugs_submitter_fkey"
            columns: ["submitter"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      bugs__medias__attr: {
        Row: {
          bug: number
          created_at: string
          id: number
          media: string
        }
        Insert: {
          bug: number
          created_at?: string
          id?: number
          media: string
        }
        Update: {
          bug?: number
          created_at?: string
          id?: number
          media?: string
        }
        Relationships: [
          {
            foreignKeyName: "bugs__medias__attr_bug_fkey"
            columns: ["bug"]
            isOneToOne: false
            referencedRelation: "bugs"
            referencedColumns: ["id"]
          },
        ]
      }
      bugs__status: {
        Row: {
          color: string
          created_at: string
          id: number
          order: number
          status: string
        }
        Insert: {
          color: string
          created_at?: string
          id?: number
          order: number
          status: string
        }
        Update: {
          color?: string
          created_at?: string
          id?: number
          order?: number
          status?: string
        }
        Relationships: []
      }
      bugs__threads: {
        Row: {
          bug: number
          created_at: string
          description: string | null
          id: number
          title: string
          user: string
        }
        Insert: {
          bug: number
          created_at?: string
          description?: string | null
          id?: number
          title: string
          user: string
        }
        Update: {
          bug?: number
          created_at?: string
          description?: string | null
          id?: number
          title?: string
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "bugs__threads_bug_fkey"
            columns: ["bug"]
            isOneToOne: false
            referencedRelation: "bugs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bugs__threads_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bugs__threads_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "bugs__threads_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bugs__threads_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar__dow: {
        Row: {
          created_at: string
          day_code: number
          dow_en: string
          dow_short_en: string
          id: number
        }
        Insert: {
          created_at?: string
          day_code: number
          dow_en: string
          dow_short_en: string
          id?: number
        }
        Update: {
          created_at?: string
          day_code?: number
          dow_en?: string
          dow_short_en?: string
          id?: number
        }
        Relationships: []
      }
      calendar__slots: {
        Row: {
          active: boolean
          created_at: string
          id: number
          time_from: string
          time_to: string
        }
        Insert: {
          active: boolean
          created_at?: string
          id?: number
          time_from: string
          time_to: string
        }
        Update: {
          active?: boolean
          created_at?: string
          id?: number
          time_from?: string
          time_to?: string
        }
        Relationships: []
      }
      collaboration__status: {
        Row: {
          created_at: string
          id: number
          status: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          status?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          status?: string | null
        }
        Relationships: []
      }
      collaboration_request: {
        Row: {
          budget: string
          category: string | null
          co_manager: string[] | null
          cover_picture: string | null
          created_at: string
          description: string | null
          ending_date: string | null
          id: number
          project_type: string | null
          rating: number | null
          request_number: number | null
          requested_talent_id: string | null
          starting_date: string | null
          status: number | null
          talent_needed: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          budget: string
          category?: string | null
          co_manager?: string[] | null
          cover_picture?: string | null
          created_at?: string
          description?: string | null
          ending_date?: string | null
          id?: number
          project_type?: string | null
          rating?: number | null
          request_number?: number | null
          requested_talent_id?: string | null
          starting_date?: string | null
          status?: number | null
          talent_needed?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          budget?: string
          category?: string | null
          co_manager?: string[] | null
          cover_picture?: string | null
          created_at?: string
          description?: string | null
          ending_date?: string | null
          id?: number
          project_type?: string | null
          rating?: number | null
          request_number?: number | null
          requested_talent_id?: string | null
          starting_date?: string | null
          status?: number | null
          talent_needed?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "collaboration_request_requested_talent_id_fkey"
            columns: ["requested_talent_id"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collaboration_request_requested_talent_id_fkey"
            columns: ["requested_talent_id"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "collaboration_request_requested_talent_id_fkey"
            columns: ["requested_talent_id"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collaboration_request_requested_talent_id_fkey"
            columns: ["requested_talent_id"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collaboration_request_status_fkey"
            columns: ["status"]
            isOneToOne: false
            referencedRelation: "collaboration__status"
            referencedColumns: ["id"]
          },
        ]
      }
      collaborations__draft: {
        Row: {
          budget: string
          category: string | null
          co_manager: string[] | null
          cover_picture: string | null
          created_at: string
          ending_date: string | null
          id: number
          project_type: string | null
          rating: number | null
          requested_talent_id: string | null
          starting_date: string | null
          status: number | null
          talent_needed: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          budget: string
          category?: string | null
          co_manager?: string[] | null
          cover_picture?: string | null
          created_at?: string
          ending_date?: string | null
          id?: number
          project_type?: string | null
          rating?: number | null
          requested_talent_id?: string | null
          starting_date?: string | null
          status?: number | null
          talent_needed?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          budget?: string
          category?: string | null
          co_manager?: string[] | null
          cover_picture?: string | null
          created_at?: string
          ending_date?: string | null
          id?: number
          project_type?: string | null
          rating?: number | null
          requested_talent_id?: string | null
          starting_date?: string | null
          status?: number | null
          talent_needed?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "collaborations__draft_requested_talent_id_fkey"
            columns: ["requested_talent_id"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collaborations__draft_requested_talent_id_fkey"
            columns: ["requested_talent_id"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "collaborations__draft_requested_talent_id_fkey"
            columns: ["requested_talent_id"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collaborations__draft_requested_talent_id_fkey"
            columns: ["requested_talent_id"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collaborations__draft_status_fkey"
            columns: ["status"]
            isOneToOne: false
            referencedRelation: "collaboration__status"
            referencedColumns: ["id"]
          },
        ]
      }
      collaborations__featured_feed: {
        Row: {
          categories: string[] | null
          collaboration_id: number | null
          created_at: string
          file: string | null
          id: number
        }
        Insert: {
          categories?: string[] | null
          collaboration_id?: number | null
          created_at?: string
          file?: string | null
          id?: number
        }
        Update: {
          categories?: string[] | null
          collaboration_id?: number | null
          created_at?: string
          file?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "collaborations__featured_feed_collaboration_id_fkey"
            columns: ["collaboration_id"]
            isOneToOne: false
            referencedRelation: "collaborations__draft"
            referencedColumns: ["id"]
          },
        ]
      }
      collaborations__ressources: {
        Row: {
          collaboration_id: number | null
          created_at: string
          file: string[] | null
          id: number
          title: string | null
        }
        Insert: {
          collaboration_id?: number | null
          created_at?: string
          file?: string[] | null
          id?: number
          title?: string | null
        }
        Update: {
          collaboration_id?: number | null
          created_at?: string
          file?: string[] | null
          id?: number
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "collaborations__ressources_collaboration_id_fkey"
            columns: ["collaboration_id"]
            isOneToOne: false
            referencedRelation: "collaborations__draft"
            referencedColumns: ["id"]
          },
        ]
      }
      collaborations__users: {
        Row: {
          collaboration_id: number | null
          created_at: string
          id: number
          user_id: string | null
        }
        Insert: {
          collaboration_id?: number | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Update: {
          collaboration_id?: number | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "collaborations__users_collaboration_id_fkey"
            columns: ["collaboration_id"]
            isOneToOne: false
            referencedRelation: "collaborations__draft"
            referencedColumns: ["id"]
          },
        ]
      }
      collaborations_rating: {
        Row: {
          collaboration_id: number | null
          created_at: string
          id: number
          rate: number | null
          review: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          collaboration_id?: number | null
          created_at?: string
          id?: number
          rate?: number | null
          review?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          collaboration_id?: number | null
          created_at?: string
          id?: number
          rate?: number | null
          review?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "collaborations_rating_collaboration_id_fkey"
            columns: ["collaboration_id"]
            isOneToOne: false
            referencedRelation: "collaborations__draft"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          created_at: string
          id: string
          is_super_company: boolean
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_super_company?: boolean
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_super_company?: boolean
          name?: string | null
        }
        Relationships: []
      }
      design_system: {
        Row: {
          created_at: string
          element: string
          id: number
          value: Json | null
        }
        Insert: {
          created_at?: string
          element: string
          id?: number
          value?: Json | null
        }
        Update: {
          created_at?: string
          element?: string
          id?: number
          value?: Json | null
        }
        Relationships: []
      }
      feature_requests: {
        Row: {
          created_at: string
          full_description: string | null
          id: number
          is_duplicate: boolean
          short_description: string
          status: number
          submitter: string
          title: string
          type: number
        }
        Insert: {
          created_at?: string
          full_description?: string | null
          id?: number
          is_duplicate: boolean
          short_description: string
          status?: number
          submitter: string
          title: string
          type: number
        }
        Update: {
          created_at?: string
          full_description?: string | null
          id?: number
          is_duplicate?: boolean
          short_description?: string
          status?: number
          submitter?: string
          title?: string
          type?: number
        }
        Relationships: [
          {
            foreignKeyName: "feature_requests_status_fkey"
            columns: ["status"]
            isOneToOne: false
            referencedRelation: "feature_requests__status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests_submitter_fkey"
            columns: ["submitter"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests_submitter_fkey"
            columns: ["submitter"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "feature_requests_submitter_fkey"
            columns: ["submitter"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests_submitter_fkey"
            columns: ["submitter"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "feature_requests__types"
            referencedColumns: ["id"]
          },
        ]
      }
      feature_requests__actions: {
        Row: {
          action: string
          created_at: string
          id: number
        }
        Insert: {
          action: string
          created_at?: string
          id?: number
        }
        Update: {
          action?: string
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      feature_requests__downvotes: {
        Row: {
          created_at: string
          feature_request: number
          id: number
          user: string
        }
        Insert: {
          created_at?: string
          feature_request: number
          id?: number
          user: string
        }
        Update: {
          created_at?: string
          feature_request?: number
          id?: number
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "feature_requests__downvotes_feature_request_fkey"
            columns: ["feature_request"]
            isOneToOne: false
            referencedRelation: "feature_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests__downvotes_feature_request_fkey"
            columns: ["feature_request"]
            isOneToOne: false
            referencedRelation: "feature_requests_with_votes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests__downvotes_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests__downvotes_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "feature_requests__downvotes_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests__downvotes_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      feature_requests__status: {
        Row: {
          created_at: string
          id: number
          order: number
          status: string
        }
        Insert: {
          created_at?: string
          id?: number
          order: number
          status: string
        }
        Update: {
          created_at?: string
          id?: number
          order?: number
          status?: string
        }
        Relationships: []
      }
      feature_requests__threads: {
        Row: {
          action: number
          content: string
          created_at: string
          feature_to_keep: number | null
          id: number
          user: string
        }
        Insert: {
          action: number
          content: string
          created_at?: string
          feature_to_keep?: number | null
          id?: number
          user: string
        }
        Update: {
          action?: number
          content?: string
          created_at?: string
          feature_to_keep?: number | null
          id?: number
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "feature_requests__threads_action_fkey"
            columns: ["action"]
            isOneToOne: false
            referencedRelation: "feature_requests__actions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests__threads_feature_to_keep_fkey"
            columns: ["feature_to_keep"]
            isOneToOne: false
            referencedRelation: "feature_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests__threads_feature_to_keep_fkey"
            columns: ["feature_to_keep"]
            isOneToOne: false
            referencedRelation: "feature_requests_with_votes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests__threads_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests__threads_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "feature_requests__threads_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests__threads_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      feature_requests__types: {
        Row: {
          color: string
          created_at: string
          id: number
          type: string
        }
        Insert: {
          color: string
          created_at?: string
          id?: number
          type: string
        }
        Update: {
          color?: string
          created_at?: string
          id?: number
          type?: string
        }
        Relationships: []
      }
      feature_requests__upvotes: {
        Row: {
          created_at: string
          feature_request: number
          id: number
          user: string
        }
        Insert: {
          created_at?: string
          feature_request: number
          id?: number
          user: string
        }
        Update: {
          created_at?: string
          feature_request?: number
          id?: number
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "feature_requests__upvotes_feature_request_fkey"
            columns: ["feature_request"]
            isOneToOne: false
            referencedRelation: "feature_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests__upvotes_feature_request_fkey"
            columns: ["feature_request"]
            isOneToOne: false
            referencedRelation: "feature_requests_with_votes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests__upvotes_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests__upvotes_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "feature_requests__upvotes_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests__upvotes_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      feed: {
        Row: {
          author: string | null
          content: string
          created_at: string
          id: number
          image_showcase: string | null
          showcase_type: number | null
          title: string
          type: number
          video_showcase: string | null
        }
        Insert: {
          author?: string | null
          content: string
          created_at?: string
          id?: number
          image_showcase?: string | null
          showcase_type?: number | null
          title: string
          type: number
          video_showcase?: string | null
        }
        Update: {
          author?: string | null
          content?: string
          created_at?: string
          id?: number
          image_showcase?: string | null
          showcase_type?: number | null
          title?: string
          type?: number
          video_showcase?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feed_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feed_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "feed_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feed_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feed_showcase_type_fkey"
            columns: ["showcase_type"]
            isOneToOne: false
            referencedRelation: "feed__showcase_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feed_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "feed__types"
            referencedColumns: ["id"]
          },
        ]
      }
      feed__showcase_type: {
        Row: {
          created_at: string
          id: number
          picto: string | null
          type: string
        }
        Insert: {
          created_at?: string
          id?: number
          picto?: string | null
          type: string
        }
        Update: {
          created_at?: string
          id?: number
          picto?: string | null
          type?: string
        }
        Relationships: []
      }
      feed__types: {
        Row: {
          created_at: string
          icon: string | null
          id: number
          type: string
        }
        Insert: {
          created_at?: string
          icon?: string | null
          id?: number
          type: string
        }
        Update: {
          created_at?: string
          icon?: string | null
          id?: number
          type?: string
        }
        Relationships: []
      }
      inbox: {
        Row: {
          assigned_to: string | null
          collaboration_id: number | null
          created_at: string | null
          id: number
          status: string | null
          submission_number: number | null
          type: string | null
          user_id: string | null
        }
        Insert: {
          assigned_to?: string | null
          collaboration_id?: number | null
          created_at?: string | null
          id?: never
          status?: string | null
          submission_number?: number | null
          type?: string | null
          user_id?: string | null
        }
        Update: {
          assigned_to?: string | null
          collaboration_id?: number | null
          created_at?: string | null
          id?: never
          status?: string | null
          submission_number?: number | null
          type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inbox_collaboration_id_fkey"
            columns: ["collaboration_id"]
            isOneToOne: false
            referencedRelation: "collaboration_full_detail"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inbox_collaboration_id_fkey"
            columns: ["collaboration_id"]
            isOneToOne: false
            referencedRelation: "collaboration_request"
            referencedColumns: ["id"]
          },
        ]
      }
      interactions: {
        Row: {
          created_at: string
          date: string | null
          id: number
          to_user: string | null
          type: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          id?: number
          to_user?: string | null
          type: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          date?: string | null
          id?: number
          to_user?: string | null
          type?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interactions_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "interactions__type"
            referencedColumns: ["id"]
          },
        ]
      }
      interactions__type: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      kv_store_214f66e0: {
        Row: {
          key: string
          value: Json
        }
        Insert: {
          key: string
          value: Json
        }
        Update: {
          key?: string
          value?: Json
        }
        Relationships: []
      }
      medias: {
        Row: {
          created_at: string | null
          meta: Json | null
          mime: string | null
          name: string
          path: string | null
          size: number | null
          type: string | null
          url: string | null
        }
        Insert: {
          created_at?: string | null
          meta?: Json | null
          mime?: string | null
          name: string
          path?: string | null
          size?: number | null
          type?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string | null
          meta?: Json | null
          mime?: string | null
          name?: string
          path?: string | null
          size?: number | null
          type?: string | null
          url?: string | null
        }
        Relationships: []
      }
      onboarding__steps: {
        Row: {
          applies_to_role: string
          id: number
          is_role_specific: boolean | null
          order: number
          title: string
        }
        Insert: {
          applies_to_role: string
          id?: never
          is_role_specific?: boolean | null
          order: number
          title: string
        }
        Update: {
          applies_to_role?: string
          id?: never
          is_role_specific?: boolean | null
          order?: number
          title?: string
        }
        Relationships: []
      }
      onboarding__steps__completion: {
        Row: {
          created_at: string | null
          id: number
          step_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: never
          step_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: never
          step_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "onboarding__steps__completion_step_id_fkey"
            columns: ["step_id"]
            isOneToOne: false
            referencedRelation: "onboarding__steps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "onboarding__steps__completion_step_id_fkey"
            columns: ["step_id"]
            isOneToOne: false
            referencedRelation: "onboarding__steps__detail"
            referencedColumns: ["step_id"]
          },
        ]
      }
      rooms: {
        Row: {
          created_at: string
          end: string | null
          id: number
          name: string
          owner: string
          start: string | null
        }
        Insert: {
          created_at?: string
          end?: string | null
          id?: number
          name: string
          owner: string
          start?: string | null
        }
        Update: {
          created_at?: string
          end?: string | null
          id?: number
          name?: string
          owner?: string
          start?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rooms_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rooms_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "rooms_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rooms_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      rooms__attendees__attr: {
        Row: {
          attendee: string
          created_at: string
          id: number
          room: number
        }
        Insert: {
          attendee: string
          created_at?: string
          id?: number
          room: number
        }
        Update: {
          attendee?: string
          created_at?: string
          id?: number
          room?: number
        }
        Relationships: [
          {
            foreignKeyName: "rooms__attendees__attr_attendee_fkey"
            columns: ["attendee"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rooms__attendees__attr_attendee_fkey"
            columns: ["attendee"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "rooms__attendees__attr_attendee_fkey"
            columns: ["attendee"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rooms__attendees__attr_attendee_fkey"
            columns: ["attendee"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rooms__attendees__attr_room_fkey"
            columns: ["room"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      submission_counters: {
        Row: {
          counter: number | null
          role_type: string
        }
        Insert: {
          counter?: number | null
          role_type: string
        }
        Update: {
          counter?: number | null
          role_type?: string
        }
        Relationships: []
      }
      users__absences: {
        Row: {
          created_at: string
          end_date: string | null
          id: number
          start_date: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          end_date?: string | null
          id?: number
          start_date?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          end_date?: string | null
          id?: number
          start_date?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      users__availabilities__attr: {
        Row: {
          created_at: string
          dow: number
          id: number
          slot: number
          user: string
        }
        Insert: {
          created_at?: string
          dow: number
          id?: number
          slot: number
          user: string
        }
        Update: {
          created_at?: string
          dow?: number
          id?: number
          slot?: number
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "users__availabilities__attr_dow_fkey"
            columns: ["dow"]
            isOneToOne: false
            referencedRelation: "calendar__dow"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__availabilities__attr_slot_fkey"
            columns: ["slot"]
            isOneToOne: false
            referencedRelation: "calendar__slots"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__availabilities__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__availabilities__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__availabilities__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__availabilities__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users__bringer: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      users__bringer__attr: {
        Row: {
          bringer: number
          created_at: string
          id: number
          user: string
        }
        Insert: {
          bringer: number
          created_at?: string
          id?: number
          user: string
        }
        Update: {
          bringer?: number
          created_at?: string
          id?: number
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "users__bringer__attr_bringer_fkey"
            columns: ["bringer"]
            isOneToOne: false
            referencedRelation: "users__bringer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__bringer__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__bringer__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__bringer__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__bringer__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users__company: {
        Row: {
          created_at: string
          id: number
          name: string | null
          user_id: string
          website: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          user_id: string
          website?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          user_id?: string
          website?: string | null
        }
        Relationships: []
      }
      users__educations: {
        Row: {
          country: string | null
          created_at: string
          expertise: number | null
          id: number
          name: string
          school: string | null
          user: string | null
          year_from: number | null
          year_to: number | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          expertise?: number | null
          id?: number
          name: string
          school?: string | null
          user?: string | null
          year_from?: number | null
          year_to?: number | null
        }
        Update: {
          country?: string | null
          created_at?: string
          expertise?: number | null
          id?: number
          name?: string
          school?: string | null
          user?: string | null
          year_from?: number | null
          year_to?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "users__educations_expertise_fkey"
            columns: ["expertise"]
            isOneToOne: false
            referencedRelation: "users__expertises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__educations_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__educations_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__educations_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__educations_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users__experiences: {
        Row: {
          company: string | null
          country: string | null
          created_at: string
          description: string | null
          id: number
          title: string
          user: string | null
          year_from: number | null
          year_to: number | null
        }
        Insert: {
          company?: string | null
          country?: string | null
          created_at?: string
          description?: string | null
          id?: number
          title: string
          user?: string | null
          year_from?: number | null
          year_to?: number | null
        }
        Update: {
          company?: string | null
          country?: string | null
          created_at?: string
          description?: string | null
          id?: number
          title?: string
          user?: string | null
          year_from?: number | null
          year_to?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "users__experiences_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__experiences_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__experiences_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__experiences_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users__experiences__expertises__attr: {
        Row: {
          created_at: string
          experience: number
          expertise: number
          id: number
        }
        Insert: {
          created_at?: string
          experience: number
          expertise: number
          id?: number
        }
        Update: {
          created_at?: string
          experience?: number
          expertise?: number
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "users__experiences__expertises__attr_experience_fkey"
            columns: ["experience"]
            isOneToOne: false
            referencedRelation: "users__experiences"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__expertises__attr_expertise_fkey"
            columns: ["expertise"]
            isOneToOne: false
            referencedRelation: "users__expertises"
            referencedColumns: ["id"]
          },
        ]
      }
      users__expertises: {
        Row: {
          created_at: string
          expertise: string
          id: number
        }
        Insert: {
          created_at?: string
          expertise: string
          id?: number
        }
        Update: {
          created_at?: string
          expertise?: string
          id?: number
        }
        Relationships: []
      }
      users__feed__attr: {
        Row: {
          created_at: string
          feed: number
          id: number
          user: string
        }
        Insert: {
          created_at?: string
          feed: number
          id?: number
          user: string
        }
        Update: {
          created_at?: string
          feed?: number
          id?: number
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "users__feed__attr_feed_fkey"
            columns: ["feed"]
            isOneToOne: false
            referencedRelation: "feed"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__feed__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__feed__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__feed__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__feed__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users__intentions: {
        Row: {
          created_at: string
          id: number
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      users__intentions__attr: {
        Row: {
          created_at: string
          id: number
          intention_id: number | null
          user: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          intention_id?: number | null
          user?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          intention_id?: number | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users__intentions__attr_intention_id_fkey"
            columns: ["intention_id"]
            isOneToOne: false
            referencedRelation: "users__intentions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__intentions__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__intentions__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__intentions__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__intentions__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users__interactions__attr: {
        Row: {
          created_at: string
          id: number
          interactions: number[] | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          interactions?: number[] | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          interactions?: number[] | null
          user_id?: string | null
        }
        Relationships: []
      }
      users__interests: {
        Row: {
          category: number | null
          created_at: string
          emoji: string
          id: number
          interest: string
        }
        Insert: {
          category?: number | null
          created_at?: string
          emoji: string
          id?: number
          interest: string
        }
        Update: {
          category?: number | null
          created_at?: string
          emoji?: string
          id?: number
          interest?: string
        }
        Relationships: [
          {
            foreignKeyName: "users__interests_category_fkey"
            columns: ["category"]
            isOneToOne: false
            referencedRelation: "users__interests__categories"
            referencedColumns: ["id"]
          },
        ]
      }
      users__interests__attr: {
        Row: {
          created_at: string
          id: number
          index: number | null
          interest: number
          user: string
        }
        Insert: {
          created_at?: string
          id?: number
          index?: number | null
          interest: number
          user: string
        }
        Update: {
          created_at?: string
          id?: number
          index?: number | null
          interest?: number
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "users__interests__attr_interests_fkey"
            columns: ["interest"]
            isOneToOne: false
            referencedRelation: "users__interests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__interests__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__interests__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__interests__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__interests__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users__interests__categories: {
        Row: {
          category: string
          created_at: string
          id: number
          order: number
        }
        Insert: {
          category: string
          created_at?: string
          id?: number
          order: number
        }
        Update: {
          category?: string
          created_at?: string
          id?: number
          order?: number
        }
        Relationships: []
      }
      users__matches__attr: {
        Row: {
          created_at: string
          id: number
          user1: string
          user2: string
        }
        Insert: {
          created_at?: string
          id?: number
          user1: string
          user2: string
        }
        Update: {
          created_at?: string
          id?: number
          user1?: string
          user2?: string
        }
        Relationships: [
          {
            foreignKeyName: "users__matches_user1_fkey"
            columns: ["user1"]
            isOneToOne: true
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__matches_user1_fkey"
            columns: ["user1"]
            isOneToOne: true
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__matches_user1_fkey"
            columns: ["user1"]
            isOneToOne: true
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__matches_user1_fkey"
            columns: ["user1"]
            isOneToOne: true
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__matches_user2_fkey"
            columns: ["user2"]
            isOneToOne: true
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__matches_user2_fkey"
            columns: ["user2"]
            isOneToOne: true
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__matches_user2_fkey"
            columns: ["user2"]
            isOneToOne: true
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__matches_user2_fkey"
            columns: ["user2"]
            isOneToOne: true
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users__profiles: {
        Row: {
          bringers_selected: Json | null
          bringers_selected_json: Json | null
          company: string | null
          company_name: string | null
          created_at: string
          first_name: string | null
          id: string
          last_connect: string | null
          last_name: string | null
          linkedin: string | null
          location: string | null
          mantra: string | null
          migration_status: Database["public"]["Enums"]["migration_status"]
          min_xp: number | null
          onboarding_step: number | null
          profile: string | null
          seniority_level: string | null
          status_main: number | null
          title: string | null
        }
        Insert: {
          bringers_selected?: Json | null
          bringers_selected_json?: Json | null
          company?: string | null
          company_name?: string | null
          created_at?: string
          first_name?: string | null
          id: string
          last_connect?: string | null
          last_name?: string | null
          linkedin?: string | null
          location?: string | null
          mantra?: string | null
          migration_status?: Database["public"]["Enums"]["migration_status"]
          min_xp?: number | null
          onboarding_step?: number | null
          profile?: string | null
          seniority_level?: string | null
          status_main?: number | null
          title?: string | null
        }
        Update: {
          bringers_selected?: Json | null
          bringers_selected_json?: Json | null
          company?: string | null
          company_name?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          last_connect?: string | null
          last_name?: string | null
          linkedin?: string | null
          location?: string | null
          mantra?: string | null
          migration_status?: Database["public"]["Enums"]["migration_status"]
          min_xp?: number | null
          onboarding_step?: number | null
          profile?: string | null
          seniority_level?: string | null
          status_main?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users__profiles_company_fkey"
            columns: ["company"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__profiles_status_main_fkey"
            columns: ["status_main"]
            isOneToOne: false
            referencedRelation: "users__status"
            referencedColumns: ["id"]
          },
        ]
      }
      users__projects: {
        Row: {
          created_at: string
          id: number
          image: string | null
          link: string | null
          title: string
          user: string | null
          year_from: number | null
          year_to: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string | null
          link?: string | null
          title: string
          user?: string | null
          year_from?: number | null
          year_to?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          image?: string | null
          link?: string | null
          title?: string
          user?: string | null
          year_from?: number | null
          year_to?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "users__projects_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__projects_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__projects_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__projects_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users__recommandations: {
        Row: {
          created_at: string
          giver: string
          id: number
          rate: number | null
          receiver: string
          reco: string
        }
        Insert: {
          created_at?: string
          giver: string
          id?: number
          rate?: number | null
          receiver: string
          reco: string
        }
        Update: {
          created_at?: string
          giver?: string
          id?: number
          rate?: number | null
          receiver?: string
          reco?: string
        }
        Relationships: [
          {
            foreignKeyName: "users__recommandations_giver_fkey"
            columns: ["giver"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__recommandations_giver_fkey"
            columns: ["giver"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__recommandations_giver_fkey"
            columns: ["giver"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__recommandations_giver_fkey"
            columns: ["giver"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__recommandations_receiver_fkey"
            columns: ["receiver"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__recommandations_receiver_fkey"
            columns: ["receiver"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__recommandations_receiver_fkey"
            columns: ["receiver"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__recommandations_receiver_fkey"
            columns: ["receiver"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users__rewards: {
        Row: {
          badge_svg: string
          created_at: string
          desc: string | null
          id: number
          name: string
        }
        Insert: {
          badge_svg: string
          created_at?: string
          desc?: string | null
          id?: number
          name: string
        }
        Update: {
          badge_svg?: string
          created_at?: string
          desc?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      users__rewards__attr: {
        Row: {
          created_at: string
          id: number
          reward: number
          user: string
        }
        Insert: {
          created_at?: string
          id?: number
          reward: number
          user: string
        }
        Update: {
          created_at?: string
          id?: number
          reward?: number
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "users__rewards__attr_reward_fkey"
            columns: ["reward"]
            isOneToOne: false
            referencedRelation: "users__rewards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__rewards__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__rewards__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__rewards__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__rewards__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users__roles: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      users__roles__attr: {
        Row: {
          created_at: string
          id: number
          role: number
          user: string
        }
        Insert: {
          created_at?: string
          id?: number
          role: number
          user: string
        }
        Update: {
          created_at?: string
          id?: number
          role?: number
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "users__roles__attr_role_fkey"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "users__roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__roles__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__roles__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__roles__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__roles__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users__statistics: {
        Row: {
          created_at: string
          id: number
          mentees: number
          sessions: number
          user: string
        }
        Insert: {
          created_at?: string
          id?: number
          mentees?: number
          sessions?: number
          user: string
        }
        Update: {
          created_at?: string
          id?: number
          mentees?: number
          sessions?: number
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "users__statistics_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__statistics_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__statistics_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__statistics_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users__status: {
        Row: {
          badge: string | null
          badge_outline: string | null
          color: string | null
          created_at: string
          id: number
          status: string
        }
        Insert: {
          badge?: string | null
          badge_outline?: string | null
          color?: string | null
          created_at?: string
          id?: number
          status: string
        }
        Update: {
          badge?: string | null
          badge_outline?: string | null
          color?: string | null
          created_at?: string
          id?: number
          status?: string
        }
        Relationships: []
      }
      users__status_secondary__attr: {
        Row: {
          created_at: string
          id: number
          status: number | null
          user: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          status?: number | null
          user?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          status?: number | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users__status_secondary__attr_status_fkey"
            columns: ["status"]
            isOneToOne: false
            referencedRelation: "users__status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__status_secondary__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__status_secondary__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__status_secondary__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__status_secondary__attr_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users__websites: {
        Row: {
          created_at: string
          id: number
          name: string
          url: string
          user: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          url: string
          user: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          url?: string
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "users__websites_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__websites_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "users__websites_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users__websites_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      collaboration_full_detail: {
        Row: {
          assigned_talents: string | null
          budget: string | null
          category: string | null
          co_manager: string[] | null
          cover_picture: string | null
          created_at: string | null
          description: string | null
          ending_date: string | null
          id: number | null
          partner_company: string | null
          partner_name: string | null
          partner_role: string | null
          rating: number | null
          request_number: number | null
          requested_talent_id: string | null
          requested_talent_name: string | null
          starting_date: string | null
          status: number | null
          talent_needed: string | null
          title: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "collaboration_request_requested_talent_id_fkey"
            columns: ["requested_talent_id"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collaboration_request_requested_talent_id_fkey"
            columns: ["requested_talent_id"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "collaboration_request_requested_talent_id_fkey"
            columns: ["requested_talent_id"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collaboration_request_requested_talent_id_fkey"
            columns: ["requested_talent_id"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collaboration_request_status_fkey"
            columns: ["status"]
            isOneToOne: false
            referencedRelation: "collaboration__status"
            referencedColumns: ["id"]
          },
        ]
      }
      curators_list: {
        Row: {
          avatar: string | null
          id: string | null
          name: string | null
        }
        Relationships: []
      }
      feature_requests_with_votes: {
        Row: {
          created_at: string | null
          downvotes_count: number | null
          full_description: string | null
          id: number | null
          is_duplicate: boolean | null
          score: number | null
          short_description: string | null
          status: number | null
          submitter: string | null
          title: string | null
          type: number | null
          upvotes_count: number | null
        }
        Insert: {
          created_at?: string | null
          downvotes_count?: never
          full_description?: string | null
          id?: number | null
          is_duplicate?: boolean | null
          score?: never
          short_description?: string | null
          status?: number | null
          submitter?: string | null
          title?: string | null
          type?: number | null
          upvotes_count?: never
        }
        Update: {
          created_at?: string | null
          downvotes_count?: never
          full_description?: string | null
          id?: number | null
          is_duplicate?: boolean | null
          score?: never
          short_description?: string | null
          status?: number | null
          submitter?: string | null
          title?: string | null
          type?: number | null
          upvotes_count?: never
        }
        Relationships: [
          {
            foreignKeyName: "feature_requests_status_fkey"
            columns: ["status"]
            isOneToOne: false
            referencedRelation: "feature_requests__status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests_submitter_fkey"
            columns: ["submitter"]
            isOneToOne: false
            referencedRelation: "curators_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests_submitter_fkey"
            columns: ["submitter"]
            isOneToOne: false
            referencedRelation: "onboarding_profile_data"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "feature_requests_submitter_fkey"
            columns: ["submitter"]
            isOneToOne: false
            referencedRelation: "users__profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests_submitter_fkey"
            columns: ["submitter"]
            isOneToOne: false
            referencedRelation: "users__profiles__full_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "feature_requests__types"
            referencedColumns: ["id"]
          },
        ]
      }
      inbox_detail: {
        Row: {
          assigned_to: string | null
          assigned_to_name: string | null
          avatar: string | null
          collaboration_id: number | null
          company_name: string | null
          completion_percentage: number | null
          email: string | null
          inbox_id: number | null
          last_connect: string | null
          linkedin: string | null
          location: string | null
          main_role: string | null
          mantra: string | null
          name: string | null
          onboarding_step: number | null
          signup_date: string | null
          status: string | null
          submission_number: number | null
          submitted: string | null
          talent_types: string[] | null
          title: string | null
          type: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inbox_collaboration_id_fkey"
            columns: ["collaboration_id"]
            isOneToOne: false
            referencedRelation: "collaboration_full_detail"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inbox_collaboration_id_fkey"
            columns: ["collaboration_id"]
            isOneToOne: false
            referencedRelation: "collaboration_request"
            referencedColumns: ["id"]
          },
        ]
      }
      inbox_view: {
        Row: {
          assigned_to: string | null
          avatar: string | null
          collaboration_id: number | null
          company: string | null
          email: string | null
          item_id: string | null
          main_role: string | null
          name: string | null
          role: string | null
          status: string | null
          submitted: string | null
          subtitle: string | null
          type: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inbox_collaboration_id_fkey"
            columns: ["collaboration_id"]
            isOneToOne: false
            referencedRelation: "collaboration_full_detail"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inbox_collaboration_id_fkey"
            columns: ["collaboration_id"]
            isOneToOne: false
            referencedRelation: "collaboration_request"
            referencedColumns: ["id"]
          },
        ]
      }
      onboarding__steps__detail: {
        Row: {
          applies_to_role: string | null
          completed_at: string | null
          is_role_specific: boolean | null
          order: number | null
          step_id: number | null
          title: string | null
          user_id: string | null
        }
        Relationships: []
      }
      onboarding_completion_summary: {
        Row: {
          step1_completed_at: string | null
          step2_completed_at: string | null
          step3_completed_at: string | null
          step4_completed_at: string | null
          step5_completed_at: string | null
          step6_completed_at: string | null
          step7_completed_at: string | null
          step8_completed_at: string | null
          user_id: string | null
        }
        Relationships: []
      }
      onboarding_profile_data: {
        Row: {
          avatar: string | null
          bringers: Json | null
          bringers_selected: Json | null
          company_name: string | null
          education: Json | null
          experiences: Json | null
          first_name: string | null
          interests: Json | null
          last_name: string | null
          linkedin: string | null
          location: string | null
          mantra: string | null
          onboarding_step: number | null
          projects: Json | null
          seniority_level: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          avatar?: string | null
          bringers?: never
          bringers_selected?: Json | null
          company_name?: string | null
          education?: never
          experiences?: never
          first_name?: string | null
          interests?: never
          last_name?: string | null
          linkedin?: string | null
          location?: string | null
          mantra?: string | null
          onboarding_step?: number | null
          projects?: never
          seniority_level?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          avatar?: string | null
          bringers?: never
          bringers_selected?: Json | null
          company_name?: string | null
          education?: never
          experiences?: never
          first_name?: string | null
          interests?: never
          last_name?: string | null
          linkedin?: string | null
          location?: string | null
          mantra?: string | null
          onboarding_step?: number | null
          projects?: never
          seniority_level?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles_list: {
        Row: {
          avatar: string | null
          company: string | null
          email: string | null
          inbox_id: string | null
          last_connection: string | null
          name: string | null
          onboarding_step: number | null
          role_title: string | null
          user_id: string | null
          user_type: string | null
        }
        Relationships: []
      }
      role_stats: {
        Row: {
          partner_count: number | null
          talent_count: number | null
          total_count: number | null
        }
        Relationships: []
      }
      users__profiles__full_view: {
        Row: {
          _role: Json | null
          _status: Json | null
          avail: Json | null
          created_at: string | null
          education: Json | null
          exact_availabilities: Json | null
          experiences: Json | null
          feed: Json | null
          first_name: string | null
          id: string | null
          interests: Json | null
          last_name: string | null
          linkedin: string | null
          mantra: string | null
          min_xp: number | null
          onboarding_step: number | null
          profile: string | null
          projects: Json | null
          recommandations: Json | null
          rewards: Json | null
          stats: Json | null
          status_main: number | null
          title: string | null
        }
        Insert: {
          _role?: never
          _status?: never
          avail?: never
          created_at?: string | null
          education?: never
          exact_availabilities?: never
          experiences?: never
          feed?: never
          first_name?: string | null
          id?: string | null
          interests?: never
          last_name?: string | null
          linkedin?: string | null
          mantra?: string | null
          min_xp?: number | null
          onboarding_step?: number | null
          profile?: string | null
          projects?: never
          recommandations?: never
          rewards?: never
          stats?: never
          status_main?: number | null
          title?: string | null
        }
        Update: {
          _role?: never
          _status?: never
          avail?: never
          created_at?: string | null
          education?: never
          exact_availabilities?: never
          experiences?: never
          feed?: never
          first_name?: string | null
          id?: string | null
          interests?: never
          last_name?: string | null
          linkedin?: string | null
          mantra?: string | null
          min_xp?: number | null
          onboarding_step?: number | null
          profile?: string | null
          projects?: never
          recommandations?: never
          rewards?: never
          stats?: never
          status_main?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users__profiles_status_main_fkey"
            columns: ["status_main"]
            isOneToOne: false
            referencedRelation: "users__status"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      add_users_to_collaboration: {
        Args: { p_collaboration_id: number; p_user_ids: string[] }
        Returns: number
      }
      assign_onboarding_number: {
        Args: { p_role_type: string; p_user_id: string }
        Returns: {
          assigned_number: number
          inbox_id: number
        }[]
      }
      auth__get_my_profile: { Args: never; Returns: Json }
      backoffice__get_all_users_with_email: { Args: never; Returns: Json }
      calendar__get_local_slots_by_user: {
        Args: {
          selected_date: string
          selected_dow: number
          timezone_offset: number
          user_id: string
        }
        Returns: {
          active: boolean
          created_at: string
          dow: number
          id: number
          locale_slot: string
          locale_time_from: string
          locale_time_to: string
          slot_date: string
          time_from: string
          time_to: string
        }[]
      }
      calendar__update_user_availabilities: {
        Args: { p_dow: number; p_slots_list: number[] }
        Returns: undefined
      }
      companies__get_user_company: {
        Args: never
        Returns: {
          created_at: string
          id: string
          is_super_company: boolean
          name: string
        }[]
      }
      count_my_collaboration_users: { Args: never; Returns: number }
      count_user_interactions: {
        Args: { input_user_id: string }
        Returns: number
      }
      create_collaboration_with_auth_users: {
        Args: {
          p_authorized_user_ids: string[]
          p_budget: string
          p_category: string
          p_collaborations_user: string
          p_cover_picture: string
          p_ending_date: string
          p_rating: number
          p_starting_date: string
          p_status: number
          p_title: string
          p_user_id: string
        }
        Returns: number
      }
      create_collaboration_with_users: {
        Args: {
          p_budget: string
          p_category: string
          p_collaboration_user_ids: string[]
          p_collaborations_user: string
          p_cover_picture: string
          p_ending_date: string
          p_rating: number
          p_starting_date: string
          p_status: number
          p_title: string
          p_user_id: string
        }
        Returns: number
      }
      get_all_collaborations_average_rating: { Args: never; Returns: number }
      get_collaboration_average_rating: {
        Args: { p_collaboration_id: number }
        Returns: number
      }
      get_next_submission_number: {
        Args: { p_role_type: string }
        Returns: number
      }
      is_admin: { Args: never; Returns: boolean }
      reset_all_onboarding_steps: { Args: never; Returns: undefined }
      sync_collaboration_users: {
        Args: { p_collaboration_id: number; p_user_ids: string[] }
        Returns: number
      }
      sync_user_absences_V2: { Args: { p_absences: Json }; Returns: undefined }
      toggle_upvote: {
        Args: { p_feature_request_id: number }
        Returns: boolean
      }
      update_collaboration_rating: {
        Args: { p_collaboration_id: number }
        Returns: number
      }
      users__get_user_profile_by_id: {
        Args: { p_user_id: string }
        Returns: Json
      }
      users__is_email_exist: { Args: { p_email: string }; Returns: boolean }
      users__update_user_interests: {
        Args: { p_interest_ids: number[] }
        Returns: undefined
      }
    }
    Enums: {
      migration_status: "TODO" | "IN_PROGRESS" | "DONE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      migration_status: ["TODO", "IN_PROGRESS", "DONE"],
    },
  },
} as const
