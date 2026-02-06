export const mockProjects = [
  {
    id: 1,
    name: 'Riverfront Commercial Tower',
    company: 'Northline Construction Group',
    startDate: '2026-01-05',
    endDate: '2026-10-20',
    description: 'Core shell and interior fit-out across 22 floors.',
  },
  {
    id: 2,
    name: 'Greenfield Transit Depot',
    company: 'UrbanRail Infrastructure',
    startDate: '2026-02-10',
    endDate: '2026-12-01',
    description: 'Groundworks, steel framing, and MEP coordination.',
  },
  {
    id: 3,
    name: 'Eastside Residential Blocks',
    company: 'Horizon Homes Developments',
    startDate: '2026-03-01',
    endDate: '2027-01-15',
    description: 'Multi-phase structural and finishing package.',
  },
];

export const mockTasks = [
  { id: 1, title: 'Pour level 6 slab', status: 'IN_PROGRESS', projectId: 1, assignedTo: 'Jordan Reed', description: 'Coordinate pump schedule and safety checks.' },
  { id: 2, title: 'Submit inspection packet', status: 'PENDING', projectId: 1, assignedTo: 'Avery Kim', description: 'Upload rebar and concrete test certificates.' },
  { id: 3, title: 'Install cable trays', status: 'IN_PROGRESS', projectId: 2, assignedTo: 'Taylor Brooks', description: 'North wing only, verify supports every 2m.' },
  { id: 4, title: 'Commission ventilation units', status: 'COMPLETED', projectId: 2, assignedTo: 'Jordan Reed', description: 'Final balancing completed and signed off.' },
  { id: 5, title: 'Facade material delivery check', status: 'PENDING', projectId: 3, assignedTo: 'Sam Patel', description: 'Validate counts against procurement manifest.' },
];

export const mockAssets = [
  { id: 1, name: 'Excavator EX-12', type: 'Heavy Equipment', projectId: 2, assignedTo: 'Site Crew A' },
  { id: 2, name: 'Laser Level Kit', type: 'Survey Tool', projectId: 1, assignedTo: 'Jordan Reed' },
  { id: 3, name: 'Safety Harness Set', type: 'PPE', projectId: 3, assignedTo: 'Sam Patel' },
  { id: 4, name: 'Concrete Vibrator', type: 'Power Tool', projectId: 1, assignedTo: 'Unassigned' },
];

export const mockWorkers = [
  { id: 1, name: 'Jordan Reed', email: 'jordan@reconapp.com', documentsStatus: 'Ready', tasks: 2, assets: 1 },
  { id: 2, name: 'Avery Kim', email: 'avery@reconapp.com', documentsStatus: 'Expiring Soon', tasks: 1, assets: 0 },
  { id: 3, name: 'Taylor Brooks', email: 'taylor@reconapp.com', documentsStatus: 'Ready', tasks: 1, assets: 1 },
  { id: 4, name: 'Sam Patel', email: 'sam@reconapp.com', documentsStatus: 'Pending Upload', tasks: 1, assets: 1 },
];
