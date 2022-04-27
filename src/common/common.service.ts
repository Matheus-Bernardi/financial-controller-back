import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {

  startFinalDateByMonthYear(month: string, year: string) {
    const startDate = this.formatDateToString(new Date(Number(year), Number(month) - 1, 1));
    const finalDate = this.formatDateToString(new Date(Number(year), Number(month), 0));

    return {startDate, finalDate};
  }

  formatDateToString(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day}/${month}/${year}`;
  }
}