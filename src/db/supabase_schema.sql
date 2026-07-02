-- Advanced CRM Schema (Single Company)
-- Customers with CRM pipeline support

create table if not exists customers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  status text default 'lead', -- lead, contacted, proposal, won, lost
  tags text[],
  created_at timestamp default now()
);

create table if not exists customer_notes (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers(id) on delete cascade,
  note text not null,
  created_at timestamp default now()
);

create table if not exists customer_followups (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers(id) on delete cascade,
  followup_date timestamp,
  status text default 'pending',
  remark text,
  created_at timestamp default now()
);

create table if not exists customer_documents (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers(id) on delete cascade,
  file_url text,
  file_name text,
  created_at timestamp default now()
);

-- CRM Pipeline stages
-- lead -> contacted -> proposal -> negotiation -> won/lost
