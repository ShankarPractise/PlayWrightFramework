export class DateLogics {
    getCurrentDate(): string {
        return new Date().toISOString().split('T')[0];
    }
}
