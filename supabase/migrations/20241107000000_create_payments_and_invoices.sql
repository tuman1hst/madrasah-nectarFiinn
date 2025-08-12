create table if not exists invoices (
  id uuid primary key default gen_random_uuid(),
  total numeric not null,
  status text default 'unpaid',
  created_at timestamptz default now()
);

create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  invoice_id uuid references invoices(id) on delete set null,
  amount numeric not null,
  status text default 'pending',
  created_at timestamptz default now()
);
