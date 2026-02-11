export type GenderType = 'Male' | 'Female' | 'Other';

export interface Student {
  id: string;
  name: string;
  class: string;
  section: string;
  dateOfBirth: string;
  gender: GenderType;
  admissionDate: string;
  address: string;
  parentId: string;
  createdAt: string;
}