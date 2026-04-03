-- LLMBoost — Database Schema
-- PostgreSQL (Railway) — 2026-04-03

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  clerk_id VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  company_name VARCHAR(255),
  stripe_customer_id VARCHAR(255),
  subscription_tier VARCHAR(50) DEFAULT 'free_trial',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_users_clerk_id ON users(clerk_id);

CREATE TABLE brands (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  website_url VARCHAR(500),
  industry VARCHAR(100),
  primary_location VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE keywords (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  brand_id UUID REFERENCES brands(id) ON DELETE CASCADE,
  term VARCHAR(255) NOT NULL,
  intent VARCHAR(50) DEFAULT 'transactional', -- 'transactional', 'informational', 'navigational'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE competitors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  brand_id UUID REFERENCES brands(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  website_url VARCHAR(500),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE audits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  brand_id UUID REFERENCES brands(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'running', 'completed', 'failed')),
  overall_score INTEGER,
  chatgpt_score INTEGER,
  claude_score INTEGER,
  perplexity_score INTEGER,
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE audit_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  audit_id UUID REFERENCES audits(id) ON DELETE CASCADE,
  keyword_id UUID REFERENCES keywords(id) ON DELETE CASCADE,
  model VARCHAR(50) NOT NULL, -- 'chatgpt-4', 'claude-3-opus', 'perplexity'
  prompt_used TEXT NOT NULL,
  raw_response TEXT NOT NULL,
  brand_mentioned BOOLEAN DEFAULT FALSE,
  brand_rank INTEGER, -- Position in list if mentioned
  sentiment VARCHAR(50), -- 'positive', 'neutral', 'negative'
  competitors_mentioned JSONB, -- Array of competitor names found
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE recommendations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  brand_id UUID REFERENCES brands(id) ON DELETE CASCADE,
  audit_id UUID REFERENCES audits(id) ON DELETE CASCADE,
  category VARCHAR(50) NOT NULL, -- 'gbp', 'citation', 'review', 'schema', 'pr'
  title VARCHAR(255) NOT NULL,
  description TEXT,
  impact VARCHAR(20) DEFAULT 'high', -- 'high', 'medium', 'low'
  status VARCHAR(20) DEFAULT 'open', -- 'open', 'in_progress', 'done'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  stripe_subscription_id VARCHAR(255),
  tier VARCHAR(50),
  status VARCHAR(20),
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE UNIQUE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
