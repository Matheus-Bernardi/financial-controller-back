export class InsertEntryEntity {
  description: string;
  type: number;
  category: string;
  wallet: string;
  value: number
  received: boolean = true;
  received_date: string;
  repeat: number;
  note: string;
  prevision: boolean = false;
}