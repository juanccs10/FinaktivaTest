export interface Client {
    clientId: number;
    fullName: string;
    identificationType: string;
    identification: string;
    socialReasoning: string;
    providers?: number;
    lastYearSales?: number
}