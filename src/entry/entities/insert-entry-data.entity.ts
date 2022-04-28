export class InsertEntryEntity {
  description: string;
  type: number;
  category_id: string;
  wallet_id: string;
  value: number
  received: boolean = true;
  received_date: string;
  repeat: number;
  note: string;
  prevision: boolean = false;
}